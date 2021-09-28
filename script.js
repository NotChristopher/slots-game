// Design https://www.figma.com/file/A3LN0cbBzcXIw4cDoeerdw/Untitled

const slot1 = document.querySelector(`.slot-1`);
const slot2 = document.querySelector('.slot-2');
const slot3 = document.querySelector('.slot-3');
const slot4 = document.querySelector(`.slot-4`);
const slot5 = document.querySelector('.slot-5');
const slot6 = document.querySelector('.slot-6');
const slot7 = document.querySelector(`.slot-7`);
const slot8 = document.querySelector('.slot-8');
const slot9 = document.querySelector('.slot-9');
const btnRoll = document.querySelector(`.btn--roll`);
const payoutDisplay  = document.querySelector('.score');
const winnings = document.querySelector('.winnings');
const line1 = document.querySelector('.bet-line1');
const line2 = document.querySelector('.bet-line3');
const linesbetDisplay = document.querySelector('.lines-bet');
const betPriceDisplay = document.querySelector('.total-bet');
const restart = document.querySelector('.restart--btn');
const spinmusic = new Audio(`audio/spin.wav`);
const reward = new Audio('audio/reward.wav');
const betsound = new Audio('audio/bets.wav');
const audioIcon = document.querySelector('.volume');
const startBtn = document.querySelector('.start');


var testState = false;
var linesbet = 1;
var line1State = false;

var line2State = false;


spinmusic.volume = 0.1;

var x = Math.trunc(Math.random()*10) + 1;

var  y = Math.trunc(Math.random()*10) + 1;


var z = Math.trunc(Math.random()*10) + 1;

var a = Math.trunc(Math.random()*10) + 1;

var b = Math.trunc(Math.random()*10) + 1;

var c = Math.trunc(Math.random()*10) + 1;

var d = Math.trunc(Math.random()*10) + 1;

var e = Math.trunc(Math.random()*10) + 1;
    
var f = Math.trunc(Math.random()*10) + 1;

var score = 40;

payoutDisplay.textContent = `Credit : ${score}`;
linesbetDisplay.textContent = `lines : ${linesbet}`;


slot1.src = `images/slot-${x}.png`;

slot2.src = `images/slot-${a}.png`;

slot3.src = `images/slot-${b}.png`;

slot5.src = `images/slot-${c}.png`;

slot6.src = `images/slot-${d}.png`;

slot8.src = `images/slot-${e}.png`;

slot9.src = `images/slot-${f}.png`;

slot4.src = `images/slot-${y}.png`;

slot7.src = `images/slot-${z}.png`;

price = 5;
betPriceDisplay.textContent = `Bet : ${price}`;

function scoreCheck(){
   if(score < price){
      startBtn.style.visibility = "hidden";

   }
   else{
      startBtn.style.visibility = "visible";
   }
}

//audio mute and unmute
audioIcon.addEventListener(`click`, function(){
   
   if(testState == true){
      testState = false;
      audioIcon.src = 'images/audio.png';
      unmute()
    
   }
   else if(testState == false){
      testState = true;
      audioIcon.src = 'images/mute.png';
      mutePage()
   }
   function unmute(){
      betsound.muted = false;
      spinmusic.muted = false;
      restart.muted = false;
   };
   
   function mutePage() {
      betsound.muted = true;
      spinmusic.muted = true;
      reward.muted = true;
   };
   
});



//lines bet 
line1.addEventListener('click' , function(){
   
   if(line1State == true ){
      price = price - 5;

      betPriceDisplay.textContent = `Bet : ${price}`;
      line1State = false;
      line1.src = 'images/inactive-line.png';
      linesbet = linesbet - 1;
      linesbetDisplay.textContent = `lines : ${linesbet}`;
      scoreCheck()
      
      

   } else if (line1State == false ) {
      price = price + 5;
      line1.src = 'images/active-line.png';
      line1State=true;
      linesbet = linesbet + 1;
      linesbetDisplay.textContent = `lines : ${linesbet}`;
      betPriceDisplay.textContent = `Bet : ${price}`;
      betsound.play()

   }
});

//lines bet
line2.addEventListener('click' , function(){
   
  
   if(line2State == true ){
      price = price - 5;
      line2State = false;
      line2.src = 'images/inactive-line.png';
      linesbet = linesbet - 1;
      linesbetDisplay.textContent = `lines : ${linesbet}`;
      betPriceDisplay.textContent = `Bet : ${price}`;
      scoreCheck()
     
      

   } else if (line2State == false ) {
      
      price = price + 5;

      line2.src = 'images/active-line.png';
      line2State=true;
      linesbet = linesbet + 1;
      linesbetDisplay.textContent = `lines : ${linesbet}`;
      betPriceDisplay.textContent = `Bet : ${price}`;
      betsound.play()
      scoreCheck()

   }


});

//Restart app
restart.addEventListener('click', function(){
   location.reload();

});


