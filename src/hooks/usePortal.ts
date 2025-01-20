import { useEffect, useState } from 'react';

const usePortal = () => {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalDiv = document.createElement('div');
    document.body.appendChild(portalDiv);
    setPortalTarget(portalDiv);

    return () => {
      document.body.removeChild(portalDiv);
    };
  }, []);

  return portalTarget;
};

export default usePortal;
