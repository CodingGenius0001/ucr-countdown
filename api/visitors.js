module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const r = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/incr/ucr_visitors`,
      { headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` } }
    );
    const { result } = await r.json();
    res.status(200).json({ count: result });
  } catch {
    res.status(500).json({ error: 'counter unavailable' });
  }
};
