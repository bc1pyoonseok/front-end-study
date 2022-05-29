export const range = (start: number, end: number): number[] => {
    return start < end ? [start, ...range(start + 1, end)] : []
}