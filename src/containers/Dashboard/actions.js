export const DASHBAORD = '[Dashboard]';

export const DEFAULT_ACTION = `${DASHBAORD} DEFAULT_ACTION`;

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}
