import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
	site: "https://fitodac.github.io",
	base: process.env.NODE_ENV === "production" ? "/cidit-website/" : "/",
});
