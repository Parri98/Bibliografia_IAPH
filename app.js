
const SOURCE_NOTE = {
  iaph: "IAPH/revista PH: autor-fecha sin coma entre apellido y año; las referencias en línea incorporan “Disponible en:” y fecha de consulta entre corchetes.",
  apa: "APA 7: citas parentéticas y narrativas diferenciadas; dos autores usan & en parentética y tres o más usan et al. desde la primera cita."
};

const defs = {
  iaph: {
    book:{
      label:"Libro",
      required:["authors","year","title","place","publisher"],
      optional:["edition","url","access"],
      fields:[
        ["authors","Autor/es","Maillard, Ch.","Nombre bibliográfico del autor o autores."],
        ["year","Año","1992","Año de publicación."],
        ["title","Título","La creación por la metáfora: introducción a la razón-poética","Título completo de la obra."],
        ["edition","Edición","3.ª ed.","Solo si no es la primera edición."],
        ["place","Lugar de edición","Barcelona","Ciudad o lugar de edición."],
        ["publisher","Editorial","Anthropos","Editorial o entidad editora."],
        ["url","URL opcional","","Si existe versión en línea."],
        ["access","Fecha de consulta","19/11/2020","Necesaria en referencias IAPH en línea."]
      ]
    },
    chapter:{
      label:"Capítulo de libro",
      required:["authors","year","title","book","place","publisher","pages"],
      optional:["editors","editorRole","url","access"],
      fields:[
        ["authors","Autor/es del capítulo","Ortega Chinchilla, M.J.","Autoría del capítulo."],
        ["year","Año","2019","Año de publicación."],
        ["title","Título del capítulo","El paisaje más allá de la estética: Paisajes invisibles","Título del capítulo."],
        ["editors","Editor/es o coordinador/es","Forniés Casals, J.F.; Numhauser, P.","Responsables de la obra contenedora, si constan."],
        ["editorRole","Rol editorial","ed. lit.","Ej.: ed., coord., ed. lit."],
        ["book","Título del libro","Escrituras silenciadas: paisaje como historiografía","Obra que contiene el capítulo."],
        ["place","Lugar","Madrid","Lugar de edición."],
        ["publisher","Editorial / institución","Universidad Alcalá de Henares","Editorial o institución editora."],
        ["pages","Páginas","591-605","Rango de páginas del capítulo."],
        ["url","URL opcional","","Si existe versión en línea."],
        ["access","Fecha de consulta","","Necesaria en IAPH si hay URL/DOI."]
      ]
    },
    journal:{
      label:"Artículo / publicación seriada",
      required:["authors","year","title","journal"],
      optional:["volume","issue","pages","article","month","doi","url","access"],
      fields:[
        ["authors","Autor/es","Bellido Blanco, A.","Autoría del artículo."],
        ["year","Año","2023","Año de publicación."],
        ["title","Título del artículo","El paisaje y sus elementos esenciales: el patrimonio cultural","Título completo del artículo."],
        ["journal","Revista / publicación","revista PH","Título de la revista."],
        ["volume","Volumen","","Volumen, si la revista lo utiliza."],
        ["issue","Número","108","Número de la revista, si existe."],
        ["pages","Páginas","107-109","Rango de páginas, si procede."],
        ["article","Artículo / e-locator","","Número de artículo o localizador electrónico, si sustituye a las páginas."],
        ["month","Mes","","Mes, cuando forme parte de la referencia editorial."],
        ["doi","DOI opcional","https://doi.org/10.33349/2023.108.5251","DOI expresado como URL."],
        ["url","URL opcional","","URL si no hay DOI."],
        ["access","Fecha de consulta","25/05/2026","Necesaria en IAPH si hay DOI/URL."]
      ]
    },
    thesis:{
      label:"Tesis / literatura gris",
      required:["authors","year","title","kind"],
      optional:["institution","url","access"],
      fields:[
        ["authors","Autor/es o institución","Carrera Díaz, G.","Autoría."],
        ["year","Año","2016","Año."],
        ["title","Título","","Título completo."],
        ["kind","Tipo","Tesis doctoral inédita","Tipo documental."],
        ["institution","Institución","Universidad de Sevilla","Universidad o institución."],
        ["url","URL opcional","","URL si está disponible en línea."],
        ["access","Fecha de consulta","","Necesaria en IAPH si hay URL."]
      ]
    },
    law:{
      label:"Legislación",
      required:["law","bulletin"],
      optional:["issue","date","url","access"],
      fields:[
        ["law","Norma completa","Ley 5/2007, de 26 de junio, por la que...","Denominación completa de la norma."],
        ["bulletin","Boletín oficial","Boletín Oficial de la Junta de Andalucía","Publicación oficial."],
        ["issue","Número","131","Número del boletín."],
        ["date","Fecha del boletín","4 de julio de 2007","Fecha de publicación."],
        ["url","URL opcional","","URL oficial."],
        ["access","Fecha de consulta","","Necesaria en IAPH si hay URL."]
      ]
    },
    web:{
      label:"Página web",
      required:["authors","year","title","url","access"],
      optional:[],
      fields:[
        ["authors","Autor / organismo","Organización de Naciones Unidas","Autor personal o corporativo."],
        ["year","Año","2020","Año de publicación o actualización."],
        ["title","Título","Agenda 2030 sobre el desarrollo sostenible","Título de la página."],
        ["url","URL","https://...","Dirección web."],
        ["access","Fecha de consulta","02/04/2020","Fecha de consulta IAPH."]
      ]
    },
    orgdoc:{
      label:"Documento de organismo",
      required:["authors","year","title"],
      optional:["details","url","access"],
      fields:[
        ["authors","Organismo autor","ICOMOS","Organismo responsable."],
        ["year","Año","1964","Año."],
        ["title","Título","Carta Internacional sobre la Conservación y Restauración de Monumentos y Sitios","Título."],
        ["details","Datos complementarios","Congreso, lugar, serie...","Datos de contexto editorial."],
        ["url","URL opcional","","URL."],
        ["access","Fecha de consulta","","Necesaria en IAPH si hay URL."]
      ]
    }
  },

  apa: {
    book:{
      label:"Libro",
      required:["authors","year","title","publisher"],
      optional:["edition","doi","url"],
      fields:[
        ["authors","Autor/es","Apellido, A.; Apellido, B.","Autoría."],
        ["year","Año","2024","Año."],
        ["title","Título","","Título del libro."],
        ["edition","Edición","2.ª ed.","Solo si procede."],
        ["publisher","Editorial","","Editorial."],
        ["doi","DOI opcional","https://doi.org/...","DOI como URL."],
        ["url","URL opcional","","URL, si procede."]
      ]
    },
    chapter:{
      label:"Capítulo de libro",
      required:["authors","year","title","book","publisher","pages"],
      optional:["editors","doi","url"],
      fields:[
        ["authors","Autor/es","Apellido, A.","Autoría del capítulo."],
        ["year","Año","2024","Año."],
        ["title","Título del capítulo","","Título del capítulo."],
        ["editors","Editor/es","Apellido, B.","Editor/es de la obra."],
        ["book","Título del libro","","Obra contenedora."],
        ["pages","Páginas","25-44","Rango de páginas."],
        ["publisher","Editorial","","Editorial."],
        ["doi","DOI opcional","https://doi.org/...","DOI."],
        ["url","URL opcional","","URL."]
      ]
    },
    journal:{
      label:"Artículo de revista",
      required:["authors","year","title","journal","volume"],
      optional:["issue","pages","doi","url"],
      fields:[
        ["authors","Autor/es","Castañeda Naranjo, L. A.; Palacios Neri, J.","Autoría."],
        ["year","Año","2015","Año."],
        ["title","Título del artículo","Nanotecnología: fuente de nuevos paradigmas","Título."],
        ["journal","Revista","Mundo Nano. Revista Interdisciplinaria en Nanociencias y Nanotecnología","Título de revista."],
        ["volume","Volumen","7","Volumen."],
        ["issue","Número","12","Número."],
        ["pages","Páginas","45-49","Páginas."],
        ["doi","DOI opcional","https://doi.org/10.22201/ceiich.24485691e.2014.12.49710","DOI como URL."],
        ["url","URL opcional","","URL."]
      ]
    },
    thesis:{
      label:"Tesis / disertación",
      required:["authors","year","title","kind","institution"],
      optional:["database","url"],
      fields:[
        ["authors","Autor/es","Martínez Ribón, J. G. T.","Autoría."],
        ["year","Año","2011","Año."],
        ["title","Título","","Título."],
        ["kind","Tipo","Tesis de Maestría","Tipo de tesis."],
        ["institution","Institución","Universidad Nacional de Colombia","Institución."],
        ["database","Repositorio / base de datos","","Repositorio."],
        ["url","URL opcional","","URL."]
      ]
    },
    web:{
      label:"Página web",
      required:["authors","date","title","url"],
      optional:["site"],
      fields:[
        ["authors","Autor / organización","UNESCO","Autoría."],
        ["date","Fecha","1 de octubre de 2018","Fecha."],
        ["title","Título","","Título de la página."],
        ["site","Nombre del sitio","","Sitio, si difiere del autor."],
        ["url","URL","https://...","URL."]
      ]
    },
    report:{
      label:"Informe / literatura gris",
      required:["authors","year","title"],
      optional:["kind","publisher","doi","url"],
      fields:[
        ["authors","Autor / institución","","Autoría."],
        ["year","Año","2024","Año."],
        ["title","Título","","Título."],
        ["kind","Tipo entre corchetes","Informe","Tipo documental."],
        ["publisher","Editorial / organismo","","Entidad editora."],
        ["doi","DOI opcional","","DOI."],
        ["url","URL opcional","","URL."]
      ]
    },
    conference:{
      label:"Conferencia / ponencia / póster",
      required:["authors","date","title","kind","event"],
      optional:["place","url"],
      fields:[
        ["authors","Autor/es","","Autoría."],
        ["date","Fecha","17-29 de noviembre de 2018","Fecha."],
        ["title","Título","","Título."],
        ["kind","Tipo","Ponencia","Tipo de presentación."],
        ["event","Evento","","Nombre del evento."],
        ["place","Lugar","Ciudad, país","Lugar."],
        ["url","URL opcional","","URL."]
      ]
    },
    law:{
      label:"Referencia jurídica",
      required:["law"],
      optional:["date","source","issue","url"],
      fields:[
        ["law","Norma / título legal","","Denominación."],
        ["date","Fecha","","Fecha."],
        ["source","Fuente oficial","","Fuente jurídica oficial."],
        ["issue","Número","","Número."],
        ["url","URL opcional","","URL."]
      ]
    }
  }
};

