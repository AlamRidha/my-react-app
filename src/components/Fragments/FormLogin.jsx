import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="text"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
