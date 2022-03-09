import { Lightning, Utils } from "@lightningjs/sdk";

class Details extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff000000,
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
      Label: {
        x: 50,
        y: 100,
        color: 0xfffaee66,
        text: {
          textAlign: "center",
          fontSize: 128,
        },
      },
      Picture: {
        w: 800,
        h: 600,
        x: 900,
        y: 200,
      },
      Description: {
        x: 50,
        y: 300,
        w: 800,
        text: {
          fontSize: 26,
        },
      },
      AirTime: {
        x: 600,
        y: 250,
        text: {
          fontSize: 32,
        },
      },
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
          alpha: 0.8,
          text: item.description,
        },
      },
      AirTime: {
        text: {
          alpha: 0.8,
          text: item.airTime,
        },
      },
    });
  }

  pageTransition() {
    return "crossFade";
  }
}

export { Details };
