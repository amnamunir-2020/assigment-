// JavaScript Document
//MAARIJ JS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//function check(){
//	var score=0;
//	var q1RightAnswer=document.getElementById('m2')
//	var q2=document.getElementById('m1')
//	var q3=document.getElementById('m3')
//	var q4=document.getElementById('m4')
//	if(q1RightAnswer.checked==true){
//		score++
//		alert("Right Answer Q1")
//	}
//	else{
//		alert("Wrong Answer")
//	}
//	
//	
//	var q2RightAnswer=document.getElementById('e4')
//	var q2e=document.getElementById('e1')
//	var q3e=document.getElementById('e2')
//	var q4e=document.getElementById('e3')
//	
//	if(q2RightAnswer.checked==true){
//		score++
//		alert("Right Answer Q2")
//	}
//	else{
//		alert("Wrong Answer")
//	}
//	
//	
//	
//	var q3RightAnswer=document.getElementById('en2')
//	var q2en=document.getElementById('en1')
//	var q3en=document.getElementById('en3')
//	var q4en=document.getElementById('en4')
//	
//	if(q3RightAnswer.checked==true){
//		score++
//		alert("Right Answer Q3")
//	}
//	else{
//		alert("Wrong Answer")
//	}
//	alert("Your Score is  :" +score++)
//}


//SIRAAJ JS:::::::::::::::::::::::::::::::::::::::::::::::::::::::
//window.onload=function(){
//	show(0)
//}
//var questions = [{
//    id: 1,
//    question: "Who is the inventor of JavaScript?",
//    answer: "Brendan Eich",
//    options: [
//        "Dennis Ritchie",
//        "Brendan Eich",
//        "James Gosling",
//        "Guido van Rossum"
//    ]
//
//
//},
//{
//    id: 2,
//    question: "Who is the inventor of Apple?",
//    answer: "Steve Jobs",
//    options: [
//        "Dennis Ritchie",
//        "Steve Jobs",
//        "James Gosling",
//        "Guido van Rossum"
//    ]
//
//},
//{
//    id: 3,
//    question: "Who is the founder of Google?",
//    answer: "Larry Page",
//    options: [
//        "Dennis Ritchie",
//        "Steve jobs",
//        "Larry Page",
//        "Guido van Rossum"
//    ]
//
//},
//{
//    id: 4,
//    question: "Who is the inventer of Samsung?",
//    answer: "Lee Byung-chul",
//    options: [
//        "Dennis Ritchie",
//        "Steve jobs",
//        "Larry Page",
//        "Lee Byung-chul"
//    ]
//
//}
//
//]
//
//
//var question_count=0;
//function next(){
//	question_count++
//	console.log(question_count)	
//	show(question_count)
//}
//
//function show(e){
//	var quest=document.getElementById("question")
//	//quest.innerHTML="<h1>" +questions[e].question+ "</h1>"
//	quest.innerHTML=`<h1> ${questions[e].question} </h1>
//<ul class="list">
//					<li class="option ">${questions[e].options[0]}</li>
//						<li  class="option">${questions[e].options[1]}</li>
//						<li  class="option">${questions[e].options[2]}</li>
//						<li  class="option">${questions[e].options[3]}</li>
//					</ul>`
//	                Active()
//}
//
//function Active(){
//	let option1=document.querySelectorAll("li.option")
//	for(let i=0;i<option1.length;i++) {
//		option1[i].onclick=function(){
//			
//			for(let j=0;j<option1.length;j++){
//				if(option1[j].classList.contains("active")){
//					(option1[j].classList.remove("active")
//				
//			}
//					 }
//		
//		
//		option1[i].classList.add("active")
//					
//				}
//			}
		



//HASNAIN JS:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//object key 

//set1  0index
var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
	//set2  1index
	
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
	
	//set3  2index
	
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
	
	//set4 3index
	
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
	
	//set5  4index
	
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

//Questions 
function ShowQuestion(e){
	//show question???????????????????????
	var QuestionsAll=document.getElementById("QuestionsAll")
	//QuestionsAll.innerHTML="Start"
	//console.log(QuestionsAll.innerHTML)
	QuestionsAll.innerHTML=questionsArray[e].question;
	//questionarray hai 0 index set1 ki key question ko target kiyaa..
	
	
	//show answer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111
	
	var OptionsAll=document.getElementsByClassName("OptionsAll")
	//OptionsAll[0].innerHTML="ram"
	for(var i=0; i<OptionsAll.length;i++)//options ki length tek chaligaa
	{
		OptionsAll[i].innerHTML=questionsArray[e].options[i]
		
		
		//o set ki key yaani options mai jitnai i hai
	}
	
	
}
var questionCount=0;
var score=0;


function nextQuestion(){
	var nextQ=document.getElementById("nextQ")
	questionCount++ //inc 1 aglaa question
	validate(questionCount)
	ShowQuestion(questionCount)
	removeActive()
	
}

function putActive(e){
	removeActive()
	//no need b/c parameter e html sai this sai likaer areha hai 
	//var OptionsAll=document.getElementsByClassName("OptionsAll")
	//console.log(e)
	e.classList.add("active")
}

function removeActive(){
	var active=document.getElementsByClassName("active")
	for(var i=0; i<active.length;i++){
		
		active[i].classList.remove("active")
		//console.log(active[i].classList.remove("active"))	
	}
}

function validate(e){
	var active=document.getElementsByClassName("active")
	//console.log(active[0].innerHTML)
	if(active[0].innerHTML==questionsArray[e].answer){
		score+=10;
		console.log(score)
		//score =score+10
		
	}
}