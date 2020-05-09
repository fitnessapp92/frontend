export type WeightUnits<T extends "kg" | "lbs"> = {
  title: string;
  value: T;
}[];
