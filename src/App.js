import { Router } from "@lightningjs/sdk";
import routes from "./routes";
import { Menu } from "./widgets/menu";

class App extends Router.App {
  _setup() {
    Router.startRouter(routes, this);
  }

  static _template() {
    return {
      ...super._template(),
      Widgets: {
        Menu: {
          type: Menu,
        },
      },
    };
  }
}

export { App };
