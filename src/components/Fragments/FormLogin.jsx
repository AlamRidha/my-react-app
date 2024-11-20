import { useEffect, useRef } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };

  // jika menggunakan useRef pada component gunakan forwardRef
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="text"
        name="email"
        placeholder="example@gmail.com"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
