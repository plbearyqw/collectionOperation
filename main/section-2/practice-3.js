'use strict';

function find(collection, ch) {
    return collection.find(item => item.name === ch);
}

function summarize(collection) {
    let result = [];
    collection.forEach(item => {
        let obj = find(result, item)
        if (obj) {
            obj.summary++;
        } else {
            result.push({name: item, summary: 1});
        }
    });
    return result;
}

function split(item) {
    if (item.includes("-")) {
        let array = item.split("-");
        return {key: array[0], count: parseInt(array[1], 10)};
    }

    if (item.includes("[")) {
        let key = item.charAt(0);
        let count = parseInt(item.substr(2, item.length - 1));
        return {key, count};
    }

    if (item.includes(":")) {
        let array = item.split(":");
        return {key: array[0], count: parseInt(array[1], 10)};
    }
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach(item => {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
