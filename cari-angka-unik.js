function findUniqeNumber(array) {
  for (let i = 0; i < array.length; i++) {
    let check = array[i];
    let isNotUniqe = false;
    for (let j = 0; j < array.length; j++) {
      if (check == array[j] && i != j) isNotUniqe = true;
    }
    if (!isNotUniqe) return check;
  }
}

// console.log(findUniqeNumber([5, 5, 5, 5, 2, 5, 5]));
