import { START_ACTION, STOP_ACTION } from './actionTypes';

export const startAction = (name, params) => ({
  type: START_ACTION,
  payload: {
    action: {
      name,
      params,
    },
  },
});

export const stopAction = (name) => ({
  type: STOP_ACTION,
  payload: { action: { name } },
});
