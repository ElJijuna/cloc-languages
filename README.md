# cloc-languages

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/cloc-languages.svg)](https://www.npmjs.com/package/cloc-languages)
![npm downloads](https://img.shields.io/npm/dw/cloc-languages)
![npm downloads](https://img.shields.io/npm/dm/cloc-languages)
![npm downloads](https://img.shields.io/npm/dt/cloc-languages)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cloc-languages)
![npm](https://img.shields.io/npm/dt/cloc-languages)

---

Una lista de lenguajes y sus extensiones basada en [cloc](https://github.com/AlDanial/cloc).

## Instalación

```sh
npm install cloc-languages
```

---

## Uso básico

```js
import { languagesDescription } from 'cloc-languages';

console.log(languagesDescription);
// { ABAP: '(abap)', ActionScript: '(as)', ... }
```

---

### Ejemplo: listar todos los lenguajes y sus extensiones

```js
import { languagesDescription } from 'cloc-languages';

for (const [name, extensions] of Object.entries(languagesDescription)) {
  console.log(`${name}: ${extensions}`);
}
```

---

## Múltiples entrypoints

Puedes importar solo lo que necesitas:

```js
import { languagesColor } from 'cloc-languages/languages-color';
import { languagesCategory } from 'cloc-languages/languages-category';
import { languagesDescription } from 'cloc-languages/languages-description';
```

---

## API

- `languagesDescription`: Objeto con los lenguajes y sus extensiones.
- `languagesColor`: Objeto con los lenguajes y su color asociado.
- `languagesCategory`: Objeto con los lenguajes y su categoría (frontend, backend, scripting, etc).
- `languages`: Tipos y utilidades relacionadas.

---

## ¿Qué es esto?

Este paquete exporta objetos y tipos con los lenguajes reconocidos por [cloc](https://github.com/AlDanial/cloc), sus extensiones, colores y categorías.

---

## Scripts

- `npm run build`: Compila TypeScript a la carpeta `lib`.
- `npm test`: Ejecuta los tests.
- `npm run test:coverage`: Ejecuta los tests con cobertura.

---

## Licencia

MIT

---

Repositorio: https://github.com/ElJijuna/cloc-languages