/**
 *
方案 1 performance
window.performance.getEntriesByType('paint')
// or
window.performance.getEntriesByName('first-paint')
window.performance.getEntriesByName('first-contentful-paint')


方案 2 PerformanceObserver
页面还没有开始首次绘制，通过监听获取。
const observer = new PerformanceObserver(function(list) {
const perfEntries = list.getEntries();
for (const perfEntry of perfEntries) {
}
});
// register observer for paint timing notifications
observer.observe({entryTypes: ["paint"]});

方案 3 基于 web-vitals 实时性能监控
 */

/**
 * 对 FCP 的解释和计算：https://web.dev/fcp/
 * 通过 performance 来计算
 */
function getFCP() {
    const paintEntry = window.performance.getEntriesByType('paint') || [];
    const fcpWithSkeleton = paintEntry.filter(entry => entry.name === 'first-contentful-paint');
    if (fcpWithSkeleton.length >= 1) {
        return fcpWithSkeleton;
    }
    const observer = new window.PerformanceObserver(list => {
        const fcp = list.getEntries().filter(entry => entry.name === 'first-contentful-paint');
        if (fcp.length >= 1) {
            return fcp;
        }
    });
    observer.observe({
        entryTypes: ['paint']
    });
}

function getLCP() {
    new PerformanceObserver(entryList => {
        for (const entry of entryList.getEntries()) {
            console.log('LCP candidate:', entry.startTime, entry);
        }
    }).observe({
        type: 'largest-contentful-paint',
        buffered: true
    });
}

/**
 * 利用 performance.timing 计算
 * 结束时间也有在 script 标签（定义在 head 最后）记录的
 */
function getFP() {
    return performance.timing.domLoading - performance.timing.navigationStart;
}

// sitespeed.io
