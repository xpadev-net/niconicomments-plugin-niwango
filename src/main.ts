import type { IRenderer } from "@xpadev-net/niconicomments";
import type { IComment, Niwango } from "@/@types/types";
import { CommentMapper } from "@/adapter";

let niwango: typeof Niwango;

class NiconicommentsPluginNiwango {
  niwango: Niwango;
  constructor(targetCanvas: IRenderer, formattedComments: IComment[]) {
    const comments = formattedComments.map(
      (comment) => new CommentMapper(comment),
    );
    this.niwango = new niwango(targetCanvas.canvas, comments);
  }
  public draw(vpos: number) {
    this.niwango.draw(vpos, true);
  }

  public addComments(formattedComments: IComment[]) {
    const comments = formattedComments.map(
      (comment) => new CommentMapper(comment),
    );
    this.niwango.addComments(...comments);
  }
}

const wrapper = (_niwango: typeof Niwango) => {
  niwango = _niwango;
  return NiconicommentsPluginNiwango;
};

export default wrapper;
