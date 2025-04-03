// // // let arrayy= [67,13,16,19,40,23]
// // // let count=0
// // // let arr=[]
// // // for(let i=0; i<arrayy.length;i++){
// // //     let num= arrayy[i]

// // //     let isPrime= true;
// // //     for(let j=2; j<num; j++){
// // //         if(num % j===0){
// // //             isPrime= false
// // //             break;
// // //         }}

// // //     if(isPrime==true){
// // //         count++;
// // //         arr.push(num)
// // //     }}

// // // console.log(count,arr)

// // // let arr1 =[1,2,3,4,5,6]

// // // let sliced= arr1.slice(1,5)

// // // let arr= [19,23,14,2]
// // // let sliced= arr.slice(-4,-1)

// // // console.log(sliced)

// // // let arr= [1,2,3,4,5,56,78]

// // // console.log(arr.includes(560))

// // // let spliced= arr.splice(2,4,()=>{})

// // // console.log(arr)

// // // fn , parameter array, array m no of prime elements , return no of prime elements

// // // let a= (arr)=>{
// // // let count=0;
// // // for(let i=0; i<arr.length;i++){
// // //     let num= arr[i]
// // //     let isPrime = true;
// // //     for(let j=2; j<num;j++){
// // // if(num %j==0){
// // //     isPrime= false
// // // }}

// // //     if(isPrime=== true){
// // //         count++
// // //     }
// // // }
// // // return count;
// // // }

// // //  let ab= a([2,3,4,5,6,7,5,4,8,967,67])
// // //  console.log(ab)

// // // fn ES5 , paramter array , count those elements which are divisible by 6

// // // fn , array , target, return true/ false

// // //  let searchingg= function (arr,target){
// // //     let isPresent= "not found";
// // // for(let i=0; i<arr.length;i++){
// // //     if(arr[i]===target){
// // //        isPresent= i
// // //     }
// // // }

// // // return isPresent
// // //  }
// // //  let found= searchingg([4,2,7,8,10], 12)

// // //  console.log(found)

// // // function search(str, char){
// // //     let count=0;
// // //     for(let i=0; i<str.length;i++){
// // //         if(str[i]==char){
// // //             count++;
// // //         }
// // //     }

// // //     return count
// // // }

// // // console.log(search("hello-world", 'l'))

// // //fn to reverse a string

// // // function strreverse(str){
// // //    let arr = str.split(" ").reverse().join(" ")

// // //    console.log(arr)
// // // }

// // // console.log(strreverse("hello guys kaise ho saare"))

// // // function splitting(sentence){
// // //     let arr=[]
// // //  let initialindex=0
// // //     for(let i=0; i<sentence.length;i++){
// // //         if(sentence[i]== " "){
// // //             let word= sentence.slice(initialindex,i)
// // //             arr.push(word)
// // //             initialindex = i+1;
// // //         }
// // //     }
// // //     return arr
// // // }

// // // console.log(splitting("hello guys kse ho sb??"))

// // // function isPrime(val){
// // //     let isPrimeval= true
// // //     for(let i=2; i<val;i++){
// // //         if(val%i==0){
// // // isPrimeval= false
// // // break;
// // //         }
// // //     }

// // //     return isPrimeval
// // // }

// // // let count=0;

// // // for(let i=1; i<50; i++){
// // //     if(i===1){
// // //         continue
// // //     }
// // // else if(isPrime(i)=== true){
// // //     count++;
// // // }
// // // }

// // // console.log(count)

// // // ques-1 : create a function which takes up 2 arrays as paramter and then merge , sort and remove the duplicate values from 
// // // all arrays and return a new array.

// // //ques-2 : create a fn that takes up 2 strings and merge alternate values //hello //world , return newly created

// // //ques-3 : push,pop,shift,unshift,slice,splice,includes

// // //ques4 :create a fn that takes up an array and returns a new array where each element is square of itself

// // // let h = "hello"
// // // let w = "world"
// // // let nweSrt = ""
// // // for(let i =  0; i<h.length; i++){
// // //     for(let j = 0; j<w.length; j++){
// // //         if(h[i] === w[j]){
// // // nweSrt.push(h[i])
// // //         }else{

// // //         }
// // //     }

// // // }
// // // console.log(nweSrt)

