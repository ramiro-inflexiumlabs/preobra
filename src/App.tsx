import './index.css'

const modules = [
  {
    code: '01',
    name: 'Fundamentos',
    slug: 'preobra_base',
    icon: '🏗️',
    color: 'from-orange-500/20 to-transparent',
    border: 'border-orange-500/20',
    description: 'Catálogo maestro de insumos (MAT, MO, EQ, SC, GG), APU con desgloses jerárquicos y configuración global del sistema.',
    features: ['5 tipos de insumos', 'APU con rendimientos y desperdicios', '15 unidades de medida predefinidas', 'Niveles de seguridad diferenciados'],
  },
  {
    code: '02',
    name: 'Presupuestación',
    slug: 'preobra_presupuesto',
    icon: '📊',
    color: 'from-amber-500/20 to-transparent',
    border: 'border-amber-500/20',
    description: 'Rubrado jerárquico, costos indirectos con 6 tipos de cálculo, gravámenes Uruguay (BPS, IVA, COFIS), exportación a MS Project y Primavera P6.',
    features: ['Códigos computados (01.02.03)', 'Gravámenes BPS/IVA/COFIS Uruguay', 'Snapshots para auditoría', 'Export XML (MS Project) + CSV (P6)'],
  },
  {
    code: '03',
    name: 'Control de Obra',
    slug: 'preobra_control',
    icon: '📈',
    color: 'from-yellow-500/20 to-transparent',
    border: 'border-yellow-500/20',
    description: 'Seguimiento real vs planificado con metodología EVM completa, Curva S visual, semáforos de control y gestión de períodos automática.',
    features: ['EVM: PV, EV, AC, SPI, CPI, EAC', 'Curva S interactiva', 'Semáforos Verde/Amarillo/Rojo', 'Períodos semanal/quincenal/mensual'],
  },
  {
    code: '04',
    name: 'Certificación',
    slug: 'preobra_certificacion',
    icon: '✅',
    color: 'from-lime-500/20 to-transparent',
    border: 'border-lime-500/20',
    description: 'Fórmulas paramétricas polinómicas/lineales para ajuste de precios, flujo completo de certificados con fondos de reparo y control de subcontratos.',
    features: ['Ajuste por paramétricas configurable', 'Fondo de reparo (5% default)', 'Anticipos y retenciones', 'Tracking de avances parciales'],
  },
  {
    code: '05',
    name: 'Logística',
    slug: 'preobra_logistica',
    icon: '🚚',
    color: 'from-sky-500/20 to-transparent',
    border: 'border-sky-500/20',
    description: 'Ciclo completo de suministros: solicitudes → OC → remitos → recibos. Gestión de almacenes entre obras, cheques, notas de crédito y DIG.',
    features: ['Ciclo solicitudes → OC → facturas', 'Transferencias entre obras', 'Gestión de cheques y tesorería', 'Análisis pivot de proveedores'],
  },
  {
    code: '06',
    name: 'Ventas Inmobiliarias',
    slug: 'preobra_ventas',
    icon: '🏢',
    color: 'from-violet-500/20 to-transparent',
    border: 'border-violet-500/20',
    description: 'Comercialización de unidades con planes de pago automáticos, documentación legal (boletos, promesas, escrituras) e integración contable directa.',
    features: ['Planes de pago con mora e interés', 'Boletos, promesas y escrituras', 'Integración account.move', 'Log de auditoría con IP'],
  },
]

const stats = [
  { value: '6', label: 'Módulos especializados' },
  { value: '40', label: 'Modelos de datos' },
  { value: '550+', label: 'Campos técnicos' },
  { value: '12', label: 'Reportes PDF' },
]

const trustedLogos = [
  { name: 'Odoo Official Partner', file: 'odoo-partner.png', width: 120 },
  { name: 'Ministerio de Transporte y Obras Públicas', file: 'mtop.png', width: 140 },
  { name: 'INEFOP', file: 'inefop.png', width: 100 },
  { name: 'Uruguay Technology', file: 'uruguay-technology.png', width: 130 },
  { name: 'CUTI', file: 'cuti.png', width: 80 },
  { name: 'OdooMás', file: 'odoomas.png', width: 110 },
  { name: 'InflexiumLabs', file: 'inflexiumlabs.png', width: 140 },
]

