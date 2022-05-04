const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

// eslint-disable-next-line no-underscore-dangle
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
