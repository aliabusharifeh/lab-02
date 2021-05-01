'use strict'


let score = 0;
let userName = prompt('enter your name,please');
alert('welcome to my website  ' + userName);

//var ask = confirm('Okay ' + userName + ' Let\'s Play a Game! I Will Ask You and Your Answer Shuld be Yes or No Y/N');


function q1(){
let question1 = prompt('do you know me(y/n)?')
let answer1 = question1.toLowerCase();

switch (answer1) {
    case ('yes'):
    case ('y'):
        alert('nice  '  + userName);
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('i will be happy to know you  '  + userName);
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N,please')
        break;    
    }
    

}
q1();

function q2(){
let question2 = prompt('do you have my number(y/n))?')
let answer2 = question2.toLowerCase();

switch (answer2) {
    case ('yes'):
    case ('y'):
        alert('i will be happy to hear your voice'  + userName);
        break;
    case ('no'):
    case ('n'):
        alert('this is my number 0788141450');
        score +=1;
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N,please')
        break;
}
}
q2();
function q3(){
let question3 = prompt('did you get my facebook(y/n)?')
let answer3 = question3.toLowerCase();

switch (answer3) {
    case ('yes'):
    case ('y'):
        alert('i am happy with this friendship');
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('add me * ali w abushareefa *');
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N,please')
        break;
}
}
q3();
function q4(){
let question4 = prompt('did you get my linkedin(y/n)?')
let answer4 = question4.toLowerCase();

switch (answer4) {
    case ('yes'):
    case ('y'):
        alert('this is nice  '  + userName);
        break;
    case ('no'):
    case ('n'):
        alert(' take a look there -ali abushareefa-' );
        score +=1;
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N,please')
        break;
}
}
q4();
function q5(){
let question5 = prompt('do you know my major (y/n)?')
let answer5 = question5.toLowerCase();

switch (answer5) {
    case ('yes'):
    case ('y'):
        alert('ok');
        score +=1;
        break;
    case ('no'):
    case ('n'):
        alert('it is an aircraft maintenance');
        break;
    default:
        alert('Your Answer Should Be Yes or No Y/N,please');
        break;
}
}
q5();
function q6(){
let question6 = prompt('can you guess my age?');
let answer6 = question6;
let myAge = 26;
for (var i = 0; i < 4 ; i++) {
    if(answer6 == myAge){
        alert('graet  '+userName+'  I am 26 years old');
        score +=1;
        break;    
}else if(answer6 < myAge){
   answer6 = prompt('no  '+userName+'  this is low');
}else if(answer6 > myAge){
    answer6 = prompt('no  '+userName+'  this is high');
}
}

if (i >=4 ){alert(' i am 26');}

}
q6();

/*function q7(){
    
let food = ['mansaf', 'barbeque', 'burger'];
for (let i = 0; i < 6; i++) {
    let question7 = prompt('what kind of food i like?');
let t = food;
    if(t == true){
        alert('Good Answer '+userName+' I like '+food.join(' and '));
        score +=1;
        break;
    }
}
if(i >=5 ){alert('No '+userName+' I like '+food.join(' and '))}

alert(userName+' your score '+score+' of 7');

alert('thank you for your time');
}

q7();*/

function q7(){
    
    var food = ['mansaf', 'barbeque', 'burger'];
    for (var i = 0; i < 6; i++) {
        var question7 = prompt('what kind of food i like?');
        var t = food;
        if(t == true){
            alert('Good Answer '+userName+' I like '+food.join(' and '));
            score +=1;
            break;
        }
    }
    if(i >=5 ){alert('No '+userName+' I like '+food.join(' and '))}
    
    alert(userName+' your score '+score+' of 7');
    
    alert('thank you for your time');
    }
    
    q7();