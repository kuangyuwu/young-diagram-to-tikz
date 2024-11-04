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
          <div className="bg-transparent backdrop-blur-sm w-11/12 h-[90%] absolute top-8 left-8 z-10 rounded-3xl p-6 text-sm overflow-auto"></div>
          <div className="bg-amber-100 w-auto max-w-[80%] h-8 absolute right-4 top-4 z-20 rounded-full flex justify-center items-center overflow-auto text-sm text-amber-600">
            <div className="w-3"></div>
            Reset?
            <div className="w-1.5"></div>
            <button
              className="bg-amber-200 h-6 rounded-full flex justify-center items-center hover:scale-110"
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
              className="bg-amber-300 h-6 rounded-full flex justify-center items-center hover:scale-110"
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
          className="bg-amber-100 w-8 h-8 absolute right-4 top-4 rounded-full flex justify-center items-center hover:scale-110"
          title="reset"
          onClick={() => {
            clearSelection();
            setIsConfirmationVisible(true);
          }}
        >
          <div className="h-6 w-6 refresh-svg"></div>
        </button>
      )}
    </>
  );
}
