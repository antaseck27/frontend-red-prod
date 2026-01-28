// src/components/StatCard.jsx
const StatCard = ({ icon, value, label, bg }) => {
  return (
    <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bg}`}>
        <div className="text-white">{icon}</div>
      </div>
      <div className="flex flex-col">
        {/* Affichage sur une même ligne pour value et label */}
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold text-black">{value}</h2>
          <p className="text-lg text-black">{label}</p>
        </div>
        
        {/* Texte supplémentaire sous value et label */}
        <p className="text-sm text-gray-500 mt-2">Je ne sais pas quoi mettre</p>
      </div>
    </div>
  );
};

export default StatCard;
