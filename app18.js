// JavaScript Document
//var list=document.getElementById("li1")
//var list=document.getElementsByTagName("li")   //morethan one element
////console.log(list)
//
////console.log(list[4])
////length
//console.log(list.length)

//class check kerna kai hai ai nahi element maia any aatribute
//var target=document.getElementById("p1")
//if(target.hasAttribute("class")){
//	alert("Class is found attribute")
//}
//
//else{
//	alert("not a class")
//}


//class value abc  GET ATTRIBUTE
//var target=document.getElementById("p1")
//console.log(target.getAttribute("class"))


//SET ATTRIBUTE THROUH JS
//if agerbkoi class nii diho tou hum set bi kersaktai hai class  inspect mai jker element mai dekhaigai
//var target=document.getElementById("p1")
//console.log(target.setAttribute("class","blue"))


//all get atribute
//var target=document.getElementById("p1")
//console.log(target.attributes)
//console.log(target.attributes[1].nodeName)
//console.log(target.attributes[1].nodeValue)
//console.log(target.attributes[1].nodeType)



//====================================ADDING NODES!!!!!!----element create
//---------------------------------------HTML Create from javaScript

//createElement function any element value
//var p=document.createElement('p')
//var image=document.createElement('img')
//var heading1=document.createElement('h1')
//console.log(p)
//console.log(image)
//console.log(heading1)


//append child method textdena hoaga insert CRETE TEXT IN ELEMENT

//var p=document.createElement('p')
//var text=document.createTextNode("thi s sis soo many more understaning")
//p.appendChild(text)
//console.log(p)


// element make and insert a html-------------------JAVSCRIPT CONTROL ALL HTML
//var p=document.createElement('p')
//var p=document.createElement('h1')
//
//var text=document.createTextNode("this  soo many more understaning")
//p.appendChild(text)
//var maindiv=document.getElementById("main")
////main.innerHTML=p;
//main.appendChild(p)

//MESSAGE APP==========================CHAT APP=============

function  messageType(){
	//id get val
	var val=document.getElementById("val")
	//paragraph tag
	var p=document.createElement("p")
	//check console p element
	//textnode bana ker usmai hum value laigai
	//another method text already in input  var text=document.createTextNode("Asslamoalikum") p.appendChild(text)
	//but append sai bi hosaktaa hai
	 var textNode=document.createTextNode(val.value)
	 p.appendChild(textNode)
	 var message=document.getElementById("message")
	 message.appendChild(p)
	val.value=""
}


