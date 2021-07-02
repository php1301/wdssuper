// Sử dụng folder api để
// For new projects, you can build your entire API with API Routes.
// If you have an existing API, you do not need to forward calls to the API through an API Route. Some other use cases for API Routes are:

// Masking the URL of an external service (e.g. /api/secret instead of https://company.com/secret-url)
// Using Environment Variables on the server to securely access external services.
export default function handler(req, res) {
    res.status(200).json({ name: "John Doe" });
}
