
// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

var judgeCircle = function(moves) {
    const startingPoint = [0, 0];
    var movesSplit = moves.split('');
    var pointInProgress = [0, 0];
    for (let i = 0; i < movesSplit.length; i++) {
        let move = movesSplit[i];
        if (move === "R") {
            pointInProgress[0] += 1;
        } else if (move === "L") {
            pointInProgress[0] -= 1;
        } else if (move === "U") {
            pointInProgress[1] += 1;
        } else if (move === "D") {
            pointInProgress[1] -= 1;
        }
    }

   
    if ((pointInProgress[0] === startingPoint[0]) &&  (pointInProgress[1] === startingPoint[1]) ) {
        return true;
    } else {
        return false;
    }
    
    
};

console.log(judgeCircle("LL"));