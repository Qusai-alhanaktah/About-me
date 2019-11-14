'use strict'
var user = prompt('type your name please')
alert('welcom to my page: ' + user)

alert('you have to answer these qustion befor you access my webpage')
var mark = 0

function colorName(){
var colorAnswer = prompt('is the sky with blue color?')
var colorAnswer = colorAnswer.toUpperCase();
switch (colorAnswer) {
    case 'YES':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'Y':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'NO':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'N':
        alert('you got: ' + mark);
        alert('incorrect');
        break;
    default:
        alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no')
        alert('you got: ' + mark);
        break;
    //console.log('this is true')
}
}
colorName();
function fly(){
var fly = prompt('can the bird fly ?')
var fly = fly.toUpperCase();
switch (fly) {
    case 'YES':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'Y':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'NO':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'N':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    default:
        alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no');
        alert('you got: ' + mark);
        break;
    //console.log('cheack please')
}
}
fly();
function waterColor(){
var waterColor = prompt('the water is colorless?')
var waterColor = waterColor.toUpperCase();
switch (waterColor) {
    case 'YES':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'Y':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'NO':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'N':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    default:
        alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no');
        alert('you got: ' + mark);
        break;
    //console.log('is it correct')
}
}
waterColor();
function sphericity(){
var sphericity = prompt('is the earth sphericity?')
var sphericity = sphericity.toUpperCase();
switch (sphericity) {
    case 'YES':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'Y':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'NO':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'N':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    default:
        alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no');
        alert('you got: ' + mark);
        break;
    //console.log('thanks')
}
}
sphericity();
function shine(){
var shine = prompt('is the sun shine in the night?')
var shine = shine.toUpperCase();
switch (shine) {
    case 'YES':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'Y':
        alert('incorrect');
        alert('you got: ' + mark);
        break;
    case 'NO':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    case 'N':
        alert('correct');
        mark = mark + 1;
        alert('you got: ' + mark);
        break;
    default:
        alert('yor are wrong, this is yes/no qusetion, you have to answer with yes/no');
        alert('you got: ' + mark);
        break;
    //console.log('final help here')
}
}
shine();
alert('welcom to my page again and i with you have a fun time with me: ' + user)






alert('now the hardest qustion, did you ready?')
function number(){
var number = prompt('giss my number between 0 to 10 if you can!,  carefully you have only 4 tries')

for (var i = 1; i <= 3; i++) {

    if (number < 7) {
        alert('too low');
        number = prompt('giss my number between 0 to 10 again');

    }
    else if (number > 7) {

        alert('too high');
        number = prompt('giss my number between 0 to 10 again');
    }
    else if (number == 7) {

        alert('correct');
        i = 6;
        mark = mark + 1;
        alert('you got: ' + mark);
    }
}
if (i == 4 && number == 7) {
    alert('correct');
    mark = mark + 1;
    alert('you got: ' + mark);

} else if (i == 4 && number != 7) {
    alert('sorry. you try all your attempt, the answer is: 7');
    document.write('<h3>' + 'the answer is: 7' + '</h3>');
    //console.log('cheack the loop')


<<<<<<< HEAD
}
=======
 }
}
number();
>>>>>>> ec5b33928ce746e29a98fb65eedd4dedf8533b7c




<<<<<<< HEAD


var sevenWonders = ["great wall of china", "petra", "taj mahal", "machu picchu", "chichen itza", "colosseum", "christ the redeemer statue"];
=======
function sevenWonders(){
var sevenWonders = ["great wall of china", "petra", "taj mahal", "machu picchu", "chichen itza", "colosseum","christ the redeemer statue"];
>>>>>>> ec5b33928ce746e29a98fb65eedd4dedf8533b7c
var place = prompt('giss One of the Seven Wonders of the World if you can!');

for (var x = 1; x <= 5;) {

    switch (place.toLowerCase()) {
        case sevenWonders[0]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[1]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[2]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[3]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[4]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[5]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
            break;
        case sevenWonders[6]:
            alert('correct');
            x = x + 7;
            mark = mark + 1;
            alert('you got: ' + mark);
        default:
            place = prompt('type one of Seven Wonders of the World, not any thing else');
            x = x + 1;
    }
    //console.log('cheack the array')

}
if (x == 6 && (place == sevenWonders[0] || place == sevenWonders[1] || place == sevenWonders[2] || place == sevenWonders[3] || place == sevenWonders[4] || place == sevenWonders[5] || place == sevenWonders[6])) {
    alert('correct');
    mark = mark + 1;
<<<<<<< HEAD
    alert('you got: ' + mark);
} else if ((x == 6 && !(place == sevenWonders[0] || place == sevenWonders[1] || place == sevenWonders[2] || place == sevenWonders[3] || place == sevenWonders[4] || place == sevenWonders[5] || place == sevenWonders[6]))) {
    alert('sorry. you try all your attempt, the answer is one of these ' + 'great wall of china", "petra", "taj mahal", "machu picchu", "chichen itza", "colosseum","christ the redeemer statue');
    alert('you got: ' + mark);
    document.write('<h3>' + 'the answer is one of these:' + '</h3>' + '<ul>' + '<li>' + 'great wall of china' + '</li>' + '<li>' + 'petra' + '</li>' + '<li>' + 'taj mahal' + '</li>' + '<li>' + 'machu picchu' + '</li>' + '<li>' + 'colosseum' + '</li>' + '<li>' + 'chichen itza' + '</li>' + '<li>' + 'christ the redeemer statue' + '</li>' + '</ul>');

}
// console.log(check the if statement)

document.write('<h2>' + 'total mark = ' + mark + '/7' + '</h2>');
=======
alert('you got: '+mark);
} else{
    alert('sorry. you try all your attempt, the answer is one of these '+'great wall of china", "petra", "taj mahal", "machu picchu", "chichen itza", "colosseum","christ the redeemer statue');
    alert('you got: '+mark);
    document.write('<h3>'+'the answer is one of these:'+'</h3>'+'<ul>'+'<li>'+ 'great wall of china' + '</li>'+'<li>'+ 'petra' + '</li>'+'<li>'+ 'taj mahal' + '</li>'+'<li>'+ 'machu picchu' + '</li>'+'<li>'+ 'colosseum' + '</li>'+'<li>'+ 'chichen itza' + '</li>'+'<li>'+ 'christ the redeemer statue' + '</li>'+'</ul>');

}  
}
sevenWonders();
document.write('<h2>'+'total mark = ' + mark + '/7' + '</h2>' );
>>>>>>> ec5b33928ce746e29a98fb65eedd4dedf8533b7c




