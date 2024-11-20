import { useState } from "react";

export default function ResetButton({
  resetYDData,
  clearSelection,
}: {
  resetYDData: () => void;
  clearSelection: () => void;
}) {
  const [isConfirmationVisible, setIsConfirmationVisible] =
    useState<boolean>(false);

  return (
    <>
      {isConfirmationVisible ? (
        <>
          <div className="absolute left-8 top-8 z-10 h-[90%] w-11/12 overflow-auto rounded-3xl bg-transparent p-6 text-sm backdrop-blur-sm"></div>
          <div className="absolute right-4 top-4 z-20 flex h-8 w-auto max-w-[80%] items-center justify-center overflow-auto rounded-full bg-amber-100 text-sm text-amber-600">
            <div className="w-3"></div>
            Reset?
            <div className="w-1.5"></div>
            <button
              className="flex h-6 items-center justify-center rounded-full bg-amber-200 hover:scale-110"
              onClick={() => {
                setIsConfirmationVisible(false);
              }}
            >
              <div className="w-1.5"></div>
              Cancel
              <div className="w-1.5"></div>
            </button>
            <div className="w-1.5"></div>
            <button
              className="flex h-6 items-center justify-center rounded-full bg-amber-300 hover:scale-110"
              onClick={() => {
                resetYDData();
                setIsConfirmationVisible(false);
              }}
            >
              <div className="w-1.5"></div>
              Confirm
              <div className="w-1.5"></div>
            </button>
            <div className="w-1.5"></div>
          </div>
        </>
      ) : (
        <button
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 hover:scale-110"
          title="reset"
          onClick={() => {
            clearSelection();
            setIsConfirmationVisible(true);
          }}
        >
          <div className="refresh-svg h-6 w-6"></div>
        </button>
      )}
    </>
  );
}
