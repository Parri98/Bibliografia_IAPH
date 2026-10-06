
const defs = {
  iaph: {
    book:{label:"Libro",fields:[
      ["authors","Autor/es","Maillard, Ch."],
      ["year","Año","1992"],
      ["title","Título","La creación por la metáfora"],
      ["edition","Edición","3.ª ed."],
      ["place","Lugar","Barcelona"],
      ["publisher","Editorial","Anthropos"],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","19/11/2020"]
    ]},
    chapter:{label:"Capítulo de libro",fields:[
      ["authors","Autor/es","Camacho Martínez, R."],
      ["year","Año","2007"],
      ["title","Título del capítulo",""],
      ["book","Título del libro",""],
      ["editors","Editor/es o coordinador/es",""],
      ["place","Lugar","Sevilla"],
      ["publisher","Editorial / institución",""],
      ["pages","Páginas","8-12"],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","22/07/2020"]
    ]},
    journal:{label:"Artículo / publicación seriada",fields:[
      ["authors","Autor/es","Loza Azuaga, L.; Sánchez Galiano, C."],
      ["year","Año","2020"],
      ["title","Título del artículo",""],
      ["journal","Revista / publicación","revista PH"],
      ["volume","Volumen",""],
      ["issue","Número","100"],
      ["month","Mes","junio"],
      ["pages","Páginas",""],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","22/07/2020"]
    ]},
    thesis:{label:"Tesis / literatura gris",fields:[
      ["authors","Autor/es o institución","Carrera Díaz, G."],
      ["year","Año","2016"],
      ["title","Título",""],
      ["kind","Tipo","Tesis doctoral inédita"],
      ["institution","Institución","Universidad de Sevilla"],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","23/10/2020"]
    ]},
    law:{label:"Legislación",fields:[
      ["law","Norma completa","Ley 5/2007, de 26 de junio, por la que..."],
      ["bulletin","Boletín oficial","Boletín Oficial de la Junta de Andalucía"],
      ["issue","Número","131"],
      ["date","Fecha del boletín","4 de julio de 2007"],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","02/04/2020"]
    ]},
    web:{label:"Página web",fields:[
      ["authors","Autor / organismo","Organización de Naciones Unidas"],
      ["year","Año","2020"],
      ["title","Título","Agenda 2030 sobre el desarrollo sostenible"],
      ["url","URL",""],
      ["access","Fecha de consulta","02/04/2020"]
    ]},
    orgdoc:{label:"Documento de organismo",fields:[
      ["authors","Organismo autor","ICOMOS"],
      ["year","Año","1964"],
      ["title","Título",""],
      ["details","Datos complementarios","Lugar, serie, congreso..."],
      ["url","URL opcional",""],
      ["access","Fecha de consulta","14/10/2020"]
    ]}
  },
  apa: {
    book:{label:"Libro",fields:[
      ["authors","Autor/es","Herrera Cáceres, C.; Rosillo Peña, M."],
      ["year","Año","2019"],
      ["title","Título",""],
      ["edition","Edición","2.ª ed."],
      ["publisher","Editorial","Universidad del Valle"],
      ["doi","DOI opcional","https://doi.org/..."],
      ["url","URL opcional",""]
    ]},
    chapter:{label:"Capítulo de libro",fields:[
      ["authors","Autor/es","Apellido, A."],
      ["year","Año","2020"],
      ["title","Título del capítulo",""],
      ["editors","Editor/es","Apellido, B."],
      ["book","Título del libro",""],
      ["pages","Páginas","25-44"],
      ["publisher","Editorial",""],
      ["doi","DOI opcional","https://doi.org/..."],
      ["url","URL opcional",""]
    ]},
    journal:{label:"Artículo de revista",fields:[
      ["authors","Autor/es","Castañeda Naranjo, L. A.; Palacios Neri, J."],
      ["year","Año","2015"],
      ["title","Título del artículo",""],
      ["journal","Revista","Mundo Nano"],
      ["volume","Volumen","7"],
      ["issue","Número","12"],
      ["pages","Páginas","45-49"],
      ["doi","DOI opcional","https://doi.org/..."],
      ["url","URL opcional",""]
    ]},
    thesis:{label:"Tesis / disertación",fields:[
      ["authors","Autor/es","Martínez Ribón, J. G. T."],
      ["year","Año","2011"],
      ["title","Título",""],
      ["kind","Tipo","Tesis de Maestría"],
      ["institution","Institución","Universidad Nacional de Colombia"],
      ["database","Repositorio / base de datos",""],
      ["url","URL opcional",""]
    ]},
    web:{label:"Página web",fields:[
      ["authors","Autor / organización","UNESCO"],
      ["date","Fecha","1 de octubre de 2018"],
      ["title","Título",""],
      ["site","Nombre del sitio",""],
      ["url","URL",""]
    ]},
    law:{label:"Ley / documento legal",fields:[
      ["law","Norma completa","Ley 1060 de 2006. Por la cual..."],
      ["date","Fecha","26 de julio de 2006"],
      ["source","Fuente oficial","D.O."],
      ["issue","Número","46341"],
      ["url","URL opcional",""]
    ]},
    report:{label:"Informe / reporte / PDF",fields:[
      ["authors","Autor / institución","OCDE"],
      ["year","Año","2020"],
      ["title","Título",""],
      ["kind","Tipo entre corchetes","Informe / Archivo PDF"],
      ["publisher","Editorial / organismo",""],
      ["doi","DOI opcional","https://doi.org/..."],
      ["url","URL opcional",""]
    ]},
    conference:{label:"Congreso / conferencia",fields:[
      ["authors","Autor/es","Sánchez, C.; Ayala, D.; Bocarosa, E."],
      ["date","Fecha","17-29 de noviembre de 2018"],
      ["title","Título",""],
      ["kind","Tipo","Ponencia / Discurso principal"],
      ["event","Evento","Conferencia de las Naciones Unidas"],
      ["place","Lugar","Sharm El-Sheikh, Egipto"],
      ["url","URL opcional",""]
    ]}
  }
};

