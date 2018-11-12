// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {
    var zeros = [];
    var newArr = [];

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zeros.push(arr[i]);
      arr.splice(arr[i], 1);
      i--;
    } else {
      newArr.push(arr[i]);
    }
  }
  return [...newArr, ...zeros]
  }