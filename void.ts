interface Void {
  test: ()=>void
}

const fnc:Void = {
  test(){
    return "wooram"
  }
}



const result = fnc.test();

declare function abc (callback:()=>void) 

abc(()=>{console.log("wooram fnc")})

/* 
method 의 return void 는 어떤 값이든 상관 안하겠다는 뜻이다 
그러므로 void 타입에 어떤값을 할당하려고 하면 오류가난다 
강제적으로 void 의 값에 타입을 설정하고 싶으면 as unknown as {type} 을 넣으면 된다 
*/
/*
declare 는 그 파일에서 안써도 되는 타입선언을 할때 사용 
*/