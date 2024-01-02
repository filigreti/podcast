import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
export async function GET(req: NextRequest) {
  try {
    const token = req.nextUrl.searchParams.get("token")
    if (!token) {
      return NextResponse.json(
        { error: 'Missing "room" query parameter' },
        { status: 400 }
      )
    }

    const response = await axios.get(
      `http://localhost:3333/verify-email/${token}`
    )
    return new Response(JSON.stringify(response.data), {
      status: 200,
    })
  } catch (error: any) {
    return new Response(error.response.data, {
      status: error.response.data.status,
      statusText: error.response.data.message,
    })
  }
}
