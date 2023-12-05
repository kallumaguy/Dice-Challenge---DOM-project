// Assuming you want to change the image for Player 1 (img1)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.querySelector('.img1');
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');

// Assuming you want to change the image for Player 2 (img2)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.querySelector('.img2');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

if (randomNumber1 > randomNumber2){
    var he = document.querySelector('h1').innerHTML= 'Player 1 won ' ;
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML= 'Player 2 won ' ;
}
else{
    var he = document.querySelector('h1').innerHTML= 'It\'s a Tie ' ;
}