// // // function getting(a,b){
// // //     let x = []

// // //     for(let i= 0; i < a.length; i++){
// // //         x.push(a[i])
// // //     }

// // //     for(let j = 0; j < b.length; j++){
// // //         x.push(b[j])
// // //     }

// // //      for(let k = 0; k < x.length-1; k++){
// // //         for(let l = k + 1; l < x.length; l++){
// // //             if(x[l] < x[k]){
// // //                 let temp = x[k]
// // //                 x[k]= x[l]
// // //                 x[l] = temp
// // //             }
// // //         }
// // //      }
// // //      let   nweSte = []
// // // for(let i = 0; i<x.length; i++){
// // //     if(!nweSte.includes(x[i])){
// // //         nweSte.push(x[i])
// // //     }

// // // }
// // // return nweSte

// // // }

// // // console.log(getting([5,3,2,5,2],[6,4,4,4,1]));

// // // function fn(arr){
// // //     let newarr=[]
// // //     for(let i=0; i<arr.length; i++){
// // //     let val=arr[i]*arr[i]

// // //     newarr.push(val)

// // //     }

// // //     return newarr
// // // }

// // // let b=fn([2,3,4])

// // // console.log(b)

// // // let a=[1,2,3];
// // // a.push(4);
// // // console.log(a)

// // // let a=[1,1,1,4,4,]
// // // a.spliced

// // // let a = "hello";
// // // let b = "world";

// // // let str = "";

// // // for(let i=0,j=0,indexx=0; i<a.length,j<b.length,indexx<=(a.length+b.length)-1;indexx++){

// // //     if(indexx%2==0){
// // //         str = str+ a[i]
// // //         i++

// // //     }

// // //     else {
// // //         str = str+b[j]
// // //         j++

// // //     }

// // // }

// // // console.log(str)



// // // let sentence = "helloo world how are youuuuuuuuuuu all"

// // // let arrwords= sentence.split(" ")
// // // let maxCount=0
// // // let desiredWord;
// // // for(let i=0; i<arrwords.length;i++){
// // //     let count=0;
// // //    let word= arrwords[i]
// // //    for(let j=0; j<word.length;j++){
// // //     if(!(word[j]==",")){
// // //         count++
// // //     }
// // //    }
// // //    if(count>maxCount){
// // //     maxCount=count
// // //     desiredWord= word
// // //    }

// // // }

// // // console.log(maxCount,desiredWord)

// // // let arr=[1,2,3,4,5,6,7,8]

// // // let sumofEven=0;

// // //  for(let i=0; i<arr.length;i++){
// // //     if(arr[i]%2==0){
// // //         sumofEven = sumofEven+ arr[i]
// // //     }
// // //  }


// // // for(let i=0 ; i<arr.length;i++){
// // //     console.log(arr[i])
// // // }

// // // arr.forEach((tanu)=>{
// // // if(tanu%2==0){
// // //     sumofEven= sumofEven+ tanu
// // // }
// // // })


// // //  console.log(sumofEven)

// // // let stringg= "   Aaheklo world   " 

// // // console.log(stringg[2])

// // // console.log(stringg.charAt(0))

// // // console.log(stringg.charCodeAt(0))

// // // console.log(stringg.toLowerCase())

// // // console.log(stringg.trim()+"hi")

// // // console.log(stringg.replace("k","l"))

// // // let str2= "hello dice"

// // // let str3= stringg.concat(str2) 

// // // console.log(stringg,"---------------", str2,"--------------------", str3)

// // // let arr= [1,2,33,4,5,6]


// // // 3 more ways to create array
// // // stack and heap memory
// // // primitive, refrence type difference
// // //pass by value , pass by reference

// // //    let tanu= new Array("deepak", "manish","tanu") // constructing array through constructor function

// // //    console.log(tanu)
// // // let name1= "deepak"
// // //    let arr2= Array.from(name1) 

// // //    console.log(arr2)
// // // let name2= "tanu"
// // //    let arr3= Array.of(name1,name2)

// // //    console.log(arr3)

// // // let a= 10;
// // // let b =a;

// // // b= 14
// // // a= 18
// // // console.log(a,b)  //10 10


// // // let arr=[1,2,3,4,5]

// // // let arr2= arr
// // // arr2[0]= 10
// // // console.log(arr,arr2)






