{
  /*  
  1. return 값에 "is" 가 들어가있는거는 커스텀 타입가드이다
  2. 복잡해지면 커스텀 타입가드 기본은 typeof, Array.isArray, "key" in obj 같은 타입가드를 사용하면된다
  */
 type Dog = {wang: string};
 type Cat = {meow: number};

  function isDog(a: Dog | Cat): a is Dog {
    if("wang" in a) {
      return true;
    } else {
      return false;
    }
  }

  function test(a: Dog | Cat) {
    let result: string | string[];
    if(isDog(a)) {
      result = a.wang.split(" ");
    }
    else {
      result =  a.meow.toString();
    }
    return result;
  }
}