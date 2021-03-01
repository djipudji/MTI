const whenWasItPosted = date => {
  // do code here
  const currentDate = new Date().setMonth(new Date().getMonth())

  let selisi = new Date(currentDate).getTime()-new Date(date).getTime()

 
  const differenceInDays = Math.floor(selisi / (1000*60*60*24))
  const differenceInWeeks = Math.floor(selisi / (1000*60*60*24*7))
  const differenceInYears = Math.floor(selisi / (1000*60*60*24*366))
  const bulan = Math.floor(selisi/(1000*60*60*24*30))
 let test = new Date(currentDate).getMonth()-new Date(date).getMonth()

 if (differenceInDays<7){
   return (differenceInDays === 1) ? `${differenceInDays} day ago` : `${differenceInDays} days ago`
 }
else if(differenceInWeeks<4){
  return (differenceInWeeks === 1)? `${differenceInWeeks} week ago` : `${differenceInWeeks} weeks ago`
}else if(bulan<12){
  return(bulan===1)?`${bulan} month ago` :`${bulan} months ago`
}
else{
  return( differenceInYears===1)?`${differenceInYears} year ago` : `${differenceInYears} years ago`
}
}


// do not change this code below
const changeToString = __ => {
  const _ = new Date(__)
  const month = _.toLocaleString('default', { month: 'long' });
  const date = _.getDate()
  const year = _.getFullYear()
  return `${date} ${month} ${year}`
}
const test = (testCase, result) => console.log(testCase, testCase === result);

const date = new Date();
const date1 = new Date();
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '2 weeks ago')
test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '1 year ago')
test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '20 years ago')