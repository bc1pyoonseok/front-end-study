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

function findSecondMinimumValue(root: TreeNode | null): number {
    type Node = TreeNode | null
    let values: any = []
    const dfs_search = (curNode: Node) => {
        values.push(curNode.val)
        if (curNode.left) {
            dfs_search(curNode.left)
        }
        if (curNode.right) {
            dfs_search(curNode.right)
        }
    }
    dfs_search(root)
    values = [...(new Set(values))]
    values.sort((a: number, b: number): number => a - b)
    if (values.length < 2)
        return -1
    return values[1]
};
