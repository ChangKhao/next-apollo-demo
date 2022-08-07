import { gql } from 'apollo-server';

export default gql`
    type Query {
        Contact: Contact
        ContactsList(count: Int, page: Int): ContactResponse
    }
    type ContactResponse {
        contacts: [Contact]
        next: Boolean
    }
    type Contact {
        company: String
        name: String
        address: String
        email: String
        phoneNumber: String
    }
`;