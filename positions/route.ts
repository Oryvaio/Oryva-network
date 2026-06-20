import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      collateral: "PUMP",
      borrowed: 25,
      health: 92
    }
  ]);
}
