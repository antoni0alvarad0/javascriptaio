// This is the beginning of a simple game.
const ball = document.getElementById('ball');
document.addEventListener('keydown' , handleKeyPress);
let position = 0;

function handleKeyPress(e){
    if (e.code === 'ArrowLeft') {
        position = position - 100;
    }
    if (e.code === 'ArrowRight') {
        position = position + 100;
    }
    // if (e.code === 'ArrowUp') {
    //     position = position - 10;
    // }
    // if (e.code === 'ArrowDown') {
    //     position = position + 10
    // }
    if (position < 0) {
        position = 0;
    }
    refresh(); //updates the balls position
}
function refresh() {
    ball.style.left = position + 'px';
}
// function refresh(){
//     ball.style.top = position + 'px';
// }