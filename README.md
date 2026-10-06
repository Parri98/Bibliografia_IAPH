# Bibliografía IAPH · APA 7 — V6

Aplicación web estática preparada para GitHub Pages.

## Novedad principal de V6

El corrector ya no se limita a decir si una referencia está bien o mal.

Ahora:

1. Detecta el tipo de documento.
2. Extrae los datos que puede reconocer.
3. Muestra un checklist campo por campo.
4. Marca con `✓` los datos encontrados.
5. Marca con `✕` los datos obligatorios que faltan.
6. Explica por qué se necesita cada dato.
7. Genera automáticamente campos para completar solo lo que falta.
8. No inventa información.
9. Solo construye la referencia final cuando dispone de los datos necesarios detectables.

## Ejemplo

Referencia recibida:

`Bellido Blanco, A. (2023) El paisaje y sus elementos esenciales: el patrimonio cultural. revista PH. Disponible en: https://doi.org/...`

El programa puede indicar:

- ✓ Autor
- ✓ Año
- ✓ Título
- ✓ Revista
- ✕ Número / volumen / páginas / localizador
- ✓ DOI
- ✕ Fecha de consulta

Y crea los campos necesarios para completarla.

## Funciones

- Generador guiado IAPH / revista PH
- Generador guiado APA 7
- Cita parentética
- Cita narrativa
- Corrector libre
- Detección de datos faltantes
- Campos dinámicos para completar la referencia
- Revisión de bibliografía completa por lotes
- Pruebas internas con ejemplos reales

## Publicar en GitHub Pages

1. Crea un repositorio.
2. Sube `index.html`, `style.css`, `app.js` y `README.md`.
3. Ve a `Settings > Pages`.
4. Selecciona `Deploy from a branch`.
5. Rama `main`.
6. Carpeta `/ (root)`.

## Base documental

### IAPH / revista PH
Se han utilizado las normas aportadas y ejemplos reales publicados en `revista PH`, n.º 118 (2026).

### APA 7
Se ha utilizado la guía aportada `Normas APA 7.ª edición. Guía de citación y referenciación`, segunda versión revisada y ampliada (2020), basada en el `Publication Manual of the American Psychological Association, 7th ed. (2019)`.

## Limitación

La extracción desde texto libre es heurística. Cuando un dato no puede identificarse con suficiente seguridad, V6 lo considera faltante en vez de inventarlo.
