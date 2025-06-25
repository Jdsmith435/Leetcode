// Lets fucking go got this in under 25 minutes + watched modern family clips
// Visited and memoized cache can be the same structure.
function longestIncreasingPath(matrix: number[][]): number {
    const height = matrix.length;
    const width = matrix[0].length;
    const directions = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ];

    const visited = Array.from({length: height}, () => Array(width).fill(0));
    function iter(sr, sc) {
        let current = 1;
        for(const [dr,dc] of directions) {
            const nr = dr + sr, nc = dc + sc;
            if(nr < 0 || nr >= height || nc < 0 || nc >= width || matrix[nr][nc] <= matrix[sr][sc]) continue;
            if(visited[nr][nc]) current = Math.max(current, visited[nr][nc] + 1);
            else {
                current = Math.max(current, iter(nr,nc) + 1);
            }
        }
        visited[sr][sc] = current;
        return current;
    }

    let longest = 0;
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            longest = Math.max(iter(i,j), longest);
        }
    }

    return longest;
};
