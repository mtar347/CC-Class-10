let sound
// adding slider
let slider


async function setup() {
  createCanvas(windowWidth, windowHeight);

  // use the p5 dom to make a paragraph
  // can he highlighted
  let p = createP('added with p5')
  p.center()
  p.style('background-color', 'red')
  sound = await loadSound('phone.mp3')
  // sound.play()
  // sound.loop()
  // createSlider(min, max, default)
  slider = createSlider(0, 10, 0.5)
  slider.position(20, 40)
  slider.changed(newSliderValue)
  
}

function draw() {
  background(220);
  // this text cannot be highlighted and doesnt have the css styling
  text('this is p5 text', 20, 20)
}
// under draw
function newSliderValue(){
  print(slider.value())
  sound.rate(slider.value())
}