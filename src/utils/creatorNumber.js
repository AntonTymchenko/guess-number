function creatorNumber() {
  const arr = [];
  while (arr.length !== 4) {
    let number = Math.floor(Math.random() * (9 - 0)) + 0;
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }
  return arr;
}

export default creatorNumber;