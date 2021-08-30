import { combineReducers, createStore } from "redux";
import searchArticlesReduser from "./searchArticlesReduser";

// rootReducer объединяет все редьюсеры
const rootReducer = combineReducers({
  articles: searchArticlesReduser,
});

const store = createStore(rootReducer); 

export type AppRootStateType = ReturnType<typeof rootReducer>;

export default store;