// var total = 0, count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }

// alert(total);

//////////////////////////////

// Write two functions that make this work like the example above
// document.write(sum(range(1, 10)));

//////////////////////////////

// figure out how many numbers in the range.

function range(x,y) {
  var startNumber = x;
  var endNumber = y;
  var numberRange = 0;
  while (startNumber <= endNumber) {
      startNumber = startNumber + 1;
      numberRange = numberRange + 1;
    };
  return(numberRange);
  };

// add the numbers in that range together.

function sum(numberRange) {
  var maxRange = numberRange;
  var firstNumber = 0;
  var total = firstNumber;
  while (firstNumber <= maxRange) {
    total = total + firstNumber;
    firstNumber = firstNumber + 1;
    };
  return(total)
  };

// call the two functions and put the result on the screen.

document.write(sum(range(1,10)));

///////////////////////////////

// OK that works...now what happens if the range starts at 0?

//////////////////////////////

