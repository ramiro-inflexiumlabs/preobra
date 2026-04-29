/* ============================================================
   PreObra — API de envío de formularios
   ⚠ DEMO: la key de Resend va expuesta del lado cliente.
   Antes de producción, mover a un endpoint serverless
   (Vercel / Netlify function) que reciba el POST y use la key
   del lado del servidor.
   ============================================================ */

(function(){
  const RESEND_KEY = "re_BZSf1zXZ_KB2JV6pTa3VEYQxma2rtVF4J";
  const TO = "ventas@inflexiumlabs.com";
  const FROM = "PreObra Demo <onboarding@resend.dev>";

  function html(data){
    const rows = Object.entries(data).map(([k,v]) =>
      `<tr><td style="padding:6px 12px;font-family:monospace;color:#666;font-size:12px;text-transform:uppercase;border-bottom:1px solid #eee;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${(v||'').toString().replace(/</g,'&lt;')}</td></tr>`
    ).join("");
    return `
      <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
        <h2 style="color:#E8521B;margin:0 0 24px;font-family:Archivo,sans-serif;">Nueva solicitud de demo · PreObra</h2>
        <table style="border-collapse:collapse;width:100%;background:#fafafa;border-radius:8px;overflow:hidden;">
          ${rows}
        </table>
        <p style="margin-top:32px;color:#666;font-size:13px;">Origen: ${(typeof location!=='undefined'?location.href:'')}</p>
      </div>
    `;
  }

  async function sendDemo(data){
    const subject = `[PreObra · ${data.sector_pref || data.sector || 'demo'}] ${data.company || data.name || 'Solicitud'}`;
    const body = {
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject,
      html: html(data)
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const t = await res.text().catch(()=>"");
      throw new Error("Resend " + res.status + ": " + t);
    }
    return await res.json();
  }

  window.PreObraAPI = { sendDemo };
})();
