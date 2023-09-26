function threeSum(arr, target) {
// wri

	  S.sort((a, b) => a - b);

    // Initialize closestSum to a large value.
    let closestSum = Infinity;

    for (let i = 0; i < S.length - 2; i++) {
        let left = i + 1;
        let right = S.length - 1;

        while (left < right) {
            const currentSum = S[i] + S[left] + S[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum; // Exact match found.
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
