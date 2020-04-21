import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import { login } from "../utils/authenticate";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login(username, password)) {
      Router.push("/");
    }
  };

  return (
    <Layout>
      <div className="login">
        <div className="row justify-content-center">
          <div className="col-xs-3">
            <div className="card">
              <div className="card-body">
                <form className="form-login" onSubmit={handleSubmit}>
                  <div className="form-label-group mb-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      autoFocus
                    />
                  </div>

                  <div className="form-label-group mb-2">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
