import axios from 'axios';

const GEMINI_API_KEY = "AIzaSyA9iIWM8Y2PUkWq8FhRtBtLGG-F8ois0oU";

export async function analyzeImageWithGemini(imageBuffer: Buffer, mimeType: string): Promise<string[]> {
  const base64Image = imageBuffer.toString('base64');
  const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: mimeType, 
              data: base64Image,
            },
          },
          {
            text: 'Analise esta imagem e gere exatamente 4 palavras-chave curtas e objetivas, otimizadas para SEO, que descrevam com precisão o conteúdo visual. Liste apenas as palavras, separadas por vírgulas, sem qualquer texto adicional, introduções, explicações ou pontuação extra*',
          },
        ],
      },
    ],
  };

  const response = await axios.post(endpoint, requestBody, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const candidates = response.data.candidates;
  const text = candidates?.[0]?.content?.parts?.[0]?.text || '';
  console.log(text)

  const keywords = text
    .split(',') 


  return keywords;
}