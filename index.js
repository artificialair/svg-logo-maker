const fs = require("fs")
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes.js")

const questions = [
    {
        name: "text",
        message: "Enter up to 3 characters to be displayed on your logo."
    },
    {
        name: "textColor",
        message: "Enter a color for the text."
    },
    {
        type: "rawlist",
        name: "shape",
        message: "Choose a shape for your logo.",
        choices: [
            "Circle",
            "Square",
            "Triangle"
        ]
    },
    {
        name: "shapeColor",
        message: "Enter a color for the shape."
    }
]

const processQuestions = (answers) => {
    let shape;
    if (answers.shape === "Circle") {
        shape = new Circle(answers.shapeColor);
    } else if (answers.shape === "Square") {
        shape = new Square(answers.shapeColor);
    } else {
        shape = new Triangle(answers.shapeColor);
    }

    const svg = `
<svg width="300px" height="200px">
    ${shape.render()}
    <text x="50%" y="60%" font-size="50px" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`

    writeToFile("output.svg", svg);
}

function writeToFile(fileName, data) {
    if (!fs.existsSync("./output")) {
        fs.mkdirSync("./output");
    }

    fs.writeFileSync("./output/" + fileName, data);
    console.log("File has been created at ./output/" + fileName);
}

inquirer.prompt(questions)
    .then(answers => {
        processQuestions(answers);
    });