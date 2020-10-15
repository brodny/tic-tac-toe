export class Board {
    public squares: Array<string> = Array(9).fill(null);
    public lastMoveColumn: number;
    public lastMoveRow: number;

    public clone(): Board {
        const cloned: Board = new Board();

        cloned.squares = this.squares.slice();
        cloned.lastMoveColumn = this.lastMoveColumn;
        cloned.lastMoveRow = this.lastMoveRow;

        return cloned;
    }
}
