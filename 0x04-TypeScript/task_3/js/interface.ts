// Define the type RowID
type RowID = number;

// Define the interface RowElement
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };
