declare module "java-regex-js" {
  export const compile: (regex: string) => (input: string) => boolean;
}
