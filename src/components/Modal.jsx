import { X } from "lucide-react";

export default function PrivateCodeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <h3 className="text-xl font-semibold mb-3">Código privado 🔒</h3>

        <p className="text-gray-400 text-sm">
          Este projeto possui código proprietário e não pode ser disponibilizado
          publicamente.
        </p>
      </div>
    </div>
  );
}