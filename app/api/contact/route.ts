import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  const { name, phone, email, message } = body;

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

    console.log(error);

    return NextResponse.json({
      success: false,
    });

  }

  return NextResponse.json({
    success: true,
    data,
  });
}