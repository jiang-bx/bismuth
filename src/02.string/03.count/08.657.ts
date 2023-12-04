// moves 只包含字符 'U', 'D', 'L' 和 'R'
export function judgeCircle(moves: string): boolean {
    let y = 0;
    let x = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "L":
                x++;
                break;
            case "R":
                x--;
                break;
            case "D":
                y--;
                break;
            case "U":
                y++;
                break;
            default:
                break;
        }
    }

    return x === 0 && y === 0;
}
