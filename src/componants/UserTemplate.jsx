import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginSectionStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function UserTemplate(props) {
  return (
    <div className="login-container">
      <div className="login-header-about">
        <div className="login-header">
          <p>Students Testimonials</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="login-about-card">
          <p>
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          <hr />
          <div>
            <div>
              <img
                src="https://b9.icdn.ru/m/maged-bahzan/8/79020078Mqm.jpg"
                alt="Not Found"
              />
              <p>Sarah L</p>
            </div>
            <div>
              <NavLink>Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-form-header">
          <p>{props.header}</p>
          <p>{props.text}</p>
        </div>
        <div className="login-form">
          <form>
            {props.state ? (
              <div className="login-form-first">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your Name" />
              </div>
            ) : null}
            <div className="login-form-second">
              <label>Email</label>
              <input type="text" placeholder="Enter your Email" />
            </div>
            <div className="login-form-therd">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password" />
            </div>
            {!props.state ? (
              <>
                <div className="login-form-fourth">
                  <NavLink>Forgot Password?</NavLink>
                </div>
                <div className="login-form-fifth">
                  <label>Remember Me</label>
                  <input type="checkbox" />
                </div>
              </>
            ) : (
              <div className="login-form-Policy">
                <input type="checkbox" />I agree with &nbsp;
                <NavLink to="/Terms-of-Use">
                  Terms of Use
                </NavLink> &nbsp;and{" "}
                <NavLink to="/Privacy-Policy">&nbsp;Privacy Policy</NavLink>
              </div>
            )}
            <div className="login-form-sexth">
              {!props.state ? (
                <input type="submit" value="Login" />
              ) : (
                <input type="submit" value="Sign Up" />
              )}
            </div>
          </form>
          <div className="login-form-or-line">
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <div className="login-google-Sign-Up">
            {!props.state ? (
              <div>
                <NavLink>
                  <FontAwesomeIcon icon={faGoogle} />
                  &nbsp; Login with Google
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink>
                  <FontAwesomeIcon icon={faGoogle} />
                  &nbsp; Sign Up with Google
                </NavLink>
              </div>
            )}
            <div>
              {!props.state ? (
                <>
                  Don’t have an account?&nbsp;
                  <NavLink to="/Skillbridge-Sign-Up">
                    Sign Up &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                  </NavLink>
                </>
              ) : (
                <>
                  Already have an account? &nbsp;
                  <NavLink to="/Skillbridge-login">
                    Login &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTemplate;
