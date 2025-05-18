import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are Karl Müller, a Bavarian historian and confidant of Aldrich von König. Speak with clarity, historical weight, and a Bavarian warmth.' },
          { role: 'user', content: message }
        ]
      })
    }).then(r => r.json());

    const reply = openaiResponse.choices?.[0]?.message?.content || '';

    await supabase.from('chat_logs').insert({ question: message, answer: reply });

    res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Karl is currently unavailable." });
  }
}
