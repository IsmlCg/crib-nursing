import { useState } from "react";
import AppInput from "../components/AppInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getCollectionById } from "../model/database";
import { auth } from "../assets/js/firebase";
import { useNavigate } from "react-router-dom";

const collectionName = "users";
const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      const userData = await getCollectionById(collectionName, user.uid);
      // Assuming there is a 'role' property in your user object
      const userRole = userData.role;

      // Call the onSignIn prop to update the parent component's state

      if (userRole === "admin") {
        onSignIn();
        redirectToDashboard("/jobs");
      } else if (userRole === "employee") {
        redirectToDashboard("/dashboard");
      } else {
        setError("Invalid user role");
      }
    } catch (error) {
      setError("Please enter a valid email or password.");
    }
  };
  //
  const updateValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const initFieldEmail = {
    fieldLabel: "Your email",
    fieldValue: data.email,
    id: "emailid",
    InputGroupId: "email-group-id",
    name: "email",
    placeholder: "email@address.com",
    type: "email",
  };
  const initFieldPassword = {
    fieldLabel: "Password",
    fieldValue: data.password,
    id: "passwordid",
    InputGroupId: "password-group-id",
    name: "password",
    placeholder: "8+ characters required",
    type: "password",
  };

  const redirectToDashboard = (url) => {
    // You can customize this function for your navigation needs
    navigate(url);
  };

  return (
    <>
      <div className="container content-space-1">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="mx-lg-auto">
              <div className="position-relative">
                <div className="card card-shadow card-login">
                  <div className="card-body">
                    <form onSubmit={handleSignIn}>
                      <div className="text-center">
                        <div className="mb-5">
                          <h3 className="card-title">
                            Welcome to your nursing community
                          </h3>
                        </div>
                      </div>
                      <AppInput
                        initField={initFieldEmail}
                        updateFieldValue={updateValue}
                      />
                      <AppInput
                        initField={initFieldPassword}
                        updateFieldValue={updateValue}
                      />
                      <span className="invalid-feedback">{error}</span>
                      <div className="d-grid gap-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
