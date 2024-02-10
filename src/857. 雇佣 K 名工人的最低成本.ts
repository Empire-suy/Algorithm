function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  let minSalary = Number.MAX_VALUE;

  const exactQualities: number[] = [];
  const exactWages: number[] = [];
  let j = 0;
  for (let i = 0; i < quality.length - k; i++) {
    exactQualities.push(quality[i]);
    exactWages.push(wage[i]);
    j = i + 1;
    while (true) {
      if (exactQualities.length < k) {
        exactQualities.push(quality[j]);
        exactWages.push(wage[j]);
      }
    }
  }

  return minSalary;
};

const getCombineNumbers = (arr: number[], k: number): number => {
  let i = 0;
  const result: number[] = [];
  while (i < arr.length - k) {
    let j = i;
    result.push(arr[j]);
    while (result.length < k) {
      result.push(arr[j]);
    }
  }
}

// const quality = [10,20,5], wage = [70,50,30], k = 2;
const quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3;
// console.log(mincostToHireWorkers(quality, wage, k));
