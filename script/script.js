let [millseconds,seconds,minutes,hours] = [0,0,0,0]
let timerRef = document.querySelector('.timerDisplay');
let int;
document.getElementById('btn-start').addEventListener('click', () => {
 int  = setInterval (displayTimer , 10);
});
document.getElementById('btn-stop').addEventListener('click',() =>{
    clearInterval(int);
});
document.getElementById('btn-reset').addEventListener('click',() =>{
    clearInterval(int);
    [millseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML ='00 : 00 : 00 : 000'
});
function displayTimer(){
    millseconds+=10
    if(millseconds == 1000){
        millseconds =0;
        seconds++;
     if (seconds == 60) {
         seconds = 0;
         minutes++;
      if(minutes == 60){
          minutes = 0; 
          hours++;
      }   
    
    }
    
}


let h = hours   < 10 ? '0'+ hours : hours
let m = minutes < 10 ? '0' + minutes : minutes;
let s = seconds < 10 ? '0' + seconds : seconds;
let ms = millseconds <10 ? '00' + millseconds : millseconds <100 ? '0'+ millseconds : millseconds;
timerRef.innerHTML =  ` ${h} : ${m} : ${s} : ${ms} `;
}