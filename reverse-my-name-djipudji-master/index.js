function reverseMyName(str) {
    // put your code here
let result=""
for (let i = str.length-1; i >= 0; i--){
    result= result + str[i]
}
return result
}
const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")