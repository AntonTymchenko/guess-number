function quantityOfMatchesNumbers(arr1, arr2) {
  if (!arr1) {
    return;
  }
  if (!arr2) {
    return;
  }
  const arr3 = arr1.split("");
  let counter = 0;
  arr3.forEach((item) => {
    if (arr2.includes(+item)) {
      counter += 1;
    }
  });
  return { quantity: counter };
}

export default quantityOfMatchesNumbers;
//arr1 - это последний вариант из массива цифр тип которых срока
