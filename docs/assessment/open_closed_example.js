class Rectangle {
  constructor(width, height) {
    this.type = "rectangle";
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.type = "circle";
    this.radius = radius;
  }
}

function processShapes(shapes) {
  return shapes.map((shape) => {
    if (shape.type === "rectangle") {
      return shape.width * shape.height;
    } else if (shape.type === "circle") {
      return Math.PI * shape.radius * shape.radius;
    }
    // else if for more shapes...
  });
}

// Solution
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

function processShapes(shapes) {
  return shapes.map((shape) => shape.area());
}
