import React from "react";

const ControlButton = ({ action, innerContent }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="flex h-40 w-40 items-center justify-center rounded-xl bg-slate-500 text-7xl"
    >
      {innerContent}
    </button>
  );
};

export default ControlButton;
