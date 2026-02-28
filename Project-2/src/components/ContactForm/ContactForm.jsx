import styles from './Contact.module.css';
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa";



const ContactForm =() => {
    return (
        <section className={styles.container} >
            <div className={styles.contact_form}>
                <Button text ="VIA SUPPORT CHAT" icon= {<MdMessage fontSize="24px" />}/>
                <Button text ="VIA CALL" icon= {<FaPhoneFlip fontSize="24px" />}/>
            </div>
            <div className= {styles.contact_image}></div>
        </section>
    )
}

export default ContactForm;