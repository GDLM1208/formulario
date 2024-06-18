import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CXoc_YX_.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_ByLGHimC.mjs');
const _page1 = () => import('./chunks/Envio_C_rV6gHp.mjs');
const _page2 = () => import('./chunks/index_lWOWm8bo.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.10.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/Envio.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6cc9dc43-2636-4cf5-bee3-bc523f083a2f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
