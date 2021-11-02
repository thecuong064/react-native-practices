import TypicalListActionTypes from './constants';

export const addItem = payload => ({
  type: TypicalListActionTypes.TYPICAL_LIST_ITEMS_ADD,
  payload: payload,
});
