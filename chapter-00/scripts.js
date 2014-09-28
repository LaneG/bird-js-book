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

function range(x,y) {
  var startNumber = x;
  var endNumber = y;
  var numberRange = 0;
  while (startNumber <= endNumber) {
      startNumber = startNumber + 1;
      numberRange = numberRange + 1;
    };
  console.log(numberRange);
  return(numberRange);
  };

function sum(numberRange) {
  var counter = 0;
  var total = 0;
  while (counter <= range) {
    console.log(count);
    range = range + 1;
    };
  console.log(total);
  };

document.write(sum(range(1,4)));

