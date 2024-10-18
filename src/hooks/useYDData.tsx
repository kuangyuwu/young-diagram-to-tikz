import { useState } from "react";
import { EdgeData, YDData } from "../constants/ydData";
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

  function updateHEdge(i: number, j: number, toUpdate: Partial<EdgeData>) {
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
    const newEdge = { ...ydData.hEdges[i][j], ...toUpdate };
    let newData = { ...ydData };
    newData.hEdges[i][j] = newEdge;
    setYDData(newData);
  }

  function updateVEdge(i: number, j: number, toUpdate: Partial<EdgeData>) {
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
    const newEdge = { ...ydData.vEdges[i][j], ...toUpdate };
    let newData = { ...ydData };
    newData.vEdges[i][j] = newEdge;
    setYDData(newData);
  }

  return { ydData: ydData, updateHEdge: updateHEdge, updateVEdge: updateVEdge };
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
