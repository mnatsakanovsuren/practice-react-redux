import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleWare({ dispatch }) {
  return function(next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter( word => action.payload.title.includes(word));
        const foundText = forbidden.filter(word => action.payload.body.includes(word));
        if (found.length || foundText.lengthy) {
          return dispatch(showAlert("Вы спамер."))
        }
      }
      return next(action)
    }
  }
}