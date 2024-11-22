# Astro Custom Frontend Framework / Custom Renderer Starter

This is a template for an Astro integration that implements a custom renderer. 
The relevant code is implemented in:

- `packages/custom-renderer` - the actual Astro Integration implementation
- `example` - an Astro project using the `custom-renderer` 

## Setup

We use `pnpm` here, so please make sure it is installed.

```bash
# 0. make sure pnpm is installed
npm i -g pnpm

# 1. install dependencies
pnpm i

# 2. run the build (make sure custom renderer build output is generated/resolvable)
pnpm run build

# 3. switch to the example and run
cd ./example

# 4. dev mode
pnpm run dev

# OR

# 5. prod mode 
pnpm run build && pnpm run preview

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                                                                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm run build` | Build the `custom-renderer`  |