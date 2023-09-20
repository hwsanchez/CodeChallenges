function miniMaxSum(arr) {
  resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    cellSum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        cellSum = cellSum + arr[j];
      }
    }
    resultArray.push(cellSum);
    cellSum = 0;
  }
  const max = Math.max(...resultArray);
  const min = Math.min(...resultArray);
  console.log(`${min} ${max}`);
}

arreglo = [1, 2, 3, 4, 5];
miniMaxSum(arreglo);
