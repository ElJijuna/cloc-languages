# cloc-languages

[![npm version](https://img.shields.io/npm/v/cloc-languages.svg)](https://www.npmjs.com/package/cloc-languages)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Una lista de lenguajes y sus extensiones basada en [cloc](https://github.com/AlDanial/cloc).

## Instalación

```sh
npm install cloc-languages
```

## Uso

```js
import languages from 'cloc-languages';

console.log(languages);
// { ABAP: '(abap)', ActionScript: '(as)', ... }
```

### Ejemplo: listar todos los lenguajes y sus extensiones

```js
import languages from 'cloc-languages';

for (const [name, extensions] of Object.entries(languages)) {
  console.log(`${name}: ${extensions}`);
}
```

## API

- El paquete exporta un objeto por defecto.
- Cada clave es el nombre de un lenguaje.
- Cada valor es un string con las extensiones asociadas, entre paréntesis y separadas por comas.

## ¿Qué es esto?

Este paquete exporta un objeto con los lenguajes reconocidos por [cloc](https://github.com/AlDanial/cloc) y sus extensiones asociadas.

## Scripts

- `npm test`: Ejecuta los tests.
- `npm run test:coverage`: Ejecuta los tests con cobertura.

## Licencia

MIT

---

Repositorio: https://github.com/ElJijuna/cloc-