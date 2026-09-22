import fs from 'fs';
import path from 'path';

const STITCH_ENDPOINT = 'https://stitch.googleapis.com/mcp';
const API_KEY = process.env.STITCH_API_KEY || '';
const PROJECT_ID = '9569527599372827925';
const SCREEN_ID = '1292cf9d27cf408fba0c0d810c0b9ea2';

async function main() {
  console.log('Connecting to Stitch MCP endpoint:', STITCH_ENDPOINT);
  console.log(`Project: ${PROJECT_ID} | Screen: ${SCREEN_ID}`);

  try {
    const res = await fetch(STITCH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: {
          name: 'get_screen',
          arguments: {
            projectId: PROJECT_ID,
            screenId: SCREEN_ID
          }
        }
      })
    });

    console.log('Stitch HTTP response status:', res.status);
    const data = await res.json();
    console.log('Stitch response received.');

    const outDir = path.resolve('public', 'stitch');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(outDir, 'screen_data.json'),
      JSON.stringify(data, null, 2)
    );
    console.log('Screen payload saved to public/stitch/screen_data.json');
  } catch (err) {
    console.error('Error querying Stitch endpoint:', err.message);
  }
}

main();
