import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contacts from './Contacts';

test('Contacts component returns contact-list when loaded', () => {
    const { getByTestId } = render(<Contacts />);
    const contactListElement = getByTestId('contact-list');

    expect(contactListElement).toBeInTheDocument();
});