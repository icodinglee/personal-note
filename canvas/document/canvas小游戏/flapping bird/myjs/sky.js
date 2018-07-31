function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.x = option.x;
    this.y = option.y;
    this.width = option.skyImg.width;
    this.speed = 2;
}

Sky.prototype = {
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x < -this.width){
            this.x += 2*this.width;
        }
        this.ctx.drawImage(this.skyImg,this.x,0);
    }
}