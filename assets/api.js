/* ============================================================
   PreObra — API de envío de formularios
   Llama al endpoint serverless /api/demo (Vercel function),
   que reenvía a Resend del lado del servidor.
   ============================================================ */

(function(){
  async function sendDemo(data){
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error("Error " + res.status + ": " + t);
    }
    return await res.json();
  }

  window.PreObraAPI = { sendDemo };
})();
