// For loop
// Big O: O(n) time, O(n) space (create a new array)
// Start from the last index and push each element into a new array

let nums = [1, 2, 3, 4, 5]

function reverse(nums: number[]): number[] {
    let reversedArray = [];
    for (let i = nums.length -1; i >= 0; i--) {
        reversedArray.push(nums[i])
    }
    return reversedArray
}

console.log(reverse(nums))

// Swapping first and last elements
// Big O: O(n) time, O(1) space (no extra array)
// Swap elements from the start and end moving towards the center

function reverseSwap(nums: number[]): number[] {
    let left = 0
    let right = nums.length -1

    while (left < right) {
        // Store left index value in temp variable
        let temp = nums[left]

        // Overwrite the left value with right
        nums[left] = nums[right]

        // Put the saved value into the right index
        nums[right] = temp

        left++
        right--
    }
    return nums
}

console.log(reverseSwap(nums))
