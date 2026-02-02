

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




// import { useState, useEffect } from "react";
// import { FaStar, FaPlus, FaCamera } from "react-icons/fa";

// const API_URL = "https://red-backend-neww-production.up.railway.app/api";

// const ListHotels = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [hotels, setHotels] = useState([]);
//   const [submitting, setSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     phone: "",
//     price_per_night: "",
//     currency: "XOF",
//   });

//   const token = localStorage.getItem("authToken");

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
//     if (submitting) return;
//     setSubmitting(true);

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     if (imageFile) data.append("image", imageFile);

//     try {
//       const res = await fetch(`${API_URL}/hotels`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           // Ne pas mettre Content-Type avec FormData, fetch le gère automatiquement
//         },
//         body: data,
//       });

//       if (!res.ok) {
//         const err = await res.text();
//         console.error("BACKEND ERROR 👉", err);
//         alert("Erreur serveur lors de l'ajout");
//         setSubmitting(false);
//         return;
//       }

//       // reset form et modal
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
//       setIsModalOpen(false);

//       fetchHotels();
//     } catch (err) {
//       console.error("NETWORK ERROR 👉", err);
//       alert("Erreur réseau : backend injoignable");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="fixed top-15 left-0 right-0 md:left-[322px] p-10 shadow-md p-6 bg-white welcome-section body flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shadow-lg p-4 rounded-lg">
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800">
//             Hôtels ({hotels.length})
//           </h2>
//         </div>

//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition self-start md:self-auto"
//         >
//           <FaPlus /> Créer un nouvel hôtel
//         </button>
//       </div>

//       {/* Liste des hôtels */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-28">
//         {hotels.map((hotel) => (
//           <div
//             key={hotel.id}
//             className="bg-white rounded-lg shadow p-2 flex flex-col gap-2"
//           >
//             {hotel.image && (
//               <img
//                 src={hotel.image} // ✅ Cloudinary renvoie déjà l'URL sécurisée
//                 className="h-60 w-full object-cover rounded-lg"
//                 alt={hotel.name}
//               />
//             )}
//             <p className="text-sm text-yellow-900">{hotel.address}</p>
//             <h3 className="font-semibold text-lg">{hotel.name}</h3>
//             <p className="text-sm py-2">
//               {hotel.price_per_night} {hotel.currency} / nuit
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal complet */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-black opacity-20"
//             onClick={() => setIsModalOpen(false)}
//           />

