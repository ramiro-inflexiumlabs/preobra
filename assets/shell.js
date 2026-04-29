/* ============================================================
   PreObra — Shell común (header + footer + form de demo)
   Inyecta los componentes en <header data-shell>, <footer data-shell>
   y <div data-demo-form data-sector="…">.
   ============================================================ */

(function(){
  const BASE = (function(){
    // Permite llamar shell.js desde cualquier carpeta
    const s = document.currentScript;
    if (!s) return "";
    const src = s.getAttribute("src") || "";
    return src.replace(/[^\/]*$/, "").replace(/assets\/$/, "");
  })();

  const SECTORS = [
    { slug: "vialidad",     label: "Vialidad" },
    { slug: "edificacion",  label: "Edificación" },
    { slug: "industrial",   label: "Industrial" },
    { slug: "hidraulica",   label: "Hidráulica" },
    { slug: "concesiones",  label: "Concesiones" },
    { slug: "hardware",     label: "Hardware" }
  ];

  const PHONE_E164 = "59897574400";
  const PHONE_DISP = "+598 97 574 400";
  const EMAIL = "ventas@inflexiumlabs.com";
  const WA_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Hola, quiero ver una demo de PreObra")}`;

  // -------- HEADER --------
  function renderHeader(active){
    const navLinks = SECTORS.map(s =>
      `<a href="${BASE}sectores/${s.slug}.html" class="${active===s.slug?'active':''}">${s.label}</a>`
    ).join("");

    return `
      <div class="po-header-inner">
        <a class="po-brand" href="${BASE}index.html" aria-label="PreObra — Inicio">
          <img src="${BASE}assets/logos/preobra.png" alt="PreObra"/>
        </a>
        <nav class="po-nav" aria-label="Sectores">
          ${navLinks}
          <a class="btn btn-primary po-nav-cta" href="#demo">Solicitar demo</a>
        </nav>
      </div>
    `;
  }

  // -------- FOOTER --------
  function renderFooter(){
    return `
      <div class="po-footer-inner">
        <div>
          <h5>PreObra</h5>
          <p style="font-size:14px;line-height:1.6;margin:0 0 16px;color:#9CA4B0;max-width:36ch;">
            Sistema de presupuestación, planificación y control de costos para empresas constructoras.
            Hecho en Uruguay por <a href="https://inflexiumlabs.com" style="color:white;border-bottom:1px solid #555;">InflexiumLabs</a>,
            integrado al ecosistema <a href="#" style="color:white;border-bottom:1px solid #555;">OdooMás</a>.
          </p>
          <div class="po-partners" aria-label="Partners y certificaciones">
            <img src="${BASE}assets/logos/odoo-partner.png" alt="Odoo Official Partner"/>
            <img src="${BASE}assets/logos/cuti.png" alt="CUTI"/>
            <img src="${BASE}assets/logos/uruguay-technology.png" alt="Uruguay Technology"/>
            <img src="${BASE}assets/logos/mtop.png" alt="Ministerio de Transporte y Obras Públicas"/>
          </div>
        </div>

        <div>
          <h5>Sectores</h5>
          <ul>
            ${SECTORS.map(s => `<li><a href="${BASE}sectores/${s.slug}.html">${s.label}</a></li>`).join("")}
          </ul>
        </div>

        <div>
          <h5>Contacto</h5>
          <ul>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li><a href="tel:+${PHONE_E164}">${PHONE_DISP}</a></li>
            <li><a href="${WA_URL}" target="_blank" rel="noopener">WhatsApp directo</a></li>
            <li>Montevideo, Uruguay</li>
          </ul>
        </div>

        <div>
          <h5>Recursos</h5>
          <ul>
            <li><a href="${BASE}index.html#demo">Solicitar demo</a></li>
            <li><a href="${BASE}sectores/hardware.html">Hardware de campo</a></li>
            <li><a href="#">Documentación</a></li>
            <li><a href="#">Soporte 24/7</a></li>
          </ul>
        </div>
      </div>

      <div class="po-footer-bottom">
        <span>© 2026 INFLEXIUMLABS S.A. — TODOS LOS DERECHOS RESERVADOS</span>
        <span>PRE/OBRA · v3.4 · BUILT IN URUGUAY</span>
      </div>
    `;
  }

  // -------- DEMO FORM --------
  function renderDemoForm(sector){
    return `
      <form class="demo-form" novalidate>
        <input type="hidden" name="sector" value="${sector || 'general'}"/>
        <div class="form-row">
          <label>
            Nombre y apellido
            <input type="text" name="name" required placeholder="Juan Pérez"/>
          </label>
          <label>
            Empresa
            <input type="text" name="company" required placeholder="Constructora del Plata SRL"/>
          </label>
        </div>
        <div class="form-row">
          <label>
            Email corporativo
            <input type="email" name="email" required placeholder="juan@constructora.com"/>
          </label>
          <label>
            Teléfono / WhatsApp
            <input type="tel" name="phone" required placeholder="+598 99 123 456"/>
          </label>
        </div>
        <label>
          Sector / tipo de obra
          <select name="sector_pref">
            <option value="vialidad">Vialidad / obras civiles públicas</option>
            <option value="edificacion">Edificación residencial / comercial</option>
            <option value="industrial">Industrial / plantas / EPC</option>
            <option value="hidraulica">Hidráulica / sanitaria</option>
            <option value="concesiones">Concesiones / mantenimiento</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <label>
          ¿Qué problema querés resolver?
          <textarea name="message" placeholder="Ej: tardamos 3 semanas en armar un presupuesto, no podemos comparar oferta vs ejecución…"></textarea>
        </label>
        <div class="submit-row">
          <button type="submit" class="btn btn-primary">
            Solicitar demo →
          </button>
          <a class="btn btn-wa" href="${WA_URL}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 3.6 20.4L2 22l1.7-.5a11.9 11.9 0 0 0 5.7 1.5h.1A11.9 11.9 0 0 0 20.5 3.5Zm-9 18a9.9 9.9 0 0 1-5.1-1.4l-.4-.2-3 .8.8-2.9-.3-.4a9.9 9.9 0 1 1 18.3-5.3 9.9 9.9 0 0 1-10.3 9.4Zm5.4-7.4-.7-.4c-.4-.2-2.4-1.2-2.7-1.3-.4-.2-.6-.2-.9.2s-1 1.3-1.2 1.6-.4.2-.8 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.1-.4 0-.6.2-.7l.5-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.2 2.7 6.4 6.4 0 0 0 1.4 3.5 14.4 14.4 0 0 0 5.6 5c.8.3 1.4.5 1.8.7a4.3 4.3 0 0 0 2 .1 3.3 3.3 0 0 0 2.1-1.5 2.6 2.6 0 0 0 .2-1.5l-.5-.3Z"/></svg>
            WhatsApp
          </a>
          <span class="form-status"></span>
        </div>
      </form>
    `;
  }

  // -------- INIT --------
  function init(){
    const active = document.body.getAttribute("data-active");

    document.querySelectorAll("[data-shell=header]").forEach(el => {
      el.classList.add("po-header");
      el.innerHTML = renderHeader(active);
    });
    document.querySelectorAll("[data-shell=footer]").forEach(el => {
      el.classList.add("po-footer");
      el.innerHTML = renderFooter();
    });
    document.querySelectorAll("[data-demo-form]").forEach(el => {
      const sector = el.getAttribute("data-sector") || active || "general";
      el.innerHTML = renderDemoForm(sector);
    });

    // Form submit handler
    document.querySelectorAll(".demo-form").forEach(form => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const status = form.querySelector(".form-status");
        const submitBtn = form.querySelector("button[type=submit]");
        status.className = "form-status";
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando…";

        const data = Object.fromEntries(new FormData(form).entries());
        try {
          await window.PreObraAPI.sendDemo(data);
          status.classList.add("ok");
          status.textContent = "✓ Recibimos tu solicitud. Te contactamos en menos de 24h.";
          form.reset();
        } catch (err) {
          console.error(err);
          status.classList.add("err");
          status.textContent = "No pudimos enviar el formulario. Probá por WhatsApp o escribinos a " + EMAIL;
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = "Solicitar demo →";
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
