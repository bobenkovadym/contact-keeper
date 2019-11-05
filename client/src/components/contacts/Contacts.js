import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactFilter from './ContactFilter';
import ContactContext from '../../context/contacts/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <div className="container m-3 text-primary">
        <h3>Here you'll see your contacts</h3>
      </div>
    );
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          <ContactFilter />
          {filtered !== null
            ? filtered.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
        </Fragment>
      ) : <Spinner />}

    </Fragment>
  );
};

export default Contacts;
