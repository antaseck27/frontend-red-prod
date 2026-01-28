
// import { Menu, Bell, LogOut, Search, X } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// const pageTitles = {
//   "/dashboard": "Dashboard",
//   "/dashboard/hotels": "Liste des hôtels",
// };

// const Header = ({ userData }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const notifRef = useRef(null);
//   const searchInputRef = useRef(null);

//   const [title, setTitle] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [unreadNotifications] = useState(3);

//   useEffect(() => {
//     setTitle(pageTitles[location.pathname] || "");
//   }, [location.pathname]);

//   // Focus recherche mobile
//   useEffect(() => {
//     if (mobileSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [mobileSearchOpen]);

//   // Fermer notifications si clic extérieur
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (notifRef.current && !notifRef.current.contains(e.target)) {
//         setNotifOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   const closeMobileSearch = () => {
//     setMobileSearchOpen(false);
//     setSearchQuery("");
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed top-0 left-0 right-0 md:left-[322px] h-16 bg-white border-b shadow-sm flex items-center justify-between px-4 md:px-6 z-30">

//         {/* LEFT */}
//         <div className="flex items-center gap-4 flex-1 pr-3 min-w-0">
//           {/* Menu mobile */}
//           {!mobileSearchOpen && (
//             <button
//               className="md:hidden text-gray-700"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <Menu size={22} strokeWidth={1.8} />
//             </button>
//           )}

//           {/* Titre */}
//           {!mobileSearchOpen && (
//             <h1 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
//               {title}
//             </h1>
//           )}

//           {/* Recherche mobile */}
//           {mobileSearchOpen && (
//             <input
//               ref={searchInputRef}
//               type="text"
//               placeholder="Recherche..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="md:hidden w-full h-10 px-4 rounded-2xl text-gray-700 bg-gray-200 focus:outline-none"
//             />
//           )}
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4 pl-3">

//           {/* Recherche mobile toggle */}
//           <button
//             className="md:hidden text-gray-600"
//             onClick={() =>
//               mobileSearchOpen
//                 ? closeMobileSearch()
//                 : setMobileSearchOpen(true)
//             }
//           >
//             {mobileSearchOpen ? (
//               <X size={22} strokeWidth={1.8} />
//             ) : (
//               <Search size={22} strokeWidth={1.8} />
//             )}
//           </button>

//           {/* Recherche desktop */}
//           <input
//             type="text"
//             placeholder="Recherche..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="hidden md:block w-[180px] h-10 px-3 rounded-2xl text-gray-700 bg-gray-200 focus:outline-none"
//           />

//           {/* Notifications */}
//           <div className=" relative" ref={notifRef}>
//             <button
//               onClick={() => setNotifOpen(!notifOpen)}
//               className="but1 relative text-gray-600 hover:text-gray-800 transition"
//             >
//               <Bell size={22} strokeWidth={1.8} />
//               {unreadNotifications > 0 && (
//                 <span className="but1 absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
//                   {unreadNotifications}
//                 </span>
//               )}
//             </button>

//             {/* Dropdown notifications */}
//             {notifOpen && (
//               <div className="absolute right-0 mt-4 w-72 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50">
//                 <div className="px-4 py-3 border-b">
//                   <p className="text-sm font-semibold text-gray-800">
//                     Notifications
//                   </p>
//                 </div>

//                 <div className="max-h-64 overflow-y-auto">
//                   <div className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer">
//                     Nouvelle réservation reçue
//                   </div>
//                   <div className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer">
//                     Nouveau message client
//                   </div>
//                   <div className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer">
//                     Paiement confirmé
//                   </div>
//                 </div>

//                 <div className="px-4 py-2 text-center text-xs text-gray-500 hover:text-gray-700 cursor-pointer">
//                   Voir toutes les notifications
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Photo de profil */}
//           <img
//             src={userData?.avatar || "https://i.pravatar.cc/40"}
//             alt="Profil"
//             className="w-9 h-9 rounded-full object-cover cursor-pointer"
//           />

//           {/* Déconnexion */}
//           <button
//             onClick={handleLogout}
//             className="but1 text-gray-600 hover:text-red-500 transition"
//           >
//             <LogOut size={22} strokeWidth={1.8} />
//           </button>
//         </div>
//       </header>

//       {/* SIDEBAR MOBILE */}
//       {sidebarOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/40 z-40"
//             onClick={() => setSidebarOpen(false)}
//           />

//           <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 flex flex-col gap-6">
//             <button
//               className="self-end text-gray-600"
//               onClick={() => setSidebarOpen(false)}
//             >
//               <X size={22} />
//             </button>

//             <div className="flex items-center gap-3">
//               <img
//                 src={userData?.avatar || "https://i.pravatar.cc/40"}
//                 className="w-10 h-10 rounded-full"
//                 alt="user"
//               />
//               <span className="text-sm font-medium text-gray-800">
//                 Utilisateur
//               </span>
//             </div>

//             <button
//               className="flex items-center gap-2 text-gray-600 hover:text-red-500"
//               onClick={handleLogout}
//             >
//               <LogOut size={18} />
//               Déconnexion
//             </button>
//           </aside>
//         </>
//       )}
//     </>
//   );
// };

// export default Header;

import { Menu, Bell, LogOut, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/dashboard/hotels": "Liste des hôtels",
};

const Header = ({ userData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const notifRef = useRef(null);

  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [unreadNotifications] = useState(3);

  useEffect(() => {
    setTitle(pageTitles[location.pathname] || "");
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 md:left-[322px] h-16 bg-white border-b shadow-sm flex items-center justify-between px-4 md:px-6 z-30">

      {/* LEFT */}
      <div className="flex items-center gap-4 min-w-0">
        <button className="md:hidden text-gray-700">
          <Menu size={22} strokeWidth={1.8} />
        </button>

        <h1 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
          {title}
        </h1>
      </div>

      {/* RIGHT – DESKTOP ONLY */}
      <div className="hidden md:flex items-center gap-4">

        {/* Recherche */}
        <input
          type="text"
          placeholder="Recherche..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[180px] h-10 px-3 rounded-2xl text-gray-700 bg-gray-200 focus:outline-none"
        />

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="but1 relative text-gray-600 hover:text-gray-800 transition"
          >
            <Bell size={22} strokeWidth={1.8} />
            {unreadNotifications > 0 && (
              <span className="but1 absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {unreadNotifications}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50">
              <div className="px-4 py-3 border-b text-sm font-semibold">
                Notifications
              </div>
              <div className="px-4 py-3 text-sm hover:bg-gray-50">
                Nouvelle réservation
              </div>
              <div className="px-4 py-3 text-sm hover:bg-gray-50">
                Message client
              </div>
            </div>
          )}
        </div>

        {/* PHOTO DE PROFIL – DESKTOP SEULEMENT */}
        <img
        src="https://i.pinimg.com/736x/b0/19/f6/b019f6c43757fcb7526a9457eddb8c31.jpg"
          // src={userData?.avatar || "https://i.pravatar.cc/40"}
          alt="Profil"
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />

        {/* Déconnexion */}
        <button
          onClick={handleLogout}
          className="but1 text-gray-600 hover:text-red-500 transition"
        >
          <LogOut size={22} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
};

export default Header;
