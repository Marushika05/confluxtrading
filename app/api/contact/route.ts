import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

import { Resend } from "resend";
import { COMPANY } from "@/lib/company";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  const body = await req.json();

const {
  name,
  company,
  phone,
  email,
  message,
  token,
} = body;

  if (
    !name ||
    !phone ||
    !email ||
    !message ||
    !token
  ) {
    return NextResponse.json({
      success: false,
      error: "Missing fields",
    });
  }

  // VERIFY TURNSTILE TOKEN

  const formData = new FormData();

  formData.append(
    "secret",
    process.env.TURNSTILE_SECRET_KEY!
  );

  formData.append(
    "response",
    token
  );

  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  const turnstileData =
    await turnstileRes.json();

  if (!turnstileData.success) {

    return NextResponse.json({
      success: false,
      error: "Human verification failed",
    });

  }

  // SAVE LEAD

  const { data, error } = await supabase
    .from("leads")
    .insert([
  {
    name,
    company,
    phone,
    email,
    message,
  },
]);

  if (error) {

    console.log(
      "SUPABASE ERROR:",
      error
    );

    return NextResponse.json({
      success: false,
      error,
    });

  }

  // SEND EMAIL

  try {

    const result = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: COMPANY.email,
  subject: "New Conflux Trading Inquiry",
  html: `
  <h2>New RFQ Received</h2>

  <p><strong>Name:</strong> ${name}</p>

  <p><strong>Company:</strong> ${company}</p>

  <p><strong>Phone:</strong> ${phone}</p>

  <p><strong>Email:</strong> ${email}</p>

  <p><strong>Project Requirements:</strong></p>

  <p>${message}</p>
`,
});

console.log("EMAIL RESULT:", result);

  } catch (emailError) {

    console.log(emailError);

  }

  return NextResponse.json({
    success: true,
    data,
  });
}