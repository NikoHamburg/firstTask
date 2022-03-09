import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { ThumbnailList } from "../components/ThumbnailList";
import { testItems } from "../data/testItems";

class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      List: {
        x: 100,
        y: 600,
        type: ThumbnailList,
      },
      Preview: {
        w: 1920,
        h: 1080,
        alpha: 0.3,
      },
      Arrows: {
        Down: {
          Arrow: {
            alpha: 0.5,
            flexItem: { marginTop: 20, marginBottom: 20 },
            scale: 0.5,
            mountX: -9.5,
            rotation: 3.1,
            src: Utils.asset("images/arrow.png"),
          },
        },
      },
    };
  }

  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  _init() {
    this.application.on("blurContent", ({ amount, scale }) => {
      this.tag("Blur").setSmooth("amount", amount);
      this.tag("Blur").setSmooth("scale", scale, {
        duration: 0.3,
        timingFunction: "cubic-bezier(0.17, 0.9, 0.32, 1.3)",
      });
    });
    this.tag("List").items = testItems.map((item) => ({
      id: item.id,
      label: item.title,
      assetUrl: item.assetUrl,
      description: item.description,
      shortDesc: item.shortDesc,
      airTime: item.airTime,
    }));
    this._items = testItems.map((item) => ({
      id: item.id,
      label: item.title,
      assetUrl: item.assetUrl,
      description: item.description,
      shortDesc: item.shortDesc,
      airTime: item.airTime,
      previewUrl: item.previewUrl,
    }));
    this._setState("List");
  }

  static _states() {
    return [
      class List extends this {
        _getFocused() {
          console.log(this._items[this.tag("List").index]);
          this.patch({
            Preview: {
              src: Utils.asset(this._items[this.tag("List").index].previewUrl),
            },
          });
          return this.tag("List");
        }
      },
    ];
  }

  pageTransition() {
    return "crossFade";
  }

  _handleDown() {
    Router.focusWidget("Menu");
  }
}

export { Home };
