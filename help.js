// JavaScript Document


//flag-------for  condition --var flag="false"
//------------helpdesk2-----------------------------------------------------

//function mat(a,b=8){
//	alert(a+b)
//}
//
//mat(5)
//mat(5,4)
//mat(5)NAN

//First letter Capital   Amna
//var a="amna"
//var cap=a.slice(0,1).toUpperCase()+a.slice(1,a.length)
//document.write(cap)


//back one
//var cal="2+4-7+6"
//var calculation=cal.slice(0,-1)
//document.write(calculation)

//calculator back number
//function back(){
//	var result=document.getElementById("result")
//	//console.log(result.value)
//	result.value=result.value.slice(0,-1)
//}



//
//var userName="@mna."
//for(i=0;i<userName.length;i++){
//	if(userName[i].charCodeAt()===64||userName[i].charCodeAt()===33||userName[i].charCodeAt()===46)
//		alert("UserName is not Valid")
//}


//function getValue(){
//	alert("test")
//}
//
//function setValue(){
//	var name=document.getElementById("name")
//	name.value="faryaal"
//	console.log(name.value)
//}


//function setValue(){
//	var paragraph=document.getElementById("para")
//	paragraph.innerHTML="This is example !!"
//	
//}

//var name=document.getElementById("name");
//name.value


//function bigImage(){
//	var image=document.getElementById("img")
//	image.className="big"
//}
//function smallImage(){
//	var image=document.getElementById("img")
//	image.className="small"
//}


//function openDoor(){
//	var door=document.getElementById("door");
//	door.src="open.png"
//}
//
//function closeDoor(){
//	var door=document.getElementById("door");
//	door.src="close.png"
//}

//
//function onBulb(){
//	var bulbFunction=document.getElementById("bulb");
//	bulbFunction.src="onbulb.jpg"
//}
//
//function offBulb(){
//	var bulbFunction=document.getElementById("bulb");
//	bulbFunction.src="offbulb.jpg"
//}



//function addClass(){
//	var para=document.getElementById("para")
//	para.className +=" bold purple"    //multiples classes kailia hamae space den ahoga sath mai + equal kiasath
//}


//function getElement(){
//	var element=document.getElementsByTagName("p")
//	console.log(element)
//}
//
//getElement()


//function disable(){
//	var btn=document.getElementById("example");
//	btn.disabled=true;
//}

//function getElement(){
//	var element=document.getElementsByTagName('p')
//	console.log(element)
//}

//function addToCart(){
//	var img=document.getElementById("product")
//	var name=document.getElementById("name")
//     var price=document.getElementById("price")
//	 var cartimg=document.getElementById("cart-product")
//	var cartname=document.getElementById("cart-name")
//     var cartprice=document.getElementById("cart-price")
//	 cartimg.src=img.src
//	 cartname.innerHTML=name.innerHTML
//	 cartprice.innerHTML=price.innerHTML	 
//    console.log(img.src)
//	console.log(name.innerHTML)
//	console.log(price.innerHTML)

//}


//-------------------------Helpdesk5------------------------


////MODAL IMAGE..............................................
//function showImage(e){
//	console.log(e)
//	var modalImage=document.getElementById("modalImage")
//	modalImage.src=e.src
//	
//}



//------------helpdesk6-----------------------------------------------------
//var arr=["faryal","waliya"]
//console.log(arr[2])


//<!--OBJECT-----	-->
//	var student={
//		Name:"Amna",
//		SeatNo:1810007,
//		Study:"MCS"
//		
//	}
//	console.log(student)
//console.log(student.Name)
//console.log(student.SeatNo)

//array kai under object:-''''''''''''''''''''''''''

//var students=[{name:"Ghous"},{name:"Basit"}]
//console.log(students[1])
//console.log(students[1].name)
//multiples-------
//var students=[{name:"Ghous"},{name:"Basit"}]
//for(var i=0; i<students.length;i++)
//	{
//		console.log(students[i].name)
//	}

