{
// 제네릭은 타입에 대한 변수. 추론을 활용하기
function add1<T>(x: T, y: T): T { return x + y }
add1<number>(1, 2);
add1(1, 2);
add1<string>('1', '2');
add1('1', '2');
add1(1, '2');

//제네릭 선언 위치 기억하기
function a<T>() {}
class B<T>(){}
interface C<T> {
  a: T
}
type D<T> = {};
const e = <T>() => {};


//제네릭 기본값, 제네릭에  타입에 제한을 두고 싶으면 extends
function add<T extends string>(x: T, y: T): T { return ''.concat(x, y) }
add(1, 2);
add('1', '2')
add<number>(1, 2); // 안됨

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol
}