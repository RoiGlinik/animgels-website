(() => {
  const layer = document.getElementById("particles-layer");
  if (!layer) return;

  // Change this to your transparent PNG filename/path.
  const IMAGE_SRC = "particle.png";

  // Simple tuning values.
  const CONFIG = {
    maxAlive: 18,
    spawnEveryMs: 280,
    minSize: 18,
    maxSize: 44,
    minDurationMs: 3200,
    maxDurationMs: 6400,
    minOpacity: 0.45,
    maxOpacity: 0.95,
    maxDriftX: 60,
    maxDriftY: 90,
    maxRotateDeg: 220
  };

  const rand = (min, max) => Math.random() * (max - min) + min;

  function spawnParticle() {
    if (layer.childElementCount >= CONFIG.maxAlive) return;

    const size = rand(CONFIG.minSize, CONFIG.maxSize);
    const duration = rand(CONFIG.minDurationMs, CONFIG.maxDurationMs);
    const x = rand(0, Math.max(0, window.innerWidth - size));
    const y = rand(0, Math.max(0, window.innerHeight - size));
    const dx = rand(-CONFIG.maxDriftX, CONFIG.maxDriftX);
    const dy = rand(-CONFIG.maxDriftY, CONFIG.maxDriftY);
    const rot = rand(-CONFIG.maxRotateDeg, CONFIG.maxRotateDeg);
    const opacity = rand(CONFIG.minOpacity, CONFIG.maxOpacity);

    const img = document.createElement("img");
    img.className = "particle-item";
    img.src = IMAGE_SRC;
    img.alt = "";
    img.width = Math.round(size);
    img.height = Math.round(size);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.animationDuration = `${duration}ms`;
    img.style.setProperty("--dx", `${dx}px`);
    img.style.setProperty("--dy", `${dy}px`);
    img.style.setProperty("--rot", `${rot}deg`);
    img.style.setProperty("--particle-opacity", opacity.toFixed(2));

    img.addEventListener("animationend", () => img.remove(), { once: true });
    layer.appendChild(img);
  }

  setInterval(spawnParticle, CONFIG.spawnEveryMs);
})();

