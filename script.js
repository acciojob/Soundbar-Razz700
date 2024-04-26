//your JS code here. If required.
let p=null;
let a=document.getElementsByClassName("btn");
for (let i = 0; i < a.length; i++) {
	a[i].addEventListener("click",(e)=>{
		//p.innerHTML=`<audio src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3">`;
	p=document.querySelector(`.btn${i+1}>audio`);
    p.play();
    a[i].style.backgroundColor="black";
        });
}
let b=document.getElementById("stops");
b.addEventListener("click",(e)=>{
    console.log("hi");
    for (let j = 0; j < a.length; j++) {
    a[j].style.backgroundColor="rgba(0,0,0,0.4)"; 
    }
p.pause();
});
