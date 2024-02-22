import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialStateContacts = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
