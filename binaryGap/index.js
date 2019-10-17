function binaryGap(N) {
  let array = N.toString(2).split('').map(b => Number(b))
  let gapSize = 0
  let maxGap = 0
  array.forEach(a => {
      if(a) {
          if(gapSize > maxGap) maxGap = gapSize
          gapSize = 0
      } else {
          gapSize++
      }
  })
  return maxGap
}
console.log("binaryGap: ", binaryGap(1041))