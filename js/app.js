'use strict'
var user = prompt('type your name please')
alert('welcom to my page: ' + user )

alert('you have to answer these qustion befor you access my webpage')


var colorAnswer = prompt('is the sky with blue color?')
var colorAnswer = colorAnswer.toUpperCase();
switch(colorAnswer) {
    case'YES':
    alert('correct');
    break;
    case'Y':
    alert('correct');
    break;
    case'NO':
    alert('incorrect');
    break;
    case'N':
    alert('incorrect');
    break;
    default :
    alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
    break;
    //console.log('this is true')
}

var fly = prompt('can the bird fly ?')
var fly = fly.toUpperCase();
switch(fly) {
    case'YES':
    alert('correct');
    break;
    case'Y':
    alert('correct');
    break;
    case'NO':
    alert('incorrect');
    break;
    case'N':
    alert('incorrect');
    break;
    default :
    alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
    break;
    //console.log('cheack please')
}

var waterColor = prompt('the water is colorless?')
var waterColor = waterColor.toUpperCase();
switch(waterColor) {
    case'YES':
    alert('correct');
    break;
    case'Y':
    alert('correct');
    break;
    case'NO':
    alert('incorrect');
    break;
    case'N':
    alert('incorrect');
    break;
    default :
    alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
    break;
    //console.log('is it correct')
}

var sphericity = prompt('is the earth sphericity?')
var sphericity = sphericity.toUpperCase();
switch(sphericity) {
    case'YES':
    alert('correct');
    break;
    case'Y':
    alert('correct');
    break;
    case'NO':
    alert('incorrect');
    break;
    case'N':
    alert('incorrect');
    break;
    default :
    alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
    break;
    //console.log('thanks')
}

var shine = prompt('is the sun shine in the night?')
var shine = shine.toUpperCase();
switch(shine) {
    case'YES':
    alert('incorrect');
    break;
    case'Y':
    alert('incorrect');
    break;
    case'NO':
    alert('correct');
    break;
    case'N':
    alert('correct');
    break;
    default :
    alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
    break;
    //console.log('final help here')
}

alert('welcom to my page again and i with you have a fun time with me: ' + user)



