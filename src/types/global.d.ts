declare module "*.ico" {
  const value: string;
  export = value;
}

declare module "*.css" {
  interface ClassNames {
    [className: string]: string;
  }
  const value: ClassNames;
  export = value;
}
