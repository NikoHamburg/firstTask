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
      },
      Label: {
        color: 0xfffaee66,
        x: -4,
        y: -20,
        text: {
          shadow: true,
          shadowColor: 0xff000000,
          fontSize: 22,
        },
      },
      Description: {
        y: 100,
        x: 0,
        w: 120,
        text: {
          fontSize: 12,
          textColor: 0xff4798324,
        },
      },
    };
  }

  _init() {
    this.patch({
      Label: {
        text: {
          w: 140,
          textAlign: 'left',
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
        scale: 1.2,
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {
        scale: 1,
      },
    });
  }

  _handleEnter() {
    Router.navigate(`details`, this.item);
  }

}

export { ThumbnailItem };
