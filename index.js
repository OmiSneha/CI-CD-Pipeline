const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: "Hello, this is a JSON response!",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;  // Export app for testing
