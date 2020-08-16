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
//function mai prototype
//Student.prototype.getName=function()
//propert mai bi prototype laga saktai hai
//Student.prototype.school="academia"

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

//var student3={
//	name:"mujtaba",
//roll:444,
//	school:"welfare Academy"
//} 
//
//
//for(var wherePropertyCheck in student3){
//	//all properties  in object get
//	console.log(wherePropertyCheck,student3.hasOwnProperty("school"))
//}

//differnce two  method jo property object ka hissa nahi hai wo bi return krrdaigii yaano proto istarh ki  in keyword yaa just variable kai throgh or hasown property wo apni property bylaigi................................................


//var student3={
//	name:"mujtaba",
//roll:444,
//	school:"welfare Academy"
//} 
//	
//	console.log(student3)
//console.log("constructor" in student3)  //in hai in tou sub btadeta hai object ki all  property
//console.log(student3.hasOwnProperty("roll"))
//console.log(student3.hasOwnProperty("constructor"))   //just own property check

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DATABSE START$$$$$$$$$$$$$$$$$$$$$$$$$$$4
function saveData(){
	var name=document.getElementById("name");
	var roll=document.getElementById("roll");
	
	var key=firebase.database().ref('student').push().key
	var student={
		name:name.value,
		roll:roll.value,
		key:key
		//object kai under bi key var key=firebase.database().ref('student').push().key firebase.database().ref('student/' +key).set(student)
	}
	
	firebase.database().ref('student/' +key).set(student)
	//object banyaegai uskai under key data save kerdaigai
	//var key=firebase.database().ref('student/' +key).set(student)
	
	//firebase sai key unique 
//	var key=firebase.database().ref('student').push().key
//	console.log(key)
//	
	//random generate key
//	var key= Math.random()*2345677;
//	firebase.database().ref('student/'+key.toFixed()).set(student)
//	
	
	//console.log(key)
	
	//just add kerna seekha hai
	//console.log(firebase)
	//student name ka object ho or usmai value ghous hai
	
	//firebase.database().ref('student').set(student)
	//firebase.database().ref('student').set("ghous")
	
	//firebase.database().ref('student').child("student1").set(student)
	//two method slash yaa .child
	//firebase.database().ref('student/student1').set(student)
	
	//with key  unique key
	//firebase.database().ref('student').push(student)
	
	//object kai under object then key then data push  NESTED___________________________________
	//firebase.database().ref('student').child("mystudent").push(student)
	
	
	//push key banat ahai firebase multiple data
	//firebase.database().ref('student').child("mystudent/text").push(student)
	
	
	//random generate data manual 
	
	
	//console.log(firebase.database)
	//call function database  and .ref reference btata hai
	//'/'mean object kai under .ref('/')
	//.set databse mai data save kernai kailia .set
	
	//
	//firebase.database().ref('student').set(student)
		//.ref('student').set(student)
	
}
//------------------------------------------DATA GET RETRIEVE=============================
//data ko mangwaana data get-------------------------------------------------
//doo method once aikhibaaar data laikeratahai page refresh per
//on realtime data laatahai jubjub data update hota hai lakerdetahia
//function getFirebaseData(){
	//apni marzi ka dat mangwaana ho yaani jis keey ka
	//firebase.database().ref('student/-MEsiL-TD0HKPHf-MQlF').once('value',function(data){
	//once method
	//firebase.database().ref('student').once('value',function(data){
	//on method  value ki jaaga child_added ajyegaa yaani jub bi child added  ho data laker dedoo data khud atarehai ga without refreshpage
	//firebase.database().ref('student').on('child_added',function(data){
	
	
											
											
											
											//if just onekey data  firebase.database().ref('student/-MEsf3mDstye9SE5Mfr1').once('value',function(data){
		//console.log(data)
		//data ko sahi  proper format mai get kerna data.val()call and all data get data retrieve 
	
		//console.log(data.val())
	//})   //once two parameter 1arguments value 2 arguments function functaion(kai parametre mai data miljayegaa)
	
//}
//getFirebaseData()

//--------------------------------------DATA REMOVE==============================================
//function removeFirebaseData(){
//	//if object student remove
//	firebase.database().ref('student').remove()
//	//if key remove
//	//firebase.database().ref('student/-MEsmJC2GR96lEEyKTck').remove()
//	
//}
//removeFirebaseData()

//000000000000000000000000000000000000000000000fortodo app mai button mai id mai key dedo then del ya edit
//-----------------------------DATA EDIT=================================================
function editFirebaseData(){
firebase.database().ref('student/-MEsqKG-poEtDrJ8bTWN').set({
	key:'-MEsqKG-poEtDrJ8bTWN',
	name:"sadii",
	roll:9090
})	
	
}
editFirebaseData()



//????????????????????????????Check for connect databse firebase??????????????//////
//console.log(firebase)

//database ka if link hatado tou undefined 
//console.log(firebase.database)