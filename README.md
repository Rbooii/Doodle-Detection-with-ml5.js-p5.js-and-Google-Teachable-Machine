# Doodle Detection with ml5.js, p5.js and Google Teachable Machine

*p5.js* => p5.js a JS client-side library for creating graphic and interactive experiences, based on the core principles of Processing.

*ml5.js* => ml5.js is an open source project developed and maintained by NYU's Interactive Telecommunications/Interactive Media Arts program and by artists, designers, students, technologists, and developers from all over the world.

*Google TM* => Teachable Machine is a web-based tool that makes creating machine learning models fast, easy, and accessible to everyone.

## How my Code works ? (you may ask)
my code is a simple drawing application that uses the ml5 library to integrate machine learning for image classification. Users can draw on the canvas with the help of p5.js library to make it easy, and the application uses a pre-trained model (either from Google Teachable Machine or a built-in DoodleNet) to classify the drawn image. The classification results, including labels and confidence levels, are displayed in two HTML elements.

Here's a breakdown:

### 1. Canvas and Drawing:

Users can draw on a canvas with the mouse.
The drawn strokes are stored in the strokes array.

### 2. Reset Button:

There is a "reset" button that clears the canvas when clicked.

### 3. Machine Learning Integration:

Two machine learning models can be used: Google Teachable Machine or a built-in DoodleNet.
The ml5 library is employed for image classification.

### 4. Drawing and Classification Interaction:

As users draw, the application continuously classifies the drawn content using the selected machine learning model.
The current stroke being drawn is displayed on the canvas in real-time.

### 5. Results Display:

The classification results, including labels and confidence levels, are displayed in two HTML elements (dom1 and dom2).
The results are updated as the user draws, providing instant feedback.

### 6. Continuous Classification:

The application continuously classifies the drawn content, allowing users to see how the model interprets their drawing at different stages.

### 7. Error Handling:

Errors during classification are logged to the console, providing information in case of any issues.


# How can I tryy??
its pretty simple you can just 

```bash
git clone (This repo link)
```

annnd thats it!!
you can just open *index.html* wait for the model to load and there you go!

## ScreenShot!
![App Screenshot](https://firebasestorage.googleapis.com/v0/b/readbaas.appspot.com/o/Screenshot%202024-03-07%20164649.png?alt=media&token=7e7b21a0-7ac6-4503-8977-98aaaf379a16 "Optional Title")