// // //objects

// // let obj= {
// //     name: "dice",
// //     age:10
// // }

// // obj.name= "ishita"
// // console.log(obj.name) //dot-notation

// // //index method

// // console.log(obj["name"])  //not recommended

// // // let arr=[1,2,3,4]
// // // arr[2]= 20

// // // console.log(arr)
// // // objects,arrays are mutable

// // // strings are immutable
// // // obj= 1024
// // // obj2= 1024
// // let obj2= obj 

// // obj2.name= "dice"

// // console.log(obj.name)

// // // let a= 10;
// // // let b= a
// // // b++
// // // a--
// // // console.log(a,b)

// // let name= "fdicvew"
// // let objectt= {
// //     namee:name
// // }


// //includes

// //hasOwnProperty

// // let obj= {
// //     name:"dice"
// // }

// // console.log(obj.hasOwnProperty("namee"))

// //obj -length , nrml for loop , while , do-while

// //refrence data type, mutable

// //hasOwnProperty







// // let str= "Manish"
// // let str2= "Chauha"
// // let k=0;
// // let tsr=""
// // for(let i=0, j=0; i<str.length, j<str2.length;k++ ){
// // if(k%2==0){
// // tsr = tsr + str[i]
// // i++
// // }

// // else{
// //     tsr = tsr + str2[j]
// //   j++ 
// // }
// // }


// // console.log(tsr)

// // let obj= {
// //   name:"ishita"
// // }

// // obj.name= "dice" //modifying a key
// // obj.age= 10 //adding a key
// // console.log(obj.name,obj.age)

// //objects function

// // "this"
 


// // let obj={
// //   name:"world",
// //   fn: function (){
// //     console.log("i m a function")
// //   }
// // }

// // obj.fn()

// //methods => fn within an object method

// // 2 methods =>es5, es6

// // console.log(this)

// // let a= ()=>{
  
// //   console.log(this)
// // }

// // a()


// // obj.fn()

// // let a= 10;
// // let b= "dice"
// // console.log(`hii i m ${b} is of ${a} years old`)
// // let obj= {
// //   name:"dice",
// //   age:10,
// //   profession:"teaching"
// // }

// // for (const deepak in obj) {
// // console.log(obj[deepak])  //[]
// // }

// // let arr=[1,2,3,4,37,98]

// // for (const key in arr) {
// // console.log(arr[key])
// // }

// // for (const element of arr) {
// //   console.log(element)
// // }

// //values 
// //keys

// //entries
// // console.log(Object.keys(obj))  //array

// // let obj1= {
// //   name:"dice",
// //   obj:{
// //     name:"manish"
// //   }
// // }
// // console.log(obj1.obj.name, obj1.name)

// // destructuring objects

// // let objectt={
// //   name:"ishitaaaaaa",
// //   profession :'FSD'
// // }

// // let {name:firstName, profession:prof}= objectt

// // console.log(firstName,prof) //custom destructuring



// //Object.seal, freeze,
// // call, apply, bind

// // expensive fruit 
// // [
// //   {
// //     fruitName:"mango",
// //     price:200
// //   },
// //   {

// //   },{

// //   }

// // ], price



// // function  expensiveFruit(arr, prop){
// //   let price= 0;
// //   let fruit;
// //   for(let i=0; i<arr.length;i++){
// //    let obj= arr[i]
// // if(obj[prop]>price){  
// //   price= obj[prop];
// //   fruit = obj.fruitName
// // }
// //   }
// //   return fruit
// // }

// // console.log(expensiveFruit([
// //   {
// //     fruitName:"apple",
// //     price:300
// //   },
// //   {
// //     fruitName:"grapes",
// //     price:200
// //   },
// //   {
// //     fruitName:"kiwi",
// //     price:2500
// //   },
// //   {
// //     fruitName:"mangoes",
// //     price:100
// //   }
// // ],"price"))


// // Object.freeze , Object.seal, call, apply, bind;

// // let obj = {
// //   name:"abc",
// //   age:10
// // }
// // Object.seal(obj)
// // obj.prof= "fsd"
// // // delete obj.prof
// // obj.name= "def"

// // console.log(obj)



// //call

