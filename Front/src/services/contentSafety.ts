import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI;
if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
}

export const checkContentSafety = async (title: string, description: string): Promise<{ isSafe: boolean; reason?: string }> => {
  if (!API_KEY) {
    console.warn("API Key não encontrada, pulando validação de segurança.");
    return { isSafe: true };
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `Você é um moderador rigoroso de um sistema de e-commerce e tem total authority sobre Content Safety.
Abaixo estão o NOME e DESCRIÇÃO de um produto a ser cadastrado.
Verifique se o conteúdo contém palavras de baixo calão, incitação à violência, obscenidade, apologia a crimes, spam descarado, ofensa ou conteúdo perturbador e se está alinhado às diretrizes comunitárias normais.

Se o conteúdo for SEGURO assinalado como adequado, responda APENAS com a palavra: APROVADO.
Se for INADEQUADO ou violar as diretrizes éticas e de segurança, responda APENAS com a palavra: REJEITADO.

NOME DO PRODUTO: ${title}
DESCRIÇÃO DO PRODUTO: ${description}
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim().toLowerCase();

    if (responseText.includes("rejeitado")) {
      return { isSafe: false, reason: "O conteúdo não atende às diretrizes de segurança da plataforma." };
    }

    return { isSafe: true };
  } catch (error: any) {
    console.error("Erro na avaliação de content safety:", error);
    // Repassa a string real do erro da Generative API
    return { isSafe: false, reason: `Erro Técnico: ${error.message || 'Erro Desconhecido'}` };
  }
};
