const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} larger than ${el2}? (y/n): `, function(answer) {
    if (answer === "y") {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i], arr[i + 1], userChoice => {
      if (userChoice === true) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});