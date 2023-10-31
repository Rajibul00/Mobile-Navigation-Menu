let threeline = document.querySelector('#threeline');
let cross = document.querySelector('#x');
let ul = document.querySelector('ul');
let div = document.querySelector('.div')

function popup(){
  
  div.style.display='block'
  threeline.style.display ='none';
  cross.style.display = 'block';
  
}
function vanish(){
  div.style.display='none'
  threeline.style.display ='block';
  cross.style.display = 'none'

}
window.addEventListener('resize',function(val){
  if(val.target.parent.innerWidth>650){
    div.style.display='none'
    threeline.style.display ='none';
    cross.style.display = 'none'
  
  }else{
if(cross.style.display=='none'){
  threeline.style.display ='block';

}
  }
})
