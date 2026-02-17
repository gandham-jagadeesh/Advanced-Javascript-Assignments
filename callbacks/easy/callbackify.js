// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


function callbackify(...fn) {
    let f = fn[ fn.length - 1 ];
    return  (...cb)=>{
        let c = cb[ cb.length - 1 ]; 
        let n = [];
        if(cb.length > 1){
            n = cb.slice(0,cb.length-1);
        }
        f(...n).then((data)=>{
            c(null,data);
        }).catch((err)=>{
            c(err);
        })
    }
}

module.exports = callbackify;
