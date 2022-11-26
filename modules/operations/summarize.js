module.exports = function summarize (numbers) {
  let s = 0
  for (const number of numbers) {
    s += Number(number)
  }
  return s
}