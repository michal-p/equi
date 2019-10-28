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