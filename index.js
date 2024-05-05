const dotenv = require('dotenv').config();
const http = require('http');

const {GoogleGenerativeAI } = require('@google/generative-ai');
const genAi = new GoogleGenerativeAI(process.env.API_KEY);
const MODEL_NAME = "gemini-pro";



async function run () {
    const model = genAi.getGenerativeModel({ model: MODEL_NAME});

    const prompt = "O que é GDG e qual é a importância desta comunidade Google?";
    const result = await model.◘+(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello World \n')
});


const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

