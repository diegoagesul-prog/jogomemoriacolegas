if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("./service-worker.js", { scope: "./" });
      console.log("SW registrado:", reg.scope);
    } catch (e) {
      console.log("Falha ao registrar SW:", e);
    }
  });
}
