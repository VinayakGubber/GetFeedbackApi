import feedbacks from "../../feedback.json";

export default function handler(req, res) {
  const { pathname, searchParams } = new URL(
    req.url,
    `http://${req.headers.host}`
  );
  const path = pathname.replace("/api", "");

  // Root: /api
  if (path === "" || path === "/") {
    return res.status(200).send(`
      <div style="font-family: sans-serif; line-height: 1.6; padding: 20px;">
        <h1>📊 Feedback API</h1>
        <p>This API powers the <a href="https://github.com/VinayakGubber/StudentFeedbackPortal" target="_blank">Student Feedback Portal</a>.</p>
        <ul>
          <li><code>/api/feedbacks</code> → Get all feedbacks</li>
          <li><code>/api/feedbacks?email=student@example.com</code> → Filter feedbacks by email</li>
        </ul>
        <p>Source: <a href="https://github.com/VinayakGubber/GetFeedbackApi" target="_blank">GitHub</a></p>
      </div>
    `);
  }

  // /api/feedbacks (with optional ?email=)
  if (path === "/feedbacks") {
    const email = searchParams.get("email");

    if (email) {
      const filtered = feedbacks.filter(
        (fb) => fb.email.toLowerCase() === email.toLowerCase()
      );
      return res.status(200).json(filtered);
    }

    return res.status(200).json(feedbacks);
  }

  // Fallback
  return res.status(404).json({ error: "Invalid endpoint." });
}
