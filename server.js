const corsAnywhere = require("cors-anywhere");

// Host the proxy on localhost at port 8080
corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(8080, "localhost", () => {
    console.log("CORS Proxy running on localhost:8080");
  });
