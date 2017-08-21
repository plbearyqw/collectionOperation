'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

function summarize(collection) {
    let result = [];
    collection.forEach(item => {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
}

function includes(collection, ch) {
    return  collection.indexOf(ch) > -1;
}

function discount(collection, promotionItems) {
    let result = [];
    collection.forEach(item => {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
