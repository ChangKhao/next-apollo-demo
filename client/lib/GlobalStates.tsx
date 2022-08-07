import React, { FC, createContext, useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { QUERY, batchCount } from '../lib/constant';

const defaultInitialState = {
    contactlist: [],
    next: 1,
    loading: false,
    setLoading: () => [],
    handleLoadMore: () => {},
    error: ''
};

interface GlobalContextProps {
    contactlist: any[];
    next: number;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    handleLoadMore: () => void;
    error: string;
};

export const GlobalContext = 
    createContext<GlobalContextProps>(defaultInitialState);
    interface GlobalProviderProps { children: any; }

    export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
        const [contactlist, setContactList] = useState([]);
        const [next, setHasNext] = useState(false);
        const [loading, setLoading] = useState(false);
        const [page, setPage] = useState(1);
        const [error, setError] = useState();

        const { fetchMore } = useQuery(QUERY, {
            variables: {
                count: 0,
                page: 1,
            },
            fetchPolicy: 'cache-and-network',
            skip: true
        });

        const handleLoadMore = () => {
            fetchMore({
                variables: {
                    count: batchCount,
                    page
                }
            }).then((res) => {
                const contacts = (res.data && res.data.ContactsList && Array.isArray(res.data.ContactsList.contacts) && res.data.ContactsList.contacts) || [];

                setContactList((list) => [...list, ...contacts]);

                const isNextPage = res.data && res.data.ContactsList && res.data.ContactsList.next;
                isNextPage && setPage((index) => index + 1);
                setHasNext(isNextPage);
                setLoading(false);
            }).catch((e) => { setError(e); setLoading(false); });
        }

        const providerValue: any = useMemo( () => ({
            contactlist,
            next,
            loading,
            setLoading,
            handleLoadMore,
            error
        }),
            [ contactlist, next, loading, setLoading, handleLoadMore, error]
        );

        return (
            <GlobalContext.Provider value={providerValue}>
                {children}
            </GlobalContext.Provider>
        );
    };