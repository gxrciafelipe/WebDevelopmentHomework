function drawTriangle(triangleSize) {
    if (triangleSize < 1){
        console.log("");
    }
    else{
    for (let i=1; i<=triangleSize; i++){
        console.log("*".repeat(i)+"");
    }
    }
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);


// Do NOT remove the following line
export default drawTriangle;