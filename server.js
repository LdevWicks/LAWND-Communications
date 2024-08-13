const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Import routers
const complianceRouter = require('./routes/complianceRouter');
const incidentsRouter = require('./routes/incidentsRouter');
const vulnerabilitiesRouter = require('./routes/vulnerabilitiesRouter');
const incidentMetricsRouter = require('./routes/incidentMetricsRouter');
const complianceMetricsRouter = require('./routes/complianceMetricsRouter');
const vulnerabilitiesMetricsRouter = require('./routes/vulnerabilitiesMetricsRouter');

// Middleware to parse JSON
app.use(express.json());

// Serve static files from Angular app
app.use(express.static(path.join(__dirname, 'dist/path-to-ciso')));

// API Routes
app.use('/api/compliance', complianceRouter);
app.use('/api/incidents', incidentsRouter);
app.use('/api/vulnerabilities', vulnerabilitiesRouter);
app.use('/api/incidents/metrics', incidentMetricsRouter);
app.use('/api/compliance/metrics', complianceMetricsRouter);
app.use('/api/vulnerabilities/metrics', vulnerabilitiesMetricsRouter);

// Serve Angular index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/path-to-ciso/index.html'));
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
