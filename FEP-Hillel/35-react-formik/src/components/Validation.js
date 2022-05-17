import * as Yup from "yup";

function Validation() {
    return Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .required("Required")
            .email("Invalid email address")
            .max(12),
        tel: Yup.string()
            .matches(/^[0-9]{1,12}$/, "12 or less numbers")
            .required("Required"),
    });
}
export default Validation;
