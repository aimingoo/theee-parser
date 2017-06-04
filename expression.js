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
    if (promiseland._hasModule({ hashStr: "59981cfc9a674c29983a818f71053b5c" })){ return promiseland._getModule("59981cfc9a674c29983a818f71053b5c"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "59981cfc9a674c29983a818f71053b5c", "module": PL$1, promising: true });
var PL$26/*console*/;try{PL$26/*console*/ = console;}catch(e){};
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
var PL$9/*jsString*/;
var PL$11/*jsNumericLiteral*/;
var PL$13/*util*/;
var PL$15/*Parser*/;
var PL$17/*js*/;
var PL$18/*concept*/;
var PL$19/*unit*/;
var PL$20/*tree*/;
var PL$21/*string*/;
function PL$29/*addBinaryOperator*/(PL$30/*par*/){

  ;
  var PL$31/*operators*/ = [
    
  ];
  ;
  var PL$32/*i*/ = 0;
  ;
  if((typeof PL$30/*par*/["operator"] === "string")){
    PL$31/*operators*/["push"](PL$30/*par*/["operator"]);
  };
  ;
  if((PL$30/*par*/["operator"] && PL$30/*par*/["operator"]["length"])){
    for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$30/*par*/["operator"]["length"]);++PL$32/*i*/){{
      PL$31/*operators*/["push"](PL$30/*par*/["operator"][PL$32/*i*/]);}};
    ;
  };
  ;
  if(! PL$31/*operators*/["length"]){
    return;
  };
  ;
  var PL$33/*op*/;
  ;
  for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$31/*operators*/["length"]);++PL$32/*i*/){{
    PL$33/*op*/ = ("operator" + PL$31/*operators*/[PL$32/*i*/]);
    if(! PL$19/*unit*/[PL$33/*op*/]){
      PL$17/*js*/["addUnit"](PL$33/*op*/, PL$18/*concept*/["string"](PL$31/*operators*/[PL$32/*i*/]));
    };
    ;}};
  ;
  var PL$34/*opParam*/;
  ;
  if((PL$31/*operators*/["length"] === 1)){
    PL$34/*opParam*/ = PL$19/*unit*/[PL$33/*op*/]();
  }else{
  var PL$35/*alts*/ = [
    
  ];
  ;
  for(PL$32/*i*/ = 0;(PL$32/*i*/ < PL$31/*operators*/["length"]);++PL$32/*i*/){{
    PL$33/*op*/ = ("operator" + PL$31/*operators*/[PL$32/*i*/]);
    PL$35/*alts*/["push"](PL$19/*unit*/[PL$33/*op*/]());}};
  ;
  PL$34/*opParam*/ = PL$18/*concept*/["alternative"](PL$35/*alts*/);
  };
  ;
  PL$17/*js*/["addUnit"](PL$30/*par*/["name"], PL$18/*concept*/["binaryOperator"]({
    "bp": PL$30/*par*/["bp"],
    "operator": PL$34/*opParam*/,
    "tree": "expression",
    "testLeft": PL$30/*par*/["testLeft"],
    "testRight": PL$30/*par*/["testRight"]
  }));
  ;};
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./basics").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*basics*/ = PL$6;
  __requireFun("./jsBasics").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*jsBasics*/ = PL$8;
  __requireFun("./jsString").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*jsString*/ = PL$10;
  __requireFun("./numericLiteral").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*jsNumericLiteral*/ = PL$12;
  __requireFun("./util").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*util*/ = PL$14;
  __requireFun("./Parser").then(PL$3/*promiseland exception catcher*/(function(PL$16){PL$15/*Parser*/ = PL$16;
  PL$17/*js*/ = new PL$15/*Parser*/();
  PL$17/*js*/["extend"](PL$5/*basics*/);
  PL$17/*js*/["extend"](PL$7/*jsBasics*/);
  PL$17/*js*/["extend"](PL$9/*jsString*/);
  PL$17/*js*/["extend"](PL$11/*jsNumericLiteral*/);
  PL$18/*concept*/ = PL$17/*js*/["concept"];
  PL$19/*unit*/ = PL$17/*js*/["unit"];
  PL$20/*tree*/ = PL$17/*js*/["tree"];
  PL$21/*string*/ = PL$18/*concept*/["string"];
  PL$17/*js*/["addTree"]("expression");
  PL$17/*js*/["addUnit"]("name", PL$19/*unit*/["identifierName"]());
  PL$17/*js*/["addConcept"]("grouping", {
    "test": (function(PL$22/*interface*/, PL$23/*params*/){
    
      ;
      var PL$24/*bp*/ = (PL$23/*params*/["bp"] || 0);
      ;
      if(! PL$24/*bp*/){
        return;
      };
      ;
      var PL$25/*res*/ = {
        "bp": PL$24/*bp*/,
        "leftBracket": PL$22/*interface*/["eat"](PL$23/*params*/["leftBracket"])
      };
      ;
      if(! PL$25/*res*/["leftBracket"]){
        return;
      };
      ;
      PL$25/*res*/["content"] = PL$22/*interface*/["eat"](PL$20/*tree*/[(PL$23/*params*/["tree"] || "expression")]({
        "minBp": PL$24/*bp*/
      }));
      if(! PL$25/*res*/["content"]){
        return;
      };
      ;
      PL$25/*res*/["rightBracket"] = PL$22/*interface*/["eat"](PL$23/*params*/["rightBracket"]);
      if(! PL$25/*res*/["rightBracket"]){
        return;
      };
      ;
      return PL$25/*res*/;
      ;})
  });
  PL$17/*js*/["addUnit"]("bracket(", PL$18/*concept*/["string"]("("));
  PL$17/*js*/["addUnit"]("bracket)", PL$18/*concept*/["string"](")"));
  PL$17/*js*/["addUnit"]("grouping", PL$18/*concept*/["grouping"]({
    "bp": 2000,
    "leftBracket": PL$19/*unit*/["bracket("](),
    "rightBracket": PL$19/*unit*/["bracket)"](),
    "tree": "expression"
  }));
  PL$17/*js*/["addConcept"]("binaryOperator", {
    "test": (function(PL$22/*interface*/, PL$23/*params*/){
    
      ;
      PL$26/*console*/["log"]("binaryOperator");
      PL$26/*console*/["log"](PL$23/*params*/["operator"]);
      var PL$24/*bp*/ = (PL$23/*params*/["bp"] || 0);
      ;
      if(! PL$24/*bp*/){
        return;
      };
      ;
      var PL$27/*left*/ = PL$22/*interface*/["eat"](PL$20/*tree*/[(PL$23/*params*/["tree"] || "expression")]({
        "minBp": (PL$24/*bp*/ + 1)
      }), {
        "left": true
      });
      ;
      if(! PL$27/*left*/){
        PL$26/*console*/["log"]("no left");
        return;
      };
      ;
      if(! (PL$27/*left*/["bp"] >= PL$24/*bp*/)){
        PL$26/*console*/["log"]("left bp");
        return;
      };
      ;
      if(PL$23/*params*/["testLeft"]){
        if(! PL$23/*params*/["testLeft"](PL$27/*left*/)){
          PL$26/*console*/["log"]("test failed");
          return;
        };
        ;
      };
      ;
      PL$26/*console*/["log"]("so far so good");
      var PL$25/*res*/ = {
        "bp": PL$24/*bp*/,
        "left": PL$27/*left*/
      };
      ;
      PL$25/*res*/["leftWhite"] = PL$22/*interface*/["eat"](PL$19/*unit*/["ignore"]());
      PL$25/*res*/["mid"] = PL$22/*interface*/["eat"](PL$23/*params*/["operator"]);
      if(! PL$25/*res*/["mid"]){
        PL$26/*console*/["log"]("noluck");
        return;
      };
      ;
      PL$26/*console*/["log"](("eaten:" + PL$25/*res*/["mid"]));
      PL$25/*res*/["rightWhite"] = PL$22/*interface*/["eat"](PL$19/*unit*/["ignore"]());
      var PL$28/*rightFood*/ = PL$20/*tree*/[(PL$23/*params*/["tree"] || "expression")]({
        "minBp": PL$24/*bp*/
      });
      ;
      PL$26/*console*/["log"]("rightfood:");
      PL$26/*console*/["log"](PL$28/*rightFood*/);
      PL$25/*res*/["right"] = PL$22/*interface*/["eat"](PL$28/*rightFood*/);
      PL$26/*console*/["log"](("eatenright:" + PL$25/*res*/["right"]));
      if(PL$25/*res*/["right"]){
        if(PL$23/*params*/["testRight"]){
          if(! PL$23/*params*/["testRight"](PL$25/*res*/["right"])){
            return;
          };
          ;
        };
        ;
        PL$26/*console*/["log"](("returning" + PL$25/*res*/));
        return PL$25/*res*/;
      };
      ;
      ;})
  });
  /* function addBinaryOperator (){} - hoisted */;
  ;
  PL$29/*addBinaryOperator*/({
    "name": "memberAccess",
    "operator": ".",
    "bp": 190,
    "testLeft": (function(PL$36/*eaten*/){
    
      ;
      if((PL$36/*eaten*/["unit"] === "name")){
        return true;
      };
      ;
      if(PL$36/*eaten*/["hasMembers"]){
        return true;
      };
      ;
      ;}),
    "testRight": (function(PL$36/*eaten*/){
    
      ;
      if((PL$36/*eaten*/["unit"] === "name")){
        return true;
      };
      ;
      ;})
  });
  PL$17/*js*/["addConcept"]("eatExpression2", {
    "test": (function(PL$22/*interface*/, PL$23/*params*/){
    
      ;
      var PL$24/*bp*/ = (PL$23/*params*/["bp"] || 0);
      ;
      if(! PL$24/*bp*/){
        return;
      };
      ;
      var PL$27/*left*/ = PL$22/*interface*/["eat"](PL$20/*tree*/[(PL$23/*params*/["tree"] || "expression")]({
        "minBp": PL$24/*bp*/
      }), {
        "left": true
      });
      ;
      if(! PL$27/*left*/){
        return;
      };
      ;
      if(! (PL$27/*left*/["bp"] >= PL$24/*bp*/)){
        return;
      };
      ;
      if(PL$23/*params*/["testLeft"]){
        if(! PL$23/*params*/["testLeft"](PL$27/*left*/)){
          return;
        };
        ;
      };
      ;
      var PL$25/*res*/ = {
        "bp": PL$24/*bp*/,
        "left": PL$27/*left*/
      };
      ;
      PL$25/*res*/["leftWhite"] = PL$22/*interface*/["eat"](PL$19/*unit*/["ignore"]());
      PL$25/*res*/["right"] = PL$22/*interface*/["eat"](PL$23/*params*/["right"]);
      if(! PL$25/*res*/["right"]){
        return;
      };
      ;
      if(PL$23/*params*/["testRight"]){
        if(! PL$23/*params*/["testRight"](PL$25/*res*/["right"])){
          return;
        };
        ;
      };
      ;
      return PL$25/*res*/;
      ;})
  });
  PL$17/*js*/["addUnit"]("computedMember", PL$18/*concept*/["sequence"]([
    PL$21/*string*/("["), 
    PL$13/*util*/["optional"](PL$19/*unit*/["ignore"]()), 
    PL$20/*tree*/["expression"](190), 
    PL$13/*util*/["optional"](PL$19/*unit*/["ignore"]()), 
    PL$21/*string*/("]")
  ]));
  PL$17/*js*/["addUnit"]("computedMemberAccess", PL$18/*concept*/["eatExpression2"]({
    "bp": 190,
    "tree": "expression",
    "testLeft": (function(PL$36/*eaten*/){
    
      ;
      if((PL$36/*eaten*/["unit"] === "name")){
        return true;
      };
      ;
      if(PL$36/*eaten*/["hasMembers"]){
        return true;
      };
      ;
      ;}),
    "right": PL$19/*unit*/["computedMember"]()
  }));
  PL$29/*addBinaryOperator*/({
    "name": "assignment",
    "operator": "=",
    "bp": 190,
    "testLeft": (function(PL$36/*eaten*/){
    
      ;
      if((PL$36/*eaten*/["unit"] === "name")){
        return true;
      };
      ;
      if(PL$36/*eaten*/["hasMembers"]){
        return true;
      };
      ;
      ;}),
    "testRight": (function(PL$36/*eaten*/){
    
      ;
      if((PL$36/*eaten*/["unit"] === "name")){
        return true;
      };
      ;
      ;})
  });
  PL$17/*js*/["addConcept"]("bracketAttachment", {
    "test": (function(PL$22/*interface*/, PL$23/*params*/){
    
      ;
      ;})
  });
  PL$29/*addBinaryOperator*/({
    "name": "addition",
    "operator": [
      "+", 
      "-"
    ],
    "bp": 10
  });
  PL$29/*addBinaryOperator*/({
    "name": "multiplication",
    "operator": [
      "*", 
      "/"
    ],
    "bp": 10
  });
  PL$17/*js*/["addTree"]("expression", [
    PL$19/*unit*/["grouping"](), 
    PL$19/*unit*/["addition"](), 
    PL$19/*unit*/["multiplication"](), 
    PL$19/*unit*/["name"](), 
    PL$19/*unit*/["jsNumericLiteral"](), 
    PL$19/*unit*/["jsString"]()
  ]);
  PL$17/*js*/["addUnit"]("jsExpression", PL$20/*tree*/["expression"]());
  PL$1.resolve(PL$17/*js*/); return;
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
