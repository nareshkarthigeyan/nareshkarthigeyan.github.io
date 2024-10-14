import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    paths: {
      base:
        process.env.NODE_ENV === "production"
          ? "/nareshkarthigeyan.github.io"
          : "",
    },
    adapter: adapter(),
  },
};

export default config;
