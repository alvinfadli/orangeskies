import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Alvin",
  author: "Alvin",
  avatar: "./alvin.jpeg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:alvinfdl21@gmail.com" },
    { title: "GitHub", url: "https://github.com/alvinfadli" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
