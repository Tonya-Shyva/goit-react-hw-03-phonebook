import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactListStyled,
  ContactsWrap,
} from './ContactList.styled';

export const Contacts = ({ contacts, handleDelete }) => (
  <ContactsWrap>
    <ContactListStyled>
      {contacts.map((contact, id) => (
        <ContactItem key={id}>
          {contact.name}: {contact.number}
          <BtnStyled type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </BtnStyled>
        </ContactItem>
      ))}
    </ContactListStyled>
  </ContactsWrap>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
