const http = require("http");
const { readFile, mkdir, writeFile } = require("fs/promises");
const path = require("path");

const projectRoot = __dirname;
const port = Number(process.env.PORT) || 3000;
const uploadDirectories = {
  html: path.join(projectRoot, "docs", "byExtension", "htmlFiles"),
  js: path.join(projectRoot, "docs", "byExtension", "jsFiles")
};
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

function getRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;

      if (Buffer.byteLength(body, "utf8") > 1024 * 1024) {
        reject(new Error("File content must be 1 MB or smaller."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function handleUpload(request, response) {
  try {
    const { name, content } = JSON.parse(await getRequestBody(request));
    const fileName = typeof name === "string" ? path.basename(name) : "";
    const extension = path.extname(fileName).slice(1).toLowerCase();

    if (!uploadDirectories[extension] || !fileName || typeof content !== "string") {
      sendJson(response, 400, { error: "Only .js and .html files can be uploaded." });
      return;
    }

    const destination = path.join(uploadDirectories[extension], fileName);

    await mkdir(uploadDirectories[extension], { recursive: true });
    await writeFile(destination, content, "utf8");

    sendJson(response, 201, {
      filePath: path.relative(projectRoot, destination).replaceAll(path.sep, "/")
    });
  } catch (error) {
    sendJson(response, 400, { error: error.message || "Unable to save the uploaded file." });
  }
}

async function serveStaticFile(request, response) {
  const requestPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const relativePath = requestPath === "/" || requestPath.endsWith("/")
    ? path.join(requestPath.replace(/^\/+/, ""), "index.html")
    : requestPath.replace(/^\/+/, "");
  const filePath = path.resolve(projectRoot, relativePath);

  if (!filePath.startsWith(projectRoot) || filePath.includes(`${path.sep}.git${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    const contentType = contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/uploads") {
    handleUpload(request, response);
    return;
  }

  if (request.method === "GET") {
    serveStaticFile(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
