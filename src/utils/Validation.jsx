export const Validation = (email, password) => {
  const IsEmailValid = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/.test(email);
  const IsPasswordVaild =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!IsEmailValid) return "Email is not Valid";
  if (!IsPasswordVaild) return "Password is not Vaild";
  else return null;
};
