import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          code: "INVALID_FORM_DATA",
        },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    const brevo = new BrevoClient({
      apiKey: process.env.BREVO_API_KEY!,
    });

    await brevo.transactionalEmails.sendTransacEmail({
      subject: `New message from ${name}`,

      htmlContent: `
        <h2>New Contact Message</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message.replace(/\n/g, "<br />")}
        </p>
      `,

      sender: {
        name: "Portfolio",
        email: process.env.BREVO_SENDER_EMAIL!,
      },

      to: [
        {
          email: process.env.CONTACT_RECIPIENT_EMAIL!,
        },
      ],

      replyTo: {
        email,
        name,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to send message.",
      },
      { status: 500 },
    );
  }
}
