export {};

interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}

type T1 = { [K in "prop1" | "prop2"]: boolean };

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};

pMap.name = true;
pMap.name = "yujo"; // 에러

// 모두 TS에 기본으로 내장되어 있음
type ReadOnly<T> = { readonly [P in keyof T]: T[P] }; // 모든 속성을 ReadOnly로
type Partial<T> = { [P in keyof T]?: T[P] }; // 모든 속성을 선택 속성으로
type Pick<T, K extends keyof T> = { [P in K]: T[P] }; // 몇몇 속성만 선택

type T2 = ReadOnly<Person>;
type T3 = Partial<Person>;
type T4 = Pick<Person, "name">;

enum Fruit {
  Apple,
  Orange,
  Banana,
}

const FRUIT_PRICE: { [key in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 2000,
  [Fruit.Orange]: 3000,
};

// 에러
const FRUIT_PRICE2: { [key in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 2000,
};
