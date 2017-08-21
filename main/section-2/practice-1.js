'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(item => {
        let obj = find(result, item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
}
