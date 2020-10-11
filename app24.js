//-----------------object--
// let obj={
//     name:"fahad",
//     email:"fahad.1077@gmail.com"

// }

// let name=obj.name
// let email=obj.email

// console.log(name)
// console.log(email)

//object destructuring!!!------
// let{name,email}=obj;
// console.log(email)


//--------------------array-
//let arr=["faryaal","waliya","sadia"];
//varaiablestore
// let name1=arr[0];
// let name2=arr[1];
//console.log(name1)

//Array Destructuring!!---------
// let[name1,name2]=arr;
// console.log(name1)

//FUNCTION EXPRESSION: in js function name remove ESC6-------
//--Anonymous function varaible kai under declare

// let foo=function(){
// console.log("Asslamoalikum Warhmatullathi wabarakatuhu")
// }
// foo()

//Arrow Function--------fad arrow =>

// let hey=()=> {
// console.log(" Arrow=> Function")
// }
// hey()

//`  back tick
//-----Arrow function with parameters

//single parameter receive soo naa bracket
// let hey=name=> {
//     console.log(`hay ${name}`)       //template literals `any $ {any}`
//     }
//     hey("fariyaal")


    //multiples parameter receive more than one parameter round bracket
// let hey=(name1,name2)=> {
//     console.log(`hay ${name1} and ${name2}`)       //template literals `any $ {any}`
//     }
//     hey("fariyaal","sadiii")

//return keyword function  if no one parameter receive
//   roundbracket bi or underscore bi lagasaktai hai

// short function no curlybraces no return keyword

// let teacher=()=>"SIR";
// let teach=_=>"Sir Ghous"
// console.log(teach())
// console.log(teacher())

//element get  parent target this
// let hello=()=>{
//     console.log(this)
// }

//Functions callback---
//setInterval(()=>console.log(" Heay"),1000)

//setTimeout()

//---------------------CALL BACK FUNCTION:

//===================jo function apnai under koi parameter recive kereha hao or o function hoo wo HIGH OREDER FUNCTION KEHLAATA HAI!!!
//getDATA highrre oreder function hai

// let getData=(render_data)=>{

//     setTimeout(()=>{
// render_data("Sir Ghous")
//     },3000)

// //     fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => {
// //  render_data(json)
// //   })
//     // firebase.database().ref('/').on("child_added",(data)=>{
//     // render_data(data.val())
// }

// let render_data=(name)=>{
//     console.log(name)
//     }

// getData(render_data)


//HIGHER ORDER FUNCTION(FILTER FUNCTION) ARRAY FUNCTION_++++++++++++++++
//Filter ---------------------------------------SEARCH IN WEBSITE USE
//let arr=[{name:"Sir Ghous",age:16},{name:"basit Sir",age:19}]

//arr.filter((a)=>console.log(a))

//Normal function
// let filter=arr.filter(function(a){
// //return true       ///array all element in filter varaible
// return a.age==16
// })

//let filter=arr.filter(a=>true)
//let filter=arr.filter(a=>false)
// 

//SEARCH---------------------------------------USER SEARCH
// let name="SirGhous";
// let search="us"

//------------console.log(name.startsWith(search))
// if(name.endsWith(search)){
//     console.log(name)

// }

// if(name.startsWith(search)){
//     console.log(name)

// }

//================ARRAY MAP=================================HigherOrderFunction
// let arr=[1,6,5,1];
// console.log(arr)
// let multiply=arr.map(a=>a*2)
// let addition=arr.map(a=>a+3)
// console.log(addition)
// console.log(multiply)

// let arr=[{name:"amna"}]
// let update=arr.map(a=>a.name="faryaal")
// console.log(update)


// let tableform=arr.map(a=>{
//     document.getElementById("table").innerHTML=a.name
// })
// console.log(tableform)

//api sai data 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("result",data))
//   .catch(err=>console.log("error",err))

//.then .catch
//async   thora wait kertihai  async await keyword---await jubtekai kai api sai data liayai 
// async function getData(){
// let data=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(data)
// }

//-------------ESC6 Classess
//CONSTRUCTOR FUNCTION
// function Student(name,email){
//     this.name=name;
//     this.email=email
// }

// //constructor sai object banaani mai
// let student1=new Student("Ghous","ghous@gmail.com")

// console.log(student1)

//using class ES6 
// class Student{
// constructor(name,id){
// this.name=name;
// this.id=id
// }
// }

// let student1=new Student("Basit",1)
// console.log(student1)

//''''''''''''''''''''''''''''''''''''''''''
// class Student{
//     constructor(name,id){
//     this.name=name;
//     this.id=id
//     }
//     }
    
// //two classes merge EXTENDS----and super function

// class School extends Student{
//     constructor(name,id,email){
// super(name,id)  ///////super function for used merging
// this.email=email
//     }
// }

// let student1=new School("Basit",1,"basitahmed@gmail.com")
//     console.log(student1)

//----FIREBASE AUTHENTICATION --------------------------------------------1:48 VIDEO