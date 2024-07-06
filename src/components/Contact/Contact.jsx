import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { MdDeleteForever } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
      <div className={css.data}>
        <p className={css.info}>
          <FaUser className={css.infoIcon} /> {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.infoIcon} /> {number}
        </p>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(handleDelete)}
      >
        <MdDeleteForever className={css.bin} />
      </button>
    </div>
  );
};

export default Contact;
