"use client";

import { useId, useState, type KeyboardEvent } from "react";

const formats = [
  { name: "Landing", tag: "UNA PÁGINA. UNA ACCIÓN.", line: "Aquí empieza", emphasis: "el siguiente paso.", text: "Un mensaje claro, tu propuesta de valor y un camino directo para contactar.", action: "Pedir información ↗", foot: "CAMPAÑAS / CAPTACIÓN / CONTACTO" },
  { name: "Corporativa", tag: "UNA MARCA. TODO SU UNIVERSO.", line: "Mucho más", emphasis: "que una primera impresión.", text: "Tu equipo, tus servicios y lo que te hace diferente. Una estructura pensada para descubrirte.", action: "Conoce lo que hacemos ↗", foot: "IDENTIDAD / SERVICIOS / CONFIANZA" },
  { name: "Catálogo", tag: "CADA PRODUCTO TIENE SU LUGAR.", line: "Encuentra eso", emphasis: "que estabas buscando.", text: "Una colección organizada para explorar, comparar y elegir con facilidad.", action: "Explorar la colección ↗", foot: "PRODUCTOS / EXPLORACIÓN / CONSULTAS" },
];

function usePreviewTabs(count: number) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let next = selected;
    if (event.key === "ArrowRight") next = (selected + 1) % count;
    else if (event.key === "ArrowLeft") next = (selected - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs?.[next]?.focus();
  };
  return { selected, setSelected, id, onKeyDown };
}

export function WebFormatPreview() {
  const { selected, setSelected, id, onKeyDown } = usePreviewTabs(formats.length);
  const format = formats[selected];
  return <div className="format-preview"><div className="preview-toolbar"><div role="tablist" aria-label="Explora formatos de web">{formats.map((item, i) => <button key={item.name} id={`${id}-tab-${i}`} type="button" role="tab" aria-selected={selected === i} aria-controls={`${id}-panel`} tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={onKeyDown}>{item.name}<span aria-hidden="true">↗</span></button>)}</div><span className="mono-label">CONCEPTO DE DISEÑO / LAR</span></div><div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0} className={`format-preview__panel format-preview__panel--${selected}`}><div className="format-preview__browser"><span>● ● ●</span><span>tu-marca / {format.name.toLowerCase()}</span><span>↗</span></div><div key={selected} className="format-preview__content"><span className="mono-label">{format.tag}</span><h3>{format.line}<br /><em>{format.emphasis}</em></h3><div className="format-preview__bottom"><p>{format.text}</p><span className="format-preview__example-cta">{format.action}</span></div><span className="format-preview__foot mono-label">{format.foot}</span></div></div></div>;
}

export function SearchPreview() {
  const { selected, setSelected, id, onKeyDown } = usePreviewTabs(2);
  return <div className="search-preview"><div className="preview-toolbar"><div role="tablist" aria-label="Canales de descubrimiento">{["Búsqueda local", "Respuestas de IA"].map((item, i) => <button key={item} id={`${id}-tab-${i}`} type="button" role="tab" aria-selected={selected === i} aria-controls={`${id}-panel`} tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={onKeyDown}>{item}</button>)}</div></div><div className="search-preview__panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}><span className="mono-label">RECORRIDO ILUSTRATIVO · NO ES UN RESULTADO REAL</span><div className="search-preview__query"><span aria-hidden="true">⌕</span> {selected === 0 ? "Tu servicio, cerca de mí" : "¿Qué negocio encaja con lo que necesito?"}</div><div className="search-preview__answer" key={selected}><span className="search-preview__icon" aria-hidden="true">{selected === 0 ? "↗" : "✳"}</span><div><span className="mono-label">{selected === 0 ? "TU FICHA DE NEGOCIO" : "INFORMACIÓN QUE SE PUEDE CITAR"}</span><h3>{selected === 0 ? "Tu nombre. Tu zona. Tu oportunidad." : "Una respuesta empieza con buenas fuentes."}</h3><p>{selected === 0 ? "Categorías, servicios, horarios y reseñas: toda la información que ayuda a una persona a elegirte." : "Datos coherentes, contenido estructurado y fuentes relevantes para que los buscadores comprendan tu negocio."}</p><div className="search-preview__chips">{(selected === 0 ? ["Servicios", "Ubicación", "Contacto"] : ["Tu web", "Directorios", "Información local"]).map((label) => <span key={label}>{label}</span>)}</div></div></div></div></div>;
}
