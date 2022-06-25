function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = {}
    const visited = new Set([source])
    for (const [start, end] of edges) {
        if (`${start}` in graph) graph[start].push(end)
        else graph[start] = [end]
        if (`${end}` in graph) graph[end].push(start)
        else graph[end] = [start]
    }
    const dfs = (node: number): void => {
        if (visited.has(destination))
            return
        for (let curNode of graph[node]) {
            if (!visited.has(curNode)) {
                visited.add(curNode)
                dfs(curNode)
            }
        }
    }
    dfs(source)
    return visited.has(destination)
};
