// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propertyName) => {
    
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: function () {
            return propertyName;
        },
        set: function (value) {
            propertyName = value;
        },
        //enumerable: false
    });
    return property;
};
const createProtoMagicObject = () => {
    function a(){};
    a.prototype = Function.prototype;
    return a;
};
const incrementor = (() => {
    var x = 0;

    function a() {
        x++;
        return a;
    }

    a.valueOf = function() {
        return x;
    } 

    return a;
})();
const asyncIncrementor = (() => {
    var x = 0;

    function a() {
        x++;
        return a;
    }

    a.valueOf = function() {
        return x;
    } 

    return a;
})();
const createIncrementer = function* () {
    var index = 1;
    while(index <= 10)
    yield index++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (a) => {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {  
           resolve(a);
          }, 1000);
      })
      return p;      
};
const getDeepPropertiesCount = (obj) => {
    var count = 0;
    
    (function a(obj) {
        
        for (var k in obj) {
            count++;
            a(obj[k]);
        }  
        
    })(obj);
    
    return count;
};
const createSerializedObject = () => {
    return new Number(5);
};
const toBuffer = () => {};
const sortByProto = (a) => {
    return a.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;