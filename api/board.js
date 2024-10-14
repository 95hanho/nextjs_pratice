const { get_normal } = require("./apiDoc");
//
export const getBoard = (bNum) => get_normal(`/api/board/${bNum}`);
//
export const getComments = (_id) => get_normal(`/api/comment/${_id}`);
