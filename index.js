const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")

const game = new TetrisGame()

window.onload = () => {

    console.log("Load complete.")
    console.log("Hello World!")
    // game.arrayRandomize();
    // game.fillArray();
    // game.colorCanvas();
    // game.eraseCanvas();
    // game.arrayInitialization();
    game.setUpGame();
    window.setInterval(() => {
        game.runGame();
    }, 300)

}


