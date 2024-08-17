const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai');
const winston = require('winston');
const multer = require('multer');
const sharp = require('sharp');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const upload = multer();

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logging.json' })
    ]
});

app.use(bodyParser.json());

app.post('/optimize', async (req, res) => {
    const { content } = req.body;
    logger.info(`Request received: ${content}`);

    try {
        const response = await openai.Completion.create({
            engine: 'text-davinci-003',
            prompt: `Optimize this content for SEO: ${content}`,
            maxTokens: 500,
        });

        const optimizedContent = response.choices[0].text;
        logger.info(`Response sent: ${optimizedContent}`);
        res.json({ optimizedContent });
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/optimize-image', upload.single('image'), async (req, res) => {
    try {
        const optimizedImage = await sharp(req.file.buffer).resize(800).toBuffer();
        res.type('image/png').send(optimizedImage);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
