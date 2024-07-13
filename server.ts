// server.ts
import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';

import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import * as path from 'path';

const template = fs.readFileSync(path.join(__dirname, 'dist/browser/index.html')).toString();
//const template = fs.readFileSync(path.join(process.cwd(), 'dist/path-to-ciso/browser/index.html')).toString();
const { window } = new JSDOM(template);

// Polyfills
(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = window.navigator;

const app = express();
const PORT = process.env['PORT'] || 4000;

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', join(process.cwd(), 'dist/path-to-ciso/browser'));

app.get('*.*', express.static(join(process.cwd(), 'dist/path-to-ciso/browser'), {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
