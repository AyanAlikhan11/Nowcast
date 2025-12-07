import { NextResponse } from "next/server";
import { getTopHeadlines } from "@/api";

export async function GET() {
  try {
    const news = await getTopHeadlines("in", 20);
    return NextResponse.json(news);
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}
