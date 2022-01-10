function orderMatches(arr1, arr2) {
  if (!arr1) {
    return;
  }
  if (!arr2) {
    return;
  }
  let counter = 0;
  arr2.forEach((item, i) => {
    if (item === +arr1[i]) {
      counter += 1;
    }
  });
  return { order: counter };
}
export default orderMatches;
//arr1 - это последний вариант из массива цифр тип которых срока
