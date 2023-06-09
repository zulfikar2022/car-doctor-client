import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import "./Login.css";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const Login = () => {
  const { signIn, setUser,googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        const user = res.user;
        const loggedUser = {
          email: user.email,
        };
        setUser(res.user);
        console.log(loggedUser);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          body: JSON.stringify(loggedUser),
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response  ", data);
            // warning: Local storage is not the best. (It is the second best place to store jwt token. We are using this for simplicity purpose)
            localStorage.setItem("car-access-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("inside from google sign in");
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          body: JSON.stringify({ email: loggedUser.email }),
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("car-access-token", data.token);
            navigate(from);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:text-left">
          <img className="mr-8" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <div className="card-body form-body text-center">
            <p className="text-4xl font-semibold">Login</p>
            <form onSubmit={handleLogin}>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your  password"
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
                  value="Login"
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
              New in this site?{" "}
              <Link to="/signup" className="text-error">
                Please SignUP
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
