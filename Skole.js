const canvas = document.getElementById("Canada")
const ctx = canvas.getContext("2d")
const img = document.getElementById("img")
const Ninja_right = document.getElementById("Ninja")
const Ninja_left = document.getElementById("Ninja_left")

const Bomb_left = document.getElementById("Bomb_left")
const Bomb_right = document.getElementById("Bomb_right")

const Training = document.getElementById("Tain")
const Fight = document.getElementById("Fogt")

let x = canvas.width/2 - 5;
let y = canvas.height/2 - 5;
let vx = 0;
let vy = 0;

let exx = canvas.width - 30;
let eyy = 10;

let dash_left = false;
let dash_right = false;
let dash_up = false;
let dash_down = false;

let ex = 0;
let ey = 0;

let bx = 0;
let by = 0;

let Bomber = false;

let Bomb = false;

let lost = false;

let bomb_went_kaboom = false;

let fight = false;
let Tran = false;

function buttons(){
    ctx.drawImage(Fight, 50, 10, 50, 20);
    ctx.drawImage(Training, 10, 10, 20, 20);
};

function Player(){
    x += vx;
    y += vy;
    ctx.fillStyle = "RED";
    if (x + 20 >= canvas.width){
        x = canvas.width - 20;
    };
    if (x <= 0){
        x = 0;
    };
    if (y + 20 >= canvas.height){
        y = canvas.height - 20;
    };
    if (y <= 0){
        y = 0;
    };

    if(vx == 2){
        Bomb = false;
    };
    if(vx == -2){
        Bomb = true;
    };

    if(Bomb == false){
        ctx.drawImage(Bomb_right, x, y, 20, 20)
    }

    if(Bomb == true){
        ctx.drawImage(Bomb_left, x, y, 20, 20)
    }

    if(x >= exx && x <= exx + 20){
        if(y >= eyy && y <= eyy + 20){
            lost=true;
        }
    }

    if(x + 20 >= exx && x + 20 <= exx + 20){
        if(y + 20 >= eyy && y + 20 <= eyy + 20){
            lost=true;
        }
    }

    if(x >= exx && x <= exx + 20){
        if(y + 20 >= eyy && y + 20 <= eyy + 20){
            lost=true;
        }
    }

    if(x + 20 >= exx && x + 20 <= exx + 20){
        if(y + 20 >= eyy && y + 20 <= eyy + 20){
            lost=true;
        }
    }
}

function bomb(){
    ctx.drawImage(img, bx, by, 10, 10);
    if(bx >= exx && bx <= exx + 20){
        if(by >= eyy && by <= eyy + 20){
            bomb_went_kaboom = true;
        };
    };

    if(bx + 10 >= exx && bx + 10 <= exx + 20){
        if(by >= eyy && by <= eyy + 20){
            bomb_went_kaboom = true;
        };
    };

    if(bx >= exx && bx <= exx + 20){
        if(by + 10 >= eyy && by + 10 <= eyy + 20){
            bomb_went_kaboom = true;
        };
    };

    if(bx + 10 >= exx && bx + 10 <= exx + 20){
        if(by + 10 >= eyy && by + 10 <= eyy + 20){
            bomb_went_kaboom = true;
        };
    };
};

function enemy(){
    exx += ex;
    eyy += ey;
    ctx.fillStyle = "grey";
    if(ex > -0.5){
        ctx.drawImage(Ninja_right,exx, eyy, 20, 20);
    };
    if(ex == -1){
        ctx.drawImage(Ninja_left,exx, eyy, 20, 20);
    }

    if(Tran == true){
    if(x > exx+5){
        ex = 1;
    };
    if(x < exx+5){
        ex = -1;
    };

    if(y > eyy+5){
        ey = 1;
    };
    if(y < eyy+5){
        ey = -1;
    };
}
};

function game_uppdater(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    buttons();
    if(lost == true){
        ctx.font = "30px Arial"
        ctx.fillText("Ninja Won", canvas.width/3.6, canvas.height/2)
        setTimeout(() => {
            console.log("h"),
            x = canvas.width/2 - 5,
            y = canvas.height/2 - 5,
            vx = 0,
            vy = 0,
            
            exx = canvas.width - 30,
            eyy = 10,
            
            ex = 0,
            ey = 0,
            
            bx = 0,
            by = 0,
            
            Bomber = false,
            
            Bomb = false,
            
            lost = false,
            
            bomb_went_kaboom = false
        }, 3000);
    }
    if(bomb_went_kaboom == true){
        ctx.font = "30px Arial"
        ctx.fillText("Bomber Won", canvas.width/5, canvas.height/2)
        setTimeout(() => {
            console.log("h"),
            x = canvas.width/2 - 5,
            y = canvas.height/2 - 5,
            vx = 0,
            vy = 0,
            
            exx = canvas.width - 30,
            eyy = 10,
            
            ex = 0,
            ey = 0,
            
            bx = 0,
            by = 0,
            
            Bomber = false,
            
            Bomb = false,
            
            lost = false,
            
            bomb_went_kaboom = false
        }, 3000);
    };
    if(lost == false){
    if(bomb_went_kaboom == false){
    Player();
    enemy();
    if(Bomber == true){
        bomb();
    };
};
};
    requestAnimationFrame(game_uppdater, 1000 / 60);
};
game_uppdater();

addEventListener("keydown", function(e){
    if (e.code == 'KeyW') vy = -2;
    if (e.code == 'KeyA') vx = -2;
    if (e.code == 'KeyS') vy = 2;
    if (e.code == 'KeyD') vx = 2;

    if (e.code == 'ArrowDown') if(fight == true){ey = 1};
    if (e.code == 'ArrowUp') if(fight == true){ey = -1};
    if (e.code == 'ArrowLeft') if(fight == true){ex = -1};
    if (e.code == 'ArrowRight') if(fight == true){ex = 1};
    if (e.code == 'Space')Bomber = true, bx = x, by = y;
    if (e.code == 'Enter'){
        console.log("bing chilling");
        if(ex < -0.5){dash_left = true};
        if(ex > 0.5){dash_right = true};
        if(ey < -0.5){dash_up = true};
        if(ey > 0.5){dash_down = true};
    setTimeout(() => {
        if(dash_left == true){exx -= 10, dash_left = false};
        if(dash_right == true){exx += 10, dash_right = false};
        if(dash_up == true){eyy -= 10, dash_up = false};
        if(dash_down == true){eyy += 10, dash_down = false};
    }, 500);
}
});

addEventListener("keyup", function(e){
    if (e.code == 'KeyW') vy = 0;
    if (e.code == 'KeyA') vx = 0;
    if (e.code == 'KeyS') vy = 0;
    if (e.code == 'KeyD') vx = 0;

    if (e.code == 'ArrowDown') if(fight == true){ey = 0};
    if (e.code == 'ArrowUp') if(fight == true){ey = 0};
    if (e.code == 'ArrowLeft') if(fight == true){ex = 0};
    if (e.code == 'ArrowRight') if(fight == true){ex = 0};
});

document.onmousedown = (event) => {
    const {
      clientX,
      clientY
    } = event
    console.log(clientX, clientY)
    if(clientX >= 55 && clientX <= 140){
        if(clientY >= 55 && clientY <= 140){
            Tran = true;
            if(fight == true){
                fight = false;
            }
        }
    }

    if(clientX >= 235 && clientX <= 455){

        if(clientY >= 55 && clientY <= 140){
            fight = true;
            ex = 0;
            ey = 0;
            if(Tran == true){
                Tran = false;
            }
        }
    }
};