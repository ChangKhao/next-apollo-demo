import { useEffect, useContext } from "react";
import { GlobalContext } from "../../lib/GlobalStates";
import { errMsg } from "../../lib/constant";

export default function Contacts() {
    const { contactlist, loading, setLoading, error, handleLoadMore, next } =
    useContext(GlobalContext);
    useEffect(() => {
        setLoading(true);
        handleLoadMore();
    }, []);
     
    return (
        <div>
            {!error && !loading && (
                <div className="list" data-testid="contact-list">
                    {Array.isArray(contactlist) && contactlist.map((contact, index) => (
                       <section key={`contact-list-${index + 1}`} className="tilting-card">
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="mouse-position-tracker"></div>
                            <div className="tilting-card-body">
                                <div><h2>{contact.company}</h2></div>
                                <div>
                                    <h3>{contact.name}</h3>
                                    <address>
                                        {contact.address}<br />
                                        {contact.email}<br />
                                        {contact.phoneNumber}
                                    </address>
                                </div>
                            </div>
                        </section> 
                    ))}
                </div>
            )}
            {!error && loading && 'loading ...'}
            {!loading && !error && next && (
               <div className="button-container centered"><button className="loadMore" onClick={handleLoadMore}>Load more</button></div>
            )}
            { error && errMsg }
        </div>
    )
}