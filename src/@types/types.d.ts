import { CommentMapper } from "@/adapter";

export type CommentContentItem = {
  content: string;
  slicedContent: string[];
  font?: CommentFlashFont;
  width?: number[];
};
export type CommentMeasuredContentItem = CommentContentItem & {
  width: number[];
};
export type CommentFont = "defont" | "mincho" | "gothic" | "gulim" | "simsun";
export type CommentFlashFont = "defont" | "gulim" | "simsun";
export type CommentSize = "big" | "medium" | "small";
export type CommentLoc = "ue" | "naka" | "shita";

export type FormattedCommentWithFont = {
  id: number;
  vpos: number;
  date: number;
  date_usec: number;
  owner: boolean;
  premium: boolean;
  mail: string[];
  user_id: number;
  layer: number;
  loc: CommentLoc;
  size: CommentSize;
  fontSize: number;
  font: CommentFont;
  color: string;
  strokeColor?: string;
  wakuColor?: string;
  fillColor?: string;
  full: boolean;
  ender: boolean;
  _live: boolean;
  long: number;
  invisible: boolean;
  content: CommentContentItem[];
  rawContent: string;
  flash: boolean;
  lineCount: number;
  lineOffset: number;
  is_my_post: boolean;
  button?: ButtonParams;
};
export type FormattedCommentWithSize = FormattedCommentWithFont & {
  height: number;
  width: number;
  lineHeight: number;
  resized: boolean;
  resizedX: boolean;
  resizedY: boolean;
  content: CommentMeasuredContentItem[];
  charSize: number;
};

export interface IComment {
  comment: FormattedCommentWithSize;
  invisible: boolean;
  loc: CommentLoc;
  width: number;
  long: number;
  height: number;
  vpos: number;
  flash: boolean;
  posY: number;
  owner: boolean;
  layer: number;
  mail: string[];
  content: string;
  image?: HTMLCanvasElement | null;
  draw: (vpos: number, showCollision: boolean, isDebug: boolean) => void;
}

export type ButtonParams = {
  message: {
    before: string;
    body: string;
    after: string;
  }; //表示するボタンの内容
  commentMessage: string; //コメントの内容
  commentMail: string[]; //コメントのコマンド → 未指定時は色のみ継承
  commentVisible: boolean; //コメントを投稿するか
  limit: number; //ボタンの使用上限
  local: boolean; //ローカルコメントか
  hidden: boolean; //通常のコメントのように表示するか
};

export declare class Niwango {
  constructor(
    targetCanvas: HTMLCanvasElement,
    formattedComments: CommentMapper[],
  );
  draw(vpos: number, clear: boolean): void;
  addComments(...newComments: CommentMapper[]): void;
}
