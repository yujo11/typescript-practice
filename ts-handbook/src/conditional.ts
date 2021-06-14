export {};

type IsStringType<T> = T extends string ? "yes" : "n";

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
