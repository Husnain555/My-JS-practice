// const hello = 'Hello World'
// console.log(hello)
// console.log(appm);
// const appm = 5;
//
// app();
//
// function app (){
//     console.log('husnain')
//
// }


// ....................function behind the scene ..................
// const x = 10
// a();
// b();
// console.log(x)
//
//
//
// function a (){
//     const x = 12
//     console.log(x);
//
// }
// function b(){
//     const x = 15
//     console.log(x)
// }


// ............deffrence betwwn undefine and not define.............


// if we did not define a value its automatically undefine  for example

// let y;
// console.log(y)

// its give us undefine until we asign a value

// and now if we don't create a variable and create log its give us not define


// console.log(x)

// ................lexical enviroment..............


// function a (){
//     let b = 10
//     function c(){
//         console.log(b)
//     }
// }
//

//........................... diffrence between const let and var.............................

// we can change var anywhere we can, but we might not do that because of itas hoisted var hosted in global scope
// that the big problem here we can change it we can declare it later for example
// var x;
// x = 12
// console.log(x)
// // now cange its value
//                        x = 13
// console.log(x)
// so thats the big problem here if we are working on a big project we get trouble of using var


// ..........let ............
// console.log(a)
// let a;
// a= 14
// console.log(a)
// a= 13
// console.log(a)
// as we see in let example we can also decline a later, but we can console it but when we try
// to consol before declaring a its gives us an initilizer error but in let example we can see it's not much diffrence
// we can see before intilizing we cant console we get error but not in var if in var side we can console before initizing
// we get undefine and we never asign a value and console we get not -define and big diffrence comes here
//
//
// var hoisted in global scope and let also hoisted in gl;obal scope but in diffrent memory in
// "script" and we see const also hoisted here but const was more strict in variable

// const a;
// a= 14
// console.log(a)
// so we get syntax error here because const want to declared a value in  single line we cant declared const variable value
//
// later we need to give const its value on the spot and second and the biggest diffrence was here we cant change the value of const
//
//
//     like

// const a = 16
// console.log(a)
// // now if we want to change a value we cant able to that
// a = 17
// console.log(a)
//
// we get a type error here


// .................................closure.................................................
// function x(){
//     let a = 20
//     function b (){
//         console.log(a)
//     }
// }
// x();
// this is calles closuer
//
// defination
//
// A function with in a function surrounding by its lexuical enviroment
// here we see a function y its surrounding with its another function x consolewhat will be happend if we
// make x a wrape him with a variable like
//
// const z = x()
//
// now we have have z we can use it anywhere in the code and what idf we add return y before console.log)(a)
// its bringa whole y function in return and whats we console.log z in later in the code its gives us
// 20 thats the beauty of function love them, its return value of a in the later if we do like "console.log(z)" in the later code

