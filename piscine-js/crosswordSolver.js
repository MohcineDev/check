const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']


function crosswordSolver(puzzle, list) {
    let validPuzzle = true

    for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i] != '\n' && puzzle[i] == '.' && puzzle[i] == '1' && puzzle[i] == '2') {
            validPuzzle = false
            break
        }
    }
}

function checkRowLength(puzzle) {
    let row = puzzle.split('\n')
    for (let i = 0; i < puzzle.length; i++) {
        if (puzzle[i] != '\n' && puzzle[i] == '.' && puzzle[i] == '1' && puzzle[i] == '2') {
            validPuzzle = false
            break
        }
    }
}
crosswordSolver(emptyPuzzle)