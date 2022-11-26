module.exports = function multiply(numbers) {
  let s = 1
  for (const number of numbers) {
    s *= Number(number)
  }
  return s
}