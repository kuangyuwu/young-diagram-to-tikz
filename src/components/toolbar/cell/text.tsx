import { FormEvent, useEffect, useRef } from "react";
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

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    const newText = formData.get("text") as string;
    if (newText.length > 15) {
      alert("Exceeds max length (15)");
      return;
    }
    makeUpdate({ text: newText });
  }

  return (
    <div className="h-8 m-1 rounded-full bg-lime-100 flex flex-nowrap font-mono">
      <div className="w-3 inline-block"></div>
      <form
        method="post"
        onSubmit={onSubmit}
        className="text-sm flex items-center"
      >
        Text:
        <div className="h-6 w-32 m-1 rounded-full bg-white inline-block">
          <div className="w-2 inline-block"></div>
          <input
            name="text"
            type="text"
            className="w-28 leading-6 text-sm"
            autoComplete="off"
            ref={inputRef}
          ></input>
        </div>
        <button
          className="h-6 w-6 m-1 px-1 rounded-full bg-lime-300 overflow-hidden hover:scale-110 flex justify-center items-center"
          type="submit"
        >
          <div className="w-6 h-6 check-svg inline-block"></div>
        </button>
      </form>
    </div>
  );
}
