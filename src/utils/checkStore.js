import invariant from "invariant";
import conformsTo from "lodash/conformsTo";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";

export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject
  };

  invariant(
    conformsTo(store, shape),
    "(src/utils...) injectors: Expected a valid redux store"
  );
}
