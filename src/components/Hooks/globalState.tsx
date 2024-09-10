let globalState = {
  loginUser: null,
};

export const setLoginUser = (user) => {
  sessionStorage.setItem("loginUser", JSON.stringify(user));
};

export const getLoginUser = () => {
  const user = sessionStorage.getItem("loginUser");
  return user ? JSON.parse(user) : null;
};