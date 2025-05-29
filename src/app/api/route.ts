import { NextRequest, NextResponse } from 'next/server';
import { analyzeImageWithGemini } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('image') as File;

  const mimeType = file.type;
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const keywords = await analyzeImageWithGemini(buffer, mimeType);
    return NextResponse.json({ keywords });
  } catch (err: any) { 
    console.error('Erro ao processar imagem com a IA:', err);
    if (err.response) {
      console.error('Detalhes do erro da API Gemini:', err.response.data);
    }
    return NextResponse.json({ error: 'Erro ao processar imagem com a IA. Verifique os logs do servidor.' }, { status: 500 });
  }
}