// function printingName(message,mess2){
// let name= "dice"
// console.log(`my name is ${this.name} ${message} ${mess2}`)
// }
// //call, apply,bind function ke this ki current context ki value bdl deta h
// let obj= {
// name:'abc'
// }

// let obj2= {
//   name:"def"
// }
// let a= printingName.bind(obj2, "!!" , "dice academy")
// a()

// let b= printingName.bind(obj, "!!" , "dice academy")
// b()

// a(

// )
// a()



// this

// this -> currentn context

// console.log(this)

// function fn(){
//   console.log(this)
// }

// let obj= {
//   name:"ishita",
// fn:()=>{
//   console.log(this)
// }
// }
// obj.fn()
//method= > objn fn

// function fn(){
//   let str= "hellow orld"
//   console.log(this)
// }

// let obj= {
//   name:"ishita",
//   fn: function (){
//     console.log(this.name)
//   }
// }

// obj.fn()

// this.name= "ishita" 

// let obj={
//   name:" deepak",
//   fn: function (){
//     console.log(this.name)
//   }
// } 

// let value= obj.fn

// value()
// this.name2 = "bxkjxnk,"//injected property
// let name2= "ishita"
// console.log(this)




//get //set

// keywords

//objects
// can be used independently 

// let obj= {
//   name:"dice",
//   get myname (){
//     // console.log(this.name)
//     let a= this.name.toUpperCase()
//     console.log(a)
//   },

//   set meraname(val){
//     this.name= val
//   }
// }
// obj.meraname= "ishita"
// obj.myname

// console.log(obj)

//oops 
// prototype 



// let obj={
//     name:"dice"
// }

// function a(){
//     console.log(this.name)
// }

//  let b=   a.bind(obj)
// b()

//OOPS 

// let arr= new Array()

// 1 encapsulation  = constructor  
 //2 abstraction = how , what 
 //3 polymorphism (method overloading, method overriding)
 //4 inheritance 

//  function Person (name,age,occupation,fn){
// this.myname= name
// this.myage= age
// this.myoccupation= occupation
// this.myfn= fn
//  }
//  obj.name= "mnxks"
//  let person1= new Person("manish" , 40, "sawaaal puchhna",(name,age)=>{
//     console.log("hello",name,age)
//  })
// console.log(person1)
// person1.myfn("manish", 29)
// let person2= new Person("deepak", 50 , "jyada bolta hai",()=>{
//     console.log("hello")
//  })
// console.log(person2)
// person2.myfn()

// console.log(person2 instanceof Person)
 //this keyword = refers to objects craeted form constructor function
//new - object creation
//instance - object craeted from Construction function 


// shallow copy 
// deep copy
// let a={
//     name:"uidj o"
// }

// let b= a;

// object cloning

// refrence add change





//iteration method  //shallow copy
//  let a= {
//     name:"bue",
//     age:689,
//     arr:[1,7,9,10]
// }

// let b={

// }

// for (const key in a) {
//    b[key]= a[key]
// }

// b.arr[0]= "deepakk"
// console.log(a,b)





//spread operator (...)

// let a= {
//     name:"bsjc",
//     age:6
// }

// let b= {
//     ...a
// }

// b.name= "deepakk"
// console.log(a,b)








//object.assign

// let a= {
//     name:"bsjc",
//     age:6
// }

// let b= Object.assign({},a)
// b.name= "deepakk"
// console.log(a,b) 
// console.log()


//structuredClone

// let a= {
//     name:"bsjc",
//     age:6
// }

// let b= structuredClone(a)

// b.name= "deepakk"
// console.log(a,b) 



//JSON -> javascript object notation
// {
//     "name" ="abc",
//     "age"= 76

// }

// data transmission format, server client, cross- browser compatibility

// let obj={
//     name:"bhehyvce"
// }

// let obj2= JSON.stringify(obj)
// let obj3= JSON.parse(obj2)
// console.log(obj2,obj3)






// let a= {
//     name:"buwnc",
//     age:56
// }

// let b= JSON.parse(JSON.stringify(a))  

// b.name= "bejcne"
// console.log(a,b)


  //rest operator  - functions only
  // spread operator - objects, arrays


// ...


// function rest (a,b,...manish){
//    console.log(manish)
// }

// rest ("xbjwx", 6, "bvhcbxj")


  //array joining methods

