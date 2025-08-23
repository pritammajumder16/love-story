import { createServer, loadConfigFromFile } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  try {
    console.log('🚀 Starting Forever Yours - Romantic Proposal App');
    
    // Load the existing vite config
    const configFile = path.resolve(__dirname, '../vite.config.ts');
    const result = await loadConfigFromFile({ command: 'serve', mode: 'development' }, configFile);
    
    const server = await createServer({
      ...result?.config,
      server: {
        ...result?.config?.server,
        port: 5000,
        host: '0.0.0.0'
      }
    });

    await server.listen();
    console.log('💕 Romantic app running at http://localhost:5000');
    
    server.printUrls();
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();