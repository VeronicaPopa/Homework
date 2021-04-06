function drawTriangle(rowLength) {
  let line = "";

  for (let i = 1; i <= rowLength; i++) {
    for (let j = 1; j <= i; j++) {
      line += "#";
    }

    line += "\n\n";
  }

  return line + "\n";
}

console.log(drawTriangle(10));