//-------
//var student={
//		Name:"Amna",
//		SeatNo:1810007,
//	Study:"MCS"
//	
//}
//object !property  addkerna kai tariqa ========
//student.phone=03438000382
//console.log(student)
//--------------------
//object mai update full property:::::::

//student={
//Name:"Faryaal",
//SeatNo:1810002,
//	Study:"MCS-Evening"
//}
//console.log(student)


//or variable mai update
//var Name:"Faryaal"
//Name="Sadia"

//undefined properties::::::
//student={
//Name:"Faryaal",
//SeatNo:1810002,
//	Study:"MCS-Evening"
//}
//console.log(student.phone)
//



//======empty object then add properties
//var student={
//}
//
//student.name="Walii Shah"
//console.log(student)

//deleteproperties using delete keyword------------------
//var student={
//	name:"sdcwdj",
//	phone:0848987
//}
//delete student.name
//console.log(student)

//check properties::::::::::::::::::::::::;
//var student={
//	name:"sdcwdj",
//	phone:0848987
//}
//////object kai under property majood hai kai nahi???/
//var  check="name" in  student;
//var  check="RollNo" in  student;
////ans---TRUE/FALSE
//console.log(check)
//			


//OBJECT KAI UNDER ARRAY ::::OR FUNCTION bi::::
//var student={
//	name:"marium",
//phone:0848987,
//	subjects:["English","Urdu","Math"],
//	sub1:90,
//	sub2:80,
//	getResult:function(){
//		//this bi istemaal kersaktai hai
//		//return this.sub1+student.sub2
//		return student.sub1+student.sub2
//	}
//	
//}
//console.log(student.getResult())

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;OBJECT METHODS:

//objeck kai under function use ho tou wo METHOD kehlaata hai!!!!!jasai yahn getMarks ka function>
//Object mia prperty name hai function ki name nahi likhtai function kai gai :

//var student={
//	name:"marium",
//phone:0848987,
//	
//	getMarks:function(){
//		return 600
//	}
//	
//}
//console.log(student.getMarks())

//barbar structure n a banaan parai islia constructor same properties or value alg dertai reho///////////////////////////////////CONSTRUCTOR FUNCTION:

//4 property or constructor function ki pehchannn function name Capital sai start
//this function ko target kereha hai

//function Student(name,className,RollNo,Phone){
//this.anyName=parameter
//this.StudentName=name;
//	this.name=name;
//	this.className=className;
//	this.RollNo=RollNo;
//	this.Phone=Phone;
//	
//	
//}
//new KEYWORD for constructor
//call constructor function
//multiple objects same properties different value
//var student1=new Student("Ghous","Web And Mobile",9086,46124767)
//var student2=new Student("Basit","AI",76556,4612499877)
//console.log(student1)
//console.log(student2)



//----helpdesk9----------------------------------------------------------

// PROMISE
// function getData(){

// }

//fetch function api sai get kernai kialia data    api kisior format mai data layegii


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(function(result){  //resolveans
// console.log("result=>",result)
//   })
// .catch( function(error){   //error shoe no resolve if promise reject
// console.log("error=>",error)
// })

//multiples jaga data chia hoo phir use kertaihai promise


// function getData(){
//   let promise=new Promise(function(resolve,reject){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(function(result){   //resolveans
//       resolve(result)
  
//     })
//   .catch( function(error){   //error shoe no resolve if promise reject
//     reject(error)
//   })

//   })
//   promise.then(function(result){
// console.log("result=>",result)
//   })

//   .catch(function(error){
// console.log("error=>",error)
//   }) 
  
// }

// getData()

//Database Firebase---------------------------
function getData(){
  let promise=new Promise(function(resolve,reject){
  })
    firebase.database().ref('/').on("child_added",function(data){
console.log(data.val())

    })
    
}

//   promise.then(function(result){
// console.log("result=>",result)
//   })

//   .catch(function(error){
// console.log("error=>",error)
//   }) 
  
// }

//getData()


