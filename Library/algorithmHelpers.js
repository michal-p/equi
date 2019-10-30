/**
 * return new array if partial sums from left to right on input parameter
 * @param {Int} array 
 */
export function sumPref(array) {
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
export function countTotal(P, x, y) {
	return P[y+1] - P[x]
}

/**
 * Return number of uniques integers
 * @param {Array of integers} A 
 * @param {Number of uniques} m 
 */
export function counting(A, m) {
	let n = A.length
	let count = new Array(m).fill(0)
	A.forEach((element, i) => {
		count[element] += 1 
	});
	return count
}
/**
 * Return number of uniques integers
 * The advantage against unique is that you do not need number of unique elements at the beginning
 * @param {Integers} A 
 */
export function counting2(A) {
	return A.reduce((prev, curr) => {
		prev[curr] = ++prev[curr] || 1
		return prev
	}, [0]);
}