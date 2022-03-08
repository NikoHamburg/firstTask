import { Lightning } from "@lightningjs/sdk";
import { ThumbnailItem } from "./ThumbnailItem";

class ThumbnailList extends Lightning.Component {
  static _template() {
    return {};
  }

  _init() {
    this.index = 0;
  }

  set items(items) {
    this.children = items.map((item, index) => {
      return {
        ref: `ListItem-${index}`,
        type: ThumbnailItem,
        x: index * 150,
        item,
      };
    });
  }

  _getFocused() {
    return this.children[this.index];
  }

  _handleLeft() {
    if (this.index > 0) {
      this.index--;
    }
  }

  _handleRight() {
    if (this.index < this.children.length - 1) {
      this.index++;
    }
  }
}

export { ThumbnailList };
