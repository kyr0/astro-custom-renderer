# Astro Custom Frontend Framework / Custom Renderer Starter

This is a template for an Astro integration that implements a custom renderer. Custom renderers can be used to add custom, 3rd-party framework support to Astro or to render custom markup that is returned by components (e.g. a custom headless CMS VDOM, and basically anything you can think of).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── src/components/CustomRendererTest.ts
├── src/custom-renderer/client.ts
├── src/custom-renderer/index.ts
├── src/custom-renderer/server.ts
├── src/pages/index.astro
├── tsconfig.json
├── package.json
```

The `src/custom-renderer/index.ts` file is the "entry point" for your custom renderer integration. 
The default exported function is used in `src/astro.config.mjs` as an integration.

Client-side rendering of DOM sub-trees is implemented in `src/custom-renderer/client.ts` while
`src/custom-renderer/server.ts` implements SSR rendering (HTML serialized rendering).

The `src/pages/index.astro` demonstrates the various client directives to render Components
that use the custom framework/custom renderer and `src/components/CustomRendererTest.ts` implements 
one Component that shows the use of a custom markup/VDOM in use.

If you plan to build and release your own custom renderer, it's of course adviced to only 
include the implementation of the Astro integration and the renderer itself in the project,
export the integration as the default entrypoint function and release the package via NPM.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                                                                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`    | Run in dev mode and check your custom renderer                                                    |
| `npm run build` | Build for production  |
| `npm run preview` | Build for production, then preview |
