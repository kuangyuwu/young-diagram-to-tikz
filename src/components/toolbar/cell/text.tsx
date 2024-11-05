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
    <div className="h-8 m-1 rounded-full bg-amber-100 flex items-center flex-nowrap">
      <div className="w-3 inline-block"></div>
      Text:
      <div className="h-6 w-32 m-1 rounded-full bg-white inline-block">
        <div className="w-2 inline-block"></div>
        <input
          name="text"
          type="text"
          className="w-28 leading-6 text-sm"
          autoComplete="off"
          onInput={onInput}
          ref={inputRef}
        ></input>
      </div>
    </div>
  );
}
