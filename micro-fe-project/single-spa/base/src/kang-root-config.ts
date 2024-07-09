import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@kang/vue",
  app: () => System.import("@kang/vue"),
  activeWhen: ["/vue"]
});

registerApplication({
  name: "@kang/react",
  app: () => System.import("@kang/react"),
  activeWhen: ["/react"]
});

start({
  urlRerouteOnly: true,
});
