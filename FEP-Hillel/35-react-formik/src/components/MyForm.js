import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./MyForm.module.css";

function MyForm() {
    return (
        <Formik
            initialValues={{ name: "", email: "", tel: "" }}
            enableReinitialize
            validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                    .required("Required")
                    .email("Invalid email address")
                    .max(12),
                tel: Yup.string()
                    .matches(/^[0-9]{1,12}$/, "12 or less numbers")
                    .required("Required"),
            })}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));
            }}>
            <Form>
                <div className={style.input}>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage
                        component="div"
                        className={style.error}
                        name="name"
                    />
                </div>
                <div className={style.input}>
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="text" />
                    <ErrorMessage
                        component="div"
                        className={style.error}
                        name="email"
                    />
                </div>
                <div className={style.input}>
                    <label htmlFor="tel">Phone number</label>
                    <Field name="tel" type="text" />
                    <ErrorMessage
                        component="div"
                        className={style.error}
                        name="tel"
                    />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default MyForm;
