// MODEL: Claude Sonnet
// Server entry point

import 'dotenv/config';
import { buildApp } from './app.js';

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

async function start() {
  const app = await buildApp();

  try {
    await app.listen({ port: PORT, host: HOST });
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🏛️  Sabrina's Town API                                  ║
║   American Revolution Tourism Network                     ║
║                                                           ║
║   Server running at http://${HOST}:${PORT}                  ║
║                                                           ║
║   Endpoints:                                              ║
║   • GET  /towns/:slug          Town data                  ║
║   • GET  /towns/:slug/teacher  Teacher module             ║
║   • GET  /towns/:slug/stories  Town stories               ║
║   • GET  /compare              Compare two towns          ║
║   • GET  /rankings             Town rankings              ║
║   • GET  /embed/town/:slug     Embeddable widget          ║
║   • POST /analytics            Record events              ║
║   • POST /admin/*              Admin endpoints            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down gracefully...');
  process.exit(0);
});

start();
