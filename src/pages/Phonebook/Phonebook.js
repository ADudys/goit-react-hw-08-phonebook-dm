import ContactForm from "components/ContactForm/ConstactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "store/contacts/operations";
import { selectError, selectIsLoading } from "store/contacts/selectors";

export default function Phonebook(){
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(()=>{
        dispatch(fetchContacts());
    },   [dispatch])
return(
    <>
    <Helmet>
        <title>Phonebook</title>
    </Helmet>
    <ContactForm/>
    <Filter/>
    <ContactList/>
    {!!isLoading && !error && <Loader/>}
    </>
)
}