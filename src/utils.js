export function getRandomNumber(min, max) {
  const limit = max - min + 1
  return String.fromCharCode(Math.floor(Math.random() * limit) + min)
}
