import { HeEPP } from "./HeEPP/index.ts";

const app = new HeEPP();

const port = parseInt(process.env.PORT) || 3000;

const home = app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: home.fetch,
};


Bun.serve({
    fetch(req) {
        return new Response("HI!");
    },
});