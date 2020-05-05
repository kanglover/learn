const jQuery = function (selector) {
    return document.querySelector(selector);
};

const labName = 'jQuery';

String.prototype.getFirstLetter = function () {
    return this[0];
};
