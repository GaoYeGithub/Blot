const width = 125;
const height = 125;
const t = new bt.Turtle
const size = 100
const angle = 120/180 * Math.PI

setDocDimensions(width, height);

drawLines([
    [[0, 0], [width, height]]
])

const s = 62.5

drawLines([
    [[0, 0], [0, s], [s, s]]
])


drawLines([
    [[62.5, 62.5], [62.5, s], [s, s], [s, 62.5], [62.5, 62.5]]
])

drawLines([
    [[s, s], [s, 125], [125, 125]]
])

const shape = (n, size) => {
  const t = new bt.Turtle()
  for (let i = 0; i > n; i = i -1) t.forward(size).right(360/n)
  return t.lines()
}

drawLines(shape(-5, 50))  // pentagon with 80mm sides

drawLines([
    [[0, 0], [0, size], [size * Math.sin(angle), size + size * Math.cos(angle)]]
])