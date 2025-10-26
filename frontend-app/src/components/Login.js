import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJwtToken } = useOutletContext();
    const { setAlertClassName }  = useOutletContext();
    const { setAlertMessage }  = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/pass", email, password);
        
        if (email === "admin@example.com") {
            setJwtToken("abc");
            setAlertClassName("d-none");
            setAlertMessage("");
        } else {
            setAlertClassName("alert-danger");
            setAlertMessage("Invalid credentials!");
        }
    }

    return(
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    title="Email Address"
                    className="form-control"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="Password"
                    title="password"
                    className="form-control mt-2"
                    autoComplete="password-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <hr />
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default Login;