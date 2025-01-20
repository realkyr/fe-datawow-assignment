import React from 'react';

const Overlay = ({ onCancel }: { onCancel: () => void }) => (
  <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onCancel} />
);

export default Overlay;
