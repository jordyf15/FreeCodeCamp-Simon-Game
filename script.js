$(document).ready(function(){
    let series=0;
    let playerStep=[];
    let simonStep=[];
    let turn='simon';
    let strict=false;
    let timeout;
    let loop;
    let power=false;//false = off & true = on
    const yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    const blueAudio= new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    const greenAudio=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    const redAudio=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

    const seriesFormatter=(series)=>{
      if(series<10)return `0${series}`;
      return series;
    }

    const randomSimonStep=()=>{
        const random=Math.floor(Math.random() * 5)+1;
        switch(random){
          case 1:
            return '#redBtn';
          case 2:
            return '#blueBtn';
          case 3:
            return '#yellowBtn';
          default:
            return '#greenBtn';
        }
      }

      const randomSimonTurn=()=>{
        playerStep=[];
        simonStep=[];
        let i=0;
        turn='simon';
        $('#blocker').css('width','100vw');
        $('#blocker').css('height','100vh');
        $('#series').text(seriesFormatter(series));
          const loop=setInterval(()=>{
            document.querySelector(randomSimonStep()).click();
            i++;
            if(i>=series){
              clearInterval(loop);
                playerTurn();
            }
            if(!power){
              clearInterval(loop);
            }
          },1000);
      }

      const repeatSimonTurn=(simonTurn)=>{
        playerStep=[];
        simonStep=[];
          let i=0;
          $('#series').text(seriesFormatter(series));
          turn='simon';
          $('#blocker').css('width','100vw');
          $('#blocker').css('height','100vh');
            loop=setInterval(()=>{
                document.querySelector(`#${simonTurn[i]}Btn`).click();
                i++;
                if(i>=series){
                  clearInterval(loop);
                  playerTurn();
                }
                if(!power){
                  clearInterval(loop);
                }
              },1000);
      }

      const playerTurn=async()=>{
          turn='player';
          $('#blocker').css('width','0px');
          $('#blocker').css('height','0px');
          timeout=setTimeout(()=>checkSteps(),5000);
      }

      const checkSteps=()=>{
        if(power){
          if(simonStep.join(' ')===playerStep.join(' ')){
            series++;
            if(series>20){
              $('#series').text('WIN');
              series=1;
              setTimeout(()=>randomSimonTurn(),2000);
            }else{
            randomSimonTurn();
            }
          }else{
            if(strict){
              $('#series').text('!!');
              setTimeout(()=> randomSimonTurn(),2000);
            }else{
              $('#series').text('!!');
              setTimeout(()=>{
                repeatSimonTurn(simonStep)},2000);
            }
          }
        }
      }

      $('#power').click(function(){
        power=!power;
        if(power){
          $('#series').text('--');
          $('#on').css('background-color',' #3193de');
          $('#off').css('background-color',' #222222');
        }else{
          $('#blocker').css('width','0px');
          $('#blocker').css('height','0px');
          $('#series').text('');
          $('#off').css('background-color',' #3193de');
          $('#on').css('background-color',' #222222');
          $('#strict-led').css('background-color','#32050c')
          strict=false;
          clearInterval(loop);
          clearTimeout(timeout);
        }
      })

    $('#play').click(function(){
      if(power){
        clearInterval(loop);
        clearTimeout(timeout);
        simonStep=[];
        playerStep=[];
        turn='simon'
        series=1;
          $('#series').text(seriesFormatter(series));
          randomSimonTurn();
      }
      $(this).css('box-shadow','none');
      setTimeout(()=>$('#play').css('box-shadow','0px 1px 3px 2px rgba(0,0,0,0.75)'),300);
    });

    $('#strict').click(function(){
      if(power){
        strict=!strict;
        if(strict){
          $('#strict-led').css('background-color','#dc0d29')
        }else{
          
          $('#strict-led').css('background-color','#32050c')
        }
      }
      $(this).css('box-shadow','none');
      setTimeout(()=>$('#strict').css('box-shadow','0px 1px 3px 2px rgba(0,0,0,0.75)'),300);
    })

    
    $('#redBtn').click(function(){
      if(power){
        redAudio.play();
        $(this).css('background-color','#ff0000');
        if(turn==='simon'){
            simonStep.push('red');
        }else{
            playerStep.push('red');
            if(playerStep[playerStep.length-1]===simonStep[playerStep.length-1]){
              clearTimeout(timeout);
              timeout=setTimeout(()=>checkSteps(),3000);
            }else{
              clearTimeout(timeout);
              checkSteps();
            }
        }
        setTimeout(()=>{
            $('#redBtn').css('background-color','#bf0000');
        },300);
      }
    });

    $('#greenBtn').click(function(){
      if(power){
        greenAudio.play();
        $(this).css('background-color','#0eff00');
        if(turn==='simon'){
            simonStep.push('green');
        }else{
            playerStep.push('green');
            if(playerStep[playerStep.length-1]===simonStep[playerStep.length-1]){
              clearTimeout(timeout);
              timeout=setTimeout(()=>checkSteps(),3000);
            }else{
              clearTimeout(timeout);
              checkSteps();
            }
        }
        setTimeout(()=>{
            $('#greenBtn').css('background-color','#1fc600');
        },300);
      }
    });

    $('#blueBtn').click(function(){
      if(power){
        blueAudio.play();
        $(this).css('background-color','#00fff3');
        if(turn==='simon'){
            simonStep.push('blue');
        }else{
            playerStep.push('blue');
            if(playerStep[playerStep.length-1]===simonStep[playerStep.length-1]){
              clearTimeout(timeout);
              timeout=setTimeout(()=>checkSteps(),3000);
            }else{
              clearTimeout(timeout);
              checkSteps();
            }
        }
        setTimeout(()=>{
            $('#blueBtn').css('background-color','#00bbd1');
        },300);
      }
    });

    $('#yellowBtn').click(function(){
      if(power){
        yellowAudio.play();
        $(this).css('background-color','#ffe200');
        if(turn==='simon'){
            simonStep.push('yellow');
        }else{
            playerStep.push('yellow');
            if(playerStep[playerStep.length-1]===simonStep[playerStep.length-1]){
              clearTimeout(timeout);
              timeout=setTimeout(()=>checkSteps(),3000);
            }else{
              clearTimeout(timeout);
              checkSteps();
            }
        }
        setTimeout(()=>{
            $('#yellowBtn').css('background-color','#dbc300');
        },300);
      }
    });

});