// Number: 104
// Title:  Maximum Depth of Binary Tree

/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // I hate recursion, so we will use an iterative
    // version of a depth-first search, see 
    // https://en.wikipedia.org/wiki/Depth-first_search
    
    // set up some basic data structures
    let s = [];
    let maximum = 0;
    
    // set no root
    if (root === null) return 0;
    
    // flag the depth on this object
    root.depth = 1;
    
    // push the root
    s.push(root);
    while (s.length !== 0) {
        // get the vertex from the stack
        let vertex = s.pop();
        if (typeof vertex.hit === 'undefined') {
            vertex.hit = true;
            // check: is the depth of this node the max?
            if (vertex.depth > maximum) {
                maximum = vertex.depth;
            }
            
            // if we have other nodes, add them.
            if (vertex.left) {
                vertex.left.depth = vertex.depth + 1;
                s.push(vertex.left);
            }
            if (vertex.right) {
                vertex.right.depth = vertex.depth + 1;
                s.push(vertex.right);
            }
        }
    }
    return maximum;
};

