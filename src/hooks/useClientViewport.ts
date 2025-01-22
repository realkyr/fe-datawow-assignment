import { useState, useEffect, useCallback, RefObject } from 'react'

type Dimensions = {
  clientWidth: number
  clientHeight: number
}

/**
 * Custom hook to get the client width and height of a provided ref element.
 * Defaults to `document.documentElement` if no ref is provided.
 *
 * @param {RefObject<HTMLElement>} ref - The ref of the element to measure. Defaults to `document.documentElement
 * @returns {Object} - An object containing `clientWidth` and `clientHeight` of the element.
 *
 * @example
 * // Usage with a ref
 * const ref = useRef<HTMLElement>(null);
 * const { clientWidth, clientHeight } = useClientViewPort(ref);
 *
 * // Usage without a ref (defaults to document.documentElement)
 * const { clientWidth, clientHeight } = useClientViewPort();
 *
 * // Component Example
 * function App() {
 *   const ref = useRef<HTMLElement>(null);
 *   const { clientWidth, clientHeight } = useClientViewPort(ref);
 *
 *   return (
 *     <div ref={ref} style={{ width: '100%', height: '100vh' }}>
 *       <p>Width: {clientWidth}px</p>
 *       <p>Height: {clientHeight}px</p>
 *     </div>
 *   );
 * }
 */
function useClientViewport(ref?: RefObject<HTMLElement>): Dimensions {
  const getDimensions = useCallback(() => {
    const element = ref?.current || document.documentElement
    return {
      clientWidth: element.clientWidth,
      clientHeight: element.clientHeight
    }
  }, [ref])

  const [dimensions, setDimensions] = useState(getDimensions)

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [getDimensions])

  return dimensions
}

export default useClientViewport
