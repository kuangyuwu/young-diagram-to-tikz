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
    <div className="h-8 m-1 rounded-full bg-gray-200 flex flex-nowrap font-mono">
      <div className="w-3 inline-block"></div>
      <form method="post" onSubmit={onSubmit}>
        Text:
        <div className="w-32 h-6 m-1 rounded-full bg-white inline-block">
          <div className="w-2 inline-block"></div>
          <input
            name="text"
            type="text"
            className="w-28"
            autoComplete="off"
            ref={inputRef}
          ></input>
        </div>
        <button
          className="h-6 w-6 m-1 px-1 rounded-full bg-green-200 text-green-600 overflow-hidden hover:scale-110"
          type="submit"
        >
          ✔️
        </button>
      </form>
    </div>
  );
}
