function Bird(option) {
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.birdX = option.birdX;
    this.birdY = option.birdY;
    this.birdW = option.birdImg.width / 3;
    this.birdH = option.birdImg.height;
    this.g = 0.0003;
    this.birdSpeed = 0;
    this.maxAngle = 45;
    this.maxSpeed = 0.45;
    this.birdIndex = 0;
    this.x = 0;
}

Bird.prototype = {
    constructor: Bird,
    drawBird: function (offsetTime) {
        //让当前画布的变换不影响其他的内容
        this.ctx.save();
        //计算单位时间内的位移差
        var offsetY = this.birdSpeed * offsetTime + this.g * offsetTime * offsetTime / 2;
        this.birdSpeed = this.birdSpeed + this.g * offsetTime;

        this.birdY += offsetY;
        //计算当前需要旋转的角度
        var currentAngle = this.maxAngle * this.birdSpeed / this.maxSpeed;
        if (currentAngle > 45) {
            currentAngle = 45;
        }
        this.x = this.birdIndex * this.birdW;
        //实现偏移
        this.ctx.translate(this.birdX + this.birdW / 2, this.birdY + this.birdH / 2);
        //实现旋转
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        //9参绘图
        this.ctx.drawImage(this.birdImg, this.x, 0, this.birdW, this.birdH, - this.birdW / 2, - this.birdH / 2, this.birdW, this.birdH);


        this.birdIndex++;
        if (this.birdIndex >= 3) {
            this.birdIndex = 0;
        }
        this.ctx.restore();
    }
}