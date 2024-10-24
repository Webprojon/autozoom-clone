import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "prompt",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable.png"],
			manifest: {
				name: "Auto Zoom",
				short_name: "Auto Zoom",
				description: "Auto zoom car rental in Dubai",
				icons: [
					{
						src: "maskable.png",
						sizes: "196x196",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "logo192x129.png",
						sizes: "192x129",
						type: "image/png",
					},
					{
						src: "logo512x343.png",
						sizes: "512x343",
						type: "image/png",
					},
				],
				theme_color: "#181818",
				background_color: "#e8eac2",
				display: "standalone",
				scope: "/",
				start_url: "/",
				orientation: "portrait",
			},
		}),
	],
});

// https://vitejs.dev/config/
//export default defineConfig({
//	plugins: [react()],
//});
