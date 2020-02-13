import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import  contactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const context = useContext(contactContext)
    const { contacts, filtered } = context

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
            {
                filtered === null ? (
                    contacts.map(contact => {
                        return <CSSTransition key = {contact.id} timeout= {500} classNames= "item">
                                    <ContactItem  contact = {contact}/> 
                                </CSSTransition>
                        })
                ) : (
                    filtered.map(contact => {
                        return <CSSTransition key = {contact.id} timeout= {500} classNames= "item">
                                    <ContactItem contact = {contact}/>
                               </CSSTransition>
                        })
                )

            }
            </TransitionGroup>
        </Fragment>
    )   

}

export default Contacts
