function Land(option){
    this.ctx = option.ctx;
    this.landX = option.landX;
    this.landY = option.landY;
    this.landImg = option.landImg;
    this.landWidth = option.landImg.width;
    this.landSpeed = 2;
}

Land.prototype={
    constructor:Land,
    drawLand:function(){
        this.landX -= this.landSpeed;
        if(this.landX<-this.landWidth){
            this.landX+=4*this.landWidth;
        }
        this.ctx.drawImage(this.landImg,this.landX,this.landY);
    }
}