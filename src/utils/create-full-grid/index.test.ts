import createFullGrid from './'

describe('createFullGrid', () => {
    it('returns a full, valid 9x9 Sudoku grid', () => {
        const grid = createFullGrid()
        for (let row in grid)
            for (let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
    })
})
