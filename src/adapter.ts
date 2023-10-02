import { IComment } from "@/@types/types";
import { colors } from "@/utils/colors";
import { color2number } from "@/utils/number2color";
import { UUID } from "@/@types/brands";
import { addComment, getComment } from "@/context";

const size2number = {
  small: 2,
  medium: 0,
  big: 1,
};

class CommentMapper {
  private _color: number;
  private _id: UUID;
  constructor(comment: IComment) {
    this._id = addComment(comment);
    this._color = this._parseColor();
  }

  get message() {
    return getComment(this._id).content;
  }
  set message(val: string) {
    getComment(this._id).content = val;
  }

  get vpos() {
    return getComment(this._id).vpos / 100;
  }
  set vpos(val: number) {
    getComment(this._id).vpos = Math.floor(val * 100);
  }

  get _vpos() {
    const comment = getComment(this._id);
    return comment.vpos + (comment.comment.button ? 1 : 0);
  }

  get _owner() {
    return getComment(this._id).owner;
  }

  get isYourPost() {
    return getComment(this._id).comment.is_my_post;
  }

  get mail() {
    return getComment(this._id).mail.join(" ");
  }
  set mail(val: string) {
    getComment(this._id).mail = val.split(/\s+/g);
    this._color = this._parseColor();
  }

  get fromButton() {
    return getComment(this._id).mail.includes("from_button");
  }

  get isPremium() {
    return getComment(this._id).comment.premium;
  }

  get color() {
    return this._color;
  }
  set color(val: number) {
    this._color = val;
  }

  get size() {
    return size2number[getComment(this._id).comment.size];
  }

  get no() {
    return getComment(this._id).comment.id;
  }

  private _parseColor() {
    for (const command of getComment(this._id).mail) {
      const color = colors[command];
      if (color) {
        return color2number(color);
      }
      const colorCode = command.match(/^#(?:[0-9a-z]{3}|[0-9a-z]{6})$/);
      if (colorCode && getComment(this._id).comment.premium) {
        return color2number(colorCode[0]);
      }
    }
    return 0;
  }
}

export { CommentMapper };
