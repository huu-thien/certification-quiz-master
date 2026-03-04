import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50 p-6">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Không tìm thấy trang yêu cầu.
      </p>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50 transition-all"
      >
        <ArrowLeft size={20} />
        Về trang chủ
      </button>
    </div>
  );
}
