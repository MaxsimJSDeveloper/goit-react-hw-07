import css from "./ContactForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";

import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { FeedbackSchema, handleKeyPress } from "../../js/validation";
import { CiCirclePlus } from "react-icons/ci";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const ContactForm = () => {
  const id = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label htmlFor={`${id}-n`} className={css.label}>
          Username
        </label>
        <div className={css.wrap}>
          <FaUser className={css.user} />
          <Field
            type="text"
            name="username"
            id={`${id}-n`}
            className={css.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <label htmlFor={`${id}-p`} className={css.label}>
          Phone
        </label>
        <div className={css.wrap}>
          <FaPhoneAlt className={css.phone} />
          <Field
            type="text"
            name="number"
            pattern="\d*"
            onKeyPress={handleKeyPress}
            id={`${id}-p`}
            className={css.inputField}
          ></Field>
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <button type="submit" className={css.submitButton}>
          <CiCirclePlus className={css.submit} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
