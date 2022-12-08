let xLeft = 0;
let xRight = 0;
let defaultSpeed = 6;
let animSpeed = defaultSpeed;
let heightsArr = [];
let moveDone;

class Bar {
    constructor() {

        // for (let i = 0; i < numberOfElements; i++) {
        //     heightArr.push(i + 1);
        // }
        // shuffle(heightArr);
        // let randHeight = heightArr[random()];

        this.height = random(MIN_HEIGHT, MAX_HEIGHT);
        //this.height = randHeight;
        this.xPos = 0;
        this.yPos = 0;
        this.width = 0;
        this.color = '#FFFFFF';
    }

    display() {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
    }

    moveRight(xDisp) {

        this.display();
        if(xRight < xDisp) {
            //make slowdown loop acceleration
            if(xRight + animSpeed > xDisp) {
                xRight++;
                this.setxPos = x2;

            } else {
                xRight +=animSpeed;
                this.setxPos = this.getxPos + animSpeed;
            }
        } 
    }

    moveLeft(xDisp) {

        this.display();
        if(xLeft > xDisp) {
            
            //make slowdown loop acceleration
            if(xLeft - animSpeed < xDisp){
                xLeft--;
                this.setxPos = x1;
            } else{
                xLeft-=animSpeed;
                this.setxPos = this.getxPos - animSpeed;
            }
        }

      
    }

    get getHeight() {
        return this.height;
    }

    get getxPos () {
        return this.xPos;
    }

    get getyPos () {
        return this.yPos;
    }

    get getColor () {
        return this.color;
    }

    /**
     * @param {number} height
     */
    set setHeight(height) {
        this.height = height;
    }
    /**
     * @param {number} floorPosition
     */
    set setxPos (floorPosition) {
        this.xPos = floorPosition;
    }
    /**
     * @param {number} yPosition
     */
    set setyPos (yPosition) {
        this.yPos = yPosition;
    }
    /**
     * @param {number} width
     */
    set setWidth (width) {
        this.width = width;
    }
    /**
     * @param {any} r
     * @param {any} newColor
     */
    set setColor (newColor) {
        this.color = newColor;
    }

}