const $ = id => document.getElementById(id);
const styleSelect = $("styleSelect");
const typeSelect = $("typeSelect");
const freeType = $("freeType");
const fields = $("fields");

function esc(s=""){
  return s.replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function splitAuthors(raw=""){
  return raw.split(";").map(x=>x.trim()).filter(Boolean);
}

function joinAuthorsIAPH(raw=""){
  const a=splitAuthors(raw);
  if(a.length===0) return "";
  if(a.length===1) return a[0];
  if(a.length===2) return `${a[0]} y ${a[1]}`;
  return `${a.slice(0,-1).join(", ")} y ${a[a.length-1]}`;
}

function joinAuthorsAPA(raw=""){
  const a=splitAuthors(raw);
  if(a.length===0) return "";
  if(a.length===1) return a[0];
  if(a.length===2) return `${a[0]} y ${a[1]}`;
  if(a.length<=20) return `${a.slice(0,-1).join(", ")} y ${a[a.length-1]}`;
  return `${a.slice(0,19).join(", ")}, … ${a[a.length-1]}`;
}

function dot(s=""){
  return s && !/[.!?]$/.test(s) ? s+"." : s;
}

function getValues(){
  const out={};
  fields.querySelectorAll("[name]").forEach(i=>out[i.name]=i.value.trim());
  return out;
}

function refreshTypes(){
  const style=styleSelect.value;
  typeSelect.innerHTML="";
  freeType.innerHTML='<option value="auto">Detectar automáticamente</option>';

  Object.entries(defs[style]).forEach(([key,def])=>{
    typeSelect.insertAdjacentHTML("beforeend", `<option value="${key}">${def.label}</option>`);
    freeType.insertAdjacentHTML("beforeend", `<option value="${key}">${def.label}</option>`);
  });

  renderFields();
  clearCorrector();
}

function renderFields(){
  const def=defs[styleSelect.value][typeSelect.value];
  fields.innerHTML=def.fields.map(([name,label,placeholder])=>`
    <div class="field">
      <label for="f_${name}">${label}</label>
      <input id="f_${name}" name="${name}" placeholder="${esc(placeholder)}" />
    </div>
  `).join("");

  fields.querySelectorAll("input").forEach(input=>{
    input.addEventListener("input", generateReference);
  });

  generateReference();
}

function generateReference(){
  const style=styleSelect.value;
  const type=typeSelect.value;
  const v=getValues();

  if(!Object.values(v).some(Boolean)){
    $("generated").textContent="Completa los campos.";
    $("generated").classList.add("muted");
    $("citation").textContent="—";
    $("citation").classList.add("muted");
    return;
  }

  const res = style==="iaph"
    ? formatIAPH(type,v)
    : formatAPA(type,v);

  $("generated").textContent=res.reference;
  $("generated").classList.remove("muted");
  $("citation").textContent=res.citation || "—";
  $("citation").classList.remove("muted");
}

function formatIAPH(type,v){
  const A=joinAuthorsIAPH(v.authors||"");
  let r="", c="";

  if(type==="book"){
    r=`${A} (${v.year}) ${dot(v.title)}`;
    if(v.edition) r+=` ${dot(v.edition)}`;
    r+=` ${v.place}: ${v.publisher}`;
  }

  if(type==="chapter"){
    r=`${A} (${v.year}) ${dot(v.title)} En: ${dot(v.book)}`;
    if(v.editors) r+=` Ed./Coord.: ${dot(v.editors)}`;
    r+=` ${v.place}: ${v.publisher}, pp. ${v.pages}`;
  }

  if(type==="journal"){
    r=`${A} (${v.year}) ${dot(v.title)} ${v.journal}`;
    if(v.volume) r+=`, vol. ${v.volume}`;
    if(v.issue) r+=`, n.º ${v.issue}`;
    if(v.month) r+=`, ${v.month}`;
    if(v.pages) r+=`, pp. ${v.pages}`;
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

  if(v.url && type!=="web"){
    r+=` Disponible en: ${v.url}`;
    if(v.access) r+=` [Consulta: ${v.access}]`;
  }

  if(A){
    const first=splitAuthors(v.authors||"")[0] || "";
    const surname=first.split(",")[0].trim();
    const count=splitAuthors(v.authors||"").length;
    c = count>3 ? `(${surname} et ál. ${v.year||""})` : `(${surname} ${v.year||""})`;
  }else if(v.law){
    c=`(${v.law.split(",")[0]})`;
  }

  return {reference:r.replace(/\s+/g," ").trim(),citation:c};
}

function formatAPA(type,v){
  const A=joinAuthorsAPA(v.authors||"");
  let r="", c="";

  if(type==="book"){
    r=`${dot(A)} (${v.year||"s.f."}). ${dot(v.title)}`;
    if(v.edition) r+=` (${v.edition}).`;
    r+=` ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }

  if(type==="chapter"){
    r=`${dot(A)} (${v.year||"s.f."}). ${dot(v.title)} En `;
    if(v.editors) r+=`${v.editors} (Ed.), `;
    r+=`${v.book} (pp. ${v.pages}). ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }

  if(type==="journal"){
    r=`${dot(A)} (${v.year||"s.f."}). ${dot(v.title)} ${v.journal}, ${v.volume}`;
    if(v.issue) r+=`(${v.issue})`;
    if(v.pages) r+=`, ${v.pages}`;
    r+=".";
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }

  if(type==="thesis"){
    r=`${dot(A)} (${v.year||"s.f."}). ${v.title} [${v.kind}, ${v.institution}]`;
    if(v.database) r+=`. ${v.database}`;
    r+=".";
    if(v.url) r+=` ${v.url}`;
  }

  if(type==="web"){
    r=`${dot(A)} (${v.date||"s.f."}). ${dot(v.title)}`;
    if(v.site && v.site!==A) r+=` ${dot(v.site)}`;
    r+=` ${v.url}`;
  }

  if(type==="law"){
    r=`${dot(v.law)}`;
    if(v.date) r+=` ${dot(v.date)}`;
    if(v.source) r+=` ${v.source}`;
    if(v.issue) r+=` No. ${v.issue}`;
    r+=".";
    if(v.url) r+=` ${v.url}`;
  }

  if(type==="report"){
    r=`${dot(A)} (${v.year||"s.f."}). ${dot(v.title)}`;
    if(v.kind) r+=` [${v.kind}].`;
    if(v.publisher) r+=` ${dot(v.publisher)}`;
    if(v.doi||v.url) r+=` ${v.doi||v.url}`;
  }

  if(type==="conference"){
    r=`${dot(A)} (${v.date||"s.f."}). ${v.title} [${v.kind}]. ${dot(v.event)}`;
    if(v.place) r+=` ${dot(v.place)}`;
    if(v.url) r+=` ${v.url}`;
  }

  if(A){
    const first=splitAuthors(v.authors||"")[0]||"";
    const surname=first.split(",")[0].trim();
    const count=splitAuthors(v.authors||"").length;
    c = count>=3 ? `(${surname} et al., ${v.year||v.date||"s.f."})` : `(${surname}, ${v.year||v.date||"s.f."})`;
  }

  return {reference:r.replace(/\s+/g," ").trim(),citation:c};
}

function detectType(reference){
  const s=reference.toLowerCase();
  const style=styleSelect.value;

  if(/tesis|disertaci[oó]n|literatura gris/.test(s)) return "thesis";
  if(/bolet[ií]n oficial|\bley\b|\bdecreto\b|boe|boja|d\.o\./.test(s)) return "law";
  if(/congreso|conferencia|simposio|ponencia|discurso principal/.test(s) && style==="apa") return "conference";
  if(/vol\.|n\.º|\d+\s*\(\s*\d+\s*\)|revista|journal/.test(s)) return "journal";
  if(/\bEn:\s/i.test(reference) || /pp\.\s*\d/i.test(reference)) return defs[style].chapter ? "chapter" : "book";
  if(/https?:\/\//.test(s) && style==="apa") return "web";
  if(/https?:\/\//.test(s) && style==="iaph" && !/:[ ]*[^/]+$/.test(s)) return "web";
  return "book";
}

function diagnose(reference,type){
  const problems=[];
  const style=styleSelect.value;

  if(style==="iaph"){
    if(type!=="law" && !/\(\d{4}\)/.test(reference)){
      problems.push("El año debería aparecer entre paréntesis: (AAAA).");
    }
    if(/https?:\/\//i.test(reference) && !/Disponible en:/i.test(reference)){
      problems.push('Falta “Disponible en:” antes de la URL.');
    }
    if(/https?:\/\//i.test(reference) && !/\[Consulta:\s*\d{1,2}\/\d{1,2}\/\d{4}\]/i.test(reference)){
      problems.push("Falta la fecha de consulta con el formato [Consulta: dd/mm/aaaa].");
    }
    if(type==="chapter" && !/\bEn:\s/i.test(reference)){
      problems.push('En un capítulo debe aparecer “En:”.');
    }
    if(type==="chapter" && !/pp\.\s*\d/i.test(reference)){
      problems.push("Falta el rango de páginas precedido de “pp.”.");
    }
    if(type==="law" && !/Bolet[ií]n Oficial/i.test(reference)){
      problems.push("No se detecta el boletín oficial.");
    }
    if(type==="journal" && !/(vol\.|n\.º|pp\.)/i.test(reference)){
      problems.push("Comprueba volumen, número y/o páginas de la publicación seriada.");
    }
  }

  if(style==="apa"){
    if(type!=="law" && !/\([^)]*(\d{4}|s\.f\.)[^)]*\)/i.test(reference)){
      problems.push("No se detecta correctamente la fecha entre paréntesis.");
    }
    if(type==="web" && !/https?:\/\//i.test(reference)){
      problems.push("Falta la URL.");
    }
    if(type==="thesis" && !/\[[^\]]*(Tesis|Disertaci[oó]n)/i.test(reference)){
      problems.push("La tesis debería indicar tipo e institución entre corchetes.");
    }
    if(type==="journal" && !/,\s*\d+(?:\(\d+\))?/.test(reference)){
      problems.push("No se detecta con claridad el volumen y/o número.");
    }
    if(/doi\s*:/i.test(reference)){
      problems.push("El DOI debe expresarse como https://doi.org/...");
    }
  }

  return problems;
}

function correctReference(reference,type){
  let r=reference.trim().replace(/\s+/g," ");
  const style=styleSelect.value;

  if(style==="iaph"){
    const year=r.match(/\b(19|20)\d{2}\b/);
    if(year && !new RegExp("\\("+year[0]+"\\)").test(r)){
      r=r.replace(year[0],`(${year[0]})`);
    }

    r=r.replace(/\bnumero\s+(\d+)/i,"n.º $1");
    r=r.replace(/\bvolumen\s+(\d+)/i,"vol. $1");

    if(/https?:\/\//i.test(r) && !/Disponible en:/i.test(r)){
      r=r.replace(/\s+(https?:\/\/\S+)/i," Disponible en: $1");
    }

    if(/https?:\/\//i.test(r) && !/\[Consulta:/i.test(r)){
      r+=" [Consulta: dd/mm/aaaa]";
    }

    if(type==="chapter" && !/\bEn:\s/i.test(r)){
      r+=" En: [título del libro], pp. [páginas]";
    }

    if(type==="journal" && !/(vol\.|n\.º|pp\.)/i.test(r)){
      r+=" [añadir volumen/número/páginas si corresponde]";
    }
  }

  if(style==="apa"){
    r=r.replace(/doi\s*:\s*(10\.\d{4,9}\/\S+)/i,"https://doi.org/$1");

    const year=r.match(/\b(19|20)\d{2}\b/);
    if(year && !new RegExp("\\("+year[0]+"\\)").test(r)){
      r=r.replace(year[0],`(${year[0]}).`);
    }

    if(type==="thesis" && !/\[[^\]]*(Tesis|Disertaci[oó]n)/i.test(r)){
      r+=" [Tesis doctoral/maestría, institución].";
    }

    if(type==="web" && !/https?:\/\//i.test(r)){
      r+=" [añadir URL]";
    }
  }

  return r.replace(/\.\.+/g,".");
}

function citationFromReference(reference){
  const year=reference.match(/\b(19|20)\d{2}\b/);
  let first=reference.split(/,|\(/)[0].trim();
  if(!first) return "—";

  if(styleSelect.value==="iaph"){
    return `(${first}${year?" "+year[0]:""})`;
  }
  return `(${first}${year?", "+year[0]:""})`;
}

function clearCorrector(){
  $("diagnosis").textContent="Introduce una referencia.";
  $("diagnosis").classList.add("muted");
  $("corrected").textContent="—";
  $("corrected").classList.add("muted");
  $("freeCitation").textContent="—";
  $("freeCitation").classList.add("muted");
}

document.querySelectorAll(".tab").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
    button.classList.add("active");
    $(button.dataset.tab).classList.add("active");
  });
});

