const whatTimeIsIt = time => {
  // do code here
let number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
let tens = ['ten', 'twenty', 'thirty', 'forty']
let day = time.split(' ')[1]
let days = (day === 'am')? 'morning': 'afternoon';

let hours = number[time.split(':')[0]-1]

let firstminute = time.split(':')[1].split('')[0]
let secondminunte = time.split(':')[1].split('')[1]
let fullminute = time.split(':')[1].split(' ')[0]
let puluhan = tens[firstminute-1];
let satuan = number[secondminunte-1];

let minutes;
if ( firstminute === "1"){
  if(secondminunte === "0"){
    minutes = "ten"
  }
else {
  minutes = number[fullminute-1]
}
} else {
  minutes = `${puluhan} ${satuan}`
}

if (time ==="12:00 pm") {return "It's noon"}
else if (time === '12:00 am'){ return "It's midnight"}
else {
  return `It's ${hours} past ${minutes} in the ${days}`
}


}

// do not change this code below
const test = (testCase, result) => console.log(testCase, testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")