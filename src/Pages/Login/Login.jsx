import { Link, useLocation, 
  // useNavigate
 } from 'react-router-dom';
import LoginImg from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  // const navigate = useNavigate();

  console.log(location.pathname);
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      // navigate(location?.state ? location?.state : '/')
      const user = {email};
      axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
      .then(res =>{
        console.log(res.data);
      })
    })
    .catch(error => console.log(error))

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
            <img src={LoginImg} alt="login image" />
        </div>
        <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
          <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin} >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            <p className='mt-5 text-center'>New to Doctors Portal? <Link to="/signup" className='text-orange-600'> Sign Up</Link> </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
