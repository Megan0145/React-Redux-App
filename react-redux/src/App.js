import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Quote from "./components/Quote";
import * as reducers from "./state/reducers";

const monsterReducer = combineReducers({
  quote: reducers.quoteReducer
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My app</h1>
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
