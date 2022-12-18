{
// class 자체가 type 이다 
class A {
  a: string;
  b: string;
  constructor(a:string, b:string) {
      this.a = a
      this.b = b
  }

  method() {
      console.log("a");
  }
} 
// type 인 class 는 new 인스턴스를 가르킨다
const a: A = new A("a", "b");

// typeof ClassName 은 class 그자체를 가르킨다
const b: typeof A = A
const c: A = new b("a", "b");

console.log("wooram", a.a)


// private, protected 는 TS 에서만 존재 
class B {
  // private 은 TS에서만 사용가능 => instence 에서 접근 불가능하다
  private a:string = "123";
  // # 은 "private"의 의미로 자바스크립트에만 존재 
  #b:number = 123;
  protected c = 123;

  
  method():void {
    console.log("TS private:", this.a)
    console.log(this.#b)
  }
}
class C extends B {
  method(): void {
    // private 사용 불가능, protected 사용 가능
  }
}

// type지정만 하는 Class 
abstract class TClass {
  private a:string
  private b:string
  readonly c: 5;

  abstract ha():void
  ha2(){
    return 2;
  }
}

class E extends TClass {
  // abstract 로 지정한건 반드시 작성 해야한다
  ha() {

  }
}

}


