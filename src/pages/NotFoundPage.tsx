import { useNavigate } from "react-router-dom";
import { Home, RefreshCcw } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fafafa]">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="z-10 text-center px-6">
        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-400 select-none">
          404
        </h1>

        <div className="mt-4 space-y-2">
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang một
            vũ trụ khác.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold shadow-lg shadow-gray-200 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200"
          >
            <Home size={20} />
            Về trang chủ
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200"
          >
            <RefreshCcw size={20} />
            Thử tải lại
          </button>
        </div>
      </div>
    </div>
  );
}
