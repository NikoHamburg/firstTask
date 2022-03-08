import { Lightning, Router, Utils } from "@lightningjs/sdk";

class ThumbnailItem extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 160,
      h: 120,
      color: 0xff000000,
      Thumbnail: {
        w: 120,
        h: 100,
        alpha: 0.7,
      },
      Label: {
        color: 0xfffaee66,
        alpha: 1,
        x: -4,
        y: -20,
        text: {
          textAlign: "center",
          shadow: true,
          shadowColor: 0xff000000,
          fontSize: 26,
        },
      },
      Description: {
        y: 100,
        x: 0,
        w: 120,
        text: {
          fontSize: 12,
          textColor: 0x234798324,
        },
      },
    };
  }

  _init() {
    this.patch({
      Label: {
        text: {
          text: this.item.label,
        },
      },
      Description: {
        text: {
          text: this.item.shortDesc,
        },
      },
      Thumbnail: {
        src: Utils.asset(this.item.assetUrl),
      },
    });
  }

  _focus() {
    this.patch({
      smooth: {
        alpha: 1,
        scale: 1.2,
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {
        alpha: 0.8,
        scale: 1,
      },
    });
  }

  _handleEnter() {
    Router.navigate(`details`, this.item);
  }
}

export { ThumbnailItem };
