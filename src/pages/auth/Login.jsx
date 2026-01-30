



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHotel } from "react-icons/fa";

// const API_URL = "http://127.0.0.1:8000/api";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setErrorMessage("Veuillez remplir tous les champs");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setErrorMessage(data.message || "Email ou mot de passe incorrect");
//         return;
//       }

//       console.log("Connexion réussie :", data);

//       // 🔥 STOCKAGE DÉFINITIF
//       if (data.token) {
//         localStorage.setItem("authToken", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user)); // 🔥 LIGNE CLÉ
//       }

//       // Redirection vers le dashboard
//       navigate("/dashboard");

//     } catch (err) {
//       console.error(err);
//       setErrorMessage("Erreur réseau, veuillez réessayer plus tard");
//     }
//   };

//   return (
//     <div className="login min-h-screen flex justify-center items-center p-4">
//       <div className="w-[340px] -mt-50 h-auto">

//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-2">
//             <FaHotel size={26} className="text-white" />
//             <h1 className="text-2xl font-bold text-white tracking-wide">
//               RED Product
//             </h1>
//           </div>
//         </div>

//         {/* Card formulaire */}
//         <div className="bg-white rounded-md p-8 shadow-xl">
//           <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
//             Connectez-vous
//           </h2>

//           {errorMessage && (
//             <div className="text-red-500 text-center mb-4">
//               {errorMessage}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="email"
//               placeholder="Votre email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-[58px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//             />

//             <input
//               type="password"
//               placeholder="Votre mot de passe"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full h-[58px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//             />

//             <div className="flex items-center text-sm text-gray-600 p-2">
//               <input type="checkbox" id="remember" className="mr-2" />
//               <label htmlFor="remember">Gardez-moi connecté</label>
//             </div>

//             <button
//               type="submit"
//               className="w-full h-[48px] bg-gray-900 text-white rounded-lg 
//               hover:bg-gray-800 transition font-medium"
//             >
//               Se connecter
//             </button>
//           </form>
//         </div>

//         {/* Liens */}
//         <div className="mt-5 text-center text-sm text-gray-400 space-y-1">
//           <p>
//             <a
//               href="/forgot-password"
//               className="text-yellow-400 hover:underline"
//             >
//               Mot de passe oublié ?
//             </a>
//           </p>
//           <p className="text-gray-10">
//             Vous n'avez pas de compte ?{" "}
//             <a
//               href="/signup"
//               className="text-yellow-400 hover:underline"
//             >
//               S'inscrire
//             </a>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

// const API_URL = "http://127.0.0.1:8000/api"; 
const API_URL = import.meta.env.VITE_API_URL;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Email ou mot de passe incorrect");
        return;
      }

      // 🔥 Stockage du token et utilisateur
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setErrorMessage("Erreur réseau, veuillez réessayer plus tard");
    }
  };

  return (
    <div className="login min-h-screen flex justify-center items-center p-4">
      <div className="w-[340px] -mt-50 h-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <FaHotel size={26} className="text-white" />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              RED Product
            </h1>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-md p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Connectez-vous
          </h2>

          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />
            <input
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />

            <div className="flex items-center text-sm text-gray-600 p-2">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember">Gardez-moi connecté</label>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              Se connecter
            </button>
          </form>
        </div>

        <div className="mt-5 text-center text-sm text-gray-400 space-y-1">
          <p>
            <a href="/forgot-password" className="text-yellow-400 hover:underline">
              Mot de passe oublié ?
            </a>
          </p>
          <p className="text-gray-10">
            Vous n'avez pas de compte ?{" "}
            <a href="/signup" className="text-yellow-400 hover:underline">
              S'inscrire
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
