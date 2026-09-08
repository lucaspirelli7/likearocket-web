export function HeroOrbit() {
  return (
    <div className="orbit" aria-hidden>
      <div className="orbit__ring" />
      <div className="orbit__ring" />
      <div className="orbit__ring" />

      <div className="orbit__spin">
        <span className="orbit__dot" />
      </div>
      <div className="orbit__spin orbit__spin--slow">
        <span className="orbit__rocket">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
            <path
              d="M12 2c3 2.4 4.5 6 4.5 10 0 1.8-.4 3.5-1.1 5H8.6A12.5 12.5 0 0 1 7.5 12C7.5 8 9 4.4 12 2Z"
              fill="var(--cyan)"
            />
            <circle cx="12" cy="10" r="2.2" fill="#08040f" />
            <path d="M8.6 17 6.5 20l2.4-.6ZM15.4 17l2.1 3-2.4-.6Z" fill="var(--magenta-bright)" />
            <path d="M10.4 19.5h3.2l-1 3-.6 1-.6-1Z" fill="var(--magenta)" />
          </svg>
        </span>
      </div>

      <div className="orbit__core" style={{ animation: "float-y 6s ease-in-out infinite" }} />

      <div className="orbit__chip orbit__chip--1">+ llamadas</div>
      <div className="orbit__chip orbit__chip--2">+ formularios</div>
      <div className="orbit__chip orbit__chip--3">&minus; coste por contacto</div>
    </div>
  );
}
