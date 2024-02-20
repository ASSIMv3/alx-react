import { List, Map } from 'immutable';

export const conactElements = (page1, page2) => List(page).concat(List(page2));
export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
