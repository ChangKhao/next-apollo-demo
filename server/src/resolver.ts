import casual from 'casual';

const DEFAULT_COUNT = 2000;
const BATCH_COUNT = 20;

export default {
    Query: {
        Contact: () => {
            const data = {
                company: casual.company_name,
                name: casual.name,
                address: casual.address,
                email: casual.email,
                phoneNumber: casual.phone
            };
            return data;
        },
        ContactsList(parent: any, { count = BATCH_COUNT, page = 1 }) {
            const contacts = new Array(count).fill(0).map((_) => ({
                company: casual.company_name,
                name: casual.name,
                address: casual.address,
                email: casual.email,
                phoneNumber: casual.phone
            }));

            const next = count !== DEFAULT_COUNT && page * BATCH_COUNT < DEFAULT_COUNT;
            return { contacts, next };
        }
    }
};