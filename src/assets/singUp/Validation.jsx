export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    errors.name = "Name is Required !";
  }

  if (values.email === "") {
    errors.email = "Email is Reguired !";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match !";
  }

  if (values.password === "") {
    errors.password = "Password is Required !";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password didn't match !";
  }

  return errors;
}
