import { useCallback, useState } from "react";
import { YDIndex } from "../constants/ydData";

export default function useSelection() {
  const [selection, setSelection] = useState<YDIndex | null>(null);

  const clearSelection = useCallback(() => {
    setSelection(null);
  }, []);

  return { selection, setSelection, clearSelection };
}
