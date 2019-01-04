function rnd(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1));
}

export function generateId(router) {
  router.push({ name: 'avatar', params: { id: rnd(0, Number.MAX_SAFE_INTEGER) } });
}

export function download(svgId) {
  const svg = document.getElementById(svgId);
  const serializer = new XMLSerializer();
  const svgBlob = new Blob([serializer.serializeToString(svg)],
    { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);
  window.location = url;
  // window.open(url, 'svg_win');
}
