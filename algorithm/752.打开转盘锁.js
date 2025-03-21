/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const queue = ['0000'];
    const visit = new Set();
    let depth = 0;
    visit.add('0000');
    const turnUp = (str, index) => {
        const res = str.split('');
        if (str[index] === '9') {
            res[index] = '0';
        }
        else {
            res[index] = String(+str[index] + 1);
        }
        return res.join('');
    };

    const turnDown = (str, index) => {
        const res = str.split('');
        if (str[index] === '0') {
            res[index] = '9';
        }
        else {
            res[index] = String(+str[index] - 1);
        }
        return res.join('');
    };

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const cur = queue.shift();

            if (cur === target) {
                return depth;
            }

            if (deadends.includes(cur)) {
                continue;
            }

            for (let j = 0; j < 4; j++) {
                const up = turnUp(cur, j);
                if (!visit.has(up)) {
                    visit.add(up);
                    queue.add(up);
                }

                const down = turnDown(cur, j);
                if (!visit.has(down)) {
                    visit.add(down);
                    queue.add(down);
                }
            }
        }

        depth++;
    }

    return -1;
};
// @lc code=end

