import type { AstroIntegration, AstroRenderer, ContainerRenderer } from 'astro';

const getRenderer = (): AstroRenderer => ({
    name: 'custom-renderer',
    clientEntrypoint: 'custom-renderer/client.js',
    serverEntrypoint: 'custom-renderer/server.js',
});

export const getContainerRenderer = (): ContainerRenderer => ({
    name: 'custom-renderer',
    serverEntrypoint: 'custom-renderer/server.js',
});

export default function (): AstroIntegration {
	return {
		name: 'custom-renderer',
		hooks: {
			'astro:config:setup': ({ addRenderer }) => {
				addRenderer(getRenderer());
			},
		},
	};
}