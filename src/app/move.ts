export class Move {
    public player: string;
    public column: number;
    public row: number;

    public clone(): Move {
        const cloned: Move = new Move();

        cloned.player = this.player;
        cloned.column = this.column;
        cloned.row = this.row;

        return cloned;
    }
}
