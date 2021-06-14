export {};

function identity<T extends number | string>(p1: T): T {
  return p1;
}

const a = identity(3);
const b = identity("1233");
const c = identity(false); // 에러

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "yujo",
  age: 20,
  liveInSeoul: true,
};

const p2: Korean = {
  name: "fano",
  age: 30,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age");

swapProperty(p1, p2, "yield"); // 에러
