import { useCallback, useState } from "react";
import { YDIndex } from "../constants/ydData";

export default function useSelectedIndex() {
  const [selectedIndex, setSelectedIndex] = useState<YDIndex | null>(null);

  const updateSelectedIndex = useCallback((ydIndex: YDIndex) => {
    setSelectedIndex(ydIndex);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  return { selectedIndex, updateSelectedIndex, clearSelection };
}
