import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {createUser,auth,setUser,googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUP = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password  = form.password.value;
    console.log({name,email,password});

    createUser(email,password)
      .then(result =>{
        const user= result.user;
        console.log(user);
        updateProfile(auth.currentUser,{
          displayName:name
        })
        form.reset();
        setUser(null);
      })
      .catch(error => console.log(error))
  }

  const handleGoogleSignIn = () => {
    console.log('inside from google sign in');
    googleSignIn()
      .then(res => {
        const loggedUser = res.user;
        setUser(loggedUser);
        fetch(`http://localhost:5000/jwt`,{
          method:'POST',
          body:JSON.stringify({email:loggedUser.email}),
          headers:{'content-type':'application/json'}
        })
            .then(res => res.json())
            .then(data => {
              localStorage.setItem('car-access-token',data.token);
              navigate('/');
            })
      })
      .catch(error => console.log(error))
  }
  

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:text-left">
          <img className="mr-8" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <div className="card-body form-body text-center">
            <p className="text-4xl font-semibold">Sign Up</p>
            <form onSubmit={handleSignUP}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Password</span>
                </label>
                <input
                  type="password"
                  placeholder=" password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {/* <button >Login</button> */}
                <input
                  className="btn btn-primary "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4">Or sign in with</p>
            <div className="flex items-center justify-evenly">
              <Link>
                {" "}
                <img
                  className="login-image"
                  src={"https://i.ibb.co/k0kG6GW/facobook-Logo.png"}
                ></img>
              </Link>
              <Link onClick={handleGoogleSignIn}>
                {" "}
                <img
                  className="login-image"
                  src={"https://i.ibb.co/xGX6Pd8/google-Logo2.png"}
                ></img>
              </Link>
            </div>
            <p className="mt-5">
              Already Have an Account?{" "}
              <Link to="/login" className="text-error">
                Please Llogin
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
