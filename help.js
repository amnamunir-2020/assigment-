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
//	
	 
	 
	 
//    console.log(img.src)
//	console.log(name.innerHTML)
//	console.log(price.innerHTML)

//}


//-------------------------Helpdesk5------------------------


//MODAL IMAGE..............................................
function showImage(e){
	console.log(e)
	var modalImage=document.getElementById("modalImage")
	modalImage.src=e.src
	
}