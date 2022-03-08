import { Lightning, Utils } from "@lightningjs/sdk";

class Details extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff000000,
      Label: {
        x: 50,
        y: 0,
        color: 0xfffaee66,
        alpha: 0.9,
        text: {
          textAlign: "center",
          fontSize: 128,
        },
      },
      Picture: {
        w: 800,
        h: 600,
        x: 900,
        y: 100,
      },
      Description: {
        x: 50,
        y: 200,
        w: 800,
        text: {
          fontSize: 26,
        },
      },
      AirTime: {
        x: 600,
        y: 150,
        text: {
          fontSize: 32,
        }
      }
    };
  }

  set params(item) {
    this.patch({
      Label: {
        text: {
          text: item.label,
        },
      },
      Picture: {
        src: Utils.asset(item.assetUrl),
      },
      Description: {
        text: {
          text: item.description,
        },
      },
      AirTime: {
        text: {
          text: item.airTime,
        }
      }
    });
  }
}

export { Details };
