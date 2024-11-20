import { ChangeEvent, useEffect, useRef } from "react";
import { CellData } from "../../../constants/ydData";

export default function CellTextTool({
  text,
  makeUpdate,
}: {
  text: string;
  makeUpdate: (newData: Partial<CellData>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current === null) return;
    inputRef.current.value = text;
  });

  function onInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const input = e.target;
    const value = input.value;
    if (value.length > 15) {
      alert("Exceeds max length (15)");
      return;
    }
    makeUpdate({ text: value });
  }

  return (
    <div className="m-1 flex h-8 flex-nowrap items-center rounded-full bg-amber-100">
      <div className="inline-block w-3"></div>
      Text:
      <div className="m-1 inline-block h-6 w-32 rounded-full bg-white">
        <div className="inline-block w-2"></div>
        <input
          name="text"
          type="text"
          className="w-28 text-sm leading-6"
          autoComplete="off"
          onInput={onInput}
          ref={inputRef}
        ></input>
      </div>
    </div>
  );
}
