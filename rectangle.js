class Rectangle{
    constructor(x,y,area,perimeter) {
        this.x = x;
        this.y = y;
        this.area = area;
        this.perimeter = perimeter;
    }
    renderRect(canvas){
        let pen = rectangle.getContext('2d');
        pen.beginPath();
        pen.rect(this.x,this.y,this.area,this.perimeter);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }


}