//   let a= [1,3,4,6]
//   let b= [8,9,7,5]

//   //sptread operator

//   let c= [...a,...b]

//   console.log(c,a,b)


// +

// let c= a+b
// console.log(c) //string

// concat

// let c= a.concat(b )

// console.log(c,b,a)

//object merging method

// let a={
//    name:"njsn",
//    age:89
// }

// let b= {
//    prof:"bhjuc"
// }

// let c= Object.assign(a,b)

// // let c= {
// //    ...a,...b
// // }

// c.prof= "fsd"
// console.log(c,a,b)

// let a= {
//    name:"hvh"
// }


// let b= {
//    name:"gvf"
// }

// let c= {
//    ...a, ...b
// }

// c= {
//    name :"gvf",

// }

// c.name= "gvf"


// let a= {
//    name:"bchb",
//    name:"cbehjcbc"
// }
// let b= {
//    name:"xbwhbx"

// }
// console.log(a)

//map, filter, reduce

   //   function createObj(...args){
  
   //    let obj={

   //    }
   //   for(let i=0, j=1; i<args.length, j<args.length; ){
   //   obj[args[i]] = args[j]  //name -: "dice"
   //   i= i+2;
   //   j=j+2
   //   }

   //    return obj
   //   }

   //  console.log( createObj("name","dice" ,"age",  10)) 

   //   a= ["name", "ge"]
   //   b= ["dice", 45]


   //prototype
// methods, properties
// shared 
// push , 
// pop, slice, splice, 
// let arr= [5,9,5,10]

// // console.log(Object.getPrototypeOf(arr))

// console.log(Array.prototype.__proto__.__proto__)
// get -> arr instance

// function fn(){
//   console.log("vjbfj ")
// }

// console.log(fn.prototype)

// function Person (name){
// this.myname= name
// // this.mynamee= function (){
// //     console.log(`${this.myname}`)
// //   }
// }

// Person.prototype.mynamee= function (){
//   console.log(`${this.myname}`)
// }

// let person1= new Person("dice")
// console.log(person1)
// person1.mynamee()
// 
// console.log(person1.__proto__)


// function Cars(name,model){
// this.myname= name
// this.model= model


// }

// Cars.prototype.fn= function (){
//   console.log(`${this.myname}`)
// }
// let car1= new Cars("suzuki", "honda")

// console.log(car1)

// car1.fn()




// let arr=[1,2,3,4]

// Array.prototype.secondindex= function (){
 
// }




// console.log(arr.secondindex())

  //  class


//constructor 

//   class Person{
// // myname= "dice"
// constructor (name){
// this.myname= name
// }
//   }

//  i1m hChild extends Person{

//   }

  //encapsulation => entity class properties, prototype

  //inheritance  =>class to class inheritance



  //syntatical 

  // let persion1= new Person("dice")

  // console.log(persion1)

  //oops 

  // object




//   function Car(name){
//     this.myname=name
  
//   }
//  Car.prototype.myFn= ()=>{

// }
//   let car1= new Car("suzuki")

//   console.log(Car.prototype , car1)

//   let a= "hello"

//   console.log(a instanceof String)


// let a= new String("hello")

// console.log(a)



      // let obj= {
      //   name:"njsn",
      //   __proto__ :{
      //     a:"ngn"
      //   }
      // }

      // console.log(obj)


      // function isPrime(num){
      //   let isPrime= true;

      //   for(let i=2;i<num;i++ ){
      //     if(num%i==0){
      //       isPrime= false
      //     }
      //   }
      //   return isPrime
      // }

      // let count=0;

      // for(let i=1; i<=50;i++){
      //   if(isPrime(i)){ 
      //     count++
      //   }
      // }


      // class => constructor function +prototype

// class Car {
//   // myname="ncrn"

//   #nameee= "hello"
// constructor (name){
// this.myname= name
// } 

// fn (a){
// return this.#nameee
// }

// fn(a,b){
// console.log("fn3")
// }

// fn(a,b,c){
//   console.log("fn3")
// }


// }

// class Person{

// }

// class Child extends Car{
// constructor(name,age){
//   super(name)
//   this.myage= age
// }
// }


//method overloading, m 
// by default constructor 

// let car1= new Car("fbju4")
// console.log(car1.fn())