const features = [
  { icon: '🏢', title: 'Multicompañía', desc: 'Gestión simultánea de múltiples empresas constructoras bajo un mismo entorno.' },
  { icon: '💱', title: 'Multimoneda', desc: 'Soporte nativo para UYU, USD e UI con conversión automática.' },
  { icon: '👥', title: 'Multiusuario', desc: 'Concurrencia web total con niveles de acceso diferenciados por rol.' },
  { icon: '📑', title: '12 Reportes PDF', desc: 'Reportes profesionales listos para entregar a cliente y organismos.' },
  { icon: '📤', title: 'Exportación Excel', desc: 'Formatos profesionales con encabezados coloreados para análisis externo.' },
  { icon: '🔗', title: 'Integración Odoo 19', desc: 'Construcción nativa sobre el ecosistema Odoo 19, sin integraciones externas.' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B18] text-slate-300 font-['Inter']">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050B18]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-sm">P</div>
            <span className="text-white font-semibold text-lg tracking-tight">PreObra</span>
            <span className="hidden sm:inline text-xs text-slate-500 border border-slate-700 rounded-full px-2 py-0.5">para Odoo 19</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#modulos" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors">Módulos</a>
            <a href="#caracteristicas" className="hidden md:block text-sm text-slate-400 hover:text-white transition-colors">Capacidades</a>
            <a
              href="mailto:ventas@inflexiumlabs.com?subject=Solicitud%20de%20Demo%20PreObra"
              className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-grid relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse inline-block" />
            Desarrollado por InflexiumLabs · Uruguay
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Gestión integral<br />
            de obras en <span className="gradient-text">Odoo 19</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Desde el APU hasta el cobro final. PreObra unifica presupuestación, control EVM, certificación, logística y ventas inmobiliarias en un solo sistema nativo de Odoo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="mailto:ventas@inflexiumlabs.com?subject=Solicitud%20de%20Demo%20PreObra"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-orange-500/25"
            >
              Solicitar Demo Gratuita
            </a>
            <a
              href="#modulos"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition-all"
            >
              Ver módulos →
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="stat-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-slate-600 mb-10">Respaldado por organizaciones líderes</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {trustedLogos.map((logo) => (
              <img
                key={logo.name}
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={logo.width}
                className="logo-item h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6 módulos. Un solo sistema.</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Instalación escalonada y modular. Empieza con lo que necesitas, expande cuando crezcas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.code} className={`card-module rounded-2xl p-6 ${mod.border}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">{mod.slug}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl">{mod.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{mod.name}</h3>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-white/5">{mod.code}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{mod.description}</p>
                <ul className="space-y-1.5">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-orange-500/60 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS TRANSVERSALES */}
      <section id="caracteristicas" className="py-24 px-6 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Arquitectura empresarial</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Diseñado para empresas constructoras que operan a escala real.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NORMATIVA URUGUAY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 rounded-3xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="text-5xl">🇺🇾</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Configurado para Uruguay</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Gravámenes preconfigurados según normativa local: catálogos de <strong className="text-white">BPS</strong> (obrero/patronal), <strong className="text-white">IVA diferenciado</strong> y <strong className="text-white">COFIS</strong>. Soporte nativo para monedas <strong className="text-white">UYU, USD e UI</strong>. Construido con el ecosistema de la industria de la construcción uruguaya.
              </p>
              <div className="flex flex-wrap gap-3">
                {['BPS Obrero/Patronal', 'IVA Diferenciado', 'COFIS', 'UYU / USD / UI', 'MTOP', 'INEFOP'].map((tag) => (
                  <span key={tag} className="bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs px-3 py-1.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Tu obra, bajo control<br />desde el día uno.
          </h2>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            Agenda una demo con nuestro equipo y te mostramos PreObra corriendo con una obra de ejemplo completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ventas@inflexiumlabs.com?subject=Solicitud%20de%20Demo%20PreObra"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-orange-500/30"
            >
              Agendar Demo Gratuita
            </a>
            <a
              href="https://wa.me/59891234567"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-10 py-5 rounded-xl text-lg transition-all"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xs">P</div>
                <span className="text-white font-semibold">PreObra</span>
              </div>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500 text-sm">por InflexiumLabs</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <a href="https://inflexiumlabs.com" className="hover:text-white transition-colors">inflexiumlabs.com</a>
              <a href="https://odoomas.com" className="hover:text-white transition-colors">odoomas.com</a>
              <a href="mailto:ventas@inflexiumlabs.com" className="hover:text-white transition-colors">ventas@inflexiumlabs.com</a>
            </div>
            <p className="text-xs text-slate-600">© 2025 InflexiumLabs. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
