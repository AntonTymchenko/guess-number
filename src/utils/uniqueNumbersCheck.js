function uniqueNumbersCheck(str) {
  const arr = str.split("");

  if (arr.length > 4) {
    return false;
  }
  const newArr = new Set(arr);
  const result = [...newArr];

  return result.length === 4 ? result : false;
}

export default uniqueNumbersCheck;
