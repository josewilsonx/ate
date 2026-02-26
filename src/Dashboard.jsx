import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // limpa autenticação
    navigate("/login"); // volta para login
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Dashboard</h1>
      <p className="text-gray-300 mb-4">
        Bem-vindo ao painel TerraMetric! Aqui você pode visualizar seus dados e
        métricas.
      </p>

      {/* Botão de logout */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 transition py-2 px-4 rounded-lg text-white font-semibold mb-6"
      >
        Logout
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Card 1</h2>
          <p className="text-gray-300">Resumo de métricas.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Card 2</h2>
          <p className="text-gray-300">Dados recentes.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-2">Card 3</h2>
          <p className="text-gray-300">Estatísticas gerais.</p>
        </div>
      </div>
    </div>
  );
}