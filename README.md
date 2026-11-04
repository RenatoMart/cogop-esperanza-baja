# IDP Esperanza Baja – Casa de Gracia

Sitio web de la **Iglesia de Dios de la Profecía "Casa de Gracia"**, en La Esperanza (parte baja), Trujillo, Perú. Desde 1971.

Construido con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

## Páginas

| Ruta                    | Contenido                                                   |
| ----------------------- | ----------------------------------------------------------- |
| `/`                     | Inicio: banner, visión y misión, ministerios por edades, ejes y valores |
| `/nosotros`             | Historia, visión, misión, objetivo general, valores y ejes  |
| `/ministerios`          | Todos los ministerios, agrupados                            |
| `/ministerios/[slug]`   | Una página por ministerio, con descripción y actividades    |
| `/ubicacion`            | Dirección, mapa y campos misioneros                         |

## Empezar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción
npm run start    # sirve la compilación
npm run lint     # ESLint
```

Requiere Node.js 20 o superior.

## Estructura

```
src/
├── app/           # Rutas (App Router), layout y estilos globales
├── components/    # Header, Footer, Icon, Reveal y componentes de UI
└── data/
    ├── site.ts        # Datos generales: dirección, visión, misión, valores, ejes
    └── ministries.ts  # Lista de ministerios y sus actividades
public/images/     # Emblema de la iglesia y logos de ministerios
```

## Agregar o editar contenido

- **Textos generales** (dirección, visión, misión, valores): `src/data/site.ts`.
- **Ministerios**: `src/data/ministries.ts`. Cada ministerio tiene `slug`, `short`, `name`, `group`, `tagline`, `description`, `activities` y, opcionalmente, `logo`.
  - Sin `logo`, la tarjeta muestra el nombre del ministerio en letras.
  - Para añadir un logo, copia el PNG a `public/images/ministerios/` y pon su ruta en `logo`.
  - La página del ministerio se crea sola a partir de `slug`.

## Diseño

- Paleta azul marino y dorado, tomada del emblema de la iglesia.
- Tipografías: Roboto (títulos y texto), Allura (“Casa de Gracia”) y Cormorant Garamond (subtítulos).
- Animaciones de entrada solo con CSS (`animation-timeline: view()`), sin JavaScript, y desactivadas con `prefers-reduced-motion`.

## Docker

```bash
docker build -t cogop-esperanza-baja .
docker run -p 3000:3000 cogop-esperanza-baja
```

## Créditos

Los logos de los ministerios provienen de los recursos oficiales de COGOP Perú ([cogopperu.com/logos](https://cogopperu.com/logos/)) y pertenecen a sus titulares.
