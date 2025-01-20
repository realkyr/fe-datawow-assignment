export const checkDropdownPosition = (
  dropdownTrigger: HTMLElement,
  setShouldDropdownTop: (value: boolean, offset: number) => void
) => {
  const triggerRect = dropdownTrigger.getBoundingClientRect();
  const spaceBelow = window.innerHeight - triggerRect.bottom;

  const triggerRectHeight = triggerRect.height;
  const isSpaceInsufficient = spaceBelow < 288; // 288 for max-h-72 (56*4)

  if (isSpaceInsufficient) {
    setShouldDropdownTop(true, triggerRectHeight);
  } else {
    setShouldDropdownTop(false, 0);
  }
};
