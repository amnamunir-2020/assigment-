//function timer(){
//	console.log("RunTime!!....")
//}
//
//
//setInterval(timer,1000)

//function timeOut(){
//	console.log("RunningTime!!....")
//}
//
//setTimeout(timeOut,3000)

//
//var count=0;
//var interval;    //for break
//function timer(){
//	count++
//	console.log(count)
//}
//setTimeout(function(){clearInterval(interval)},5000)
//
//interval=setInterval(timer,1000)

//StopWatch:::::::::::::::::::::::::::::::::::::::::::;

//var min=0;
//var sec=0;
//var ms=0;
//var minHeading=document.getElementById("min")
//var secHeading=document.getElementById("sec")
//var msHeading=document.getElementById("ms")
//var interval;
//
//function timer(){
//	ms++
//	msHeading.innerHTML=ms;
//	if(ms>=100){
//		sec++
//		secHeading.innerHTML=sec;
//		ms=0;
//	}
//		else if(sec>=60){
//			min++
//			minHeading.innerHTML=min;
//			sec=0
//		}	
//	
//}
//
//function start(){
//	interval=setInterval(timer,10)
////}
//
//function stop(){
//	clearInterval(interval)
//}
//
//function reset(){
//	min=0;
//	sec=0;
//	ms=0;
//	minHeading.innerHTML=min
//	secHeading.innerHTML=sec
//	msHeading.innerHTML=ms
//	stop()
//}
//HTML Structure!---------------find in console
//console.log(document.childNodes[1])
//console.log(document.childNodes[1].childNodes[0])
//console.log(document.childNodes[1].childNodes[1])
var a=document.getElementById("father")
console.log(a.childNodes[0])
console.log(a)
//a.parentNodes    a.typeNode two paramter 1  element junkhashtag 3
//a,nodeName    document.all[index]











