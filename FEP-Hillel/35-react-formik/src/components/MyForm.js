import React from "react";
import { Formik, Form } from "formik";
import style from "./MyForm.module.css";
import FullInput from "./FullInput";
import Validation from "./Validation";

function MyForm() {
    return (
        <Formik
            initialValues={{ name: "", email: "", tel: "" }}
            validationSchema={Validation()}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));
            }}>
            <Form>
                <FullInput fieldName="Name" name="name" style={style} />
                <FullInput fieldName="Email" name="email" style={style} />
                <FullInput fieldName="Phone" name="tel" style={style} />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default MyForm;
