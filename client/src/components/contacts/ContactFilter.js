import React, { useContext, useRef, useEffect } from 'react'
import contactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const context = useContext(contactContext)
    const text = useRef('')
    console.log(text.current)
    useEffect(() => {
        if (context.filtered === null) {
            text.current.value= ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            context.filterContacts(e.target.value)
        } else {
            context.clearFilter()
        }
        
    }
    return (
        <form>
           <input type= "text" placeholder= "Filter Contact" ref= {text} onChange= {onChange}/> 
        </form>
    )
}

export default ContactFilter
