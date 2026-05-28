import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  const { name, phone, email, message } = body;

  if (
    !name ||
    !phone ||
    !email ||
    !message
  ) {
    return NextResponse.json({
      success: false,
      error: "Missing fields",
    });
  }

  const { data, error } = await supabase
    .from("leads")
    .insert([
      {
        name,
        phone,
        email,
        message,
      },
    ]);

  if (error) {

    console.log("SUPABASE ERROR:", error);

    return NextResponse.json({
      success: false,
      error,
    });

  }

  return NextResponse.json({
    success: true,
    data,
  });
}