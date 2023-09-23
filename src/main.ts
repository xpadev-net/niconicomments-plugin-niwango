import { IComment, Niwango } from "@/@types/types";
import { CommentMapper } from "@/adapter";

let niwango: typeof Niwango;

class NiconicommentsPluginNiwango {
  niwango: Niwango;
  constructor(targetCanvas: HTMLCanvasElement, formattedComments: IComment[]) {
    targetCanvas.width = 1920;
    targetCanvas.height = 1080;
    const comments = formattedComments.map(
      (comment) => new CommentMapper(comment)
    );
    this.niwango = new niwango(targetCanvas, comments);
  }
  public draw(vpos: number) {
    this.niwango.draw(vpos, true);
  }

  public clear() {
    this.niwango.clear();
  }
}

const wrapper = (_niwango: typeof Niwango) => {
  niwango = _niwango;
  return NiconicommentsPluginNiwango;
};

export default wrapper;
