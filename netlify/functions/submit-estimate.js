exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: 'Bad Request' }
  }

  const { SUPABASE_URL, SUPABASE_ANON_KEY, NTFY_TOPIC } = process.env
  const topic = NTFY_TOPIC || 'hjg_estimates'

  // Write lead to Supabase
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/hjg_leads`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          full_name: body.name,
          phone: body.phone,
          address: body.address,
          stump_count: parseInt(body.stump_count) || 1,
          stump_size: body.stump_size,
          is_contractor: !!body.is_contractor,
          notes: body.notes || '',
        }),
      })
      if (!res.ok) {
        console.error('Supabase insert failed:', await res.text())
      }
    } catch (err) {
      console.error('Supabase error:', err)
    }
  }

  // Send ntfy.sh push notification
  const ntfyBody = [
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Address: ${body.address}`,
    `Stumps: ${body.stump_count} / ${body.stump_size}`,
    `Contractor: ${body.is_contractor ? 'Yes' : 'No'}`,
    `Notes: ${body.notes || 'None'}`,
  ].join('\n')

  try {
    const ntfyRes = await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      headers: {
        Title: 'New HJG Estimate Request',
        Priority: 'high',
        Tags: 'truck,tada',
        'Content-Type': 'text/plain',
      },
      body: ntfyBody,
    })
    if (!ntfyRes.ok) {
      console.error('ntfy failed:', await ntfyRes.text())
    }
  } catch (err) {
    console.error('ntfy error:', err)
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true }),
  }
}
