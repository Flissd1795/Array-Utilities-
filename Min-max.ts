// Time complexity: O(n) (looks at every element at least once)
// Space complexity: O(1)
// Single traversal

let numbers = [5, 7, 2, 6]

function findMinAndMax(numbers: number[]): string {
    let minNum = numbers[0]
    let maxNum = numbers[0]
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minNum) {
            minNum = numbers[i]
        }
        if (numbers[i] > maxNum) {
            maxNum = numbers[i]
        }
    }
    return `Minimum number: ${minNum} \nMaximum number: ${maxNum}`
}

console.log(findMinAndMax(numbers))