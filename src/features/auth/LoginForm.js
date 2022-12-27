import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import { destroyModal } from "../modals/Modal";

const LoginForm = () => {
  return (
    <div className="login">
      <h3 className="login__title">Sign In</h3>
      <h5 className="login__text">Do you have an toog account?</h5>
      <form className="login__form">
        <label className="login__form__label">Email</label>
        <input className="login__form__input" type="email" />
        <label className="login__form__label">Password</label>
        <input className="login__form__input" type="password" />
        <a href="/password" className="login__form__password-link">
          Forgot Password?
        </a>
        <div className="login__form__btn-container">
          <button className="login__form__btn-container__register-btn">
            Sign Up
          </button>
          <div className="login__form__btn-container__login-inner">
            <button className="login__form__btn-container__login-inner__btn">
              Sign In
            </button>
          </div>
        </div>
      </form>
      <span className="login__footer-text">
        This site is protected by reCAPTCHA and the Google &nbsp;
        <a href="#1" className="login__footer-text__link">
          Privacy Police
        </a>
        &nbsp; and &nbsp;
        <a className="login__footer-text__link" href="#2">
          Terms of service
        </a>
        &nbsp; apply.
      </span>

      <FaRegTimesCircle className="login__close-btn" onClick={destroyModal} />
    </div>
  );
};

export default LoginForm;
