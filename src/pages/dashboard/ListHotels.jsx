

// import { useState } from "react";
// import { FaStar, FaPlus, FaCamera } from "react-icons/fa";

// const ListHotels = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//   <div className="fixed top-15 left-0 right-0 md:left-[322px] p-10 shadow-md p-6 bg-white  welcome-section body flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shadow-lg p-4 rounded-lg ">
//   {/* Titre */}
//   <div className="">
//     <h2 className="text-2xl font-semibold text-gray-800">Liste des hôtels</h2>
//     <p className="text-gray-500 text-sm">Gestion et consultation des hôtels</p>
//   </div>

//   {/* Bouton */}
//   <button
//     onClick={openModal}
//     className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition self-start md:self-auto"
//   >
//     <FaPlus /> Créer un nouvel hôtel
//   </button>
// </div>


//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           {/* Overlay léger */}
//           <div
//             className="absolute inset-0 bg-black opacity-20"
//             onClick={closeModal}
//           />

//           <div className="relative bg-white rounded-lg w-full max-w-full md:max-w-5xl p-6 shadow-lg z-10 overflow-y-auto max-h-[95vh] mx-4">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
//             >
//               &times;
//             </button>

//             <h3 className="text-2xl font-semibold mb-6">Créer un nouvel hôtel</h3>

//             <form className="space-y-6">
//               {/* Row 1 : Nom + Adresse */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Nom de l'hôtel</label>
//                   <input
//                     type="text"
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="Nom complet de l'hôtel"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Adresse</label>
//                   <input
//                     type="text"
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="Quartier, rue, ville..."
//                   />
//                 </div>
//               </div>

//               {/* Row 2 : Email + Téléphone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">E-mail</label>
//                   <input
//                     type="email"
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="contact@hotel.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
//                   <input
//                     type="tel"
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="+221 77 123 45 67"
//                   />
//                 </div>
//               </div>

//               {/* Row 3 : Prix + Devise */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Prix par nuit</label>
//                   <input
//                     type="number"
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                     placeholder="Prix en XOF"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Devise</label>
//                   <select
//                     className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   >
//                     <option value="XOF">XOF</option>
//                     <option value="EUR">EUR</option>
//                     <option value="USD">USD</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Row 4 : Upload photo avec placeholder */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Ajouter une photo
//                 </label>

//                 <div
//                   className="w-full h-70 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
//                   onClick={() => document.getElementById("hotelImageInput").click()}
//                 >
//                   {selectedImage ? (
//                     <img
//                       src={selectedImage}
//                       alt="Preview"
//                       className="object-cover w-full h-full rounded-lg"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center gap-2 text-gray-400">
//                       <FaCamera size={40} />
//                       <span>Ajouter photo</span>
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     id="hotelImageInput"
//                     className="hidden"
//                     onChange={handleImageChange}
//                   />
//                 </div>
//               </div>

//               {/* Button enregistrer */}
//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-lg font-medium"
//               >
//                 Enregistrer l'hôtel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListHotels;



import { useState, useEffect } from "react";
import { FaStar, FaPlus, FaCamera } from "react-icons/fa";

const API_URL = "https://red-backend-neww-production.up.railway.app/api";

