function lastIndexOf(array, value) {

  var lastTime = -1;


  for (var i = 0; i < array.length; i++) {


    if (array[i] === value) {
      lastTime = i;
    }
  }
  return lastTime;
}

console.log(lastIndexOf([5,5,5,5,0],5));