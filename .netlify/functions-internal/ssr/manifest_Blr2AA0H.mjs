import 'cookie';
import './chunks/astro_BrDOr7fE.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.10.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}body{font-family:Arial,sans-serif;background-color:#5cf;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n.formulario-enviado[data-astro-cid-oesmrakf]{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 0 10px #0000001a;max-width:600px;width:100%}h1[data-astro-cid-oesmrakf],h2[data-astro-cid-oesmrakf]{color:#4caf50;margin-bottom:20px}#titulo[data-astro-cid-oesmrakf]{text-align:center;font-size:2.5em}.resultados[data-astro-cid-oesmrakf] p[data-astro-cid-oesmrakf]{font-size:16px;line-height:1.5;margin:10px 0}.resultados[data-astro-cid-oesmrakf] p[data-astro-cid-oesmrakf] strong[data-astro-cid-oesmrakf]{color:#4caf50}\n"}],"routeData":{"route":"/envio","isIndex":false,"type":"page","pattern":"^\\/Envio\\/?$","segments":[[{"content":"Envio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Envio.astro","pathname":"/Envio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}body{font-family:Arial,sans-serif;background-color:#5cf;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n.question[data-astro-cid-yv553ndi]{margin-bottom:20px}.question[data-astro-cid-yv553ndi] span[data-astro-cid-yv553ndi]{display:block;margin-bottom:20px;font-size:1.1em}.question[data-astro-cid-yv553ndi] input[data-astro-cid-yv553ndi]{width:90%;padding:10px;font-size:1em;border:2px solid #ccc;border-radius:5px}.sub-question[data-astro-cid-yv553ndi]{margin:-20px 0 20px 20px}.sub-question[data-astro-cid-yv553ndi] span[data-astro-cid-yv553ndi]{display:inline-block;font-size:.9em;margin-bottom:10px}.sub-question[data-astro-cid-yv553ndi] input[data-astro-cid-yv553ndi]{width:300px;padding:5px;font-size:1em;border:2px solid #ccc;border-radius:5px}.question[data-astro-cid-ry4ozc6u]{margin-bottom:20px}.question[data-astro-cid-ry4ozc6u] label[data-astro-cid-ry4ozc6u]{display:block;margin-bottom:5px;font-size:.75em}.question[data-astro-cid-ry4ozc6u] span[data-astro-cid-ry4ozc6u]{display:block;margin-bottom:20px;font-size:1.1em}.options[data-astro-cid-ry4ozc6u]{display:flex;align-items:center;justify-content:space-around}.options[data-astro-cid-ry4ozc6u] label[data-astro-cid-ry4ozc6u]{margin:0 10px;display:flex;align-items:flex-start}.options[data-astro-cid-ry4ozc6u] input[data-astro-cid-ry4ozc6u][type=radio]{margin-right:5px}#pregunta[data-astro-cid-ry4ozc6u]{padding:20px;background:#fafafa}#pregunta[data-astro-cid-ry4ozc6u] h2[data-astro-cid-ry4ozc6u]{margin-bottom:10px;font-weight:600;font-size:20px}#pregunta[data-astro-cid-ry4ozc6u] input[data-astro-cid-ry4ozc6u][type=radio]{display:none}#pregunta[data-astro-cid-ry4ozc6u] label[data-astro-cid-ry4ozc6u]{display:inline-block;margin:4px;padding:8px;background:#fae3bb;color:#4c3000;width:calc(50% - 8px);min-width:100px;cursor:pointer}#pregunta[data-astro-cid-ry4ozc6u] label[data-astro-cid-ry4ozc6u]:hover{background:#ebbb67}#pregunta[data-astro-cid-ry4ozc6u] input[data-astro-cid-ry4ozc6u][type=radio]:checked+label[data-astro-cid-ry4ozc6u]{background:#cb8306;color:#fafafa}.form-container[data-astro-cid-j7pv25f6]{width:700px;background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 0 10px #0000001a;margin:auto}h3[data-astro-cid-j7pv25f6]{text-align:center;margin-bottom:20px;font-size:1.5em;color:#333}.question-ind[data-astro-cid-j7pv25f6]{display:block;text-align:center;margin-bottom:20px;font-size:1.1em;color:#555}form[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;gap:15px}.btn-submit[data-astro-cid-j7pv25f6]{background:#4169e1;padding:.7em 1em .7em .9em;color:#fff;align-self:center;font-family:inherit;font-size:20px;display:flex;align-items:center;border:none;border-radius:16px;overflow:hidden;transition:all .2s;cursor:pointer}.btn-submit[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{display:block;margin-left:.3em;transition:all .3s ease-in-out}.btn-submit[data-astro-cid-j7pv25f6] svg[data-astro-cid-j7pv25f6]{display:block;transform-origin:center center;transition:transform .3s ease-in-out}.btn-submit[data-astro-cid-j7pv25f6]:hover .svg-wrapper[data-astro-cid-j7pv25f6]{animation:fly-1 .6s ease-in-out infinite alternate}.btn-submit[data-astro-cid-j7pv25f6]:hover svg[data-astro-cid-j7pv25f6]{transform:translate(1.2em) rotate(45deg) scale(1.1)}.btn-submit[data-astro-cid-j7pv25f6]:hover span[data-astro-cid-j7pv25f6]{transform:translate(5em)}.btn-submit[data-astro-cid-j7pv25f6]:active{transform:scale(.95)}@keyframes fly-1{0%{transform:translateY(.1em)}to{transform:translateY(-.1em)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Gabriel/Documents/Proyectos/temp/forms-bienestar/src/pages/Envio.astro",{"propagation":"none","containsHead":true}],["C:/Users/Gabriel/Documents/Proyectos/temp/forms-bienestar/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.10.2/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_KybjX3AR.mjs","/src/pages/index.astro":"chunks/pages/index_BTdt0B3B.mjs","\u0000@astrojs-manifest":"manifest_Blr2AA0H.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.10.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ByLGHimC.mjs","\u0000@astro-page:src/pages/Envio@_@astro":"chunks/Envio_BQsLn8-U.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CakZOSx7.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
