import { NextResponse } from "next/server";
import dbConnect from "@/mongoose/mongodb";
import test from "@/mongoose/testSchema";

export async function GET() {
  try {
    await dbConnect();
    await test.create({
        name:"hello"
    })
    return NextResponse.json({ message: "Connected!" });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}