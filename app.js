(function () {
  const dict = {
    es: {
      "nav.home": "Inicio",
      "nav.principles": "Principios",
      "nav.apps": "Aplicaciones",
      "nav.lang": "ES / EN",
      "hero.h1": "Menos ruido, más intención.",
      "hero.sub": "Ma & shibui en arquitectura, moda y diseño de interfaces.",
      "cta.explore": "Explorar principios",
      "home.quick.title": "Principios",
      "cards.ma.title": "El valor del espacio",
      "cards.ma.body": "El intervalo que permite que lo esencial respire.",
      "cards.shibui.title": "Sutileza con carácter",
      "cards.shibui.body": "Belleza sobria, texturas discretas, tiempo.",
      "cards.rhythm.title": "Pausa, contraste y silencio",
      "cards.rhythm.body": "Un ritmo visual que guía sin imponerse.",
      "home.closing":
        "La simplicidad no es ausencia, es elección: ma organiza silencios; shibui aporta carácter sobrio.",
      "principles.title": "Principios",
      "principles.intro":
        "Ma y shibui forman un lenguaje visual que equilibra propósito y calma. Ma mide el intervalo y el ritmo; shibui aporta una belleza sobria que resiste el tiempo.",
      "principles.ma.h2": "Ma — el intervalo significativo",
      "principles.ma.body":
        "Ma es la distancia que le da sentido a lo que vemos. Organiza prioridades, crea respiración y reduce fricción cognitiva. Un margen bien medido comunica respeto por el contenido.",
      "alt.ma.diagram":
        "Ejemplo visual del uso del espacio para crear ritmo y claridad.",
      "principles.shibui.h2": "Shibui — sobriedad con profundidad",
      "principles.shibui.body":
        "Shibui evita lo llamativo: prefiere paletas contenidas, materiales honestos y texturas discretas. Su belleza aparece en el uso diario y se revela con el tiempo.",
      "alt.shibui.texture":
        "Textura sobria y materiales honestos con luz suave.",
      "apps.arch.title": "Arquitectura",
      "apps.arch.body":
        "Luz natural, líneas puras y vacío útil. El vacío no es desperdicio: es potencial de uso, circulación y descanso visual.",
      "apps.arch.caption":
        "Luz lateral suave, sombras definidas y geometría limpia.",
      "apps.fashion.title": "Moda",
      "apps.fashion.body":
        "Paletas neutras, tejidos táctiles, siluetas serenas.",
      "apps.ui.title": "Interfaces",
      "apps.ui.body":
        "Grilla de 12 columnas, espaciado 8/16/24/32, una sola familia tipográfica y un color de acento funcional.",
    },
    en: {
      "nav.home": "Home",
      "nav.principles": "Principles",
      "nav.apps": "Applications",
      "nav.lang": "EN / ES",
      "hero.h1": "Less noise, more intention.",
      "hero.sub":
        "Ma & shibui in architecture, fashion, and interface design.",
      "cta.explore": "Explore principles",
      "home.quick.title": "Principles",
      "cards.ma.title": "The value of space",
      "cards.ma.body": "The interval that lets the essential breathe.",
      "cards.shibui.title": "Subtlety with character",
      "cards.shibui.body":
        "Unshowy beauty, discreet textures, time.",
      "cards.rhythm.title": "Pause, contrast, and silence",
      "cards.rhythm.body":
        "A visual rhythm that guides without imposing.",
      "home.closing":
        "Simplicity is not absence; it is intentional choice. Ma shapes quiet, shibui adds restrained character.",
      "principles.title": "Principles",
      "principles.intro":
        "Ma and shibui form a visual language that balances purpose and calm. Ma defines interval and rhythm; shibui offers quiet, enduring beauty.",
      "principles.ma.h2": "Ma — the meaningful interval",
      "principles.ma.body":
        "Ma is the distance that gives meaning to what we see. It sets priorities, creates breathing room, and reduces cognitive friction.",
      "alt.ma.diagram":
        "Visual example of spacing used to create rhythm and clarity.",
      "principles.shibui.h2": "Shibui — restraint with depth",
      "principles.shibui.body":
        "Shibui avoids loudness: it prefers restrained palettes, honest materials, discreet textures. Beauty that reveals itself over time.",
      "alt.shibui.texture":
        "Soft lighting, natural material, subtle texture.",
      "apps.arch.title": "Architecture",
      "apps.arch.body":
        "Natural light, pure lines and purposeful emptiness. Emptiness is not waste: it's potential for circulation, rest and clarity.",
      "apps.arch.caption":
        "Side light, calm shadows and clean geometry.",
      "apps.fashion.title": "Fashion",
      "apps.fashion.body":
        "Neutral palettes, tactile fabrics, serene silhouettes.",
      "apps.ui.title": "Interfaces",
      "apps.ui.body":
        "12-column grid, 8/16/24/32 spacing scale, one type family, one functional accent color.",
    },
  };

  const langBtn = document.getElementById("langToggle");
  const i18nEls = document.querySelectorAll("[data-i18n]");
  const yearEl = document.getElementById("year");

  let lang = localStorage.getItem("lang") || "es";

  function applyLang() {
    i18nEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang][key]) {
        el.textContent = dict[lang][key];
      }
    });
    if (langBtn && dict[lang]["nav.lang"]) {
        langBtn.textContent = dict[lang]["nav.lang"];
    }
    document.documentElement.lang = lang;
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  applyLang();

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = lang === "es" ? "en" : "es";
      localStorage.setItem("lang", lang);
      applyLang();
    });
  }
})();
