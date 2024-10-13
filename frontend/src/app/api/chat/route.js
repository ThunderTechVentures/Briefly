// app/api/chat/route.js
export async function POST(req) {
    const { query } = await req.json();
  
    // Call your backend/NLP model to generate response (mocking it here)
    const response = await getChatbotResponse(query); // Replace with actual API call
    return new Response(JSON.stringify({ response }), { status: 200 });
  }
  
  // Mocked chatbot response function for now
  async function getChatbotResponse(query) {
    return `You asked: "${query}", here's a mock response.`;
  }
  