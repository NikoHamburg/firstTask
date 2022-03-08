import { Lightning } from "@lightningjs/sdk";
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
      Preview: {},
    };
  }

  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  _init() {
    this.tag("List").items = testItems.map((item) => ({
      id: item.id,
      label: item.title,
      assetUrl: item.assetUrl,
      description: item.description,
      shortDesc: item.shortDesc,
      airTime: item.airTime,
    }));
    this._setState("List");
  }

  static _states() {
    return [
      class List extends this {
        _getFocused() {
          console.log(this.tag("List").index);
          console.log(this.tag("List"));
          return this.tag("List");
        }
      },
    ];
  }
}

export { Home };
