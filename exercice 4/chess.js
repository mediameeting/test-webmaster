// chessboard: a board of 64 squares
// cf chessboard.png

// each square has a name depending on its position  on the board
// square A1 is the bottom left square
// square H8 is the top right square
// square D2 is the square inthe fourth column and second row...

// on the board you can have pieces: tower (tour), bishop (fou), queen (reine)

// for this exercise: we want for each of these pieces a function that takes an initial posiiton and returns all possible positions for the next movement
// the input position is a string e.g. "A1"
// the expected output is an array of all possible positions after the movement (the order of the returned positions does not matter)

// tower can only move vertically and horizontally
// example of function call: tower("A1") shoudl return ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "C1", "D1", "E1", "F1", "G1", "H1"]
const tower = (initialPosition) => {
	//TODO
}

// bishop can on ly move diagonally
// example: bishop("C2") should return ["A4", "B3", "D1", "B1", "D3", "E4", "F5", "G6", "H7"]
const bishop = (initialPosition) => {
	//TODO
}


// the queen can move either diagonally, vertically and hoizontally
const queen = (initialPosition) => {
	//TODO
}
