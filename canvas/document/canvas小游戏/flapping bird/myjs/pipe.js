function Pipe(option) {
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.bottomImg = option.bottomImg;
    this.pipeX = option.pipeX;
    this.topY = 0;
    this.bottomY = 0;
    this.width = option.topImg.width;
    this.height = option.topImg.height;
    this.speed = 2;
    this.space = 150;
    /*先初始化管道的坐标*/
    this.getY();
}

Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.pipeX -= this.speed;
        if (this.pipeX < - 3 * this.width) {
            this.pipeX += 3 * this.width * 6;
            this.getY();
        }
        /*绘制上面的管道*/
        this.ctx.drawImage(this.topImg, this.pipeX, this.topY, this.width, this.height);
        /*绘制上方管道对应的路径*/
        //this.ctx.fillRect(this.pipeX,this.topY,this.width,this.height);
        this.ctx.rect(this.pipeX, this.topY, this.width, this.height);
        /*绘制下面的管道*/
        this.ctx.drawImage(this.bottomImg, this.pipeX, this.bottomY, this.width, this.height);
        /*绘制下方管道对应的路径*/
        //this.ctx.fillRect(this.pipeX,this.bottomY,this.width,this.height);
        this.ctx.rect(this.pipeX, this.bottomY, this.width, this.height);
    },
    getY: function () {
        this.topY = - (Math.random() * 250 + 120);
        this.bottomY = this.topY + this.height + this.space;
    }
}