$("correctButton").addEventListener("click",()=>{
  const reference=$("freeInput").value.trim();

  if(!reference){
    $("diagnosis").textContent="Introduce una referencia.";
    $("diagnosis").classList.remove("muted");
    return;
  }

  const type=freeType.value==="auto" ? detectType(reference) : freeType.value;
  const problems=diagnose(reference,type);
  const corrected=correctReference(reference,type);
  const label=defs[styleSelect.value][type]?.label || type;

  $("diagnosis").classList.remove("muted");
  $("diagnosis").innerHTML = problems.length
    ? `<div class="notice warn"><strong>Tipo detectado:</strong> ${esc(label)}<br><br><strong>Posibles problemas:</strong><ul>${problems.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`
    : `<div class="notice ok"><strong>Tipo detectado:</strong> ${esc(label)}<br><br>✓ No se detectan errores estructurales evidentes.</div>`;

  $("corrected").textContent=corrected;
  $("corrected").classList.remove("muted");

  $("freeCitation").textContent=citationFromReference(corrected);
  $("freeCitation").classList.remove("muted");
});

$("exampleButton").addEventListener("click",()=>{
  $("freeInput").value = styleSelect.value==="iaph"
    ? "Loza Azuaga, L. y Sánchez Galiano, C. 2020 El Repositorio de Activos Digitales ReA como herramienta para la difusión de la producción científica del IAPH. revista PH numero 100 junio https://www.iaph.es/revistaph/index.php/revistaph/article/view/4614"
    : "Castañeda Naranjo, L. A. y Palacios Neri, J. 2015 Nanotecnología: fuente de nuevos paradigmas. Mundo Nano 7(12), 45-49. doi:10.22201/ceiich.24485691e.2014.12.49710";
});

