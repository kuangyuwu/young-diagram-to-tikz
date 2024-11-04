import { useCallback, useState } from "react";
import { CellData, EdgeData, YDData, YDIndex } from "../constants/ydData";
import { Color, Thickness, YDItemType } from "../constants/enums";

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
  makeDemoYDData(initData);
  const [ydData, setYDData] = useState<YDData>(initData);

  const resetYDData = useCallback(() => {
    setYDData(getInitData(numRow, numCol));
  }, []);

  const getYDData = useCallback(
    (ydIndex: YDIndex): EdgeData | CellData => {
      switch (ydIndex.itemType) {
        case YDItemType.HEdge:
          return getHEdgeData(ydIndex.i, ydIndex.j);
        case YDItemType.VEdge:
          return getVEdgeData(ydIndex.i, ydIndex.j);
        case YDItemType.Cell:
          return getCellData(ydIndex.i, ydIndex.j);
        default:
          break;
      }
      throw new Error("not implemented yet");
    },
    [ydData]
  );

  const getHEdgeData = useCallback(
    (i: number, j: number): EdgeData => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.hEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.hEdges.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.hEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.hEdges[0].length - 1}`
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
          `i should be an integer from 0 to ${ydData.vEdges.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.vEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.vEdges[0].length - 1}`
        );
      }
      return ydData.vEdges[i][j];
    },
    [ydData]
  );

  const getCellData = useCallback(
    (i: number, j: number): CellData => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.cells.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.cells.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.cells[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.cells[0].length - 1}`
        );
      }
      return ydData.cells[i][j];
    },
    [ydData]
  );

  const updateYDData = useCallback(
    (ydIndex: YDIndex, changes: Partial<EdgeData> | Partial<CellData>) => {
      switch (ydIndex.itemType) {
        case YDItemType.HEdge:
          updateHEdge(ydIndex.i, ydIndex.j, changes as EdgeData);
          return;
        case YDItemType.VEdge:
          updateVEdge(ydIndex.i, ydIndex.j, changes as EdgeData);
          return;
        case YDItemType.Cell:
          updateCell(ydIndex.i, ydIndex.j, changes as CellData);
          return;
        default:
          break;
      }
      throw new Error("not implemented yet");
    },
    [ydData]
  );

  const updateHEdge = useCallback(
    (i: number, j: number, changes: Partial<EdgeData>) => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.hEdges.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.hEdges.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.hEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.hEdges[0].length - 1}`
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
          `i should be an integer from 0 to ${ydData.vEdges.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.vEdges[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.vEdges[0].length - 1}`
        );
      }
      const newEdge = { ...ydData.vEdges[i][j], ...changes };
      let newdata = { ...ydData };
      newdata.vEdges[i][j] = newEdge;
      setYDData(newdata);
    },
    [ydData]
  );

  const updateCell = useCallback(
    (i: number, j: number, changes: Partial<CellData>) => {
      if (!Number.isInteger(i) || i < 0 || i >= ydData.cells.length) {
        throw new Error(
          `i should be an integer from 0 to ${ydData.cells.length - 1}`
        );
      }
      if (!Number.isInteger(j) || j < 0 || j >= ydData.cells[0].length) {
        throw new Error(
          `j should be an integer from 0 to ${ydData.cells[0].length - 1}`
        );
      }
      const newCell = { ...ydData.cells[i][j], ...changes };
      let newdata = { ...ydData };
      newdata.cells[i][j] = newCell;
      setYDData(newdata);
    },
    [ydData]
  );

  return { ydData, getYDData, updateYDData, resetYDData };
}

function getInitData(numRow: number, numCol: number): YDData {
  let initData: YDData = {
    hEdges: [],
    vEdges: [],
    cells: [],
  };
  for (let i = 0; i <= numRow; i++) {
    initData.hEdges[i] = [];
    for (let j = 0; j < numCol; j++) {
      initData.hEdges[i][j] = {
        exists: false,
        color: Color.Black,
        thickness: Thickness.Default,
      };
    }
  }
  for (let i = 0; i < numRow; i++) {
    initData.vEdges[i] = [];
    for (let j = 0; j <= numCol; j++) {
      initData.vEdges[i][j] = {
        exists: false,
        color: Color.Black,
        thickness: Thickness.Default,
      };
    }
  }
  for (let i = 0; i < numRow; i++) {
    initData.cells[i] = [];
    for (let j = 0; j < numCol; j++) {
      initData.cells[i][j] = {
        textColor: Color.Black,
        text: "",
      };
    }
  }

  return initData;
}

function makeDemoYDData(d: YDData) {
  d.hEdges[0][0].exists = true;
  d.hEdges[0][1].exists = true;
  d.hEdges[0][2].exists = true;
  d.hEdges[1][0].exists = true;
  d.hEdges[1][1].exists = true;
  d.hEdges[1][2].exists = true;
  d.hEdges[2][0].exists = true;
  d.hEdges[1][0].color = Color.Red;
  d.hEdges[1][0].thickness = Thickness.VeryThick;
  d.hEdges[2][0].color = Color.Red;
  d.hEdges[2][0].thickness = Thickness.VeryThick;

  d.vEdges[0][0].exists = true;
  d.vEdges[0][1].exists = true;
  d.vEdges[0][2].exists = true;
  d.vEdges[0][3].exists = true;
  d.vEdges[1][0].exists = true;
  d.vEdges[1][1].exists = true;
  d.vEdges[1][0].color = Color.Red;
  d.vEdges[1][0].thickness = Thickness.VeryThick;
  d.vEdges[1][1].color = Color.Red;
  d.vEdges[1][1].thickness = Thickness.VeryThick;

  d.cells[0][0].text = "1";
  d.cells[0][1].text = "2";
  d.cells[1][0].text = "$\\pi$";
  d.cells[1][0].textColor = Color.Red;
}
