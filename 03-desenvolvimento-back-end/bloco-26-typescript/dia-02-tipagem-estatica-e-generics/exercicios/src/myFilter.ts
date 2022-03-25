type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = []

  array.forEach((_, i) => {
    if (callback(array[i], i, array)) {
      newArray.push(array[i])
    }
  })

  return newArray
}

console.log('log 1:', myFilter([1, 2, 3], (item) => {
  return item < 3
}))

console.log('log 2:', myFilter(["a", "b", "c"], (item) => {
  return item !== "a"
}))