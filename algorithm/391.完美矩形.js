/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let s_areas = 0;
    let b_areas = 0;
    let X1 = Infinity, Y1 = Infinity, X2 = -Infinity, Y2 = -Infinity;
    let points = new Set();
    for (let [x1, y1, x2, y2] of rectangles) {
        X1 = Math.min(x1, X1);
        Y1 = Math.min(y1, Y1);
        X2 = Math.max(x2, X2);
        Y2 = Math.max(y2, Y2);
        s_areas += (x2 - x1) * (y2 - y1);

        const p1 = `${x1}, ${y1}`, p2 = `${x1}, ${y2}`, p3 = `${x2}, ${y1}`, p4 = `${x2}, ${y2}`;
        for (let p of [p1, p2, p3, p4]) {
            if (points.has(p)) {
                points.delete(p);
            }
            else {
                points.add(p);
            }
        }
    }

    b_areas = (X2 - X1) * (Y2 - Y1);

    if (s_areas !== b_areas) return false;
    if (points.size !== 4) return false;

    const P1 = `${X1}, ${Y1}`, P2 = `${X1}, ${Y2}`, P3 = `${X2}, ${Y1}`, P4 = `${X2}, ${Y2}`;
    if (!points.has(P1)) return false;
    if (!points.has(P2)) return false;
    if (!points.has(P3)) return false;
    if (!points.has(P4)) return false;
    return true;
};
// @lc code=end


console.log(isRectangleCover([[0,0,2,2],[1,1,3,3],[2,0,3,1],[0,3,3,4]]))