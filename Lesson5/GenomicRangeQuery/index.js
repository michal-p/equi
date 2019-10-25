/**
 * Complexity O(n*m) implementation
 * Return and array of lowest impact in each part of DNA string
 * @param {String} S 
 * @param {Array of integers which declares left part of DNA} P 
 * @param {Array of integers which declares right part of DNA} Q 
 */
function solution(S, P, Q) {
	let impacts = ['', 'A', 'C', 'G', 'T']
	let smallImpactsArray = []
	P.forEach((element, i) => {
		let smallestImpact = 4
		let left = element
		let right = Q[i]
		
		for (let i = left; i <= right; i++) {
			let index = impacts.indexOf(S[i])
			if(index < smallestImpact) smallestImpact = index
    }
		smallImpactsArray.push(smallestImpact)
	});
	return smallImpactsArray
}

console.log("solution: ", solution('CAGCCTA', [2,5,0], [4,5,6]))

/**
 * return new array if partial sums from left to right on input parameter
 * @param {Int} array 
 */
function sumPref(array) {
	return array.split('').reduce((prev, curr, i) => {
		i++
		prev[i] = prev[i-1] + curr
		return prev
	}, [''])
}

//Sum prefs in for loop
// function sumPref1(array) {
// 	let prefs = [''];
// 	for (let i = 1; i < array.length + 1; i++) {
// 		prefs[i] = (prefs[i-1] || '') + array[i-1]
// 	}
// 	return prefs
// }

/**
 * return Sum of {x..y} range of Array
 * @param {array} P 
 * @param {leftRange} x 
 * @param {rightRange} y 
 */
function substringOfDna(P, x, y) {
	return P[y+1].substring(x, y+1)
}

/**
 * Complexity O(n*m) implementation but better performance in large numbers
 * Return and array of lowest impact in each part of DNA string
 * @param {String} S 
 * @param {Array of integers which declares left part of DNA} P 
 * @param {Array of integers which declares right part of DNA} Q 
 */
function solutionWithPrefixes(S, P, Q) {
	let impacts = ['', 'A', 'C', 'G', 'T']
	let smallImpactsArray = []
	let prefixes = sumPref1(S)

	P.forEach((element, i) => {
		let left = element
		let right = Q[i]
		let dnaPart = substringOfDna(prefixes, left, right).split('')
		let theSmallestImpactInDnaPart = dnaPart.reduce((p,c) => c < p ? c : p)
		smallImpactsArray[i] = impacts.indexOf(theSmallestImpactInDnaPart)
	})
	return smallImpactsArray 
}

console.log("solutionWithPrefixes: ", solutionWithPrefixes('CAGCCTA', [2,5,0], [4,5,6]))