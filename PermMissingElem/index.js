//First O(n*n) solution witch is not suitable for big large fields
function solution(A) {
	let missingElem = undefined
	let iExists
	for (let i = 1; i <= (A.length + 1); i++) {
		iExists = false
		for (let j = 0; j < A.length; j++) {
			const element = A[j];
			if(element === i) {
				iExists = true
				break
			}
		}

		if(!iExists) {
			missingElem = i
			break
		}
	}
	return missingElem
}

console.log("solution: " ,solution([7,2,3,5,6,4,1]))

function solutionPerformance(A) {
	let missingElem = undefined
	let sumOfA = A.reduce((prev, curr) => {
		return prev + curr
	}, 0)
	const n = A.length
	//According of basic knowledge that that sum of range 1..N is computed by formula (N * (N +1)) / 2
	let sumOfRange = ((n + 1)  * (n + 2)) / 2

	missingElem = sumOfRange - sumOfA

	return missingElem
}

console.log("solution performance: ", solutionPerformance([7,2,3,5,6,1]))