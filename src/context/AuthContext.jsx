

// // export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import { API_URL } from "../api"; // Assure-toi que api.js est dans src/api.js

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const storedUser = localStorage.getItem("user");

//     // Charger l'utilisateur depuis le localStorage si présent
//     if (storedUser && storedUser !== "undefined") {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (err) {
//         console.error("Erreur parsing user:", err);
//         localStorage.removeItem("user");
//       }
//     }

//     // Si pas de token, arrêter le chargement
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     // Vérifier le token auprès du backend
//     fetch(`${API_URL}/api/me`, {
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

//   // Déconnexion
//   const logout = async () => {
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       try {
//         await fetch(`${API_URL}/api/logout`, {
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

