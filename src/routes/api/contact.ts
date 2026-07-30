import { createFileRoute } from "@tanstack/react-router";

// Web3Forms endpoint — the access key is read from the server environment so
// it never ships to the browser.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const sendJson = (status: number, body: unknown) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { "Content-Type": "application/json" },
          });

        let payload: Record<string, unknown>;
        try {
          payload = (await request.json()) as Record<string, unknown>;
        } catch {
          return sendJson(400, { success: false, message: "Invalid JSON body." });
        }

        const name = String(payload.name ?? "").trim();
        const email = String(payload.email ?? "").trim();
        const subject = String(payload.subject ?? "").trim();
        const message = String(payload.message ?? "").trim();

        // Validate input
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!name || !emailOk || !subject || !message || message.length < 5) {
          return sendJson(422, {
            success: false,
            message: "Please fill in all fields with a valid email and a message of at least 5 characters.",
          });
        }

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
          console.error("WEB3FORMS_ACCESS_KEY is not configured");
          return sendJson(500, {
            success: false,
            message: "The contact form is not configured yet. Please try again later.",
          });
        }

        try {
          const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              subject: `Portfolio contact: ${subject}`,
              from_name: "Portfolio Website",
              name,
              email,
              message: `${message}\n\n— Sent from Bolla Tarun Kumar's portfolio`,
            }),
          });

          const data = await res.json().catch(() => ({}));

          if (res.ok && data.success !== false) {
            return sendJson(200, { success: true, message: "Thanks! Your message has been sent." });
          }

          console.error("Web3Forms error:", res.status, data);
          return sendJson(502, {
            success: false,
            message: "The email service could not send your message. Please try again later.",
          });
        } catch (err) {
          console.error("Contact route error:", err);
          return sendJson(500, {
            success: false,
            message: "Something went wrong. Please try again later.",
          });
        }
      },
    },
  },
});
