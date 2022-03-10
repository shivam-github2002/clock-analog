let a;
let hour;
let minute;
let second;
let hrotaion;
let mrotaion;
let srotaion;
setInterval(()=>{
// console.log("hey shivam")

a= new Date();
hour= a.getHours();
minute= a.getMinutes();
second= a.getSeconds();
hrotaion= 30*hour+minute/2;
mrotaion= 6*minute;
srotaion= 6*second;


document.getElementById('hour').style.transform= `rotate(${hrotaion}deg)`;
document.getElementById('minute').style.transform= `rotate(${mrotaion}deg)`;
document.getElementById("second").style.transform= `rotate(${srotaion}deg)`;


},);