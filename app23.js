// JavaScript Document
//------------------------VARIABLE var,let,const      ECMAScript=2015
//yearwise upgrade but es6 styudy? why because js changing es6

//var variable################################################
//var name="faryaal"  //function kai bahir var use kerai tou yai global variable hai kahin bi use kersaktai hai 
//function foo(){
//	var name="amna"
//	//var function ka scope hai isi kai under rehtai haio use kersakti hunmai iskai bahir nahi get kersaktii function kai ilawa kahin bi get kersaktai hai ager bahir var define hai
//
//}
//foo()
//console.log(name)


//variable new method ES6-LET------------------------------
//if(true){
//	//let ka scope just curly braces tek hota hai uskai bahir nahi block tek
//	let naming="sadia"
//}
////outside the condition get
//console.log(naming)

//-------ES5
//var lastname="khan"
//var lastname="ahmed"
//console.log(lastname)   //ahmed latest define value

//LET KEYWORD================================================
//let lastname="khan"
//let lastname="ahmed"
//console.log(lastname)  //ERROR:Identifier 'lastname' has already been declared  because let just aik hi dafa declare hota hai reassignment nahi hota var barabar use kersaktai hai declare //let ko update bi kersaktai hai uskai scope kai under rehtai rehtai

//CONST KEYWORD    //just read no update no delete  anyplace use kahin bi file mai js ki use kersaktai hai but no ud  and just one time declare

//const UNIVERSITY="KU"
//var obj={
//	UniName:UNIVERSITY
//}
//console.log(obj)

//TEMPALTE LITERALS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;
//example 2 ka table code barhgya because + sign istarh  concatenation time
//let firstName="Amna"
//let lastName="Munir"
//console.log(`MY NAME ${firstName} ${lastName}`)   //backtick use in templatr literals   VARIABLE THROGH DOLLARSIGN WITH CURLYBRACES  ---STRING USEIN DIRECT IN BACKTICK easily space 
//console.log(firstName +" "+lastName)

//reference mai use kersaktai hai
//firebase.database(`karachi/saylani/webandmobile/${firstName}${lastName}`)

//spraed Operators:"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//dono array merge kernai hai..normal js mai loop sai

//array mai spraed opeartyors used
//var students1=["sadia","faryaal"]
//var students2=[...students1,"waliya","amna"]
////spread method 3 dot ... or jisko merge kerna just element get keraigaa
//console.log(students2)


//CONCAT METHOD var mergeStudents=students1.concat(students2)
//console.log(mergeStudents)


//object mai use spread operators
//var students1={name:"sadia"}
//var students2={...students1,lastname:"siddique"}
////spread method 3 dot ... or jisko merge kerna just element get keraigaa
//console.log(students2)


//OBJECT DESTRUCTURING""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""'

//object
//var STUDETNS={
//	NAME:"GHOUS",
//	SCHOOL:"SAYLANI",
//	ROLLNO:43756
//}
//
////DESTRUCTURING
//let{NAME,SCHOOL,ROLLNO}=STUDETNS
//console.log(NAME)
//console.log(SCHOOL)

//object sai value get kerna!!
//console.log(STUDETNS.NAME) console.log(STUDETNS.SCHOOL)

//********************************************TERNARY OPERATORS
//simple if else js sai
//var age=20
//if(age>30){
//	console.log("not eligible")
//}
//else{
//	console.log("Eligible")
//}
//ternary  mai ?if ki jaga or else ki jaga :colon 
//var age=50
//var check= age>30 ? "aged " :"Perfect Age"
//console.log(check)

//Ternary AND OR OPERATORS USED BI 
//var age=50
////if(age>30||age<50)
//var check= age>30 &&age<50 ? "aged " :"Perfect Age"
////var check= age>30 ||age<50 ? "aged " :"Perfect Age"
//console.log(check)

//var age=50
//var check= age>30 &&age<50 ? "aged " : "Perfect Age"
//console.log(check)

//var bool="true"
//var name=bool && "Ghous"
//console.log(name)
//



//SYNCRONOUS SYNC OR ASYNC----------------------------------------------------
//console.log("Number1")
//console.log("Number2")
//console.log("Number3")

//if number 2 mujai pehlai dekhaana hai
//***setTimeout(function(){
//console.log("Number1")	
//},1000);
//
//console.log("Number2")
//
//console.log("Number3")***//


//var name1;
//setTimeout(function(){
//name1="Ghous Ahmed"
//},1000);

//setInterval(function(){
//	console.log(name1)
//},1000)	

////PROMISE++++++++++++++++++++++++++++++++++++++++++++++++++++++++----database sai bi data time promise use---------------
//	var pro=new Promise(function(resolve,reject){
//		var biryani="Available";
//		if(biryani==="Available"){
//			resolve("haha everytime ready now")
//		}
//		else{
//			reject("Nono ")
//		}
//	})
//	//parameter data any name  or promise kai sath then function mai resolve miliagaa
//	pro.then(function(data){
//		console.log("Resolve==>",data)
//	})
//.catch(function(error){
//		//ager promise reject hogya tou error parameter catch function kai under miliagaa
//		console.log("Reject==>",error)
//	})


//firebase sai data time use promise
//firebase.database().ref("users").on("child_added",function(data){
//	console.log(data.val())
//})
//console.log(data.val())

//FIREBASE DATA PROMISE THROUGH^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//====let promise=new Promise(function(resolve,reject){
//	firebase.database().ref("users").on("child_added",function(data){
//		if(data.val()){
//	resolve(data.val())
//		}else{
//			reject("Missing Data")
//		}
//  })
//})
//promise.then(function(data){
//	console.log(data)
//})
//.catch(function(error){
//	console.log(error)
//})=====


//if mujai function kai bahir data get kerna tou zarorat hai promise ki
//function getData(){
//	console.log(data.val())
//	div.innerHTML=data.val()
//}

	



//pending promise############################
var pro=new Promise(function(resolve,reject){
		
		if(true){
			setTimeout(()=>{
				resolve("Its Resolve")
			},3000)
			
		}
		else{
			reject("Rejected ")
		}
	})
	console.log(pro)
	pro.then(function(data){
		console.log("Resolve==>",data)
	})
.catch(function(error){
		
		console.log("Reject==>",error)
	})






