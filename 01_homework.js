//객체내용 출력하기

// let personArray = [
//   {"name":"John Doe", "age":20},
//   {"name":"Jane Doe", "age":19}
// ]

//es6문법을 이용하여 출력하세요
// His/Her name is John Doe. He/She is 20 years old.
// His/Her name is Jane Doe. He/She is 19 years old.

// for (let person of personArray) {
//   console.log(`His/Her name is ${person['name']}.`)
//   console.log(`His/Her is ${person['age']}years old`)
// }

// for (let person in personArray) {
//   console.log(`His/Her name is ${personArray[person]['name']}.`)
//   console.log(`His/Her is ${personArray[person]['age']} years old.` )
// }

// personArray.forEach(person => {
//   console.log(`His/Her name is ${person['name']}.`)
//   console.log(`His/Her is ${person['age']} years old.`)
// })

// for (let i=0; i<personArray.length; i++){
//   let person =personArray[i]
//   console.log(`His/Her name is ${person.name}. His/Her is ${person.age} years old.`)
// }

// function isEven (n) {
//  return n%2 ===0 ? "true" : "false"
// }

// console.log(isEven(10))

// function isOdd(n) {
//   return n%2 ===0 ? "true" : "false"
// }
// console.log(isOdd(7))


// function checkName(person) {
// 	// 사람의 이름이 "John Doe" 일때만 true 를 리턴해주도록 합시다.
//     return person['name'] ==="John Doe"
// }

// var personArray = [
//                     {"name": "Mark Bae", "age": 30},
//                     {"name": "John Doe", "age": 20},
//                     {"name": "Jane Doe", "age": 19},
//                 ];

// for (var person of personArray) {
// 	if (checkName(person)) {
// 		console.log("Here is your beer! ", person["name"]);
// 	} else {
// 		console.log("Get out! ", person["name"]);
// 	}
// }

function getChildrens(personArray) {
  let childerns = []
	for (let person of personArray) {
    if(person['age'] <= 20){
       childerns.push(person)
    }
  }return childerns
}

var personArray = [
										{"name": "John Doe", "age": 10},
										{"name": "Jane Doe", "age": 29},
										{"name": "Fred Doe", "age": 13},
										{"name": "Chris Doe", "age": 22},
										{"name": "Layla Doe", "age": 8},
									];

console.log(getChildrens(personArray)); 
// [
// 	{"name": "John Doe", "age": 10},
// 	{"name": "Fred Doe", "age": 13},
//  {"name": "Layla Doe", "age": 8},
// ]