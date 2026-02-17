// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let count = 0;
    let res = [];
    return function(...args){
        console.log(res);
        let p = args.slice(0,args.length-1);
        let cb = args[args.length - 1];
      if(count == 0){
        count++;
        if(p.length == 0){
            fn((err,data)=>{
                if(!err){
                    res=[null,data];
                    cb(null,data);
                }
                else{
                    res=[err];
                    cb(err);
                }
            })
        }
        else{
            fn(...p,(err,data)=>{
               if(!err){
                    res=[null,data];
                    cb(null,data);
                }
                else{
                    res=[err];
                    cb(err);
                }
            })
        }
    }
    else{
            cb(...res)
    }
 }

}

module.exports = once;
