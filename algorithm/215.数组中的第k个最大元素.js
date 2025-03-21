/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const partition = (left, right, pivotIndex) => {
        const pivot = nums[pivotIndex];
        // 将把基准元素放在最后
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let sortIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                // 把所有小于 pivot 的元素都放在 left
                [nums[sortIndex], nums[i]] = [nums[i], nums[sortIndex]];
                sortIndex++;
            }
        }
        // 换回来
        [nums[right], nums[sortIndex]] = [nums[sortIndex], nums[right]];
        return sortIndex;
    }

    let left = 0, right = nums.length - 1;
    while (true) {
        // 随机选取一个索引
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        const newPivotIndex = partition(left, right, pivotIndex);
        if (newPivotIndex === nums.length - k) {
            return nums[newPivotIndex];
        }
        else if (newPivotIndex > nums.length - k) {
            right = newPivotIndex - 1;
        }
        else {
            left  = newPivotIndex + 1;
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    peek() {
        return this.heap[0];
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[parentIdx] = element;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}
var findKthLargest = function(nums, k) {
    let heap = new MinHeap();
    for (let i = 0; i < k; i++) {
        heap.push(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap.peek()) {
            heap.pop();
            heap.push(nums[i]);
        }
    }
    return heap.peek();
};
// @lc code=end