// console.log(Car.#nameee)

// let car1= new Child("bh",56)
// console.log(car1)
// car1.fn(12)



// DOM


// document object model 

// let heading = document.querySelector("#idd")
// console.log(heading)

// query selector => element name, id name, class name


// let heading = document.getElementsByClassName("head")  //#
// let heading1= document.
// console.log(heading)


// let heading= document.querySelectorAll("h1")

// for(let i=0; i<heading.length;i++){
//   console.log(heading[i])
// }
// console.log(heading.childNodes)

// console.log(heading[1].childNodes)






// let headings= document.querySelectorAll("h1")
// let arr= ["green", "red", "orange" ,"aqua"]
// // headings.forEach((head)=>{
// // head.style.background="green"
// // })
// for(let i=0; i<headings.length;i++){
//   headings[i].style.background=arr[i]
//   headings[i].style.font= "20px"
// headings[i].style.width="100px"
// headings[i].textContent = "hello"
// }

// for(let i=0; i<headings.length;i++){
//   console.log(headings[i])
// }

// let btn= document.querySelector("button")

// //add event listener 

// btn.addEventListener("click", ()=>{
//   console.log("hello i m clicked")
//   btn.textContent="clicked!!!!!!!!!!!!!"
//   btn.style.background="yellow"
// })

  


  //  DOM- document object model 

  //  html document, => document on browser 

  //  js html ko mould js html
  
  // {

  // }


  // query selector , 


  // childNodes= > text , comment nodes , element node 

  //

// div

// p 
// p




// span
// div



// let div= document.querySelector("div")


// console.log(div.childNodes)



// btn.addEventListener("click",(k)=>{
// console.log(k)
// })

//event listener listens

// let bnt1 = document.querySelector("#bnt1")
// let bnt2 = document.querySelector("#bnt2")
// let ol = document.querySelector("#menu")
// let list = document.querySelectorAll(".l1")
// let h2 = document.querySelectorAll(".pr")
// let div = document.querySelector("#prices")
// let output = document.querySelector(".R")
// console.log(div,list)
// bnt1.addEventListener("click", (e) =>{
//   ol.style.display = "block"
//   div.style.display = "none"
  
// })

// bnt2.addEventListener("click", (e) =>{
//   div.style.display = "block"
//   ol.style.display = "none"
  
// })

//R  variable output me hold hai
//  for(let i =0; i < ol.length; i++){
//   ol[i].addEventListener("click",()=>{
  
//     output.innerHTML = ol[i].textContent
//   })
//  }


// list.forEach((li)=>{
// li.addEventListener("click",(e)=>{

//   output.textContent= li.textContent
// })
// })

//event object 

// {
//   target:{
//     textContent:
//   }
// }



// let inputText= document.querySelector("input")
// inputText.addEventListener("keydown", (e)=>{
// console.log(e)
// })


// let outer= document.querySelector(".outer")
// let inner= document.querySelector(".inner")

// let inner2= document.querySelector(".innermost")

// outer.addEventListener("click", (e)=>{
 
//   console.log("outer")
// },true)

// inner.addEventListener("click",(e)=>{

//   console.log("inner")
// },true)

// inner2.addEventListener("click",(e)=>{

//   console.log("innermost")
// },true)


  

//event delegation
//event object compulsory h

// li 

// let ul= document.querySelector('ul')
// // ul.addEventListener("click",(e)=>{
// //   console.log(e.target.textContent)
// // })

// ul.addEventListener("dblclick", (e)=>{
//   console.log("donot click it again")
// })
// ul.addEventListener("mouseover",(e)=>{
//   console.log(e.target.textContent)
//   e.target.style.transform= "scaleX(1.5)"

// })
// console.log(this.alert)

// let div= document.querySelector('div')
// div.addEventListener("click",(e)=>{
// console.log(e)
// })

// window.addEventListener("load",()=>{
//   console.log("document loaded")
// })

// let form= document.querySelector("form")
// form.addEventListener("submit",()=>{
//   alert("form submitted")
// })

//  let input = document.querySelector("input")

//  input.addEventListener("input",(e)=>{
//   e.preventDefault()
//   console.log(e.target.value)
//  })

//  function clicked(){
//   console.log("m clicked")
//  }
    




     
    










