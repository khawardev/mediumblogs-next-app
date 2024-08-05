import { atom } from "jotai";
export const savingAtom = atom(false);
export const TopicsAtom = atom<string[]>([]);

export const savingReplyAtom = atom(false);
export const savingTagsAtom = atom(false);
