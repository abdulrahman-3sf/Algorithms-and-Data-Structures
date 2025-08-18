function area(r) {
    let a = Math.PI * (r * r);
    return a;
}

console.log(area(10));

function parallelogramArea(b, h) {
    let a = b * h;
    return a;
}

console.log(parallelogramArea(10, 5));

function trapezoidArea(a, b, h) {
    let A = (a + b) / 2 * h;
    return A;
}

console.log(trapezoidArea(10, 20, 5));