
// // export default ForgotPassword;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API_URL = "http://127.0.0.1:8000/api";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage("");
//     setError("");

//     if (!email) {
//       setError("Veuillez saisir votre e-mail.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(`${API_URL}/forgot-password`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const text = await response.text();
//       let data = {};

//       try {
//         data = JSON.parse(text);
//       } catch {
//         throw new Error("Réponse invalide du serveur");
//       }

//       if (!response.ok) {
//         setError(data.message || "Une erreur est survenue.");
//         setLoading(false);
//         return;
//       }

//       setMessage("📩 Un lien de réinitialisation a été envoyé à votre e-mail.");
//       setEmail("");
//       setLoading(false);

//       // Redirection auto après 3s
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);

//     } catch (err) {
//       console.error(err);
//       setError("Erreur réseau, veuillez réessayer plus tard.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen login flex justify-center items-center p-4">
//       <div className="w-[340px] -mt-50 h-auto">

//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <h1 className="text-2xl font-bold text-white tracking-wide">
//             RED Product
//           </h1>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-md p-8 shadow-xl">
//           <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//             Mot de passe oublié ?
//           </h2>

//           <p className="text-gray-600 text-sm text-center mb-6">
//             Entrez votre e-mail ci-dessous et nous vous enverrons des instructions pour modifier votre mot de passe.
//           </p>

//           {error && (
//             <p className="text-red-500 text-sm mb-2 text-center">
//               {error}
//             </p>
//           )}

//           {message && (
//             <p className="text-green-600 text-sm mb-2 text-center">
//               {message}
//             </p>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <input
//               type="email"
//               placeholder="Votre email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               disabled={loading}
//               className="w-full h-[55px] px-3 border-b-2 border-gray-300 
//               focus:border-gray-600 outline-none text-gray-800 shadow-sm disabled:opacity-50"
//             />

//             {/* Bouton */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full h-[48px] bg-gray-900 text-white rounded-lg 
//               hover:bg-gray-800 transition font-medium disabled:opacity-50"
//             >
//               {loading ? "Envoi..." : "Envoyer les instructions"}
//             </button>
//           </form>
//         </div>

//         {/* Lien retour */}
//         <div className="mt-5 text-center text-sm text-gray-400 space-y-1">
//           <p>
//             <a href="/login" className="text-yellow-400 hover:underline">
//               Retour à la connexion
//             </a>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Veuillez saisir votre e-mail.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const text = await response.text();
      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Réponse invalide du serveur");
      }

      if (!response.ok) {
        setError(data.message || "Une erreur est survenue.");
        setLoading(false);
        return;
      }

      setMessage("📩 Un lien de réinitialisation a été envoyé à votre e-mail.");
      setEmail("");
      setLoading(false);

      setTimeout(() => navigate("/login"), 3000);

    } catch (err) {
      console.error(err);
      setError("Erreur réseau, veuillez réessayer plus tard.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen login flex justify-center items-center p-4">
      <div className="w-[340px] -mt-50 h-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            RED Product
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-md p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Mot de passe oublié ?
          </h2>

          <p className="text-gray-600 text-sm text-center mb-6">
            Entrez votre e-mail ci-dessous et nous vous enverrons des instructions pour modifier votre mot de passe.
          </p>

          {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
          {message && <p className="text-green-600 text-sm mb-2 text-center">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full h-[55px] px-3 border-b-2 border-gray-300 focus:border-gray-600 outline-none text-gray-800 shadow-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[48px] bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium disabled:opacity-50"
            >
              {loading ? "Envoi..." : "Envoyer les instructions"}
            </button>
          </form>
        </div>

        <div className="mt-5 text-center text-sm text-gray-400 space-y-1">
          <p>
            <a href="/login" className="text-yellow-400 hover:underline">
              Retour à la connexion
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
