# Parnerson Marketing — Sitio web

Sitio de la agencia de crecimiento digital y automatización **Parnerson**, construido con
**SvelteKit + Tailwind CSS v4**, con modo claro/oscuro premium e identidad de marca naranja (`#F1760E`).

## Stack

- **SvelteKit** (Svelte 5 · runes) + TypeScript
- **Tailwind CSS v4** (configuración CSS-first en `src/app.css`)
- **mode-watcher** — tema claro/oscuro con persistencia en `localStorage` y detección de `prefers-color-scheme`
- **lucide-svelte** — iconografía
- Tipografías **Sora** (display) + **Inter** (texto)

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build de producción (prerender estático)
npm run preview    # previsualizar el build
npm run check      # type-check
```

## ⚙️ Datos a personalizar

Edita **`src/lib/config.ts`** con los datos reales de la agencia. Actualmente son *placeholders*:

| Campo            | Descripción                                            |
| ---------------- | ------------------------------------------------------ |
| `whatsapp`       | Número de WhatsApp en formato internacional sin `+`    |
| `phoneDisplay`   | Teléfono mostrado en la web                            |
| `email`          | Correo de contacto                                     |
| `social.*`       | URLs de Instagram, LinkedIn y Facebook                 |
| `location`       | Ubicación / cobertura                                  |

El contenido (servicios, métricas, proceso, testimonios, FAQ) vive en **`src/lib/content.ts`**.

## Estructura

```
src/
├─ app.css                     # sistema de diseño: tokens de marca, temas, utilidades
├─ lib/
│  ├─ config.ts                # configuración del sitio (👉 editar datos reales)
│  ├─ content.ts               # contenido editable (servicios, métricas, etc.)
│  ├─ actions/reveal.ts        # animación de aparición al hacer scroll
│  └─ components/
│     ├─ Logo.svelte           # logo SVG (cursor + wordmark) themeable
│     ├─ Header.svelte, Footer.svelte, ThemeToggle.svelte, WhatsAppFloat.svelte
│     └─ sections/             # secciones de página (Hero, Servicios, etc.)
└─ routes/
   ├─ +page.svelte             # Inicio (landing)
   ├─ servicios/+page.svelte   # Servicios
   └─ contacto/+page.svelte    # Contacto (formulario → WhatsApp)
```

## Formulario de contacto

El formulario (`ContactForm.svelte`) valida en el cliente y abre WhatsApp con el mensaje
prellenado — entrega garantizada sin backend. Para enviarlo también por correo/CRM, puede
conectarse a un servicio como Formspree o un endpoint propio.

## Identidad visual

- Color protagonista: **`#F1760E`** (naranja corporativo). Sin azules/violetas tipo SaaS.
- Tokens de tema claro y oscuro definidos como variables CSS en `src/app.css`.
- Activos originales de marca en `static/brand/` y `identidad y mas/`.
