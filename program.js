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
    if (promiseland._hasModule({ hashStr: "dfc422da5abf10c453c185fdb4df5268" })){ return promiseland._getModule("dfc422da5abf10c453c185fdb4df5268"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "dfc422da5abf10c453c185fdb4df5268", "module": PL$1, promising: true });
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
var PL$7/*comments*/;
var PL$9/*jsBasics*/;
var PL$11/*jsString*/;
var PL$13/*jsExpression*/;
var PL$15/*Parser*/;
var PL$17/*program*/;
var PL$18/*concept*/;
var PL$19/*unit*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  __requireFun("./comments").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*comments*/ = PL$8;
  __requireFun("./jsBasics").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*jsBasics*/ = PL$10;
  __requireFun("./jsString").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*jsString*/ = PL$12;
  __requireFun("./expression").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*jsExpression*/ = PL$14;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$16){PL$15/*Parser*/ = PL$16;
  PL$17/*program*/ = new PL$15/*Parser*/();
  PL$17/*program*/["extend"](PL$5/*basics*/);
  PL$17/*program*/["extend"](PL$7/*comments*/);
  PL$17/*program*/["extend"](PL$9/*jsBasics*/);
  PL$17/*program*/["extend"](PL$11/*jsString*/);
  PL$17/*program*/["extend"](PL$13/*jsExpression*/);
  PL$18/*concept*/ = PL$17/*program*/["concept"];
  PL$19/*unit*/ = PL$17/*program*/["unit"];
  PL$17/*program*/["addUnit"]("program", PL$18/*concept*/["list"]({
    "of": PL$18/*concept*/["alternative"]([
      PL$19/*unit*/["comment"](), 
      PL$19/*unit*/["jsString"](), 
      PL$19/*unit*/["ignore"](), 
      PL$19/*unit*/["jsExpression"]()
    ]),
    "end": PL$19/*unit*/["eof"]()
  }));
  PL$1.resolve(PL$17/*program*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
