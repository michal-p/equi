import { sumPref, countTotal } from	'./algorithmHelpers'

let A = [4,2,2,5,1,5,8]

console.log("sumPref: ", sumPref(A))
console.log("countTotal: ", countTotal(sumPref(A), 1, 4))

/**
 * Return the smallest starting position of such a slice
 * @param {Array of integers} A 
 */
function solution(A) {
	let minAvg = undefined
	let startingPosition = 0
	let prefs = sumPref(A)
	A.forEach((element, i) => {
		for (let j = i + 1; j < A.length; j++) {
			let total = countTotal(prefs, i, j)
			let avg = total / (j-i+1)
			if(avg < minAvg) {
				minAvg = avg
				startingPosition = i
			} else {
				minAvg = minAvg || avg
			}
		}
	})
	return startingPosition
}

/**
 * Return the smallest starting position of such a slice
 * @param {Array of integers} A 
 * link to solution https://www.martinkysel.com/codility-minavgtwoslice-solution/
 */
function solutionB(A) {
	let minIdx = 0
	let minVal = 10001
	let n = A.length
	A.forEach((element, i) => {
		if((A[i] + A[i+1])/2 < minVal) {
			minIdx = i
			minVal = (A[i] + A[i+1])/2
		}
		if(i < n-2 && (A[i] + A[i+1] + A[i+2])/3 < minVal) {
			minIdx = i
			minVal = (A[i] + A[i+1] + A[i+2])/3
		}
	})

	return minIdx
}

console.log("solutionB: ", solutionB([5,0,0,0,-5,-10]))