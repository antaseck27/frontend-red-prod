

// // export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import { API_URL } from "../api";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const storedUser = localStorage.getItem("user");

//     // Charger user depuis localStorage
//     if (storedUser && storedUser !== "undefined") {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (err) {
//         console.error("Erreur parsing user:", err);
//         localStorage.removeItem("user");
//       }
//     }

//     // Si pas de token → stop
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     // Vérifier token backend
//     fetch(`${API_URL}/me`, {
//       headers: {
//         Accept: "application/json",
//         Authorization: "Bearer " + token,
//       },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Unauthorized");
//         return res.json();
//       })
//       .then((data) => {
//         setUser(data);
//         localStorage.setItem("user", JSON.stringify(data));
//       })
//       .catch((err) => {
//         console.error("Erreur d'authentification:", err);
//         localStorage.removeItem("authToken");
//         localStorage.removeItem("user");
//         setUser(null);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   // Logout
//   const logout = async () => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       try {
//         await fetch(`${API_URL}/logout`, {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             Authorization: "Bearer " + token,
//           },
//         });
//       } catch (err) {
//         console.error("Erreur lors de la déconnexion:", err);
//       }
//     }

//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 LOGIN INSTANTANÉ (sans refresh)
  const login = (userData, token) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    // Charger user depuis localStorage
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Erreur parsing user:", err);
        localStorage.removeItem("user");
      }
    }

    if (!token) {
      setLoading(false);
      return;
    }

    // Vérifier token backend
    fetch(`${API_URL}/me`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        const realUser = data.user || data;
        setUser(realUser);
        localStorage.setItem("user", JSON.stringify(realUser));
      })
      .catch((err) => {
        console.error("Erreur d'authentification:", err);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔥 LOGOUT
  const logout = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        });
      } catch (err) {
        console.error("Erreur lors de la déconnexion:", err);
      }
    }

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
