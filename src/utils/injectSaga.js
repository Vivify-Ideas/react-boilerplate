import { useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './sagaInjectors';

const useInjectSaga = ({ key, saga, mode }) => {
  const context = useContext(ReactReduxContext);

  useEffect(() => {
    const injectors = getInjectors(context.store);
    injectors.injectSaga(key, { saga, mode });

    return () => {
      injectors.ejectSaga(key);
    };
  }, [context.store, key, saga, mode]);
};

export { useInjectSaga };
