var numSeleted = null;
var tileSeleted = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function()
{
    setGame();
}

function setGame()
{
    //appending number to select from 
    for (let i = 1; i <= 9; i++) {
        //<div id = "1" class = "number">1</div>
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i;
        num.addEventListener("click", selectNumber);
        num.classList.add("number");
        document.getElementById("digits").appendChild(num);
    }

    //appending board
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < 9; j++) {
            let tile = document.createElement("div");
            tile.id = i.toString() + '-' + j.toString();
            if (board[i][j] != '-')
            {
                tile.innerText = board[i][j];
                tile.classList.add("board-color");
            } 
            else
            {
                tile.classList.add("solution-board-color");
            }
            if (i == 2 || i == 5)
            {
                tile.classList.add("box-border-left");
            }
            else if (i != 8)
            {
                tile.classList.add("bottom-border");
            }

            if (j == 2 || j == 5)
            {
                tile.classList.add("box-border-right");
            }
            else if (j != 8)
            {
                tile.classList.add("right-border");
            }
            tile.classList.add("tiles");   
            tile.addEventListener("click", solutionNumber);        
            document.getElementById("board").appendChild(tile);            
        }
    }   
}

function selectNumber()
{   
    if (numSeleted != null)
    {
        numSeleted.classList.remove("number-selected");
    }
    numSeleted = this;
    numSeleted.classList.add("number-selected");
}

function solutionNumber()
{
    if (numSeleted)
    {
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (this.innerText != "" && solution[r][c] != numSeleted.id)
        {
            this.innerText = numSeleted.id;
        }

        this.innerText = numSeleted.id;
        if (solution[r][c] != numSeleted.id)
        {
            errors += 1;
            document.getElementById("error-count").innerText = errors;
        }

    }
    
}


