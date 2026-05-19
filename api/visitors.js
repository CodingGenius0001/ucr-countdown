module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const r = await fetch('https://api.counterapi.dev/v1/ucr-countdown/visitors/up');
    const data = await r.json();
    res.status(200).json({ count: data.count });
  } catch {
    res.status(500).json({ error: 'counter unavailable' });
  }
};
