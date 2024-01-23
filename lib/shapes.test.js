const {Circle, Square, Triangle} = require("./shapes.js");

test('creates a red circle', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toBe('<circle cx="150px" cy="120px" r="75px" fill="red" />');
  });

test('creates a green square', () => {
  const shape = new Square();
  shape.setColor("green");
  expect(shape.render()).toBe('<rect x="75px" y="50px" width="150px" height="150px" fill="green" />');
});

test('creates a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});