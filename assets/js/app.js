. 
$(document).ready(function(){ 

var quotes = [
	"Feeling down? Saddle up.",
	"Because when I ride, all I feel is free.", 
	"If you don’t like the road you’re walking, start paving another one.", 
	"Always saddle your own horse.", 
	"Cowgirl is a spirit, a special brand of courage. The cowgirl faces life head on, lives by her own lights, and makes no excuses. Cowgirls take stands. They speak up. They defend the things they hold dear. A cowgirl might be a rancher, or a barrel racer, or a bull rider, or an actress. But she's just as likely to be a checker at the local Winn Dixie, a full-time mother, a banker, an attorney, or an astronaut."
];

var backgroundColor = [
	'paleVioletRed',
	'paleGoldenrod',
	'saddleBrown',
	'lightSteelBlue',
	'lavender'
];


var num = Math.floor(Math.random() * 6) + 1;
	


 //for dice roll placement in DOM

//var result  = $('.result');//for quote placement


$("#random").on('click',function(){
	//mouseenter, hover, whatever, drag
	//have to move these two lines here so they'll run every time the button is clicke,d otherwise, above, they'll only run when the page loads
//when we press, it will also update the global 
	//change color
	changeColor()
	changeQuote()
	rollDice()
	
	//quote randomQuotes = quotes[num];
	//$('#quote').empty();


});

	function changeColor() {
		num = Math.floor(Math.random() * 4) + 1;
		colors = backgroundColor[num]; 
		$('body').css("background-color", colors);
	}

	function changeQuote() {
		num = Math.floor(Math.random() * 4) + 1;
		randomQuote = quotes[num];
		$('#quote').empty();
		$('#quote').append(randomQuote);
	 }
	

//creates 
	function rollDice() {
//get #, make box, push to page; 
		
		diceNum = Math.round(Math.random() * 6);
		yourRoll = diceNum.toString();
		$('#dice').empty();
		$('#dice').append(yourRoll);

	}

});
/*alternately, create the dice-box dynamically
	box = $("<div>");
	box.empty();
	box.html(yourRoll);
	box.css({
			
			"font-size": "14px",
			"font-color": "black", 
			"font-weight": "heavy"
			"display":"flex",
			"justify-content": "center"
	});

	$("body").append( box );
*/



/*
Notes and ideas:
add more quotes: up to 25 and more colors 
content.html(randomQuote);
content.attr({
"class": "cowgirl-quote"

click can also be: mouseenter, hover


console.log(quotes.length);

var content = $("<p>");


get a random number, return it, dynamically make a div with ht and width' 

need to remove the old quote use empty()

setTimeOut()

append,html,attr
*/
