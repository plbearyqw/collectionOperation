'use strict';

function includes(collection, ch) {
     return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(ch => includes(collectionB[0], ch));
}
