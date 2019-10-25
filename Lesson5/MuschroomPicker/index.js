/**
 * return new array if partial sums from left to right on input parameter
 * @param {Int} array 
 */
function sumPref(array) {
	return array.reduce((prev, curr, i) => {
		i++
		prev[i] = prev[i-1] + curr
		return prev
	}, [0])
}

/**
 * return Sum of {x..y} range of Array
 * @param {array} P 
 * @param {leftRange} x 
 * @param {rightRange} y 
 */
function countTotal(P, x, y) {
	return P[y+1] - P[x]
}

/**
 * Return max found mushrooms in "m" steps
 * @param {Mushroom field - integers} A 
 * 
 * 
 * @param {Steps - int} m 
 * @param {Start position - int} k 
 */
function mushrooms(A, m, k) {
	let n = A.length
	let result = 0
	let sumPrefixes = sumPref(A)

	for (let p = 0; p < Math.min(m, k) + 1; p++) {
		let leftPos = k - p
		let rightPos = Math.min(n-1, Math.max(k, k + m - 2 * p))
		result = Math.max(result, countTotal(sumPrefixes, leftPos, rightPos))
	}

	for (let p = 0; p < Math.min(m + 1, n - k); p++) {
		let rightPos = k + p
		let leftPos = Math.max(0, Math.min(k, k - (m - 2 * p)))
		result = Math.max(result, countTotal(sumPrefixes, leftPos, rightPos))
	}
	return result
}

console.log("m: ", mushrooms([2,3,7,5,1,3,9], 6, 4))