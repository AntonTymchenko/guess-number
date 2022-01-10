function uniqueNumbersCheck(str) {
  const arr = str.split("");
  if (arr.length > 4 && arr.length < 0) {
    return true;
  }
  const newArr = new Set(arr);
  const result = [...newArr];

  return result.length === 4 ? result : false;
}

export default uniqueNumbersCheck;
