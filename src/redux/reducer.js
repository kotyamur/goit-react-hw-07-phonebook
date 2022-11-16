import { combineReducers } from 'redux';

const initialContactsState = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'contacts/deleteContact': {
      return state.filter(contact => contact.id !== action.payload);
    }
    case 'contacts/setContactFromLocalStorage': {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

const initialFilterState = '';

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'filter/setFilter': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
