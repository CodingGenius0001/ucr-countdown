module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const readonly = req.query.readonly === '1';
    const path = readonly
      ? 'https://api.counterapi.dev/v1/ucr-countdown/visitors'
      : 'https://api.counterapi.dev/v1/ucr-countdown/visitors/up';
    const r = await fetch(path);
    const data = await r.json();
    res.status(200).json({ count: data.count });
  } catch {
    res.status(500).json({ error: 'counter unavailable' });
  }
};
