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

function getMinimumDifference(root: TreeNode | null): number {
    const nodes: number[] = []
    type Node = TreeNode | null
    let answer: number = 10 ** 5 + 1
    const isTreeNode = (node: Node): node is TreeNode => {
        if (node === null) {
            return false
        }
        return true
    }
    const inorderTravel = (node: Node): void => {
        if (isTreeNode(node)) {
            inorderTravel(node.left)
            nodes.push(node.val)
            inorderTravel(node.right)
        }
    }
    inorderTravel(root)
    for (let i = 0; i < nodes.length - 1; i++) {
        let diff = Math.abs(nodes[i] - nodes[i + 1])
        answer = answer > diff ? diff : answer
    }
    return answer
};
