/*
Tetris JavaScript
Trevor Toth
Jan. 2022
*/

class TetrisGame{

    constructor(){

        this.cellSize = 20;
        // this.rows = Math.floor(canvas.width / this.cellSize);
        // this.columns = Math.floor(canvas.height / this.cellSize);
        this.rows = 15;
        this.columns = 10;
        this.currentBoard = [];
        this.nextBoard = [];
        // this.redColor = "#FF0000";
        // this.blackColor = "#000000";

        //Colors enum
        const Colors = Object.freeze({
            BLACK:   { name: "black", hex: "#000" },
            RED:   { name: "red", hex: "#f00" },
            BLUE:  { name: "blue", hex: "#00f" },
            GREEN: { name: "green", hex: "#0f0" }
          });

        //Color canvas
        this.colorCanvas = () => {
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            console.log("colorCanvas()")
        }
        //Clear canvas
        this.eraseCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log("eraseCanvas()")
        }
        //Create game board
        this.arrayInitialization = () => {
            console.log("arrayInitialization()")
            for(let r = 0; r < this.rows; r++){
                this.currentBoard[r] = [];
                for(let c = 0; c < this.columns; c++){
                    this.currentBoard[r][c] = 0;
                }
            }
            this.nextBoard = this.currentBoard;
        }
        this.arrayRandomize = () => {
            console.log("arrayRandomize()")
            for(let r = 0; r < this.rows; r++){
                for(let c = 0; c < this.columns; c++){
                    this.currentBoard[r][c] = (Math.random() > 0.5) ? 1 : 0;
                }
            }
        }
        //Draw game board
        this.drawBoard = () => {
            console.log("drawBoard()")
            let color;
            for(let r = 0; r < this.rows; r++){
                for(let c = 0; c < this.columns; c++){
                    if(this.currentBoard[r][c] == 1){
                        color = Colors.RED.hex;
                    }
                    else{
                        color = Colors.BLUE.hex;
                    }
                    ctx.fillStyle = color;
                    ctx.fillRect(r*this.cellSize, c*this.cellSize, this.cellSize, this.cellSize);
                    ctx.strokeRect(r*this.cellSize, c*this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
        //Set up game
        this.setUpGame = () => {
            this.eraseCanvas();
            this.arrayInitialization();
            this.arrayRandomize();
        }
        //Run game
        this.runGame = () => {
            console.log("runGame()")
            this.drawBoard();
        }
    }



//Create game piece shapes and colors with enums

//Spawn user controlled shape at top of game board

//Get user input

//Check for collisions

//Update board

//Update new user controlled shape

//Display upcoming shapes

//Check for completed rows

//Score tracker

}