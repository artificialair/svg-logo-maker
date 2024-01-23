class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(newColor) {
        this.color = newColor
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150px" cy="120px" r="75px" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="75px" y="50px" width="150px" height="150px" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle};
