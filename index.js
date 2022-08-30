// Your code here
function moveDodgerLeft(){
  const dodger= document.getElementById('dodger');
  const leftNumber = dodger.style.left.replace('px','');
  const left = parseInt(leftNumber,10);
  if(left>0){dodger.style.left=`${left -1}px`;}
  // dodger.style.backgroundColor='#FF69B4';
  // dodger.style.bottom='0px';
  // dodger.style.left='0px';
 
}
function moveDodgerRight(){
  const dodger= document.getElementById('dodger');
  const leftNumber = dodger.style.left.replace('px','');
  const left = parseInt(leftNumber,10);
  if(left>0){dodger.style.left=`${left +1}px`;}
}
document.addEventListener('keydown',(event)=>{
  if(event.key=='ArrowLeft'){
    moveDodgerLeft();
  }else if(event.key=='ArrowRight'){
    moveDodgerRight();
  }
});