'use client'

import { useState } from "react";
import { ChevronDown, Users } from "lucide-react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-xl shadow-md"
      >
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span className="font-medium">Usuário</span>
        </div>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full mt-1 bg-gray-200 rounded-xl shadow-lg">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Aluno</li>
            <li className="px-4 py-2 font-bold hover:bg-gray-300 cursor-pointer">Professor</li>
          </ul>
        </div>
      )}
    </div>
  );
}