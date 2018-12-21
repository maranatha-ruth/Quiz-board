var testResults = function(one, two ,three,four){
    return one + two + three+ four;
    
    
    }
    
    $(document).ready(function(){
      $(".begin").click(function(){
        $("#test").fadeToggle("slow");
      });
    
      $("form#test").submit(function(event){
        var Q1 = parseInt($("input:radio[name=question one]:checked").val());
        var Q2 = parseInt($("input:radio[name=question one]:checked").val());
        var Q3 = parseInt($("input:radio[name=question three]:checked").val());
        var Q4 = parseInt($("input:radio[name=question four]:checked").val());
         
        var score =0;
        
        if (questionone===+10){
            score +=10;
        }
        if (questionTwo===+10){
            score +=10;

        }
        if (questionThree===+10){
            score +=10;
        }
        if (questionFour===+10){
            score +=10;
        }

    
        $("#display").text("Your score is:" + result);
    
        event.preventDefault();
        $(".final").show();
    