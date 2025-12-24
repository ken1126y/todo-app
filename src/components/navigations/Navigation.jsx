import React from 'react'
import SiteTitle from './SiteTitle'
import SearchBar from './SearchBar'
import ContactButton from './ContactButton'
import ContactForm from './ContactForm'


const Navigation = ({ setTasknameSearchQuery }) => {
    return (
        <div className="navigation">
            <SiteTitle />
            <SearchBar setTasknameSearchQuery={setTasknameSearchQuery} />
            <ContactButton />
            {/*<ContactForm />*/}
        </div>
    )
}

export default Navigation
