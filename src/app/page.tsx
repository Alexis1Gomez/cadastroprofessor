'use client'

import { useState } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const students = [
    { id: "2021001", name: "George Bell", phone: "123456789", email: "george@email.com" },
    { id: "2021002", name: "Mary Hopkins", phone: "987654321", email: "mary@email.com" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-5">
        <h1 className="text-xl font-bold">AssisnMate</h1>
        <nav className="mt-5">
          <ul>
            <li className="py-2 px-4 hover:bg-blue-700 cursor-pointer">Inicio</li>
            <li className="py-2 px-4 hover:bg-blue-700 cursor-pointer">Alumnos</li>
            <li className="py-2 px-4 hover:bg-blue-700 cursor-pointer">Profesores</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 bg-blue-200">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Lista de Alumnos</h2>
          <div className="flex items-center bg-white p-2 rounded-md shadow-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar..."
              className="ml-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
            <FaPlus className="mr-2" /> Nuevo
          </button>
        </div>

        {/* Table */}
        <div className="mt-5 bg-white p-5 shadow-md rounded-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-2">ID</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">Email</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-200">
                  <td className="p-2">{student.id}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.phone}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
