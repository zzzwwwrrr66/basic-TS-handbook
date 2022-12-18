{
// 타입의종류
const a: string = "asd"
const b:number = 123;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;


// function 의 type setting
// function, ()=> 는 선언방법이 다르다
function add(a:number, b:number): number; // 정해놓고 밑에다 써도 됨
function add(a, b) {
    return a + b;
}
function add3(a:number, b:number): number {
    return a + b;
}
type TAdd = (a:number, b:number) => number;
// interface 로 함수타입선언은 잘안사용
interface IAdd {
    (a:number, b:number) :number
}
const add2:TAdd = (a,b) => a+b

// Array 의 type setting
const arrNum:Array<number> = [1];
const arrNum2:number[]  = [1];
// 배열의 갯수와 타입을 정해준다 => 값 고정
const tuple:[number, number, string] = [1, 2, "3"];
}