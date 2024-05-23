const size = 32;
let chessboard = "";

for (let row = 0; row < size; row++) {

    for(let column = 0; column < size; column++) {
        if(column % 2 !== 0) {
            chessboard += row % 2 === 0 ? "#" : " ";
        } else {
            chessboard += row % 2 === 0 ? " " : "#";
        }
    }

    chessboard += "\n";
}

console.log(chessboard);