$("bulkButton").addEventListener("click",()=>{
  const references=$("bulkInput").value
    .split(/\n+/)
    .map(r=>r.trim())
    .filter(Boolean);

  if(!references.length){
    $("bulkResult").textContent="No hay referencias para revisar.";
    $("bulkResult").classList.remove("muted");
    return;
  }

  $("bulkResult").classList.remove("muted");
  $("bulkResult").innerHTML="";

  references.forEach((reference,index)=>{
    const type=detectType(reference);
    const problems=diagnose(reference,type);
    const corrected=correctReference(reference,type);
    const label=defs[styleSelect.value][type]?.label || type;

    const div=document.createElement("article");
    div.className="result-item";
    div.innerHTML=`
      <strong>${index+1}. ${esc(label)}</strong>
      <p><strong>Original:</strong><br>${esc(reference)}</p>
      <p><strong>Propuesta corregida:</strong><br>${esc(corrected)}</p>
      ${
        problems.length
          ? `<div class="notice warn"><strong>Problemas detectados:</strong><ul>${problems.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`
          : `<div class="notice ok">✓ Sin errores estructurales evidentes.</div>`
      }
    `;
    $("bulkResult").appendChild(div);
  });
});

$("clearGenerated").addEventListener("click",()=>{
  fields.querySelectorAll("input").forEach(i=>i.value="");
  generateReference();
});

$("clearFree").addEventListener("click",()=>{
  $("freeInput").value="";
  clearCorrector();
});

$("clearBulk").addEventListener("click",()=>{
  $("bulkInput").value="";
  $("bulkResult").textContent="Todavía no se ha analizado ninguna referencia.";
  $("bulkResult").classList.add("muted");
});

async function copyText(text,button){
  if(!text || text==="—" || /Completa/.test(text)) return;
  try{
    await navigator.clipboard.writeText(text);
    const old=button.textContent;
    button.textContent="Copiado ✓";
    setTimeout(()=>button.textContent=old,1200);
  }catch{
    const old=button.textContent;
    button.textContent="Selecciona y copia";
    setTimeout(()=>button.textContent=old,1600);
  }
}

$("copyGenerated").addEventListener("click",()=>{
  copyText($("generated").textContent,$("copyGenerated"));
});

$("copyCorrected").addEventListener("click",()=>{
  copyText($("corrected").textContent,$("copyCorrected"));
});

styleSelect.addEventListener("change",refreshTypes);
typeSelect.addEventListener("change",renderFields);

refreshTypes();
