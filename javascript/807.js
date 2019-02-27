// Number: 807
// Title: Max Increase to Keep City Skyline

/*
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
*/

// stock function
var maxIncreaseKeepingSkyline = function(grid) {
    let maximums = getGridSkyline(grid);
    let skyline  = fillSkyline(grid, maximums);
    return skyline[1];
};

// Fill the skyline map grid to match the sample question
// Return the filled grid, and the sum
var fillSkyline = function(grid, maximums) {
    let columnLimit = maximums[0];
    let rowLimit = maximums[1];
    let sum = 0;
    
    for (let row = 0, rlen = grid.length; row < rlen; row++) {
        let currentRowLimit = rowLimit[row];
        for (let col = 0, clen = grid[row].length; col < clen; col++) {
            // the maximum we can set this point to is the lower of
            // columnLimit, rowLimit
            let point = grid[row][col];
            let currentColumnLimit = columnLimit[col];
            let altitude;
            if (point === currentColumnLimit || point === currentRowLimit) {
                // keep local maxima
                continue;
            } else {
                if (currentColumnLimit < currentRowLimit) {
                    altitude = currentColumnLimit;
                } else {
                    altitude = currentRowLimit;
                }
                sum = sum + (altitude - grid[row][col]);
                grid[row][col] = altitude;
                
            }
        }
    }
    
    return [grid, sum];
}

// get the grid skyline as top/bottom, left/right pairs
// highest in row = left/right
// highest in column = top/bottom
// this gets our maximum bounds we can fill to
var getGridSkyline = function(grid) {
    let highestCol = [];
    let highestRow = [];
    
    for (let row = 0, rlen = grid.length; row < rlen; row++) {
        let highestInRow = 0;
        for (let col = 0, clen = grid[row].length; col < clen; col++) {
            let point = grid[row][col];
            // set highestCol value
            if (!highestCol[col] || highestCol[col] < point) {
                highestCol[col] = grid[row][col];
            }
            if (point > highestInRow) {
                highestInRow = point;
            }
        }
        highestRow.push(highestInRow);
    }
    return [highestCol, highestRow];
}