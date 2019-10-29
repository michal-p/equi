/**
 * Return count of divisibles in the range
 * { i : A ≤ i ≤ B, i mod K = 0 }
 * @param {int} A 
 * @param {int} B 
 * @param {int} K 
 */
function solution(A, B, K) {
	let minVal = Math.floor((A + K - 1) / K ) * K
	if(minVal > B) return 0
	
	return Math.floor((B - minVal) / K) + 1
}

console.log("solution: ", solution(10, 10, 20))

function solutionTheBest(A, B, K) {
	let diffs = B/K - A/K

	if (A % K == 0) diffs += 1

	return diffs
}

console.log("solutionTheBest: ", solutionTheBest(10, 10, 20))