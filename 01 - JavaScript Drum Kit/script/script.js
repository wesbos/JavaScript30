function playSoundKey(e){
    const audio=document.querySelector(`.${e.key}`);
    const toBeStyled=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    try{
        audio.currentTime=0;
        audio.play();
    }catch(error){
        
    } 
    toBeStyled.classList.add('playing')   
}
function trans(){
    if(this.propertyName!=='transform'){};
    //this in this context is the element calling the addEventListener method
    this.classList.remove('playing');
}
window.addEventListener('keydown',playSoundKey);
const keys=document.querySelectorAll('.key');
keys.forEach(key=>{
    key.addEventListener('transitionend',trans);//callbacks take in a function pointer
    //they figure out the parameters by themselves.
});
const key=document.querySelectorAll('.key');
key.forEach((e)=>{
   e.addEventListener('click',()=>{
    playSoundMouse(e.innerHTML.charAt(12));
   })
})
function playSoundMouse(ch){
    const beat=new Audio(`sounds/${ch}.wav`);
     if(!beat) return;
     beat.play();
}