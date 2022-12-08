const MIN_HEIGHT = 100;
const MAX_HEIGHT = 700;
let canvasWidth = 1100;
let canvasHeight = 760;

let tmp;
let arr = [];
var numberOfElements = 12;
let counter = 0;

let elementUpdate = false;
let startSwap = false;
let i = 0;
let renderDone = false;
let sortDone = false;
let shrink = 1.3;
let gap
let FPS = 120;
let waitTime = 1000; 
var speedMultiplier;

let widthControl = 3;
let swapCount = 0;

//runtime stats
let totalSwaps = 0;
let totalCompares = 0;

let minute = 00;
let second = 00;
let count = 00;

let colorArr = ['#f8ecfd', '#c264fe', '#a82ffc', '#7a08fa', '#4c00f7', '#1e00f5', '#0000f2', '#0000cf', '#0000ac', '#000089'];




//let timer = false;
/**testing */
let x1;
let x2;

let x = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  /*** for no number of elements will be hard coded to 15 
   * we will get his from user input later 
  */
  elementsSlider();
  refreshClicked = false;

  for (let i = 0; i < numberOfElements; i++) {
    arr.push(new Bar());
  }
  
  initArr();
  gap = Math.floor(arr.length / shrink);
  frameRate(120);

  initDocumentButtons();
}

async function draw() {
  // background('#0a0e31');
  background(0);
  
  renderArray();
  speedSlider();

  if (playClicked) {

    initDocumentCounters ();

    if (!sortDone) {
    
      if (!renderDone) {
        //render next frame of swap animation
        swap();
      } else if (i + gap < arr.length - 1) {
        //check for a swap at the next index
        i++;
        renderDone = false;
  
      } else {  //update gap when the old one has gone through the array
        //if the gap is 1 but no swaps were found after the traverse, the array is sorted
        if(swapCount == 0 && gap == 1){
          sortDone = true;
        }
        //reset index and swapCount since we're restarting the traverse
        i = 0;
        swapCount = 0;
        gap = Math.floor(gap / shrink);
        if (gap < 1) {
          gap = 1;
        }
        console.log("current gap: " + gap)
        renderDone = false;
      }
    } 

    if (pauseClicked) {
      stopAnimation();
    }

    changeColours();
  }

}




async function swap() {

  if (!startSwap) {
    x1 = arr[i].getxPos;
    x2 = arr[i + gap].getxPos;
  
    totalCompares++;
    highlightElements();
    startSwap = true;
  }

  if (arr[i].getHeight > arr[i + gap].getHeight) {
    animateSwap();
  } else {
    //if 2 elements dont need to be swapped then treat it as finishing the render
    noSwap();
    return;
  }

  if (arr[i].getxPos == x2 && arr[i + gap].getxPos == x1) {
    swapIndex();
  }

}

function swapIndex() {
  
  tmp = arr[i];
  arr[i] = arr[i + gap];
  arr[i + gap] = tmp;
  swapCount++;
  totalSwaps++;
  

  console.log("total swaps: " + totalSwaps)
  console.log("Total compares: " + totalCompares)

  //reset colors after a move
  arr[i].setColor = 255;
  arr[i + gap].setColor = 255;

  renderDone = true;
  startSwap = false;

  xRight = 0;
  xLeft = 0;
}


function animateSwap() {
  arr[i].setColor = '#0fbef9';
  arr[i + gap].setColor = '#37ff00';
  arr[i].moveRight(x2 - x1);
  arr[i + gap].moveLeft(x1 - x2);
}

async function highlightElements () {
  
  noLoop();
  arr[i].setColor = '#ff7823'; 
  arr[i].display();
  arr[i + gap].setColor = '#ff7823';
  arr[i + gap].display();
  await sleep(waitTime);
  loop();
}

function noSwap() {
  arr[i].setColor = 255;
  arr[i + gap].setColor = 255;

  console.log("Total compares: " + totalCompares)

  renderDone = true;
  startSwap = false;

  xRight = 0;
  xLeft = 0;
}


function renderArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i].display();
  }
}

function initArr() {
  let frameGap = 20; // this mean new canvas will be 1360px wide
  
  let maxWidth = ((canvasWidth - (frameGap * 2)) / arr.length);
  //let offset = ((canvasWidth ) / arr.length);
  //if width is max then offset = 0; / 

  for (let i = 0; i < arr.length; i++) {
    arr[i].setyPos = canvasHeight - arr[i].getHeight;
    arr[i].setxPos = i * maxWidth + frameGap;
    arr[i].setWidth = maxWidth / 2;
  }
}






