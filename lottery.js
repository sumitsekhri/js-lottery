var numbers = [ "1", "42", "100848", "4938532894754", "1234567", "472844278465445"];
var validLottery = [];

// iterate through strings in array. verify valid strings between 7 and 14 characters only
numbers.forEach(function(num) {
  if(num.length < 7 || num.length > 14) return;

  var numbers = [];
  var start = 0;

  // account for small strings
  if(num.length === 7)
  {
    numbers = num.split('');
  }
  else
  {
    while(start < num.length)
      {
        // account for pairs between 1 and
        var digits = parseInt(num.slice(start, start + 2));
        if(digits < 1 || digits > 59)
        {
          // if less than 1 or greater than 59, split the pair to take the first number
          digits = parseInt(num.slice(start, start + 1));
          start += 1;
        }
        else {
          start += 2;
        }
        numbers.push(digits);
      }
  }
  if(numbers.length === 7)
  {
    validLottery.push(numbers.join(' '));
  }
});

console.log(validLottery);
