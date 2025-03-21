/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var arr = [];
    arr[1] = arr[2] = 1;

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
};

var fib = function(n) {
    if (n < 2) {
        return n;
    }

    var a = 0, b = 1;
    for (let i =  1; i < n; i++) {
        var temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

// @lc code=end
var func1 = () => {
    console.log(111);
}

var promise11 = async () => {
    await func1();
    console.log(112);
}

var promise1 = () => new Promise(resolve => {
    console.log('promise1');

    promise11().then(() => {
        resolve();
    })

    console.log('promise11')
}).then(() => {
    console.log('promise12')
})


var func2 = () => {
    console.log(221);
}
var promise22 = async () => {
    await func2();
    console.log(222);
}


var promise2 = () => new Promise(resolve => {
    console.log('promise2');

    promise22().then(() => {
        resolve();
    })

    console.log('promise21')
}).then(() => {
    console.log('promise22')
})


var func3 = () => {
    console.log(331);
}

var promise33 = async () => {
    await func3();
    console.log(332);
}

var promise3 = () => new Promise(resolve => {
    console.log('promise3');

    promise33().then(() => {
        resolve();
    })

    console.log('promise31')
}).then(() => {
    console.log('promise32')
})


var func4 = () => {
    console.log(441);
}
var promise44 = async () => {
    await func4();
    console.log(442);
}


var promise4 = () => new Promise(resolve => {
    console.log('promise4');

    promise44().then(() => {
        resolve();
    })

    console.log('promise41')
}).then(() => {
    console.log('promise42')
})

var test = async () => {
    for (var i = 1; i <= 2; i++) {
        await eval(`promise${i}`)();
    }

    for (var i = 3; i <= 4; i++) {
        await eval(`promise${i}`)();
    }
}

test();