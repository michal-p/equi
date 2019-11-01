/**
 * Return number of unordered pairs of if intersecting discs
 * @param {Integers array} A 
 */
function solution(A) {
	let n = A.length
	let sumCounters = 0
	for (let i = 0; i < A.length; i++) {
		let radius = A[i];
		for (let j = 1; j <= radius; j++) {
			if(radius > 0) {
				if(radius > A[i+j]) sumCounters++
				if(radius >= A[i-j]) sumCounters++
				//hranicny bod kruhu prehladavam okolie +1
				if(j === radius) {
					if(radius > A[i+j+1] && A[i+j+1] > 0) sumCounters++
					if(radius >= A[i-j-1] && A[i-j-1] > 0) sumCounters++
				}
			}
		}
	}
	return sumCounters
}
//console.log("solution: ", solution([1,5,2,1,4,0]))
//console.log("solution: ", solution([0,1,2,0,1,3]))
console.log("solution: ", solution([3, 3, 3, 5, 1, 2]))//Tu by mal vratit 15 a nie 14 ako vracia

// function solutionMK(A) {
//   let circleEndPoints = A.map((a, i) => {
//     return [[i - a, true], [i + a, false]]
//   })
//   //circleEndPoints.sort()

//   console.log("maslo: ", circleEndPoints.sort((a, b) => {
// 		let aa = a
// 		let bb = b
// 		return a[0][0] <= b[0][0]
//   }))
//   return true
// }

solutionMK([3, 3, 3, 5, 1, 2])