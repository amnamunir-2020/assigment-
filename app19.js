// JavaScript Document
var list=document.getElementById("list");
function addTodo(){
	var todo=document.getElementById("todo")
	
	//create element by js li
	var li =document.createElement("li")
	//=====var liText=document.createTextNode("Ghous Sir") 
	var liText=document.createTextNode(todo.value)  //user value get
	
	//create element by js button
	var delBtn=document.createElement("button")  
	var delText=document.createTextNode("DELETE")
	delBtn.setAttribute("class","btn")
	delBtn.setAttribute("onclick","deleteItem(this)")//this button arguments pass
	delBtn.appendChild(delText)
	
	//create edit button
	var editBtn=document.createElement("button")
	var editText=document.createTextNode("EDIT")
	editBtn.appendChild(editText)
	editBtn.setAttribute("onclick","editItem(this)")
	
	
	
	
	
	
	
	li.appendChild(delBtn)	
	li.appendChild(editBtn)
	li.appendChild(liText)   //text bi node  hota hai js mai    innerhtml kai bajaye appendchild
	//======console.log(todo.value)
	list.appendChild(li)
	todo.value=""
	
	
	
}

//parameter e this  any parameter get button del yaani parameter get e this full element pass
function deleteItem(e){
//	console.log(e)
//	console.log(e.parentNode)
	//parentnode li hai  usai delete kerdi .remove function elementb remove
	e.parentNode.remove();
}

function editItem(e){
	//Because meri value right side hai islia lastchild or sir ki lefttou sirnai firstchild
	
	//e.parentNode.lastChild.nodeValue="Ali"   update
	//console.log(e.parentNode.lastChild)
	//UPDATE
	//1.console.log(e)   2.console.log(e.parentNode)  three childe mujai text chia tha wo last child hai 3.console.log(e.parentNode.lastChild)   4.console.log(e.parentNode.lastChild.nodeValue) 
	//""""""""""""UPDATE 1 method!!!!!!!!
//	var val=e.parentNode.lastChild.nodeValue;
//	var editValue=prompt("Enter Edit Value",val)  //prompt for update user value
//	e.parentNode.lastChild.nodeValue=editValue
	///new two lines update---------------------------
	var val=prompt("Enter Value Update",e.parentNode.lastChild.nodeValue)
	e.parentNode.lastChild.nodeValue=val;
}




function deleteAll(){
	list.innerHTML=""
}