import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, h as renderComponent, m as maybeRenderHead } from '../astro_BrDOr7fE.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Gabriel/Documents/Proyectos/temp/forms-bienestar/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Envio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Envio;
  const valores1 = {
    "Excelente": 5,
    "Buena": 4,
    "Regular": 3,
    "Mala": 2,
    "Muy mala": 1,
    "Diariamente": 5,
    "Varias veces a la semana": 4,
    "Semanalmente": 3,
    "Mensualmente": 2,
    "Raramente/Nunca": 1,
    "Si": 0,
    "No": 5,
    "Nunca": 5,
    "Raramente": 4,
    "A veces": 3,
    "Frecuentemente": 2,
    "Siempre": 1,
    "Muy motivado": 5,
    "Motivado": 4,
    "Neutral": 3,
    "Desmotivado": 2,
    "Muy desmotivado": 1,
    "Muy satisfecho": 5,
    "Satisfecho": 4,
    "Insatisfecho": 2,
    "Muy insatisfecho": 1
  };
  const valores2 = {
    "Si": 5,
    "No": 1,
    "Siempre": 5,
    "Frecuentemente": 4,
    "A veces": 3,
    "Raramente": 2,
    "Nunca": 1
  };
  const data = await Astro2.request.formData();
  const p1 = data.get("pregunta1").toString();
  const p2 = data.get("pregunta2").toString();
  const p3 = data.get("pregunta3").toString();
  const p4 = data.get("pregunta4").toString();
  const p5 = data.get("pregunta5").toString();
  const p6 = data.get("pregunta6").toString();
  const p7 = data.get("pregunta7").toString();
  const p8 = data.get("pregunta8").toString();
  const p9 = data.get("pregunta9").toString();
  const p10 = data.get("pregunta10").toString();
  const p11 = data.get("pregunta11").toString();
  const p12 = data.get("pregunta12").toString();
  const p13 = data.get("pregunta13").toString();
  const p14 = data.get("pregunta14").toString();
  const p15 = data.get("pregunta15").toString();
  const seccion1 = valores1[p1] + valores1[p2] + valores1[p3] + valores1[p4];
  const seccion2 = valores1[p5] + valores1[p6] + valores1[p7] + valores1[p8];
  const seccion3 = valores1[p9] + valores2[p10] + valores2[p11] + valores1[p12];
  const seccion4 = valores2[p13] + valores1[p14] + valores2[p15];
  let saludFisica, saludMental, motivacion, actividadFisica;
  console.log(seccion3);
  switch (true) {
    case seccion1 >= 10:
      saludFisica = "Sigue manteniendo tu estilo de vida saludable";
      break;
    case seccion1 >= 5:
      saludFisica = "Considera aumentar la frecuencia de tu actividad f\xEDsica.";
      break;
    case seccion1 >= 0:
      saludFisica = "Es recomendable visitar a un profesional de la salud para una evaluaci\xF3n m\xE1s detallada.";
      break;
  }
  switch (true) {
    case seccion2 >= 10:
      saludMental = "Sigue cuidando tu bienestar mental.";
      break;
    case seccion2 >= 5:
      saludMental = "Intenta implementar t\xE9cnicas de manejo del estr\xE9s, como la meditaci\xF3n o el ejercicio.";
      break;
    case seccion2 >= 0:
      saludMental = "Busca apoyo profesional para gestionar mejor el estr\xE9s y la ansiedad.";
      break;
  }
  switch (true) {
    case seccion3 >= 10:
      motivacion = "Es genial ver que te sientes motivado. Sigue as\xED.";
      break;
    case seccion3 >= 5:
      motivacion = "Intenta encontrar nuevos desaf\xEDos o proyectos que te inspiren.";
      break;
    case seccion3 >= 0:
      motivacion = "Habla con tu supervisor para ver c\xF3mo puedes encontrar m\xE1s motivaci\xF3n en tu trabajo";
      break;
  }
  switch (true) {
    case seccion4 >= 5:
      actividadFisica = "}Sigue utilizando las instalaciones de la empresa y participando en programas";
      break;
    case seccion4 >= 0:
      actividadFisica = "Considera participar en los programas de bienestar f\xEDsico ofrecidos por la empresa.";
      break;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Formulario Enviado", "data-astro-cid-oesmrakf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="formulario-enviado" data-astro-cid-oesmrakf> <h1 id="titulo" data-astro-cid-oesmrakf>Formulario Enviado</h1> <article data-astro-cid-oesmrakf> <h2 data-astro-cid-oesmrakf>Resultados</h2> <p data-astro-cid-oesmrakf><strong data-astro-cid-oesmrakf>Salud Física:</strong> ${saludFisica}</p> <p data-astro-cid-oesmrakf><strong data-astro-cid-oesmrakf>Salud Mental:</strong> ${saludMental}</p> <p data-astro-cid-oesmrakf><strong data-astro-cid-oesmrakf>Motivación:</strong> ${motivacion}</p> <p data-astro-cid-oesmrakf><strong data-astro-cid-oesmrakf>Actividad Física:</strong> ${actividadFisica}</p> </article> </section> ` })} `;
}, "C:/Users/Gabriel/Documents/Proyectos/temp/forms-bienestar/src/pages/Envio.astro", void 0);

const $$file = "C:/Users/Gabriel/Documents/Proyectos/temp/forms-bienestar/src/pages/Envio.astro";
const $$url = "/Envio";

const Envio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Envio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Envio as E };
