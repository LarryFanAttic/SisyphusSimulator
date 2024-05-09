var scene, ball;

function start(){
    scene = $("a-scene")[0];   
    ball = $('.ball');
    console.log("Game Loaded");
    setTimeout(addBall,3000)
}

function addBall(){
    var newBall = ball.clone();
    ball.remove();
    newBall.attr('visible', true);
    newBall.attr('class', 'ball');
    newBall.attr('dynamic-body', 'mass: 10');
    $(scene).append(newBall);
}

AFRAME.registerComponent("start-game",{
    init: start
})