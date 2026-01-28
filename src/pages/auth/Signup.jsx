
// // export default Signup;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHotel } from "react-icons/fa";

// const API_URL = "http://127.0.0.1:8000/api"; // URL de ton backend Laravel

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !acceptedTerms) {
//       setError("Veuillez remplir tous les champs et accepter les termes");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           password_confirmation: password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Affiche les erreurs retournées par Laravel
//         setError(data.message || "Erreur lors de l'inscription");
//         return;
//       }

//       console.log("Utilisateur créé :", data);

//       // Stocker le token si Laravel renvoie un token (JWT ou Sanctum)
//       if (data.token) localStorage.setItem("authToken", data.token);

//       // Redirection vers le dashboard
//       navigate("/dashboard");

//     } catch (err) {
//       console.error(err);
//       setError("Erreur réseau, veuillez réessayer plus tard");
//     }
//   };

//   return (
//     <div className="min-h-screen login flex justify-center items-center p-4">
//       <div className="w-[340px] -mt-[50px] h-auto">
        
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
//           <h2 className="text-gray-800 mb-4 m-2">Créer un compte</h2>

//           {error && <p className="text-red-500 mb-2">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-5">

//             {/* Nom */}
//             <input
//               type="text"
//               placeholder="Votre nom complet"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full h-[58px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Votre email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-[58px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//             />

//             {/* Mot de passe */}
//             <input
//               type="password"
//               placeholder="Votre mot de passe"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full h-[58px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm"
//             />

//             {/* Acceptation termes */}
//             <div className="flex items-center text-sm text-gray-600 p-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="mr-2"
//                 checked={acceptedTerms}
//                 onChange={(e) => setAcceptedTerms(e.target.checked)}
//               />
//               <label htmlFor="terms">
//                 Accepte les <span>termes et la politique</span>
//               </label>
//             </div>

//             {/* Bouton inscription */}
//             <button
//               type="submit"
//               className="w-full h-[48px] text-white rounded-lg 
//               hover:bg-gray-800 transition font-medium"
//               style={{ backgroundColor: '#494C4F' }}
//             >
//               S’inscrire
//             </button>
//           </form>
//         </div>

//         {/* Liens */}
//         <div className="mt-5 text-center text-sm text-white space-y-1">
//           <p>
//             Vous avez déjà un compte ?{" "}
//             <a href="/login" className="text-yellow-400 hover:underline">
//               Se connecter
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const API_URL = "http://127.0.0.1:8000/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !acceptedTerms) {
      setError("Veuillez remplir tous les champs et accepter les termes");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erreur lors de l'inscription");
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
      setError("Erreur réseau, veuillez réessayer plus tard");
    }
  };

  return (
    <div className="min-h-screen login flex justify-center items-center p-4">
      <div className="w-[340px] -mt-[50px] h-auto">

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
          <h2 className="text-gray-800 mb-4 m-2">Créer un compte</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[58px] px-3 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm"
            />
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
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                Accepte les <span>termes et la politique</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] text-white rounded-lg hover:bg-gray-800 transition font-medium"
              style={{ backgroundColor: '#494C4F' }}
            >
              S’inscrire
            </button>
          </form>
        </div>

        <div className="mt-5 text-center text-sm text-white space-y-1">
          <p>
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-yellow-400 hover:underline">
              Se connecter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
