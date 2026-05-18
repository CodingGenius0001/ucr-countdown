const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  try {
    const count = await kv.incr('ucr_visitors');
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: 'counter unavailable' });
  }
};
