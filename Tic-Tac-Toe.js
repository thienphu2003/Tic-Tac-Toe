let x = [];
let y = " ";
let cnt = 0;

for ( let i = 0; i < 5; i++) {
    x[i] = ['(.)', '(.)','(.)','(.)','(.)'];
    y += "<br><br>";
    for ( let j = 0; j < 5; j++) {
        y += x[i][j] + '&ensp;&ensp;&ensp;';
    }
}
document.getElementById("game").innerHTML = y;
function add() {
    y = " ";
    let a = Number(prompt("Nhap vi tri hang"));
    let b = Number(prompt("Nhap vi tri cot"));
    if (cnt % 2 === 0) {
        x[a][b] = "x";
    }
    else {
        x[a][b] = "o";
    }
    cnt++;
    for ( let i = 0; i < 5; i++) {
        y += "<br><br>";
        for ( let j = 0; j < 5; j++) {
            y += x[i][j] + '&ensp;&ensp;&ensp;';
        }
    }
    document.getElementById("game").innerHTML = y;
    for ( let i = 0; i < 5; i++) {
        for ( let j = 0; j < 5; j++) {
            if (x[i][j] === "x" && x[i][j + 1] === "x" && x[i][j + 2] === "x" || x[i][j] === "x" && x[i + 1][j] === "x" && x[i + 2][j] ==="x") {
                alert("Player-1 win");
            } else if (x[i][j] === "o" && x[i][j + 1] === "o" && x[i][j + 2] === "o" || x[i][j] === "o" && x[i + 1][j] === "o" && x[i + 2][j] === "o") {
                alert("Player-2 win");
            }
        }
    }
}
/* function addO() {
     let a = Number(prompt("Nhap vi tri hang"));
     let b = Number(prompt("Nhap vi tri cot"));
     x[a][b] = "O";
      for (let i = 0; i < 5; i++) {
         y += "<br><br>";
         for (let j = 0; j < 5; j++) {
             y += x[i][j] + '&ensp;&ensp;&ensp;';
         }
     }
     document.getElementById("game").innerHTML = y;
     for (i = 0; i < 5; i++) {
         for (j = 0; j < 5; j++) {
             if (x[i][j] === "O" && x[i][j + 1] === "O" && x[i][j + 2] === "O" || x[i][j] === "O" && x[i + 1][j] === "O" && x[i + 2][j] === "O" || x[i][j] === "O" && x[i + 1][j + 1] === "O" && x[i + 2][j + 2] === "O" || x[i][j] === "O" && x[i - 1][j - 1] === "O" && x[i - 2][j - 2] === "O") {
                 alert("Player-2 win");
            }
         }
     }
 }

 */