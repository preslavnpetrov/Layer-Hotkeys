export {}

declare global {
  interface LenientGlobalVariableTypes {
    game: never;
    ui: never;
    canvas: never;
  }
}