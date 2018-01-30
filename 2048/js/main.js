
let ctx = canvas.getContext('2d');
export default class Main {
   constructor(){
      this.init();
   }
   init(){
      let img = new Image();
      img.src = 'images/bg.png';
      img.onload = () => {
         console.log(img.width)
         for(var i = 0; i< Math.ceil(window.innerWidth / 100);i++){
            for(var j = 0; j < Math.ceil(window.innerHeight / 100);j++){
               ctx.drawImage(img, 0, 0, 100, 100, i * 100, j * 100, 100, 100);
            }
            
         }
         
      }
      
   }
}