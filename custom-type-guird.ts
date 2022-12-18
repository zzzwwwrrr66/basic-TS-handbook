{
type A = {type: "a", v: string, aaa:string}
type B = {type: "b", v: number, bbb:()=>void}
type C = {type: "c", v: string[], ccc: number}

type Str = string;
type Num = number;
type Arr = number[];

function typeGuirdObj (obj: A | B | C) { 
  if(obj.type === "a") {
     obj.v.toLowerCase();
  }
  if(obj.type === "c") {
     obj.v.map(v=>Number(v))
  }
  if("bbb" in obj) {
    obj.bbb();
  }
}

function typeGuird (v: Str | Num | Arr) {
  if(typeof(v) === "string") {
     v.toLowerCase();
  }
  if(typeof(v) === "number") {
     v.toString();
  }
  if(Array.isArray(v)) {
     v.map(v=>v*1)
  }
}


const obj:B = {type:"b" ,v: 123, bbb: ()=>{console.log("typeguird")}}
obj.bbb();
}