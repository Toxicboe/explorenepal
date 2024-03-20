import  {useState}from 'react'
import {Link,useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedinIn,faFacebook ,faGoogle} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
       // event.preventDefault();
        const items = { userName, password };
        console.warn(items);
        fetch('https://localhost:44369/api/Account/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(items)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                navigate("/");
            })
        })
    };
  return (
     <div className="d-flex justify-content-center align-items-center vh-100 rounded-4">
            <div className="row justify-content-end p-0 bg-danger m-0 p-0 w-50" style={{ borderRadius: "20px" }}>
                <div className="col align-self-center p-0 h-50 rounded-5 col-sm-6">
                    <form onSubmit={handleSubmit} className="form-control" style={{ borderBottomRightRadius: "40px", borderTopRightRadius: "40px" }}>
                        <h1 className="d-flex justify-content-center align-items-center">Log In</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a href="https://www.facebook.com" className="border rounded-circle border-2 d-inline-flex justify-content-center align-items-center m-2" style={{ borderColor: "#DDDDDD", height: "40px", width: "40px" }}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">or use your account</div>
                        <div className="mb-3 mt-3">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <span className="d-flex justify-content-end">
                                <Link to="/reset" className="text-primary text-decoration-none">Forget Password?</Link>
                            </span>
                        </div>
                        <div className="form-check mb-3 d-flex justify-content-start">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>
                        <div className="d-grid">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <Link to="/signup" className="text-primary fs-6 text-decoration-none">Don't have an Account?</Link>
                            </div>
                            <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col align-self-center p-0 bg-danger rounded-4 col-sm-6 d-none d-sm-block">
                    <h1 className="h-100">Welcome Back!</h1>
                    <p className="h-100 h6">To keep connected with us please login with your personal info</p>
                </div>
            </div>
        </div>
  )
}

export default Login