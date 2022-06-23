/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
    type Node = TreeNode | null
    const isTreeNode = (node: Node): node is TreeNode => {
        return node !== null
    }
    const range_dfs = (root: Node, low: number, high: number): number[] => {
        const visited = []
        const dfs = (node: Node) => {
            if (isTreeNode(node)) {
                if (low <= node.val && node.val <= high) visited.push(node.val)
                if (!(node.val <= low)) dfs(node.left)
                if (!(node.val >= high)) dfs(node.right)
            }
        }
        dfs(root)
        return visited
    }
    return range_dfs(root, low, high).reduce((acc, cur) => acc + cur, 0)
};
