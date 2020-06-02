export type Gender = "female" | "male";

export type Unit<T extends string> = {
  title: string;
  value: T;
};

export type InputVariants = "weight" | "height" | "age";

export type WeightUnits = "kg" | "lbs";
export type HeightUnits = "cm" | "in";
