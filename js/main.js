
 let boardBox=document.querySelector('.boardbox'),
  closeButton=boardBox.querySelector('.close-button'),
      zhuInfoButton=document.getElementById('zhuInfo');

  let boardBox2=document.querySelector('.boardbox2'),
  closeButton2=boardBox2.querySelector('.close-button2'),
      okaInfoButton=document.getElementById('okaInfo');

 let boardBox3=document.querySelector('.boardbox3'),
  closeButton3=boardBox3.querySelector('.close-button3'),
      ElaineInfoButton=document.getElementById('ElaineInfo');


function showBoardBox(){
    boardBox.classList.add("show-boardbox");
  }

  function hideBoardBox(){
    boardBox.classList.remove("show-boardbox");
  }


function showBoardBox2(){
    boardBox2.classList.add("show-boardbox2");
  }

  function hideBoardBox2(){
    boardBox2.classList.remove("show-boardbox2");
  }
  

function showBoardBox3(){
    boardBox3.classList.add("show-boardbox3");
  }

  function hideBoardBox3(){
    boardBox3.classList.remove("show-boardbox3");
  }



  zhuInfoButton.addEventListener("click",showBoardBox);
      closeButton.addEventListener("click",hideBoardBox);

       okaInfoButton.addEventListener("click",showBoardBox2);
      closeButton2.addEventListener("click",hideBoardBox2);


       ElaineInfoButton.addEventListener("click",showBoardBox3);
      closeButton3.addEventListener("click",hideBoardBox3);