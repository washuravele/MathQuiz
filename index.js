
   intro();
 
     $(".btnStart").click(function(){
       if($(".userInput > input").val() == ""){
               alert("please enter your name");
               console.log($(".verify > input").is(":checked"));
       }else{

            if($(".verify > input").is(":checked")){
                   loading();
            }else{
                  alert("Please tick the checkbox if you are ready ");
            }
               
       }
      
     })
         
 // quizStart();
 //loading();

function loading(){
      $(".innerC").empty().css({
         "justify-content" : "center"
      });
      
   
       $(".innerC").prepend("<div class='loadImg'><img class='Img'></div>");
       $(".innerC").append("<div class='load'></div>");
   
       $(".Img").attr("src", "./Icons/Logo.png");
      

        
        $(".load").html("<p class = 'ga-maamli-regular' >loading</p> " + "<p class='per'>0%</p>");
        

         var audio = new Audio("./sounds/loading.mp3");

       setTimeout(function(){
              $(".load").html("<p class = 'ga-maamli-regular' >Data is loading</p> " + "<p class='per'>10%</p>");
              $(".Img").fadeToggle();
              
            audio.play();
        },700);

       setTimeout(function(){
              $(".load").html("<p class = 'ga-maamli-regular' >We For Seconds</p> " + "<p class='per'>30%</p>");
              $(".Img").fadeToggle();
        },2700);


        setTimeout(function(){
              $(".load").html("<p class = 'ga-maamli-regular' >Data Coming Wait</p> " + "<p class='per'>60%</p>");
              $(".Img").fadeToggle();
        },3700);

        setTimeout(function(){
              $(".load").html("<p class = 'ga-maamli-regular' >Ready To Load </p> " + "<p class='per'>80%</p>");
              $(".Img").fadeToggle();
        },5700);

        setTimeout(function(){
             $(".load").html("<p class = 'ga-maamli-regular' >Get Ready</p> " + "<p class='per'>95%</p>");
             $(".Img").fadeToggle();
             audio.pause();
        },8500);

         setTimeout(function(){
            //start quiz
             quizStart();
        
        },8700);

      

}


function intro(){
      
      $(".heading").html("<h2>Maths Quiz</h2>");
      $(".userName").text("Your Name:");
      $(".userInput > input").addClass("input");
      
      $(".ready").text("Are you ready");

      $(".btnStart").text("Start").addClass("btnS");
}


function quizStart(){
     $(".innerC").empty();

     var levels = 1;

     //seconds div
        $(".innerC").append("<p class='seconds ga-maamli-regular'></p>");
        cntSec();
       

      //questions div
      $(".seconds").after("<div class='ques'></div>");

     //levels
     $(".ques").prepend("<div class='levels'></div>");
       $(".levels").html(`<h2 class='caveat'>Question ${levels}</h2>`);
  

       //Random Ques
        var num2 = Math.floor(Math.random() * 10)+1;
        var num1 = Math.floor(Math.random() * 25)+1;
        var randomMethod = Math.floor(Math.random() * 4);  

       // calculator(num1,num2);
          var answer = getAnswer(num1,num2,randomMethod);
       

         $(".ques").append("<div class='randomQues caveat'></div>");

         displayQuestions(num1,num2,randomMethod);

     //answer div
     $(".ques").after("<div class='answer'>d </div>");
     $(".answer").html("<input type='text' class='inpAns'>");

     
         
     //confirm div
     $(".answer").after("<div class='confirm'></div>");
     $(".confirm").html("<button class='btnS btnCon' >Confirm</button>");
     
         //making sure the question text change
          var num3 = 2;
          var num4 = 2;

          $(".btnCon").click(function(){
            var userAnswer = $(".inpAns").val();  
                   
            if(userAnswer == answer){
                   correct();
                  var num2 = Math.floor(Math.random() * 10)+1;
                  var num1 = Math.floor(Math.random() * 25)+1;
                  var randomMethod = Math.floor(Math.random() * 4); 
                  displayQuestions(num1,num2,randomMethod);
                  cntSec();
                   num3 =num4++;
                   $(".levels").html(`<h2 class='caveat'>Question ${num3}</h2>`);
                  var answer2 = getAnswer(num1,num2,randomMethod);
                  answer = answer2;
                  
                  $(".inpAns").val("");
                     if(num3==11){
                         alert("well done! your are doing well.keep going");
                     }

               }
                else{
                   
                  wrong();
                  $(".confirm").html("<button class='btnS  btnRetry' >Retry</button>");
                 $(".seconds").addClass("wrong").text("Incorrect");

                  
                 setTimeout(function(){
                       loading();
                 },2100);
               
            }

          });


};



function getAnswer(num1,num2,randomMethod){
      
             function add(num1,num2){
                return  Math.floor(num1 + num2);
             }

              function minus(num1,num2){
                return  Math.floor(num1 - num2);
             }

              function divide(num1,num2){
                return  Math.floor(num1/num2);
             }

              function multiple(num1,num2){
                return Math.floor(num1 *num2);
             }

//var randomMethod = Math.floor(Math.random() * 4);  

var methods = [add(num1,num2),minus(num1,num2),divide(num1,num2),multiple(num1,num2)];

    return  methods[randomMethod];

}


function displayQuestions(num1,num2,randomMethod){

   
      switch(randomMethod){
              case 0 : 
             $(".randomQues").html(num1 + " + " + num2 );
              break;

              case 1 : 
             $(".randomQues").html(num1 + " - " + num2 );
              break;

               case 2 : 
             $(".randomQues").html(num1 + " / " + num2 );
              break;

               case 3 : 
             $(".randomQues").html(num1 + " * " + num2);
              break;

      }
    
}

 

function cntSec(){
      var sec = 60;
      $(".seconds").html(sec);
      setTimeout(function(){
            sec = 50
            $(".seconds").html(sec);
      },10000);

      setTimeout(function(){
            sec = 40;
            
            $(".seconds").html(sec);
      },20000);

      setTimeout(function(){
                 sec = 30;
          //   sec-=10;
             $(".seconds").html(sec);
      },30000);

      setTimeout(function(){
               sec =20;
             //sec-=10;
             $(".seconds").html(sec);
      },40000);

      setTimeout(function(){
            sec =10;
             //sec-=10;
            $(".seconds").html(sec);
      },50000);

      setTimeout(function(){
               sec = 0;
              $(".seconds").html(sec);
              alert("Time run-out");
      },60000);

      


      
}



function wrong(){
   var audio = new Audio("./sounds/wrong.mp3");
   audio.play()
}

function correct(){
   var audio = new Audio("./sounds/correct.mp3");
   audio.play()
}

//done!