// import Contacts from '../components/contacts/Contacts';

describe('<Contacts>', () => {
  it('mounts', () => {
  //  cy.mount(<Contacts />)
  cy.fixture('contacts').as('contactsjson')
  })
})