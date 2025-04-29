let square = document.querySelector('#square')
let squarePath = square.querySelector('path')

console.log({ path: squarePath.getPathData({ normalize: true }) });

