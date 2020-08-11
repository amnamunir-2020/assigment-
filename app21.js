// JavaScript Document
//var obj={
//	name:"Amna"
//}
//	console.log(obj.name)


//object Constructor-------------------------
//var student1={
//	name:"FARYAAL",
//	seatNo:123	
//}
//
//var student1={
//	name:"kiran",
//	seatNo:456	
//}
//dont write again n again so contstructor function://constructor function first letter capital otherwise normal function ojk
//function Student(name,seat){
//	this.name=name;
//		this.seat=seat
//}
////new keyword use for constructor..
//var student1=new Student("farii",356);
//var student2=new Student("sadii",908);
//var student3=new Student("waii",143);

//constructor mai bi function bansaktai hai 
//OBJECTS PROTOTYPE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PROTOTYPE KEYWORD copy kerkai rekha daigai then working
//js barbar isai run krai gi object mai jo function hai FUNCTION MULTIPLE TIMES REPEAT 


//function Student(name,seat){
//	this.name=name;
//	this.seat=seat;
//	//method 
//	this.getName=function(){
//		return this.name
//	}
//}

//function Student(name,seat){
//	this.name=name;
//	this.seat=seat;
//	
//}
//Student.prototype.getName=function()
//{
//	return this.name
//}


//var student1=new Student("farii",356);
//var student2=new Student("sadii",908);
////console.log(student1.getName()) //call
//console.log(student1)
//console.log(student2)

///////////////////////////////true/false ans check properties in object keyword!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//var student2={
//	name:"fahad",
//roll:677
//} 
////console.log("propertyname" in keyword  objectname )
//console.log("roll" in student2)


//check all properties in objectkonsi knsi property hai??????????????????????????????????
//var student3={
//	name:"mujtaba",
//roll:444,
//	school:"welfare Academy"
//} 
//
//
//for(var wherePropertyCheck in student3){
//	//all properties  in object get
//	//console.log(wherePropertyCheck)
//
////value get in properties
//console.log(wherePropertyCheck,student3[wherePropertyCheck])
//}


//another method for check properties>>>>>>>>>>>>>>>>>>>>>>>>>>>hasOwnProperty

var student3={
	name:"mujtaba",
roll:444,
	school:"welfare Academy"
} 


for(var wherePropertyCheck in student3){
	//all properties  in object get
	console.log(wherePropertyCheck,student3.hasOwnProperty("school"))
}

//differnce two  method jo property object ka hissa nahi hai wo bi return krrdaigii yaano proto istarh ki  in keyword yaa just variable kai throgh or hasown property wo apni property bylaigi................................................

