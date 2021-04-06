function getDistance(points) {
  const distances = [];
  
  for(let i = 0; i < points.length; i++) {
    const partialDistance = (points[i][0].x - points[i][1].x) ** 2 + (points[i][0].y - points[i][1].y) ** 2;
    const distance = Math.sqrt(partialDistance);
    distances.push(distance);
  }
  
  return distances;
}

console.log(getDistance([
  [{x: 2, y: 3}, {x: 1, y: 4}],
  [{x: -1, y: 2}, {x: 2, y: -3}],
]));