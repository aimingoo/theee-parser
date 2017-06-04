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
    if (promiseland._hasModule({ hashStr: "902cda953da3d93e1496d202faf2fc07" })){ return promiseland._getModule("902cda953da3d93e1496d202faf2fc07"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "902cda953da3d93e1496d202faf2fc07", "module": PL$1, promising: true });
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
var PL$11/*jsString*/;
var PL$12/*concept*/;
var PL$13/*unit*/;
var PL$14/*string*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  __requireFun("./jsBasics").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*jsBasics*/ = PL$8;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*Parser*/ = PL$10;
  PL$11/*jsString*/ = new PL$9/*Parser*/();
  PL$11/*jsString*/["extend"](PL$5/*basics*/);
  PL$11/*jsString*/["extend"](PL$7/*jsBasics*/);
  PL$12/*concept*/ = PL$11/*jsString*/["concept"];
  PL$13/*unit*/ = PL$11/*jsString*/["unit"];
  PL$14/*string*/ = PL$12/*concept*/["string"];
  PL$11/*jsString*/["addUnit"]("jsSingleEscapeChar", PL$12/*concept*/["alternative"]([
    PL$14/*string*/("b"), 
    PL$14/*string*/("f"), 
    PL$14/*string*/("n"), 
    PL$14/*string*/("r"), 
    PL$14/*string*/("t"), 
    PL$14/*string*/("v"), 
    PL$14/*string*/("0"), 
    PL$14/*string*/("'"), 
    PL$14/*string*/("\""), 
    PL$14/*string*/("\\")
  ]));
  PL$11/*jsString*/["addUnit"]("jsOctalEscape", PL$12/*concept*/["number"]({
    "base": 8,
    "maxValue": 255,
    "minValue": 0,
    "point": false,
    "maxDigits": 3,
    "notEqual": [
      "0"
    ]
  }));
  PL$11/*jsString*/["addUnit"]("jsHexEscape", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["string"]("x"), 
    PL$12/*concept*/["number"]({
      "base": 16,
      "maxValue": 255,
      "minValue": 0,
      "point": false,
      "maxDigits": 2,
      "minDigits": 2
    })
  ]));
  PL$11/*jsString*/["addUnit"]("jsUnicodeEscapeES6", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["string"]("u{"), 
    PL$12/*concept*/["number"]({
      "base": 16,
      "minValue": 0,
      "point": false,
      "minDigits": 1
    }), 
    PL$12/*concept*/["string"]("}")
  ]));
  PL$11/*jsString*/["addUnit"]("jsControlEscape", PL$12/*concept*/["sequence"]([
    PL$12/*concept*/["string"]("c"), 
    PL$12/*concept*/["alternative"]("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
  ]));
  PL$11/*jsString*/["addUnit"]("jsStringEscapeSequence", PL$12/*concept*/["sequence"]([
    PL$14/*string*/("\\"), 
    PL$12/*concept*/["alternative"]([
      PL$13/*unit*/["jsOctalEscape"](), 
      PL$13/*unit*/["jsHexEscape"](), 
      PL$13/*unit*/["jsUnicodeEscape"](), 
      PL$13/*unit*/["jsUnicodeEscapeES6"](), 
      PL$13/*unit*/["jsControlEscape"](), 
      PL$13/*unit*/["jsSingleEscapeChar"]()
    ])
  ]));
  PL$11/*jsString*/["addUnit"]("jsStringSingleQuote", PL$12/*concept*/["list"]({
    "start": PL$14/*string*/("'"),
    "of": PL$12/*concept*/["alternative"]([
      PL$13/*unit*/["jsStringEscapeSequence"](), 
      PL$13/*unit*/["char"]()
    ]),
    "end": PL$14/*string*/("'")
  }));
  PL$11/*jsString*/["addUnit"]("jsStringDoubleQuote", PL$12/*concept*/["list"]({
    "start": PL$14/*string*/("\""),
    "of": PL$12/*concept*/["alternative"]([
      PL$13/*unit*/["jsStringEscapeSequence"](), 
      PL$13/*unit*/["char"]()
    ]),
    "end": PL$14/*string*/("\"")
  }));
  PL$11/*jsString*/["addUnit"]("jsString", PL$12/*concept*/["alternative"]([
    PL$13/*unit*/["jsStringSingleQuote"](), 
    PL$13/*unit*/["jsStringDoubleQuote"]()
  ]));
  PL$1.resolve(PL$11/*jsString*/); return;
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
