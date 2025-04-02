const arr = [1,2,3,4,5,6]


const twoSum = function(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        const first = nums[i]

        for(let j = i + 1; j < nums.length; j ++) {
            const second = nums[j]

            if (target === first + second) {
                return [nums[i], nums[j]]
            }
        }
    }

    return []

};

const res = twoSum([2,7,11,15], 9)
console.log(res);