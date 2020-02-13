import React ,{ useReducer } from 'react'
import uuid from 'uuid'
import contactReducer from './contactReducer'
import contactContext from './contactContext'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    FILTER_CONTACTS
} from '../Types'

const ContactState = props => {
    const initialState= {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jill@gmail.com",
                phone: "111-111-1111",
                type: "personal"
            },
            {
                id: 2,
                name: "Sara Watson",
                email: "sara@gmail.com",
                phone: "222-222-2222",
                type: "personal"
            },
            {
                id: 3,
                name: "Harry White",
                email: "harry@gmail.com",
                phone: "333-333-3333",
                type: "professional"
            }
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add a contact
    const addContact = contact => {
        contact.id = uuid.v4() // This method generates a random id
        dispatch({type: ADD_CONTACT, payload: contact})
    }
    // Delete a contact
    const deleteContact = (contact) => {
        dispatch({type: DELETE_CONTACT, payload: contact})
    }
    // Set current contact
    const setCurrent = (contact) => {
        dispatch({type: SET_CURRENT, payload: contact})
    }
    // Clear current contact
    const clearCurrent = (contact) => {
        dispatch({type: CLEAR_CURRENT})
    }
    // Update contact
    const updateContact = (text) => {
        dispatch({type: UPDATE_CONTACT, payload: text})
    }
    // Filter contacts
    const filterContacts = (text) => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }
    // Clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }
    return (
        <contactContext.Provider value = {{
            contacts: state.contacts,
            addContact,
            deleteContact,
            current: state.current,
            filtered: state.filtered,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            { props.children }
        </contactContext.Provider>
    )
}

export default ContactState