// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) setUser(JSON.parse(storedUser));

//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     fetch("http://127.0.0.1:8000/api/me", {
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
//         setLoading(false);
//       })
//       .catch(() => {
//         localStorage.removeItem("authToken");
//         localStorage.removeItem("user");
//         setUser(null);
//         setLoading(false);
//       });
//   }, []);

//   const logout = async () => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       await fetch("http://127.0.0.1:8000/api/logout", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           Authorization: "Bearer " + token,
//         },
//       });
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

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    // ✅ Sécurité JSON.parse
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Erreur parsing user :", e);
        localStorage.removeItem("user");
      }
    }

    if (!token) {
      setLoading(false);
      return;
    }

    fetch("http://127.0.0.1:8000/api/me", {
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
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        console.error("Auth error:", err);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = async () => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        await fetch("http://127.0.0.1:8000/api/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        });
      } catch (e) {
        console.error("Logout error:", e);
      }
    }

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

