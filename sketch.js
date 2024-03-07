let strokes = [];
let currentStroke = [];
let Canvas;

const dom1 = document.getElementById("opt1")
const dom2 = document.getElementById("opt2")

const AI_MODEL_GOOGLE_TEACHABLE_MACHINE = "https://teachablemachine.withgoogle.com/models/e9bRaF7e8/" + "model.json";
const ml5builtinModel = "DoodleNet";

function setup() {
    console.log('ml5 version:', ml5.version);

    Canvas = createCanvas(400, 400);

    let btn = createButton('reset');
    btn.class('btn');
    btn.mousePressed(() => {
        clearCanvas();
    });

    // mjs AI model
    classifier = ml5.imageClassifier(ml5builtinModel, modelLoaded);
}

function clearCanvas() {
    background(255);
    strokes = []; // Clear the strokes array
}

function modelLoaded() {
    console.log('AI Model Loaded!');
    classifier.classify(Canvas, gotResults)
}

function draw() {
    background(255);

    // Draw existing strokes
    for (let i = 0; i < strokes.length; i++) {
        noFill();
        strokeWeight(16);
        beginShape();
        for (let j = 0; j < strokes[i].length; j++) {
            vertex(strokes[i][j].x, strokes[i][j].y);
        }
        endShape();
    }

    // Check if the mouse is within the canvas boundaries
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Draw the current stroke
        if (mouseIsPressed) {
            let point = {
                x: mouseX,
                y: mouseY
            };
            currentStroke.push(point);
        } else if (currentStroke.length > 0) {
            strokes.push([...currentStroke]); // Store a copy of the current stroke in the strokes array

            currentStroke = []; // Clear the current stroke
        }

        noFill();
        strokeWeight(16);
        beginShape();
        for (let i = 0; i < currentStroke.length; i++) {
            vertex(currentStroke[i].x, currentStroke[i].y);
        }
        endShape();
    }
}

function gotResults(e,results){
    if(e){
        console.error(e)
        return
    }
    console.log(results)
    dom1.innerText = `${results[0].label} => ${results[0].confidence}`
    dom2.innerText = `${results[1].label} => ${results[1].confidence}`
    classifier.classify(Canvas, gotResults)
}

