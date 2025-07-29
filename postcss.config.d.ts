// postcss.config.d.ts
declare module 'postcss' {
  interface Plugin {
    (): any
  }
}
