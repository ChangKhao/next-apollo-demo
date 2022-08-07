import { gql } from '@apollo/client';

export const uri = 'http://localhost:4000/graphql';
export const batchCount = 20;
export const errMsg = 'Looks like something went amiss, please try again';
export const QUERY = gql`
    query ContactsList($count: Int, $page: Int) {
        ContactsList(count: $count, page: $page) {
            contacts {
                company
                name
                email
                address
                phoneNumber
            }
            next
        }
    }`;