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
    if (promiseland._hasModule({ hashStr: "b57138976765a5e8aaaef8d6ad6bf947" })){ return promiseland._getModule("b57138976765a5e8aaaef8d6ad6bf947"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b57138976765a5e8aaaef8d6ad6bf947", "module": PL$1, promising: true });
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
var PL$7/*jsBasics*/;
var PL$9/*Parser*/;
var PL$11/*jsNumericLiteral*/;
var PL$12/*concept*/;
var PL$13/*unit*/;
var PL$14/*string*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  __requireFun("./jsBasics").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*jsBasics*/ = PL$8;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*Parser*/ = PL$10;
  PL$11/*jsNumericLiteral*/ = new PL$9/*Parser*/();
  PL$11/*jsNumericLiteral*/["extend"](PL$5/*basics*/);
  PL$11/*jsNumericLiteral*/["extend"](PL$7/*jsBasics*/);
  PL$12/*concept*/ = PL$11/*jsNumericLiteral*/["concept"];
  PL$13/*unit*/ = PL$11/*jsNumericLiteral*/["unit"];
  PL$14/*string*/ = PL$12/*concept*/["string"];
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericDecimalLiteral", PL$12/*concept*/["number"]({
    "base": 10
  }));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericDecimalLiteralSudoOctal", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["string"]("0"), 
    PL$12/*concept*/["number"]({
      "base": 10,
      "mustContainBeforePoint": PL$12/*concept*/["alternative"]([
        PL$12/*concept*/["string"]("8"), 
        PL$12/*concept*/["string"]("9")
      ])
    })
  ]));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericHexLiteral", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["alternative"]([
      PL$12/*concept*/["string"]("0x"), 
      PL$12/*concept*/["string"]("0X")
    ]), 
    PL$12/*concept*/["number"]({
      "base": 16,
      "point": false,
      "minDigits": 1
    })
  ]));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericBinaryLiteral", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["alternative"]([
      PL$12/*concept*/["string"]("0b"), 
      PL$12/*concept*/["string"]("0B")
    ]), 
    PL$12/*concept*/["number"]({
      "base": 2,
      "point": false,
      "minDigits": 1
    })
  ]));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericOctalLiteralExplicit", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["alternative"]([
      PL$12/*concept*/["string"]("0o"), 
      PL$12/*concept*/["string"]("0O")
    ]), 
    PL$12/*concept*/["number"]({
      "base": 8,
      "point": false,
      "minDigits": 1
    })
  ]));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericOctalLiteral", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["string"]("0"), 
    PL$12/*concept*/["number"]({
      "base": 8,
      "point": false
    })
  ]));
  PL$11/*jsNumericLiteral*/["addUnit"]("jsNumericLiteral", PL$12/*concept*/["alternative"]([
    PL$13/*unit*/["jsNumericDecimalLiteralSudoOctal"](), 
    PL$13/*unit*/["jsNumericOctalLiteral"](), 
    PL$13/*unit*/["jsNumericDecimalLiteral"](), 
    PL$13/*unit*/["jsNumericHexLiteral"](), 
    PL$13/*unit*/["jsNumericOctalLiteralExplicit"](), 
    PL$13/*unit*/["jsNumericBinaryLiteral"]()
  ]));
  PL$1.resolve(PL$11/*jsNumericLiteral*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
