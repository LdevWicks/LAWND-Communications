const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Import routers
const complianceRouter = require('./routes/compliance');
const incidentsRouter = require('./routes/incidents');
const vulnerabilitiesRouter = require('./routes/vulnerabilities');
const incidentMetricsRouter = require('./routes/incidentMetrics');
const complianceMetricsRouter = require('./routes/complianceMetrics');
const vulnerabilitiesMetricsRouter = require('./routes/vulnerabilitiesMetrics');

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json
app.use(express.static('dist/path-to-ciso')); // Serve Angular app

// API routes

app.use('/api/incidents', incidentsRouter);
app.use('/api/vulnerabilities', vulnerabilitiesRouter);
app.use('/api/incidents/metrics', incidentMetricsRouter);
app.use('/api/compliance/metrics', complianceMetricsRouter);
app.use('/api/vulnerabilities/metrics', vulnerabilitiesMetricsRouter);
app.use('/api/compliance', complianceRouter);

// Serve Angular app
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/path-to-ciso/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
