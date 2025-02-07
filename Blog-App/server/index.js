const express = require('express');
const cors = require('cors');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());


app.get('/api/policies', (req, res) => {
    try {
        const filePath = path.resolve(__dirname, '..', 'Server', 'Data', 'policies.yaml');
        console.log("Resolved path:", filePath);
        const policies = YAML.load(filePath);
        res.json(policies);
    } catch (error) {
        res.status(500).json({ error: "Failed to load policies" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
