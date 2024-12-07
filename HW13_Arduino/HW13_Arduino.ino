int buttonD2 = 2; //strike red

int buttonD3 = 3; //Extinguish yellow

void setup() {
  pinMode(buttonD2, INPUT_PULLUP);
  pinMode(buttonD3, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int d2State = digitalRead(buttonD2);
  int d3State = digitalRead(buttonD3);

  if (d2State == HIGH) { //D2 ON
    Serial.println("ON");
  } else if (d3State == HIGH) { //D3 OFF
    Serial.println("OFF");
  }

  delay(100);
}