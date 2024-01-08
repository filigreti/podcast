import axios from "axios";
import { NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await axios.post("http://localhost:3333/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error.response.data, {
      status: error.response.data.status,
      statusText: error.response.data.message,
    });
  }
}
