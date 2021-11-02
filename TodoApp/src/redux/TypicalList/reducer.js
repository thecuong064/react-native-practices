import TypicalListActionTypes from './constants';

const initialList = [
  {
    id: 1,
    title: 'First Item',
    description: 'First Desc ling fpksrkpn nkljk wgjklwe ikwgnrl heelo',
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'Second Desc',
  },
  {
    id: 3,
    title: 'Third Item',
    description: 'Third Desc',
  },
];

const typicalListReducer = (state = initialList, action) => {
  const {payload, type} = action;

  switch (type) {
    case TypicalListActionTypes.TYPICAL_LIST_ITEMS_ADD: {
      var newId = 0;
      if (state.length > 0) {
        newId = state[state.length - 1].id + 1;
      }

      console.log(`new item index ${newId}`);

      var newItem = {
        id: newId,
        title: payload.title,
        description: payload.description,
      };

      let newState = [...state, newItem];
      return newState;
    }
    default:
      return state;
  }
};

export default typicalListReducer;
