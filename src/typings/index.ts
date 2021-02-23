
export type NUMBERS =  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type N = 0 | NUMBERS

export type ROW = [N, N, N, N, N, N, N, N, N]

export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW]

export type SUBGRID_ROW = [N, N, N]

export type SUBGRID = [SUBGRID_ROW, SUBGRID_ROW, SUBGRID_ROW]

export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type CELL_COORD = [INDEX, INDEX]


