import { IComment, Niwango } from "@/@types/types";
import { CommentMapper } from "@/adapter";

class NiconicommentsPluginNiwango {
  niwango: Niwango;
  constructor(
    targetCanvas: HTMLCanvasElement,
    formattedComments: IComment[],
    niwango: typeof Niwango
  ) {
    const comments = formattedComments.map(
      (comment) => new CommentMapper(comment)
    );
    this.niwango = new niwango(targetCanvas, comments);
  }
  public draw(vpos: number) {
    this.niwango.draw(vpos, false);
  }

  public clear() {
    this.niwango.clear();
  }
}

const wrapper = () => {
  return NiconicommentsPluginNiwango;
};

export default wrapper;
