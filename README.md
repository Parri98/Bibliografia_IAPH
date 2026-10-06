# Bibliografía IAPH · APA 7 — V8.1

Aplicación web estática para GitHub Pages orientada a generación, corrección y verificación bibliográfica.

## Qué añade V8

### Búsqueda automática en fuentes bibliográficas abiertas

La aplicación intenta recuperar metadatos desde:

- **Crossref**
- **OpenAlex**
- **DataCite**
- **Open Library** (libros/capítulos)

Los resultados muestran:
- fuente;
- título;
- coincidencia aproximada;
- metadatos recuperados;
- DOI cuando existe;
- botón `Usar estos datos`.

La aplicación **no aplica automáticamente** ningún registro encontrado. La persona revisora debe confirmar que se trata de la obra correcta.

### Comprobación manual en buscadores utilizados por investigadores

V8 genera búsquedas directas para:

- **Google Scholar**
- **Dialnet**
- **JSTOR**
- **Google**
- **Google Books**

La consulta se construye con los datos ya detectados (preferentemente título + primer autor + año).

Esto es especialmente útil cuando:
- el registro no tiene DOI;
- es bibliografía española;
- la obra no está en Crossref/OpenAlex/DataCite;
- se necesita comprobar la edición exacta;
- el artículo está indexado en Dialnet/JSTOR/Scholar pero no en una API abierta.

## Flujo recomendado

1. Pegar referencia.
2. `Analizar referencia`.
3. Revisar campos detectados.
4. `Buscar datos automáticamente`.
5. Confirmar una coincidencia si es correcta.
6. Si quedan dudas, abrir:
   - Google Scholar,
   - Dialnet,
   - JSTOR.
7. Completar manualmente cualquier dato aún pendiente.
8. `Completar y corregir`.
9. Copiar referencia final IAPH / revista PH o APA 7.

## Sistemas bibliográficos

### IAPH / revista PH
- Autor-fecha.
- Cita parentética sin coma entre apellido y año.
- Hasta tres autores en texto.
- Más de tres: primer autor + `et ál.`.
- Referencias en línea: `Disponible en:` + URL/DOI + `[Consulta: dd/mm/aaaa]`.
- Todos los autores en bibliografía final.

### APA 7
- Citas parentéticas y narrativas diferenciadas.
- Dos autores: `&` en parentética.
- Tres o más: `et al.` desde la primera cita.
- DOI en formato `https://doi.org/...`.

## GitHub Pages

Subir a la raíz:
- `index.html`
- `style.css`
- `app.js`
- `README.md`

Después:
`Settings > Pages > Deploy from a branch > main > / (root)`

## Limitaciones técnicas

Esta V8 sigue siendo una aplicación estática.

- Crossref, OpenAlex, DataCite y Open Library dependen de sus APIs públicas y de la disponibilidad/CORS.
- Google Scholar, Dialnet y JSTOR se usan mediante **búsquedas manuales preparadas**, no mediante scraping.
- No se debe automatizar Google Scholar mediante scraping.
- Una coincidencia bibliográfica es una ayuda a la revisión, no una confirmación automática.
- Para una versión institucional con búsqueda web más amplia, caché, control de cuotas y APIs con claves privadas, conviene añadir un backend.


## Corrección V8.1

Se corrige un error de JavaScript de V8 que impedía inicializar el generador. V8.1 ha sido comprobada en navegador con generación IAPH y APA 7 y con las pruebas internas (4/4).
