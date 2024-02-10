const combine = (n: number, k: number): number[][] => {
  const result: Array<Array<number>> = [];

  if (n === 0 || n < k) {
    return result;
  }


  const path: number[] = [];
  dfs(n, k, 1, path, result);

  return result;
};

// 回溯 + 剪枝
const dfs1 = (n: number, k: number, start: number, data: number[], res: Array<Array<number>>) => {
  if (data.length === k) {
    res.push([...data]);
    return;
  }

  // for (let i = start; i <= n; i++) {
  //   data.push(i);
  //   dfs(n, k, i + 1, data, res);
  //   data.pop();
  // }

  for (let i = start; i <= n - k + data.length + 1; i++) {
    data.push(i);
    dfs(n, k, i + 1, data, res);
    data.pop();
  }
}

const dfs = (n: number, k: number, start: number, data: number[], res: Array<Array<number>>) => {
  if (k === 0) {
    res.push([...data]);
    return;
  }

  if (start > n - k + 1) {
    return;
  }

  dfs(n, k, start + 1, data, res);

  data.push(start);
  dfs(n, k - 1, start + 1, data, res);
  data.pop();
}

const n = 4, k = 2;
console.log(combine(n, k));

export {};