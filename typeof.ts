{const objType = {
  a: "1",
  b: "2"
} as const;

type OneTwo = typeof objType;
const a:OneTwo = {
  a: "1", b:"2"
}
type TypeKey = keyof typeof objType;
type TypeVal = typeof objType[keyof typeof objType];

const b:TypeKey = "a";
const c:TypeVal = "1"



class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  test(name:string) {
    return name.split("");
  }
}

const user = new UserAccount("Murphy", 1);

console.log(user.test("asd"));}