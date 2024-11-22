import { AuthProvider, HttpError } from "react-admin";
import data from "@/datas/users.json";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const user = data.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      let { password, ...userToPersist } = user;
      localStorage.setItem("user", JSON.stringify(userToPersist));

      let identify = {
        role: userToPersist.role,
        permissions: userToPersist.permissions,
      };

      localStorage.setItem("permisson", JSON.stringify(identify));
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      }),
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    let user: any = localStorage.getItem("user");
    let identify = {
      role: null,
      permissions: [],
    };

    if (user) {
      user = JSON.parse(user);
      identify.role = user.role;
      identify.permissions = user.permissions;
    }

    return Promise.resolve("admin");
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
