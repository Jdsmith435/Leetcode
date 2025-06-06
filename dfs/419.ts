// Simple dfs to find all the battle ships. Not constant memory and not the most efficient.
// Since ships can be any direction, you cannot iterate over each row or column and count
function countBattleships(board: string[][]): number {
    if(!board.length && !board[0].length) return 0;
    const height = board.length;
    const width = board[0].length;

    const directions = [
        [0,1],
        [-1,0],
        [0,-1],
        [1,0]
    ];

    function dfs(sr, sc) {
        for(const [dr, dc] of directions){
            const nr = dr + sr, nc = dc + sc;
            if(nr >= 0 && nr < height && nc >= 0 && nc < width && !visited[nr][nc] && board[nr][nc] === 'X' ) {
                visited[nr][nc] = 1;
                dfs(nr,nc);
            }
        }
    }

    let battleships = 0;
    const visited = Array.from({length: height}, () => Array(width).fill(0));
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(board[i][j] === 'X' && !visited[i][j]) {
                dfs(i,j);
                battleships++;
            }
        }
    }
    return battleships;
};

// This solution iterates over each cell. It checks the previous row and col to make sure it is empty. If not, you know it is a ship.
function countBattleships(board: string[][]): number {
  const m = board.length;
  const n = board[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== BoardValue.X) continue;

      if (
        board[i][j] === BoardValue.X &&
        (i === 0 || board[i - 1][j] === BoardValue.Empty) &&
        (j === 0 || board[i][j - 1] === BoardValue.Empty)
      ) {
        count++;
      }
    }
  }

  return count;
}
