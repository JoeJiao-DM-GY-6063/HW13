# HW13 Fire Match Interactive System
This is an extension of my assignment in HW05！
This project demonstrates an interactive fire match system using p5.js and Arduino. The system simulates a matchstick with an adjustable flame size and color. The flame can be turned on and off via physical buttons, sending serial data between the Arduino and p5.js

# overview
The system consists of:

A matchstick simulation in p5.js that visually displays a match and a flame.
Arduino controls where two buttons are used to turn the flame on and off, sending commands to the p5.js sketch.
When the flame is turned on, it gradually grows larger and brighter. When the flame is turned off, it gradually shrinks and fades away. The interaction is powered by serial communication between Arduino and p5.js.

# Components
p5.js Sketch
The p5.js code listens for serial data and updates the flame state accordingly:

ON command: Turns the flame on (grows and brightens).
OFF command: Turns the flame off (shrinks and fades).
Key Features:

Serial connection: Reads serial data from Arduino.
Interactive flame: Changes size and brightness based on serial data.
Matchstick simulation: Displays a matchstick and flame on the canvas.
Arduino Code
The Arduino code reads the state of two physical buttons:

Button 1 (D2)（red）: Sends "ON" to p5.js when pressed (turns the flame on).
Button 2 (D3)（yellow）: Sends "OFF" to p5.js when pressed (turns the flame off)



