function oddCells(m: number, n: number, indices: number[][]): number {
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let answer = 0
    for (let indice of indices) {
        const [index, jndex] = indice
        for (let i = 0; i < matrix[index].length; i++) {
            matrix[index][i]++
        }
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][jndex]++
        }
    }
    for (let row_matrix of matrix) {
        for (let value of row_matrix) {
            if (value && value % 2) {
                answer++
            }
        }
    }
    return answer
};
