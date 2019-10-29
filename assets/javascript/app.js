(function(){

    var startButton = document.querySelector('.startbutton');

    startButton.onclick = function (){

        document.querySelector('#start').className+= ' hide';
        document.querySelector('#quiz').className+= ' show';

        function timer(){
            var sec = 60;
            var timer = setInterval(function(){
                document.querySelector('.timer').innerHTML= sec;
                sec--;
                if (sec < 0) {
                    clearInterval(timer);
                    document.querySelector('.timer').innerHTML= 'Time Expired!';
                }
            }, 1000);
        }
        timer();


    }

    

    var submitButton = document.querySelector(".submit");
    

    submitButton.onclick = function(){

        document.querySelector('#quiz').className+= ' hide';
        document.querySelector('#end').className+= ' show';

        

        var totalCorrectAnswers = 0;
        var totalWrongAnswers = 0;
        var totalUnanswered = 5;
        var question1 = document.querySelectorAll('.input[name=pointguards');
        var question2 = document.querySelectorAll('.input[name=dunkers]');
        var question3 = document.querySelectorAll('.input[name=playoffs]');
        var question4 = document.querySelectorAll('.input[name=draftpicks]');
        var question5 = document.querySelectorAll('.input[name=champs]');
        

        console.log('test:',document.querySelectorAll('.input[name=pointguards]:checked').length);
        if(question1[0].checked == true ) {
            totalCorrectAnswers += 1;
            totalUnanswered -= 1;
        }else if(document.querySelectorAll('.input[name=pointguards]:checked').length == 0){
            console.log('none checked');
        }else {
            totalWrongAnswers += 1;
            totalUnanswered -= 1;
        }
        console.log(totalUnanswered);

        if(question2[3].checked == true){
            totalCorrectAnswers += 1;
            totalUnanswered -= 1;
        }else if(document.querySelectorAll('.input[name=dunkers]:checked').length == 0){
            console.log('none checked');
        }else {
            totalUnanswered -=1;
            totalWrongAnswers += 1;
        }
        console.log(totalUnanswered);

        if(question3[1].checked  == true){
            totalCorrectAnswers += 1;
            totalUnanswered -= 1;
        }else if(document.querySelectorAll('.input[name=playoffs]:checked').length == 0){
            console.log('none checked');
        }else{
            totalUnanswered -=1;
            totalWrongAnswers += 1;
        }
        console.log(totalUnanswered);

        if(question4[2].checked  == true){
            totalCorrectAnswers += 1;
            totalUnanswered -= 1;
        }else if(document.querySelectorAll('.input[name=draftpicks]:checked').length == 0){
            console.log('none checked');
        }else {
            totalUnanswered -=1;
            totalWrongAnswers += 1;
        }
        console.log(totalUnanswered);

        if(question5[3].checked  == true){
            totalCorrectAnswers += 1;
            totalUnanswered -= 1;
        }else if(document.querySelectorAll('.input[name=champs]:checked').length == 0){
            console.log('none checked');
        }else {
            totalUnanswered -=1;
            totalWrongAnswers += 1;
        }
        console.log(totalUnanswered);

        console.log('totalCorrectAnswers:', totalCorrectAnswers);
        console.log('totalUnanswered:',totalUnanswered);
        console.log('totalWrongAnswers:',totalWrongAnswers);


        document.querySelector(".totalcorrect").innerHTML = totalCorrectAnswers;
        document.querySelector(".totalwrong").innerHTML = totalWrongAnswers;
        document.querySelector(".totalunanswered").innerHTML = totalUnanswered;



    }










})();