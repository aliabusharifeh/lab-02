'use strict';
let username=prompt('enter your name');
alert('hello  '+username);

let fasting=prompt('do you fasting?, yes or no?');
//console.log(fasting)
switch(fasting.toLowerCase())
{
    case 'yes':
    case 'y':
    alert('الله يتقبل');
    break;

    case'no':
    case'n':
    alert('الله يهديك');
    break;

}
let burger=prompt('do you like a burger?yes or no ?');
//console.log(burger)
switch(burger.toLowerCase())
{
    case 'yes':
    case 'y':
    alert(' me too ');
    break;

    case'no':
    case'n':
    alert(' you should try it');
    break;

}

let eat=prompt('do you want burger?yes or no ?');
//console.log(eat)
switch(eat.toLowerCase())
{
    case 'yes':
    case 'y':
    alert('ok');
    break;

    case'no':
    case'n':
    alert('just think deeply');
    break;

}

let sea_food=prompt('do you like a sea food?, yes or no ?');
//console.log(sea_food)
switch(sea_food.toLowerCase())
{
    case 'yes':
    case 'y':
    alert('me too');
    break;

    case'no':
    case'n':
    alert('you should try it');
    break;

}

let Barbeque=prompt('do you want Barbeque?yes or no ?');
//console.log(Barbeque)
switch(Barbeque.toLowerCase())
{
    case 'yes':
    case 'y':
    alert('ok');
    break;

    case'no':
    case'n':
    alert('just think deeply');
    break;

}
