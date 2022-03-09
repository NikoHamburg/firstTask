import { Lightning, Router } from "@lightningjs/sdk";
import { MenuItem } from "./MenuItem";

class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 400,
      color: 0xff3900a6,
      y: -400,
      transitions: {
        y: {
          duration: 0.3,
          timingFunction: "cubic-bezier(0.17, 0.9, 0.32, 1.3)",
        },
        h: {
          duration: 0.3,
          timingFunction: "cubic-bezier(0.17, 0.9, 0.32, 1.3)",
        },
        Items: {
          x: 200,
          mountX: 0.5,
          Home: {
            x: 200,
            type: MenuItem,
            label: "Home",
            pageId: "home",
          },
        },
      },
    };
  }

  _init() {
    this._index = 0;
  }

  _focus() {
    this.patch({
      smooth: {
        y: -100,
      },
    });
    this.application.emit("blurContent", { amount: 3, scale: 1.2 });
  }

  _unfocus() {
    this.patch({
      smooth: {
        y: -400,
      },
    });
  }

  _handleLeft() {
    if (this._index > 0) {
      this._index--;
    }
  }

  _handleRight() {
    if (this._index < this.tag("Items").children.length - 1) {
      this._index++;
    }
  }

  _handleUp() {
    Router.focusPage();
  }

  _handleEnter() {
    Router.restoreFocus();
    Router.navigate(this.activeItem.pageId);
  }

  get activeItem() {
    return this.tag("Items").children[this._index];
  }

  _getFocused() {
    return this.activeItem;
  }
}

export { Menu };
