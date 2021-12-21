import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './reducer';
import sagas from './root-sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