//game Start
btnRoll.addEventListener('click', function(){

  startBtn.style.visibility = "hidden";
   

   spinmusic.pause();
   spinmusic.play();
  
   console.log("Line is " , line1State);
   winnings.textContent = " ";
   resetCondition();
   testmath();

  


   payoutDisplay.textContent = `Credit : ${score}`;
   

   //price handler
   const price = () => {

      betprice = 5;
      if (line1State == true){
         betprice = betprice + 5;
      }
      if (line2State == true){
         betprice = betprice + 5;
      }
      
      score = score - betprice;
      payoutDisplay.textContent = `Credit : ${score}`;
   }

   price();
   


   //checking Resulst post spin
    const checkResults = function(){
      win = 0;
      

   
      if( y === c && y=== d){
         win = win + 75;
         
         slot4.style.animation = "win 5s infinite";
         slot5.style.animation = "win 5s infinite";
         slot6.style.animation = "win 5s infinite";
         reward.play()
         
      }
   
      else if (y === c || c === d){
         win = win + 15;
         
         console.log(y,c,d);
         if (y == c){
            slot4.style.animation = "win 5s infinite";
            slot5.style.animation = "win 5s infinite";
            reward.play()
           
            }
            else{
               slot5.style.animation = "win 5s infinite";
               slot6.style.animation = "win 5s infinite";
               reward.play()
               

         }
         
      }
      
   if (line2State == true){
     if (z === e  && z === f){
      win = win + 75;
       
       slot7.style.animation = "win 5s infinite";
       slot8.style.animation = "win 5s infinite";
       slot9.style.animation = "win 5s infinite";
       reward.play()
     
      }

     else if (z === e || e === f){
      win = win + 15;
      
      if (z == e){
      slot7.style.animation = "win 5s infinite";
      slot8.style.animation = "win 5s infinite";
      reward.play()

      
      }
      else{
         slot8.style.animation = "win 5s infinite";
         slot9.style.animation = "win 5s infinite";
         reward.play()
      }
   }
   }
   
   if (line1State == true){
      
      if (x === a || a === b){
         win = win + 15;
         
         
         if (x == a){
            slot1.style.animation = "win 5s infinite";
            slot2.style.animation = "win 5s infinite";
            reward.play()
           
            }
            else{
               slot2.style.animation = "win 5s infinite";
               slot3.style.animation = "win 5s infinite";
               reward.play()
               

         }

      }
      else if (x === a && a == b){
         win = 75 + win;
         slot1.style.animation = "win 5s infinite";
         slot2.style.animation = "win 5s infinite";
         slot3.style.animation = "win 5s infinite";
         reward.play()
      }   
   
      
   



   
   }

   updateScore();

   };


    //Spin function
    function testmath(){

        

        for(let i = 1; i < 15; i++) {
            setTimeout(()=>{
               
               z = y;
                y = x ;
                 x = Math.trunc(Math.random()*10) + 1;


                slot1.src = `images/slot-${x}.png`;
                slot4.src = `images/slot-${y}.png`;
                slot7.src = `images/slot-${z}.png`;
              
               if(i === 14){ 
                  
                  setTimeout(100); // update this
               }
            },i * 100);
           }

         


         for(let i = 1; i < 26; i++) {
            setTimeout(()=>{
               
               e = c ;
                c = a;
                a = Math.trunc(Math.random()*8) + 1;


                slot2.src = `images/slot-${a}.png`;
                slot5.src = `images/slot-${c}.png`;
        
                slot8.src = `images/slot-${e}.png`;
               
               if(i === 25){ 
                  
                  setTimeout( 100); // update this
               }
            },i * 100);
         }





         for(let i = 1; i < 35; i++) {
            setTimeout(()=>{
               
                 f =  d ;
                 d = b;
                 b = Math.trunc(Math.random()*8) + 1;


                slot3.src = `images/slot-${b}.png`;
        
        
        
                slot6.src = `images/slot-${d}.png`;
                
                
                
                slot9.src = `images/slot-${f}.png`;
                

               if(i === 34){ 
                  spinmusic.pause();
                  spinmusic.currentTime = 0;
                  startBtn.style.visibility = "visible";
                  setTimeout(100); 
                
                  
                  checkResults();
               }
               
            },i * 100);
         }
    };

    //score update
    const updateScore = () =>{
         score = score + win;
       payoutDisplay.textContent = `Credit : ${score}`;
       if (win > 0){
          winnings.textContent = `Your winnings is ${win}`;
       }
       else{
          winnings.textContent = `Try again`;
       }

       scoreCheck()
    };

   //To reset the css effects of winning 
    function resetCondition(){
      slot1.style.removeProperty("animation");
      slot2.style.removeProperty("animation");
      slot3.style.removeProperty("animation");
      slot4.style.removeProperty("animation");
      slot5.style.removeProperty("animation");
      slot6.style.removeProperty("animation");
      slot7.style.removeProperty("animation");
      slot8.style.removeProperty("animation");
      slot9.style.removeProperty("animation");
      
      

    };

    
    
     
});



   