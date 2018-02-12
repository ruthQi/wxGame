
let ctx = canvas.getContext('2d');
export default class Main {
   constructor(){
      this.init();
      this.winWidth = window.innerWidth;
      this.winHeight = window.innerHeight;
   }
   init(){
      //背景
      let img = new Image();
      img.src = 'images/bg.png';
      img.onload = () => {
         console.log(img.width)
         for(var i = 0; i< Math.ceil(this.winWidth / 100);i++){
            for(var j = 0; j < Math.ceil(this.winHeight / 100);j++){
               ctx.drawImage(img, 0, 0, 100, 100, i * 100, j * 100, 100, 100);
            }
         }
      }
      //logo
      let logoImg = new Image();
      logoImg.src = 'images/logo.png';
      logoImg.onload = () => {
         let startPos = (this.winWidth - logoImg.width)/2;
         ctx.drawImage(logoImg, 0, 0, logoImg.width, logoImg.height, startPos, 150, logoImg.width, logoImg.height);
      }
      //文字
      //console.log(ctx)
      //ctx.fillRect((this.winWidth - 100)/2, 100, 100, 100);
      //ctx.fillStyle = "#ffffff";
      //ctx.fillStyle="#FF0000";
      //ctx.font = "20px Arial";
      //let posStart = (this.winWidth - 100)/2;
      //ctx.fillText('开始游戏', 200, 400);
      let playImg = new Image();
      playImg.src = 'images/play.png';
      playImg.onload = () => {
         let startPos = (this.winWidth - playImg.width/2)/2;
         ctx.drawImage(playImg, 0, 0, playImg.width, playImg.height, startPos, 400, playImg.width/2, playImg.height/2)
      }
      this.initEvent();
   }
   initEvent(){
      canvas.addEventListener('touchstart', ()=>{
         console.log('start')
      })
   }
}