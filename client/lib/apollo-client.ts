import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { uri } from './constant';

const client = new ApolloClient({
    uri,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    ContactsList: offsetLimitPagination()
                }
            }
        }
    })
});

export default client;