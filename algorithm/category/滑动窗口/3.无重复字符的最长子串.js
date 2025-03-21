/**
 * 计算无重复最长子串的长度
 */
function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            // 注意这里是从左边开始删除
            set.delete(s[left]);
            left++;
        }

        set.add(s[i]);
        max = Math.max(max, i - left + 1);
    }
    return max;
}

/**
 * 避免了一些重复的遍历
 */
var lengthOfLongestSubstring = function (s) {
    const map = {};
    let left = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            left = Math.max(left, map[s[i]] + 1);
        }
        map[s[i]] = i;
        max = Math.max(max, i - left + 1);
    }
    return max;
};