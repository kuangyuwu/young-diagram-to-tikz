import { useCallback, useState } from "react";
import { EdgeData, YDData, YDIndex } from "../constants/ydData";
import { Color, Thickness } from "../constants/enums";

const maxNumRow = 10;
const maxNumCol = 10;

export default function useYDData(numRow: number, numCol: number) {
  if (!Number.isInteger(numRow) || numRow <= 0 || numRow > maxNumRow) {
    throw new Error(`numRow should be an integer from 1 to ${maxNumRow}`);
  }
  if (!Number.isInteger(numCol) || numCol <= 0 || numCol > maxNumCol) {
    throw new Error(`numCol should be an integer from 1 to ${maxNumCol}`);
  }

  const initData = getInitData(numRow, numCol);
  const [ydData, setYDData] = useState<YDData>(initData);

  const getYDData = useCallback(
    (ydIndex: YDIndex): EdgeData => {
      if (!ydIndex.isEdge) {
        throw new Error("not implemented yet");
      }
      if (ydIndex.isHorizontal) {
        return getHEdgeData(ydIndex.i, ydIndex.j);
      }
      return getVEdgeData(ydIndex.i, ydIndex.j);
    },
    [ydData]
  );

  const getHEdgeData = useCallback(
    (i: number, j: number): EdgeData => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.hEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.hEdges.length}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.hEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.hEdges[0].length}`
        );
      }
      return ydData.hEdges[i][j];
    },
    [ydData]
  );

  const getVEdgeData = useCallback(
    (i: number, j: number): EdgeData => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.vEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.vEdges.length}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.vEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.vEdges[0].length}`
        );
      }
      return ydData.vEdges[i][j];
    },
    [ydData]
  );

  const updateYDData = useCallback(
    (ydIndex: YDIndex, changes: Partial<EdgeData>) => {
      if (!ydIndex.isEdge) {
        throw new Error("not implemented yet");
      }
      if (ydIndex.isHorizontal) {
        updateHEdge(ydIndex.i, ydIndex.j, changes);
      } else {
        updateVEdge(ydIndex.i, ydIndex.j, changes);
      }
    },
    [ydData]
  );

  const updateHEdge = useCallback(
    (i: number, j: number, changes: Partial<EdgeData>) => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.hEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.hEdges.length}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.hEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.hEdges[0].length}`
        );
      }
      const newEdge = { ...ydData.hEdges[i][j], ...changes };
      let newdata = { ...ydData };
      newdata.hEdges[i][j] = newEdge;
      setYDData(newdata);
    },
    [ydData]
  );

  const updateVEdge = useCallback(
    (i: number, j: number, changes: Partial<EdgeData>) => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.vEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.vEdges.length}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.vEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.vEdges[0].length}`
        );
      }
      const newEdge = { ...ydData.vEdges[i][j], ...changes };
      let newdata = { ...ydData };
      newdata.vEdges[i][j] = newEdge;
      setYDData(newdata);
    },
    [ydData]
  );

  return { ydData: ydData, getYDData: getYDData, updateYDData: updateYDData };
}

function getInitData(numRow: number, numCol: number): YDData {
  let initData: YDData = {
    hEdges: [],
    vEdges: [],
  };
  for (let i = 0; i <= numRow; i++) {
    initData.hEdges[i] = [];
    for (let j = 0; j < numCol; j++) {
      initData.hEdges[i][j] = {
        exists: false,
        color: Color.Default,
        thickness: Thickness.Default,
      };
    }
  }
  for (let i = 0; i < numRow; i++) {
    initData.vEdges[i] = [];
    for (let j = 0; j <= numCol; j++) {
      initData.vEdges[i][j] = {
        exists: false,
        color: Color.Default,
        thickness: Thickness.Default,
      };
    }
  }
  return initData;
}
