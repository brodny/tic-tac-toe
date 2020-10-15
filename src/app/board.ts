export class Board {
    public squares: Array<string> = Array(9).fill(null);
    public column: number;
    public row: number;

    public clone(): Board {
        const cloned: Board = new Board();

        cloned.squares = this.squares.slice();
        cloned.column = this.column;
        cloned.row = this.row;

        return cloned;
    }
}
