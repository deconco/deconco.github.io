const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//const width = (canvas.width = window.innerWidth);
//const height = (canvas.height = window.innerHeight);


//class Spinner {
//    constructor(x, y, )
//}

class Slice {
    constructor(x, y, color, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

}

const new_slice = new Slice(20, 20, "red", 30);
new_slice.draw();