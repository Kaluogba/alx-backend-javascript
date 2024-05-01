/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a row and get the row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`);

// Update the row with age 23
const updatedRow: RowElement = {
  ...row,
  age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
