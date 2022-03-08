import { Router } from "@lightningjs/sdk";
import routes from "./routes";

class App extends Router.App {
  _setup() {
    Router.startRouter(routes, this);
  }

  static _template() {
    return {
      ...super._template(),
    };
  }
}

export { App };
