import { IComment } from "@/@types/types";
import { uuid } from "@/utils/uuid";
import { UUID } from "./@types/brands";

let comments: { [key: UUID]: IComment } = {};

const resetComments = () => (comments = {});
const addComment = (val: IComment) => {
  const id = uuid();
  comments[id] = val;
  return id;
};
const getComment = (id: UUID) => {
  const val = comments[id];
  if (!val) throw new Error("missing comment");
  return val;
};

export { resetComments, addComment, getComment };
