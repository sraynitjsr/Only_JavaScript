function calculateArea({ shape = 'rectangle', width = 0, height = 0 } = {}) {
    let area;
    switch (shape) {
        case 'rectangle':
            area = width * height;
            break;
        case 'circle':
            area = Math.PI * Math.pow(width, 2);
            break;
        default:
            area = 0;
            break;
    }
    return area;
}

console.log("Area with no parameters:", calculateArea());
console.log("Area of a rectangle (5x10):", calculateArea({ width: 5, height: 10 }));
console.log("Area of a circle (radius 4):", calculateArea({ shape: 'circle', width: 4 }));
