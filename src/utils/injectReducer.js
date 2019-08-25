import { useContext, useEffect } from "react";
import { ReactReduxContext } from "react-redux";

import getInjectors from "./reducerInjectors";

const useInjectReducer = ({ key, reducer }) => {
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, [context.store, key, reducer]);
};

export { useInjectReducer };
