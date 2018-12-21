var testResults = function(one, two ,three,four){
    return one + two + three+ four;
    
    
    }
    
    $(document).ready(function(){
      $(".begin").click(function(){
        $("#test").fadeToggle("slow");
      });
    
      $("form#test").submit(function(event){
        var Q1 = parseInt($("input:radio[name=question1]:checked").val());
        var Q2 = parseInt($("input:radio[name=question2]:checked").val());
        var Q3 = parseInt($("input:radio[name=question3]:checked").val());
        var Q4 = parseInt($("input:radio[name=question4]:checked").val());
    
        var result = testResults(Q1, Q2 ,Q3,Q4);
    
        $("#display").text("Your score is:" + result);
    
        event.preventDefault();
        $(".final").show();
    