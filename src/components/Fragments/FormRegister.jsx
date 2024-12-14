import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Username" type="text" name="name" placeholder="John" />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
