# PruebasFinales

Proyecto JavaScript mínimo usado para generar Pull Requests reales y validar el análisis de **FlowMetric**.

No tiene dependencias externas: solo necesita Node.js 20 o superior.

## Estructura

```
src/
  math/calculator.js        Operaciones aritméticas y descuentos
  validation/validators.js  Validaciones de cadenas, enteros y emails
  utils/format.js           Redondeo y formato de moneda
  auth/permissions.js       Modelo de permisos ficticio (ruta crítica de ejemplo)
  index.js                  Punto de entrada
test/                       Pruebas unitarias con node:test
.github/workflows/tests.yml Ejecuta las pruebas en cada PR hacia main
```

## Uso

```bash
npm start   # ejecuta un pequeño ejemplo
npm test    # ejecuta las pruebas unitarias (node --test)
```

> `src/auth/` contiene código de permisos **ficticio**: no protege ningún recurso real ni contiene credenciales.
