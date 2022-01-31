import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { ActionType } from "./action-types";

const addContact = createAction(ActionType.ADD_CONTACT, (contact) => ({
  payload: {
    id: nanoid(),
    ...contact,
  },
}));

const deleteContact = createAction(ActionType.DELETE_CONTACT);

const changeFilter = createAction(ActionType.CHANGE_FILTER);

const contactsAction = { addContact, deleteContact, changeFilter };

export default contactsAction;
