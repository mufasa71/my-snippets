export function setupCounter(element) {
  let counteerr = 0
  const setCounter = (count) => {
    counteerr = count
    element.innerHTML = `count is ${counteerr}`
  }
  element.addEventListener('click', () => setCounter(counteerr + 1))
  setCounter(0)
}
