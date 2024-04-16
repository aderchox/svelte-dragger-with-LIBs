import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  compilerOptions: {
    // NOTE - The acccessors option fixes the error of setting props on a dynamic component directly using its instance.
    accessors: true,
  },
};
