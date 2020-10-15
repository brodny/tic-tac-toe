export class Board {
    public squares: Array<string> = Array(9).fill(null);
    public lastMoveColumn: number;
    public lastMoveRow: number;
    // tslint:disable-next-line: no-inferrable-types
    public moveNumber: number = 0;

    public clone(): Board {
        const cloned: Board = new Board();

        cloned.squares = this.squares.slice();
        cloned.lastMoveColumn = this.lastMoveColumn;
        cloned.lastMoveRow = this.lastMoveRow;
        cloned.moveNumber = this.moveNumber;

        return cloned;
    }
}
