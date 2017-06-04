(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "9a65be82a0130f6d0c1a4d367ef01b7c" })){ return promiseland._getModule("9a65be82a0130f6d0c1a4d367ef01b7c"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "9a65be82a0130f6d0c1a4d367ef01b7c", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*basics*/;
var PL$7/*Parser*/;
var PL$9/*comments*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*Parser*/ = PL$8;
  PL$9/*comments*/ = new PL$7/*Parser*/();
  PL$9/*comments*/["extend"](PL$5/*basics*/);
  PL$9/*comments*/["addUnit"]("multiLineCommentStart", PL$5/*basics*/["concept"]["string"]("/*"));
  PL$9/*comments*/["addUnit"]("multiLineCommentEnd", PL$5/*basics*/["concept"]["string"]("*/"));
  PL$9/*comments*/["addUnit"]("multiLineComment", PL$5/*basics*/["concept"]["list"]({
    "start": PL$9/*comments*/["unit"]["multiLineCommentStart"](),
    "of": PL$5/*basics*/["unit"]["char"](),
    "end": PL$9/*comments*/["unit"]["multiLineCommentEnd"]()
  }));
  PL$9/*comments*/["addUnit"]("multiLineCommentSingleLine", PL$5/*basics*/["concept"]["list"]({
    "start": PL$9/*comments*/["unit"]["multiLineCommentStart"](),
    "of": PL$5/*basics*/["unit"]["char"](),
    "never": PL$5/*basics*/["unit"]["eol"](),
    "end": PL$9/*comments*/["unit"]["multiLineCommentEnd"]()
  }));
  PL$9/*comments*/["addUnit"]("singleLineCommentStart", PL$5/*basics*/["concept"]["string"]("//"));
  PL$9/*comments*/["addUnit"]("singleLineComment", PL$5/*basics*/["concept"]["list"]({
    "start": PL$9/*comments*/["unit"]["singleLineCommentStart"](),
    "of": PL$5/*basics*/["unit"]["char"](),
    "end": PL$9/*comments*/["unit"]["eol"]()
  }));
  PL$9/*comments*/["addUnit"]("comment", PL$5/*basics*/["concept"]["alternative"]([
    PL$9/*comments*/["unit"]["multiLineComment"](), 
    PL$9/*comments*/["unit"]["singleLineComment"]()
  ]));
  PL$1.resolve(PL$9/*comments*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