//           <div className="relative bg-white rounded-lg w-full max-w-full md:max-w-5xl p-6 shadow-lg z-10 overflow-y-auto max-h-[95vh] mx-4">
//             <button
//               onClick={() => setIsModalOpen(false)}
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
//                   required
//                 />
//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Quartier, rue, ville..."
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   required
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
//                   required
//                 />
//                 <input
//                   type="tel"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="+221 77 123 45 67"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   required
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
//                   required
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

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className={`w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-lg font-medium ${
//                   submitting ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 disabled={submitting}
//               >
//                 {submitting ? "Enregistrement..." : "Enregistrer l'hôtel"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListHotels;


import { useEffect, useState } from "react";
import {
  FaPlus,
  FaCamera,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const API_URL =
  "https://red-backend-neww-production.up.railway.app/api";

const ListHotels = () => {
  const token = localStorage.getItem("authToken");

  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hotelToEdit, setHotelToEdit] = useState(null);
  const [hotelToDelete, setHotelToDelete] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    price_per_night: "",
    currency: "XOF",
  });

  /* ================= FETCH ================= */
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

  /* ================= IMAGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) =>
      data.append(key, formData[key])
    );
    if (imageFile) data.append("image", imageFile);

    const url = hotelToEdit
      ? `${API_URL}/hotels/${hotelToEdit.id}`
      : `${API_URL}/hotels`;

    if (hotelToEdit) data.append("_method", "PUT");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (!res.ok) throw new Error("Erreur serveur");

      resetForm();
      fetchHotels();
    } catch (err) {
      console.error("SAVE ERROR 👉", err);
      alert("Erreur lors de l'enregistrement");
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= EDIT ================= */
  const openEditModal = (hotel) => {
    setHotelToEdit(hotel);
    setFormData({
      name: hotel.name,
      address: hotel.address,
      email: hotel.email || "",
      phone: hotel.phone || "",
      price_per_night: hotel.price_per_night,
      currency: hotel.currency,
    });
    setSelectedImage(hotel.image || null);
    setImageFile(null);
    setIsModalOpen(true);
  };

  /* ================= DELETE ================= */
  const confirmDeleteHotel = async () => {
    if (!hotelToDelete) return;

    try {
      await fetch(`${API_URL}/hotels/${hotelToDelete.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setHotelToDelete(null);
      fetchHotels();
    } catch (err) {
      console.error("DELETE ERROR 👉", err);
      alert("Erreur suppression");
    }
  };

  /* ================= RESET ================= */
  const resetForm = () => {
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
    setHotelToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="fixed top-15 left-0 right-0 md:left-[322px] bg-white shadow-lg p-6 rounded-lg z-40">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Hôtels ({hotels.length})
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg"
          >
            <FaPlus /> Nouvel hôtel
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-32">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow p-2 relative"
          >
            {/* ACTIONS */}
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => openEditModal(hotel)}
                className="p-2 bg-white rounded-full shadow"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => setHotelToDelete(hotel)}
                className="p-2 bg-white rounded-full shadow text-red-600"
              >
                <FaTrash />
              </button>
            </div>

            {hotel.image && (
              <img
                src={hotel.image}
                className="h-56 w-full object-cover rounded-lg"
                alt={hotel.name}
              />
            )}

            <h3 className="font-semibold mt-2">{hotel.name}</h3>
            <p className="text-sm text-gray-600">{hotel.address}</p>
            <p className="font-medium mt-1">
              {hotel.price_per_night} {hotel.currency} / nuit
            </p>
          </div>
        ))}
      </div>

      {/* MODAL CREATE / EDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-30"
            onClick={resetForm}
          />

          <div className="relative bg-white p-6 rounded-lg w-full max-w-4xl z-10">
            <h3 className="text-xl font-semibold mb-4">
              {hotelToEdit ? "Modifier l'hôtel" : "Créer un hôtel"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Nom"
                  className="border p-2 rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <input
                  placeholder="Adresse"
                  className="border p-2 rounded"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Email"
                  className="border p-2 rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  placeholder="Téléphone"
                  className="border p-2 rounded"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Prix"
                  className="border p-2 rounded"
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
                  className="border p-2 rounded"
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

              {/* IMAGE */}
              <div
                className="border-dashed border-2 p-6 rounded cursor-pointer text-center"
                onClick={() =>
                  document.getElementById("imageInput").click()
                }
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    className="h-48 mx-auto object-cover rounded"
                  />
                ) : (
                  <>
                    <FaCamera className="mx-auto text-3xl text-gray-400" />
                    <p className="text-gray-400">Ajouter une image</p>
                  </>
                )}
                <input
                  type="file"
                  id="imageInput"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gray-900 text-white py-3 rounded-lg"
              >
                {submitting ? "Enregistrement..." : "Enregistrer"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {hotelToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-30"
            onClick={() => setHotelToDelete(null)}
          />
          <div className="relative bg-white p-6 rounded-lg z-10">
            <h3 className="text-lg font-semibold mb-4">
              Supprimer cet hôtel ?
            </h3>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setHotelToDelete(null)}
                className="px-4 py-2 border rounded"
              >
                Annuler
              </button>
              <button
                onClick={confirmDeleteHotel}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListHotels;



// // export default ListHotels;

// import { useState, useEffect } from "react";
// import { FaPlus, FaCamera } from "react-icons/fa";

// const API_URL = "https://red-backend-neww-production.up.railway.app/api";

// const ListHotels = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [hotels, setHotels] = useState([]);
//   const [submitting, setSubmitting] = useState(false);

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
//       // si tu utilises Response::api(), data.data contient les hotels
//       setHotels(data.data || data);
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
//     if (submitting) return;
//     setSubmitting(true);

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     if (imageFile) data.append("image", imageFile);

//     try {
//       const res = await fetch(`${API_URL}/hotels`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           // Ne pas mettre Content-Type avec FormData
//         },
//         body: data,
//       });

//       if (!res.ok) {
//         const err = await res.text();
//         console.error("BACKEND ERROR 👉", err);
//         alert("Erreur serveur lors de l'ajout");
//         setSubmitting(false);
//         return;
//       }

//       // reset form et modal
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
//       closeModal();

//       fetchHotels();
//     } catch (err) {
//       console.error("NETWORK ERROR 👉", err);
//       alert("Erreur réseau : backend injoignable");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="fixed top-15 left-0 right-0 md:left-[322px] p-6 shadow-md bg-white flex justify-between items-center rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-800">
//           Hôtels ({hotels.length})
//         </h2>
//         <button
//           onClick={openModal}
//           className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
//         >
//           <FaPlus /> Créer un nouvel hôtel
//         </button>
//       </div>

//       {/* Liste des hôtels */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-28">
//         {hotels.map((hotel) => (
//           <div
//             key={hotel.id}
//             className="bg-white rounded-lg shadow p-2 flex flex-col gap-2"
//           >
//             {hotel.image ? (
//               <img
//                 src={`https://red-backend-neww-production.up.railway.app/storage/${hotel.image}`}
//                 className="h-60 w-full object-cover rounded-lg"
//                 alt={hotel.name}
//               />
//             ) : (
//               <div className="h-60 w-full bg-gray-200 flex items-center justify-center rounded-lg">
//                 Pas d'image
//               </div>
//             )}
//             <p className="text-sm text-yellow-900">{hotel.address}</p>
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
//           <div className="relative bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg z-10 overflow-y-auto max-h-[95vh] mx-4">
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
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Nom complet de l'hôtel"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="Quartier, rue, ville..."
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="contact@hotel.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="tel"
//                   className="mt-1 w-full border border-gray-300 rounded-lg p-2"
//                   placeholder="+221 77 123 45 67"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   required
//                 />
//               </div>

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
//                   required
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

//               <div>
//                 <div
//                   className="w-full h-72 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
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
//                 className={`w-full py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-lg font-medium ${
//                   submitting ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 disabled={submitting}
//               >
//                 {submitting ? "Enregistrement..." : "Enregistrer l'hôtel"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListHotels;
















