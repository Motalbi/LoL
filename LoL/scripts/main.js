$(document).keypress(keyPress);

var position = 0;
var ballfired = false;
var activeColor = "yellow";
var speed = 0;
var lemmingsPosition = [0, 50,100,150,200,250,300];


setInterval(gameEngine, 30) ;

function gameEngine() { 
    if(ballfired ){
    speed = $(".ball").position().left;
    speed += 50;
    // console.log(speed);
    if(speed < 800){
    $(".ball").css("left", speed + "px");
    }else{
        ballfired = false;
        $(".ball").remove();
    }
    var balltop = $(".ball").position().top;
    var lemmingtop = $(".lemming").position().top;
    var ballleft = $(".ball").position().left;
    var lemmingleft = $(".lemming").position().left;
    if(balltop == lemmingtop && ballleft >  lemmingleft) {
        ballfired = false;
        $(".ball").remove();
        var r = Math.floor(Math.random()* lemmingsPosition.length);
        var lpos = lemmingsPosition[r];
        console.log(lpos);
        $(".lemming").css("top", lpos + "px");
    }
    }
}

function keyPress(event) {

    position = $(".player").position().top;

    var key = event.which || event.keyCode;
    //  console.log(event.which);

    if(key == 32 && !ballfired) {
       createball();
       ballfired = true;
    }

    if(key == 115 && position < 350) {
    position += 50;
    $(".player").css("top", position + "px");
    console.log(position);
    }

    if(key == 119 && position > 0) {
        position -= 50;
    console.log(position);
    $(".player").css("top", position + "px");
    }
}

function createball() {
    $("#playfield").append("<div class='ball'></div>");
    $(".ball").attr("id", "fired");
    $(".ball").css("background-color", activeColor);
    console.log(activeColor);
    $(".ball").css("top", position + "px");
}

function redSkill () {
    console.log("Rood");
    activeColor = "red";
    $( ".magic" ).removeClass( "selected" );
    $(".skillRed").toggleClass("selected");

}

function blueSkill () {
    console.log("Wit");
    activeColor = "white";
    $( ".magic" ).removeClass( "selected" );
    $(".skillBlue").toggleClass("selected");
}

function goldSkill () {
    console.log("Blauw");
    activeColor = "blue";
    $( ".magic" ).removeClass( "selected" );
    $(".skillGold").toggleClass("selected");

}

function greenSkill () {
    console.log("Groen");
    activeColor = "green";
    $( ".magic" ).removeClass( "selected" );
    $(".skillGreen").toggleClass("selected");

    
}