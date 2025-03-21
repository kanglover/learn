/*
 * @lc app=leetcode.cn id=2101 lang=javascript
 *
 * [2101] 引爆最多的炸弹
 */

// @lc code=start
/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    if (bombs.length <= 1) {
        return bombs.length;
    }

    const checkInsideRange = (x, y, center_x, center_y, radius) => {
        return (x - center_x) ** 2 + (y - center_y) ** 2 <= radius ** 2;
    }


    let adj = {}; maxSize = 0;
    for (let i = 0; i < bombs.length; i++) {
        for (let j = i + 1; j < bombs.length; j++) {
            if (!adj[i]) {
                adj[i] = [];
            }

            if (!adj[j]) {
                adj[j] = [];
            }

            if (checkInsideRange(bombs[i][0], bombs[i][1], bombs[j][0], bombs[j][1], bombs[i][2])) {
                adj[i].push(j);
            }

            if (checkInsideRange(bombs[i][0], bombs[i][1], bombs[j][0], bombs[j][1], bombs[j][2])) {
                adj[j].push(j);
            }
        }
    }

    const visit = [];
    const dfs = (node, visit) => {
        let count = 1;
        visit[node] = true;

        let childs = adj[node];
        for (let child of childs) {
            if (visit[child]) {
                continue;
            }
            count += dfs(child, visit);
        }

        maxSize = Math.max(maxSize, count);
        return count;
    }

    for (let i = 0; i < bombs.length; i++) {
        dfs(0, {});
    }
    return maxSize;
};
// @lc code=end