const $ = id => document.getElementById(id);
const styleSelect = $("styleSelect");
const typeSelect = $("typeSelect");
const freeType = $("freeType");
const fields = $("fields");

let analysisState = null;

function esc(s=""){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function dot(s=""){ return s && !/[.!?]$/.test(s) ? s+"." : s; }
function splitAuthors(raw=""){ return raw.split(";").map(x=>x.trim()).filter(Boolean); }
function joinHuman(list,lastWord){
  if(!list.length) return "";
  if(list.length===1) return list[0];
  if(list.length===2) return `${list[0]} ${lastWord} ${list[1]}`;
  return `${list.slice(0,-1).join(", ")} ${lastWord} ${list[list.length-1]}`;
}
function joinIaphAuthors(raw){ return joinHuman(splitAuthors(raw),"y"); }
function joinApaAuthors(raw){
  const a=splitAuthors(raw);
  if(a.length<=20) return joinHuman(a,"y");
  return `${a.slice(0,19).join(", ")}, … ${a[a.length-1]}`;
}
function surnameOf(author=""){ return author.split(",")[0].trim(); }

function iaphCitations(rawAuthors,year){
  const a=splitAuthors(rawAuthors).map(surnameOf);
  if(!a.length || !year) return {parenthetical:"—",narrative:"—"};
  let x;
  if(a.length<=3) x=joinHuman(a,"y");
  else x=`${a[0]} et ál.`;
  return {parenthetical:`(${x} ${year})`,narrative:`${x} (${year})`};
}
function apaCitations(rawAuthors,yearOrDate){
  const a=splitAuthors(rawAuthors).map(surnameOf);
  const m=String(yearOrDate||"").match(/\b(19|20)\d{2}\b|s\.\s*f\./i);
  const year=m?m[0]:String(yearOrDate||"").trim();
  if(!a.length || !year) return {parenthetical:"—",narrative:"—"};
  if(a.length===1) return {parenthetical:`(${a[0]}, ${year})`,narrative:`${a[0]} (${year})`};
  if(a.length===2) return {parenthetical:`(${a[0]} & ${a[1]}, ${year})`,narrative:`${a[0]} y ${a[1]} (${year})`};
  return {parenthetical:`(${a[0]} et al., ${year})`,narrative:`${a[0]} et al. (${year})`};
}

function renderTypes(){
  const style=styleSelect.value;
  typeSelect.innerHTML="";
  freeType.innerHTML='<option value="auto">Detectar automáticamente</option>';
  Object.entries(defs[style]).forEach(([key,def])=>{
    typeSelect.insertAdjacentHTML("beforeend",`<option value="${key}">${def.label}</option>`);
    freeType.insertAdjacentHTML("beforeend",`<option value="${key}">${def.label}</option>`);
  });
  renderFields();
  $("generatorNote").textContent=SOURCE_NOTE[style];
  resetAnalysis();
}

function renderFields(){
  const def=defs[styleSelect.value][typeSelect.value];
  fields.innerHTML=def.fields.map(([name,label,placeholder])=>`
    <div class="field">
      <label for="f_${name}">${label}${def.required.includes(name)?" *":""}</label>
      <input id="f_${name}" name="${name}" placeholder="${esc(placeholder)}" />
    </div>
  `).join("");
  fields.querySelectorAll("input").forEach(i=>i.addEventListener("input",generate));
  generate();
}

function values(){
  const v={};
  fields.querySelectorAll("[name]").forEach(i=>v[i.name]=i.value.trim());
  return v;
}

function formatIaph(type,v){
  const A=joinIaphAuthors(v.authors||"");
  let r="";

  if(type==="book"){
    r=`${A} (${v.year}) ${dot(v.title)}`;
    if(v.edition) r+=` ${dot(v.edition)}`;
    r+=` ${v.place}: ${v.publisher}`;
  }
  if(type==="chapter"){
    r=`${A} (${v.year}) ${dot(v.title)} En: `;
    if(v.editors){
      r+=`${joinIaphAuthors(v.editors)}${v.editorRole?` (${v.editorRole})`:""} `;
    }
    r+=`${dot(v.book)} ${v.place}: ${v.publisher}, pp. ${v.pages}`;
  }
  if(type==="journal"){
    r=`${A} (${v.year}) ${dot(v.title)} ${v.journal}`;
    if(v.volume) r+=`, vol. ${v.volume}`;
    if(v.issue) r+=`, n.º ${v.issue}`;
    if(v.month) r+=`, ${v.month}`;
    if(v.pages) r+=`, pp. ${v.pages}`;
    if(v.article) r+=`, ${v.article}`;
  }
  if(type==="thesis"){
    r=`${A} (${v.year}) ${dot(v.title)} ${dot(v.kind)}`;
    if(v.institution) r+=` ${dot(v.institution)}`;
  }
  if(type==="law"){
    r=`${dot(v.law)} ${v.bulletin}`;
    if(v.issue) r+=`, n.º ${v.issue}`;
    if(v.date) r+=`, de ${v.date}`;
    r+=".";
  }
  if(type==="web"){
    r=`${A} (${v.year}) ${dot(v.title)} Disponible en: ${v.url}`;
    if(v.access) r+=` [Consulta: ${v.access}]`;
  }
  if(type==="orgdoc"){
    r=`${A} (${v.year}) ${dot(v.title)}`;
    if(v.details) r+=` ${dot(v.details)}`;
  }

  const online=v.doi||v.url;
  if(online && type!=="web"){
    r+=` Disponible en: ${online}`;
    if(v.access) r+=` [Consulta: ${v.access}]`;
  }
  return r.replace(/\s+/g," ").trim();
}

function formatApa(type,v){
  const A=joinApaAuthors(v.authors||"");
  let r="";
  if(type==="book"){
    r=`${dot(A)} (${v.year||"s. f."}). ${dot(v.title)}`;
    if(v.edition) r+=` (${v.edition}).`;
    r+=` ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }
  if(type==="chapter"){
    r=`${dot(A)} (${v.year||"s. f."}). ${dot(v.title)} En `;
    if(v.editors) r+=`${joinApaAuthors(v.editors)} (ed.), `;
    r+=`${v.book} (pp. ${v.pages}). ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }
  if(type==="journal"){
    r=`${dot(A)} (${v.year||"s. f."}). ${dot(v.title)} ${v.journal}, ${v.volume}`;
    if(v.issue) r+=`(${v.issue})`;
    if(v.pages) r+=`, ${v.pages}`;
    r+=".";
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }
  if(type==="thesis"){
    r=`${dot(A)} (${v.year||"s. f."}). ${v.title} [${v.kind}, ${v.institution}]`;
    if(v.database) r+=`. ${v.database}`;
    r+=".";
    if(v.url) r+=` ${v.url}`;
  }
  if(type==="web"){
    r=`${dot(A)} (${v.date||"s. f."}). ${dot(v.title)}`;
    if(v.site && v.site!==A) r+=` ${dot(v.site)}`;
    r+=` ${v.url}`;
  }
  if(type==="report"){
    r=`${dot(A)} (${v.year||"s. f."}). ${dot(v.title)}`;
    if(v.kind) r+=` [${v.kind}].`;
    if(v.publisher) r+=` ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }
  if(type==="conference"){
    r=`${dot(A)} (${v.date||"s. f."}). ${v.title} [${v.kind}]. ${dot(v.event)}`;
    if(v.place) r+=` ${dot(v.place)}`;
    if(v.url) r+=` ${v.url}`;
  }
  if(type==="law"){
    r=`${dot(v.law)}`;
    if(v.date) r+=` ${dot(v.date)}`;
    if(v.source) r+=` ${v.source}`;
    if(v.issue) r+=` n.º ${v.issue}`;
    r+=".";
    if(v.url) r+=` ${v.url}`;
  }
  return r.replace(/\s+/g," ").trim();
}

function generate(){
  const style=styleSelect.value,type=typeSelect.value,v=values();
  if(!Object.values(v).some(Boolean)){
    $("generated").textContent="Completa los campos.";
    $("generated").classList.add("muted");
    $("citationParenthetical").textContent="—";
    $("citationNarrative").textContent="—";
    return;
  }
  const ref=style==="iaph"?formatIaph(type,v):formatApa(type,v);
  const cites=style==="iaph"?iaphCitations(v.authors||"",v.year||""):apaCitations(v.authors||"",v.year||v.date||"");
  $("generated").textContent=ref;
  $("generated").classList.remove("muted");
  $("citationParenthetical").textContent=cites.parenthetical;
  $("citationNarrative").textContent=cites.narrative;
}

function detectType(ref){
  const s=ref.toLowerCase(),style=styleSelect.value;
  if(/tesis|disertaci[oó]n|literatura gris/.test(s)) return "thesis";
  if(/bolet[ií]n oficial|\bley\b|\bdecreto\b|boe|boja|dog\b|d\.o\./.test(s)) return "law";
  if(style==="apa" && /congreso|conferencia|simposio|ponencia|p[oó]ster/.test(s)) return "conference";
  if(/revista|journal|vol\.|n\.º|\d+\s*\(\s*\d+\s*\)/.test(s)) return "journal";
  if(/\bEn:\s/i.test(ref) || /pp\.\s*\d/i.test(ref)) return defs[style].chapter?"chapter":"book";
  if(style==="apa" && /https?:\/\//.test(s)) return "web";
  if(style==="iaph" && /disponible en:/i.test(ref) && /https?:\/\//.test(ref)) return "web";
  return "book";
}

function fieldLabel(style,type,name){
  const def=defs[style][type];
  const f=def.fields.find(x=>x[0]===name);
  return f?f[1]:name;
}
function fieldWhy(style,type,name){
  const def=defs[style][type];
  const f=def.fields.find(x=>x[0]===name);
  return f?f[3]:"";
}

function extractAuthorsAndYear(ref,style){
  const out={};
  const yearMatch=ref.match(/\((\d{4})\)|\b((?:19|20)\d{2})\b/);
  if(yearMatch){
    out.year=yearMatch[1]||yearMatch[2];
    out.date=out.year;
  }

  let beforeYear="";
  if(yearMatch){
    beforeYear=ref.slice(0,yearMatch.index).trim().replace(/[.,;:\s]+$/,"");
  }

  if(beforeYear && !/^(Ley|Decreto|Real Decreto|Orden|Resoluci[oó]n)\b/i.test(beforeYear)){
    const cleaned=beforeYear
      .replace(/\s+y\s+/g,"; ")
      .replace(/\s+&\s+/g,"; ")
      .replace(/,\s+(?=[A-ZÁÉÍÓÚÑ][^,]+,\s*[A-ZÁÉÍÓÚÑ]\.)/g,"; ");
    out.authors=cleaned;
  }
  return out;
}

function extractData(ref,type,style){
  const data=extractAuthorsAndYear(ref,style);
  const text=ref.replace(/\s+/g," ").trim();

  const url=(text.match(/https?:\/\/\S+/i)||[])[0];
  if(url){
    if(/doi\.org/i.test(url)) data.doi=url.replace(/[)\],.;]+$/,"");
    else data.url=url.replace(/[)\],.;]+$/,"");
  }
  const access=text.match(/\[Consulta:\s*([^\]]+)\]/i);
  if(access) data.access=access[1].trim();

  if(type==="law"){
    data.law=(text.match(/^(.+?)(?=\s+(?:Bolet[ií]n Oficial|BOE|BOJA|DOG|D\.O\.))/i)||[])[1] || "";
    const bulletin=(text.match(/(Bolet[ií]n Oficial[^,.;]*|BOE|BOJA|DOG|D\.O\.)/i)||[])[1];
    if(bulletin) data.bulletin=bulletin;
    const n=text.match(/(?:n\.º|nº|núm\.?|número)\s*(\d+)/i);
    if(n) data.issue=n[1];
    return data;
  }

  if(type==="journal"){
    const n=text.match(/(?:n\.º|nº|núm\.?|número)\s*(\d+)/i);
    if(n) data.issue=n[1];
    const vol=text.match(/(?:vol\.|volumen)\s*(\d+)/i);
    if(vol) data.volume=vol[1];
    const pp=text.match(/pp\.\s*([0-9]+(?:\s*[-–]\s*[0-9]+)?)/i);
    if(pp) data.pages=pp[1].replace(/\s+/g,"");
    const art=text.match(/(?:art\.?|article)\s*([0-9A-Za-z.-]+)/i);
    if(art) data.article=art[1];

    // Heurística: después del año, primer bloque termina en punto = título.
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      const parts=rest.split(/\.\s+/);
      if(parts[0]) data.title=parts[0].trim();
      if(parts[1]){
        const journal=parts[1].replace(/,\s*(?:vol\.|n\.º|nº|núm\.?|número).*$/i,"").trim();
        if(journal) data.journal=journal;
      }
    }
    return data;
  }

  if(type==="chapter"){
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      const en=rest.match(/^(.+?)\.\s+En:\s+(.+)$/i);
      if(en){
        data.title=en[1].trim();
        const container=en[2];
        const pp=container.match(/pp\.\s*([0-9]+(?:\s*[-–]\s*[0-9]+)?)/i);
        if(pp) data.pages=pp[1].replace(/\s+/g,"");
        const placePub=container.match(/([A-ZÁÉÍÓÚÑ][^.:]{1,50}):\s*([^,]+)(?:,|$)/);
        if(placePub){ data.place=placePub[1].trim(); data.publisher=placePub[2].trim(); }
        const bookGuess=container.split(/\.\s+[A-ZÁÉÍÓÚÑ][^:]+:\s/)[0];
        if(bookGuess) data.book=bookGuess.replace(/^.*?\)\s*/,"").trim();
      } else {
        const titleOnly=rest.split(/\.\s+/)[0];
        if(titleOnly) data.title=titleOnly.trim();
      }
    }
    return data;
  }

  if(type==="book"){
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      const placePub=rest.match(/^(.*?)\.\s+([^.:]{2,50}):\s*([^.;]+)(?:\.|$)/);
      if(placePub){
        data.title=placePub[1].trim();
        data.place=placePub[2].trim();
        data.publisher=placePub[3].trim();
      } else {
        const parts=rest.split(/\.\s+/);
        if(parts[0]) data.title=parts[0].trim();
      }
    }
    return data;
  }

  if(type==="web"){
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      const clean=rest.replace(/Disponible en:.*/i,"").replace(/https?:\/\/.*/i,"").trim();
      if(clean) data.title=clean.replace(/\.$/,"");
    }
    if(style==="apa"){
      const d=text.match(/\(([^)]*(?:19|20)\d{2}[^)]*)\)/);
      if(d) data.date=d[1].trim();
    }
    return data;
  }

  if(type==="thesis"){
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      const kind=rest.match(/\b(Tesis doctoral inédita|Tesis doctoral|Tesis de Maestría|Tesis de maestría|Disertaci[oó]n doctoral)\b/i);
      if(kind){
        data.kind=kind[1];
        data.title=rest.slice(0,kind.index).replace(/[.\s]+$/,"");
        const after=rest.slice(kind.index+kind[0].length).replace(/^[.,\s]+/,"");
        if(after) data.institution=after.split(/Disponible en:|https?:\/\//i)[0].replace(/[.\s]+$/,"");
      } else {
        const bracket=rest.match(/^(.*?)\s*\[([^,\]]+),\s*([^\]]+)\]/);
        if(bracket){
          data.title=bracket[1].trim();
          data.kind=bracket[2].trim();
          data.institution=bracket[3].trim();
        } else if(rest){
          data.title=rest.split(/\.\s+/)[0].trim();
        }
      }
    }
    return data;
  }

  if(type==="orgdoc" || type==="report" || type==="conference"){
    const y=text.match(/\(\d{4}\)|\b(?:19|20)\d{2}\b/);
    if(y){
      const rest=text.slice(y.index+y[0].length).trim().replace(/^[).,\s]+/,"");
      if(rest) data.title=rest.split(/\.\s+/)[0].trim();
    }
  }
  return data;
}

function analyzeCompleteness(ref,type,style){
  const def=defs[style][type];
  const data=extractData(ref,type,style);

  // IAPH online rule: if URL/DOI detected, access becomes required.
  let required=[...def.required];
  if(style==="iaph" && (data.url||data.doi) && !required.includes("access")) required.push("access");

  // Article locator rule: volume/issue/pages/article are context-dependent. Require at least one locator if journal.
  const conditionalMissing=[];
  if(type==="journal"){
    const hasLocator=data.volume||data.issue||data.pages||data.article;
    if(!hasLocator) conditionalMissing.push("locator");
  }

  const missing=required.filter(name=>!String(data[name]||"").trim());
  const optionalPresent=(def.optional||[]).filter(name=>String(data[name]||"").trim());

  return {data,required,missing,conditionalMissing,optionalPresent};
}

function renderChecklist(type,style,result){
  const def=defs[style][type];
  const names=[...new Set([...result.required,...(def.optional||[])])];
  const html=[];

  names.forEach(name=>{
    const val=result.data[name];
    const req=result.required.includes(name);
    if(val){
      html.push(`<div class="check-row found"><div class="check-icon">✓</div><div class="check-meta"><strong>${esc(fieldLabel(style,type,name))}</strong><span>${esc(val)}</span></div></div>`);
    } else if(req){
      html.push(`<div class="check-row missing"><div class="check-icon">✕</div><div class="check-meta"><strong>${esc(fieldLabel(style,type,name))}</strong><span>Falta. ${esc(fieldWhy(style,type,name))}</span></div></div>`);
    } else {
      html.push(`<div class="check-row optional"><div class="check-icon">•</div><div class="check-meta"><strong>${esc(fieldLabel(style,type,name))}</strong><span>No detectado · opcional o dependiente del caso.</span></div></div>`);
    }
  });

  if(result.conditionalMissing.includes("locator")){
    html.push(`<div class="check-row missing"><div class="check-icon">✕</div><div class="check-meta"><strong>Datos de localización del artículo</strong><span>No se detecta volumen, número, páginas ni localizador de artículo. Necesitas al menos los datos que correspondan a esa revista.</span></div></div>`);
  }

  $("fieldChecklist").innerHTML=html.join("");
}

function renderMissingInputs(type,style,result){
  const missing=[...result.missing];
  if(result.conditionalMissing.includes("locator")){
    // Add likely fields instead of a fake locator field.
    ["volume","issue","pages","article"].forEach(n=>{
      if(defs[style][type].fields.some(f=>f[0]===n) && !result.data[n]) missing.push(n);
    });
  }

  const unique=[...new Set(missing)];
  if(!unique.length){
    $("missingWrap").classList.add("hidden");
    return;
  }

  $("missingWrap").classList.remove("hidden");
  $("missingIntro").textContent=`Faltan ${unique.length} datos o grupos de datos. Completa solo lo que conozcas; el programa no inventará el resto.`;
  $("missingFields").innerHTML=unique.map(name=>`
    <div class="missing-field">
      <label for="missing_${name}">${esc(fieldLabel(style,type,name))}</label>
      <div class="why">${esc(fieldWhy(style,type,name))}</div>
      <input id="missing_${name}" data-missing-name="${name}" placeholder="Introduce este dato" />
    </div>
  `).join("");
}

function buildCorrected(type,style,data){
  return style==="iaph"?formatIaph(type,data):formatApa(type,data);
}

function determineStatus(result){
  if(result.missing.length || result.conditionalMissing.length) return "unknown";
  return "ok";
}
function statusLabel(s){
  return {ok:"✓ Completa",review:"⚠ Revisar",bad:"✕ Incorrecta",unknown:"? Datos insuficientes"}[s];
}

function analyzeFree(){
  const ref=$("freeInput").value.trim();
  if(!ref){ resetAnalysis(); return; }

  const style=styleSelect.value;
  const type=freeType.value==="auto"?detectType(ref):freeType.value;
  const result=analyzeCompleteness(ref,type,style);
  analysisState={ref,style,type,result};

  const status=determineStatus(result);
  $("diagnosis").className="output";
  $("diagnosis").innerHTML=`
    <span class="status ${status}">${statusLabel(status)}</span>
    <p><strong>Tipo detectado:</strong> ${esc(defs[style][type]?.label||type)}</p>
    <p>${status==="ok"?"Se han identificado todos los datos obligatorios que este patrón necesita.":"Faltan datos necesarios para cerrar la referencia con seguridad."}</p>
  `;

  $("checklistWrap").classList.remove("hidden");
  renderChecklist(type,style,result);
  renderMissingInputs(type,style,result);

  const canBuild=result.missing.length===0 && result.conditionalMissing.length===0;
  if(canBuild){
    showFinal(buildCorrected(type,style,result.data),style,result.data);
  } else {
    $("finalWrap").classList.add("hidden");
  }
}

function showFinal(ref,style,data){
  $("finalWrap").classList.remove("hidden");
  $("corrected").textContent=ref||"—";
  const cites=style==="iaph"?iaphCitations(data.authors||"",data.year||""):apaCitations(data.authors||"",data.year||data.date||"");
  $("freeParenthetical").textContent=cites.parenthetical;
  $("freeNarrative").textContent=cites.narrative;
}

function completeFree(){
  if(!analysisState) return;
  const {style,type,result}=analysisState;
  const data={...result.data};

  document.querySelectorAll("[data-missing-name]").forEach(input=>{
    const name=input.dataset.missingName;
    const val=input.value.trim();
    if(val) data[name]=val;
  });

  const finalCheck={...result,data};
  finalCheck.missing=result.required.filter(name=>!String(data[name]||"").trim());
  finalCheck.conditionalMissing=[];
  if(type==="journal" && !(data.volume||data.issue||data.pages||data.article)){
    finalCheck.conditionalMissing=["locator"];
  }

  analysisState.result=finalCheck;
  renderChecklist(type,style,finalCheck);
  renderMissingInputs(type,style,finalCheck);

  const status=determineStatus(finalCheck);
  $("diagnosis").innerHTML=`
    <span class="status ${status}">${statusLabel(status)}</span>
    <p><strong>Tipo detectado:</strong> ${esc(defs[style][type]?.label||type)}</p>
    <p>${status==="ok"?"La referencia ya dispone de los datos obligatorios detectables para este patrón.":"Siguen faltando datos. Completa los campos marcados con ✕."}</p>
  `;

  if(status==="ok"){
    showFinal(buildCorrected(type,style,data),style,data);
  } else {
    $("finalWrap").classList.add("hidden");
  }
}

function resetAnalysis(){
  analysisState=null;
  $("diagnosis").textContent="Introduce una referencia y pulsa “Analizar referencia”.";
  $("diagnosis").className="output muted";
  $("checklistWrap").classList.add("hidden");
  $("missingWrap").classList.add("hidden");
  $("finalWrap").classList.add("hidden");
  $("fieldChecklist").innerHTML="";
  $("missingFields").innerHTML="";
}

document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    $(btn.dataset.tab).classList.add("active");
  });
});

$("analyzeButton").addEventListener("click",analyzeFree);
$("completeButton").addEventListener("click",completeFree);

$("exampleButton").addEventListener("click",()=>{
  $("freeInput").value=styleSelect.value==="iaph"
    ? "Bellido Blanco, A. (2023) El paisaje y sus elementos esenciales: el patrimonio cultural. revista PH. Disponible en: https://doi.org/10.33349/2023.108.5251"
    : "Castañeda Naranjo, L. A. (2015). Nanotecnología: fuente de nuevos paradigmas. Mundo Nano.";
  analyzeFree();
});

$("bulkButton").addEventListener("click",()=>{
  const refs=$("bulkInput").value.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  if(!refs.length){
    $("bulkSummary").textContent="No hay referencias para revisar.";
    $("bulkResult").innerHTML="";
    return;
  }

  let complete=0,incomplete=0;
  $("bulkResult").innerHTML="";

  refs.forEach((ref,i)=>{
    const style=styleSelect.value;
    const type=detectType(ref);
    const result=analyzeCompleteness(ref,type,style);
    const missing=[...result.missing];
    const needsLocator=result.conditionalMissing.includes("locator");
    const ok=!missing.length && !needsLocator;
    if(ok) complete++; else incomplete++;

    const missingLabels=missing.map(n=>fieldLabel(style,type,n));
    if(needsLocator) missingLabels.push("volumen / número / páginas / localizador del artículo");

    const div=document.createElement("article");
    div.className="result-item";
    div.innerHTML=`
      <div><span class="status ${ok?"ok":"unknown"}">${ok?"✓ Completa":"? Datos insuficientes"}</span></div>
      <p><strong>${i+1}. ${esc(defs[style][type]?.label||type)}</strong></p>
      <p><strong>Original:</strong><br>${esc(ref)}</p>
      ${ok
        ? `<div class="proposal"><strong>No faltan datos obligatorios detectables.</strong></div>`
        : `<div class="proposal"><strong>Necesitas completar:</strong><ul>${missingLabels.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`
      }
    `;
    $("bulkResult").appendChild(div);
  });

  $("bulkSummary").classList.remove("muted");
  $("bulkSummary").innerHTML=`<strong>${refs.length} referencias revisadas.</strong> ✓ ${complete} completas · ? ${incomplete} con datos pendientes.`;
});

$("clearGenerated").addEventListener("click",()=>{
  fields.querySelectorAll("input").forEach(i=>i.value="");
  generate();
});
$("clearFree").addEventListener("click",()=>{
  $("freeInput").value="";
  resetAnalysis();
});
$("clearBulk").addEventListener("click",()=>{
  $("bulkInput").value="";
  $("bulkSummary").textContent="Todavía no se ha analizado ninguna referencia.";
  $("bulkSummary").classList.add("muted");
  $("bulkResult").innerHTML="";
});

async function copyText(text,btn){
  if(!text||text==="—"||/Completa los campos/.test(text)) return;
  try{
    await navigator.clipboard.writeText(text);
    const old=btn.textContent;
    btn.textContent="Copiado ✓";
    setTimeout(()=>btn.textContent=old,1200);
  }catch{
    const old=btn.textContent;
    btn.textContent="Selecciona y copia";
    setTimeout(()=>btn.textContent=old,1600);
  }
}
$("copyGenerated").addEventListener("click",()=>copyText($("generated").textContent,$("copyGenerated")));
$("copyCorrected").addEventListener("click",()=>copyText($("corrected").textContent,$("copyCorrected")));

const TESTS=[
  {
    name:"IAPH · Libro real de revista PH",
    style:"iaph",type:"book",
    input:{authors:"Maderuelo, J.",year:"2005",title:"El paisaje: Génesis de un concepto",place:"Madrid",publisher:"Abada Editores"},
    expected:"Maderuelo, J. (2005) El paisaje: Génesis de un concepto. Madrid: Abada Editores"
  },
  {
    name:"IAPH · Artículo revista PH con DOI",
    style:"iaph",type:"journal",
    input:{authors:"Bellido Blanco, A.",year:"2023",title:"El paisaje y sus elementos esenciales: el patrimonio cultural",journal:"revista PH",issue:"108",pages:"107-109",doi:"https://doi.org/10.33349/2023.108.5251",access:"25/05/2026"},
    expected:"Bellido Blanco, A. (2023) El paisaje y sus elementos esenciales: el patrimonio cultural. revista PH, n.º 108, pp. 107-109 Disponible en: https://doi.org/10.33349/2023.108.5251 [Consulta: 25/05/2026]"
  },
  {
    name:"IAPH · Capítulo real de revista PH",
    style:"iaph",type:"chapter",
    input:{authors:"Ortega Chinchilla, M.J.",year:"2019",title:"El paisaje más allá de la estética: Paisajes invisibles",editors:"Forniés Casals, J.F.; Numhauser, P.",editorRole:"ed. lit.",book:"Escrituras silenciadas: paisaje como historiografía",place:"Madrid",publisher:"Universidad Alcalá de Henares",pages:"591-605"},
    expected:"Ortega Chinchilla, M.J. (2019) El paisaje más allá de la estética: Paisajes invisibles. En: Forniés Casals, J.F. y Numhauser, P. (ed. lit.) Escrituras silenciadas: paisaje como historiografía. Madrid: Universidad Alcalá de Henares, pp. 591-605"
  },
  {
    name:"APA 7 · Artículo de revista",
    style:"apa",type:"journal",
    input:{authors:"Castañeda Naranjo, L. A.; Palacios Neri, J.",year:"2015",title:"Nanotecnología: fuente de nuevos paradigmas",journal:"Mundo Nano. Revista Interdisciplinaria en Nanociencias y Nanotecnología",volume:"7",issue:"12",pages:"45-49",doi:"https://doi.org/10.22201/ceiich.24485691e.2014.12.49710"},
    expected:"Castañeda Naranjo, L. A. y Palacios Neri, J. (2015). Nanotecnología: fuente de nuevos paradigmas. Mundo Nano. Revista Interdisciplinaria en Nanociencias y Nanotecnología, 7(12), 45-49. https://doi.org/10.22201/ceiich.24485691e.2014.12.49710"
  }
];

$("runTests").addEventListener("click",()=>{
  let passed=0;
  $("testResults").innerHTML="";
  TESTS.forEach(t=>{
    const actual=t.style==="iaph"?formatIaph(t.type,t.input):formatApa(t.type,t.input);
    const ok=actual===t.expected;
    if(ok) passed++;
    const el=document.createElement("article");
    el.className=`test-item ${ok?"test-pass":"test-fail"}`;
    el.innerHTML=`<strong>${ok?"✓":"✕"} ${esc(t.name)}</strong>${ok?"<p>Resultado esperado.</p>":`<p><strong>Esperado:</strong><br>${esc(t.expected)}</p><p><strong>Obtenido:</strong><br>${esc(actual)}</p>`}`;
    $("testResults").appendChild(el);
  });
  $("testSummary").classList.remove("muted");
  $("testSummary").innerHTML=`<strong>${passed}/${TESTS.length} pruebas superadas.</strong>`;
});

styleSelect.addEventListener("change",renderTypes);
typeSelect.addEventListener("change",renderFields);

renderTypes();
