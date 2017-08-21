'use strict';

function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, objectB) {    
    let collectionC = collectionA.filter(ch => includes(objectB.value, ch.key));
    let collection = collectionC.map(function(arg){
              return arg.key;
    });
    return collection;
}
