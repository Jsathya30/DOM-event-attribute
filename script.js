

let para=document.getElementById('t')
console.log(para);
para.innerHTML="Happy!!!"
// or
// document.getElementById('t').innerHTML="Happy!!!" 


//Task:1 -to change background color
// Event Attribute:
// 1.onclick:
//syntax of style:readElement.style.color="blue"
function hello(){
	// alert()
	let para1=document.getElementById('t');
	para1.style.color="blue"
	para1.style.backgroundColor="yellow"
	para1.style.fontSize="50px"
}

// let head=document.getElementsByTagName('h2')
// console.log(head);

// To change the content by click the button 
let para2=document.getElementsByClassName('content')
console.log(para2);
function hi1(){
for(let i=0;i<para2.length;i++){
	para2[i].innerHTML="All is Well!"
	para2[i].style.color="green"
	para2[i].style.fontSize="20px"
}
}



// Task:2
function hi(){
	let pEle=document.getElementsByTagName('p')
	pEle[2].style.color="violet"
	pEle[2].style.fontSize="30px"
	
	pEle[0].style.color="indigo"
	pEle[0].style.fontSize="30px"
	
	pEle[1].style.color="green"
	pEle[1].style.fontSize="30px"
	
	pEle[3].style.color="yellow"
	pEle[3].style.fontSize="30px"
	
	pEle[4].style.color="orange"
	pEle[4].style.fontSize="30px"

}