const ListHotels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    price_per_night: "",
    currency: "XOF",
  });

  const token = localStorage.getItem("authToken");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await fetch(`${API_URL}/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setHotels(data);
    } catch (err) {
      console.error("FETCH HOTELS ERROR 👉", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // prévention double submit
    setSubmitting(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (imageFile) data.append("image", imageFile);

    try {
      const res = await fetch(`${API_URL}/hotels`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: data,
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("BACKEND ERROR 👉", err);
        alert("Erreur serveur lors de l'ajout");
        setSubmitting(false);
        return;
      }

      // reset form et modal
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
        price_per_night: "",
        currency: "XOF",
      });
      setSelectedImage(null);
      setImageFile(null);
      closeModal();

      fetchHotels();
    } catch (err) {
      console.error("NETWORK ERROR 👉", err);
      alert("Erreur réseau : backend injoignable");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="fixed top-15 left-0 right-0 md:left-[322px] p-10 shadow-md p-6 bg-white welcome-section body flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shadow-lg p-4 rounded-lg">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Hôtels ({hotels.length})
          </h2>
        </div>

        <button
          onClick={openModal}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition self-start md:self-auto"
        >
          <FaPlus /> Créer un nouvel hôtel
        </button>
      </div>

      {/* Liste des hôtels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-28">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow p-2 flex flex-col gap-2"
          >
            {hotel.image && (
              <img
                src={`https://red-backend-neww-production.up.railway.app/storage/${hotel.image}`}
                className="h-60 w-320 object-cover rounded-lg"
                alt={hotel.name}
              />
            )}
            <p className="text-sm text-yellow-900">{hotel.address}</p>
            <h3 className="font-semibold text-lg">{hotel.name}</h3>
            <p className="text-sm py-2">
              {hotel.price_per_night} {hotel.currency} / nuit
            </p>
          </div>
        ))}
      </div>

      {/* Modal complet */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-20"
            onClick={closeModal}
          />

          <div className="relative bg-white rounded-lg w-full max-w-full md:max-w-5xl p-6 shadow-lg z-10 overflow-y-auto max-h-[95vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-6">
              Créer un nouvel hôtel
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Nom complet de l'hôtel"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Quartier, rue, ville..."
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="contact@hotel.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="tel"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="+221 77 123 45 67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Prix en XOF"
                  value={formData.price_per_night}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price_per_night: e.target.value,
                    })
                  }
                  required
                />
                <select
                  className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option value="XOF">XOF</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
              </div>

              {/* Image */}
              <div>
                <div
                  className="w-full h-70 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    document.getElementById("hotelImageInput").click()
                  }
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <FaCamera size={40} />
                      <span>Ajouter photo</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="hotelImageInput"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-lg font-medium ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={submitting}
              >
                {submitting ? "Enregistrement..." : "Enregistrer l'hôtel"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListHotels;


// import { useState, useEffect } from "react";
// import { FaStar, FaPlus, FaCamera } from "react-icons/fa";

//                 // const API_URL = "http://127.0.0.1:8000/api";
// const API_URL = "https://red-backend-neww-production.up.railway.app/api";

// const ListHotels = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [hotels, setHotels] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     phone: "",
//     price_per_night: "",
//     currency: "XOF",
//   });

//   const token = localStorage.getItem("authToken");

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const fetchHotels = async () => {
//     try {
//       const res = await fetch(`${API_URL}/hotels`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });

//       const data = await res.json();
//       setHotels(data);
//     } catch (err) {
//       console.error("FETCH HOTELS ERROR 👉", err);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       setImageFile(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     if (imageFile) data.append("image", imageFile);

//     try {
//       const res = await fetch(`${API_URL}/hotels`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//         body: data,
//       });

//       if (!res.ok) {
//         const err = await res.text();
//         console.error("BACKEND ERROR 👉", err);
//         alert("Erreur serveur lors de l'ajout");
//         return;
//       }

//       closeModal();
//       setFormData({
//         name: "",
//         address: "",
//         email: "",
//         phone: "",
//         price_per_night: "",
//         currency: "XOF",
//       });
//       setSelectedImage(null);
//       setImageFile(null);

//       fetchHotels();
//     } catch (err) {
//       console.error("NETWORK ERROR 👉", err);
//       alert("Erreur réseau : backend injoignable");
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="fixed top-15 left-0 right-0 md:left-[322px] p-10 shadow-md p-6 bg-white welcome-section body flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shadow-lg p-4 rounded-lg">
//         <div>
//           {/* <h2 className="text-2xl font-semibold text-gray-800">
//             Liste des hôtels
//           </h2>
//           <p className="text-gray-500 text-sm">
//             Gestion et consultation des hôtels
//           </p> */}
//           <h2 className="text-2xl font-semibold text-gray-800">
//   Hôtels ({hotels.length})
// </h2>

//         </div>

//         <button
//           onClick={openModal}
//           className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition self-start md:self-auto"
//         >
//           <FaPlus /> Créer un nouvel hôtel
//         </button>
//       </div>

//       {/* LISTE DES HÔTELS */}
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-28">
//         {hotels.map((hotel) => (
//           <div
//             key={hotel.id}
//             className="bg-white rounded-lg shadow p-2 flex flex-col gap-2"
//           >
//             {hotel.image && (
//               <img
//                 // src={`http://127.0.0.1:8000/storage/${hotel.image}`}
//                 src={`https://red-backend-neww-production.up.railway.app/storage/${hotel.image}`}
//                 className="h-60 w-320 object-cover rounded-lg"
//                 alt={hotel.name}
//               />
//             )}
//                         <p className="text-sm text-yellow-900">{hotel.address}</p>
//             <h3 className="font-semibold text-lg">{hotel.name}</h3>
//             <p className="text-sm py-2">
//               {hotel.price_per_night} {hotel.currency} / nuit
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-black opacity-20"
//             onClick={closeModal}
//           />

//           <div className="relative bg-white rounded-lg w-full max-w-full md:max-w-5xl p-6 shadow-lg z-10 overflow-y-auto max-h-[95vh] mx-4">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
//             >
//               &times;
//             </button>

//             <h3 className="text-2xl font-semibold mb-6">
//               Créer un nouvel hôtel
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Row 1 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Nom complet de l'hôtel"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                 />

//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Quartier, rue, ville..."
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                 />
//               </div>

//               {/* Row 2 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="contact@hotel.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />

//                 <input
//                   type="tel"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="+221 77 123 45 67"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                 />
//               </div>

//               {/* Row 3 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Prix en XOF"
//                   value={formData.price_per_night}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       price_per_night: e.target.value,
//                     })
//                   }
//                 />

//                 <select
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   value={formData.currency}
//                   onChange={(e) =>
//                     setFormData({ ...formData, currency: e.target.value })
//                   }
//                 >
//                   <option value="XOF">XOF</option>
//                   <option value="EUR">EUR</option>
//                   <option value="USD">USD</option>
//                 </select>
//               </div>

//               {/* Image */}
//               <div>
//                 <div
//                   className="w-full h-70 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
//                   onClick={() =>
//                     document.getElementById("hotelImageInput").click()
//                   }
//                 >
//                   {selectedImage ? (
//                     <img
//                       src={selectedImage}
//                       alt="Preview"
//                       className="object-cover w-full h-full rounded-lg"
//                     />
//                   ) : (
//                     <div className="flex flex-col items-center gap-2 text-gray-400">
//                       <FaCamera size={40} />
//                       <span>Ajouter photo</span>
//                     </div>
//                   )}
//                   <input
//                     type="file"
//                     id="hotelImageInput"
//                     className="hidden"
//                     onChange={handleImageChange}
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-lg font-medium"
//               >
//                 Enregistrer l'hôtel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListHotels;

