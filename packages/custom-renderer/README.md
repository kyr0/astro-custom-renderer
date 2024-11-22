# Astro Custom Frontend Framework / Custom Renderer Starter

This is a template for an Astro integration that implements a custom renderer. Custom renderers can be used to add custom, 3rd-party framework support to Astro or to render custom markup that is returned by components (e.g. a custom headless CMS VDOM, and basically anything you can think of).

## Setup

We use `pnpm` here, so please make sure it is installed.

```bash
npm i -g pnpm

# also install dependencies
pnpm i
```

## 🚀 Project Structure

Inside of this package, you'll see the following folders and files:

```text
/
├── src/client.ts
├── src/index.ts
├── src/server.ts
├── tsconfig.json
├── package.json
```

The `src/index.ts` file is the "entry point" for your custom renderer integration. 

Client-side rendering of DOM sub-trees is implemented in `src/client.ts` while
`src/server.ts` implements SSR rendering (HTML serialized rendering).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                                                                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm run dev`    | Run in dev mode and check your custom renderer                                                    |
| `pnpm run build` | Build for production  |
| `pnpm run preview` | Build for production, then preview |
