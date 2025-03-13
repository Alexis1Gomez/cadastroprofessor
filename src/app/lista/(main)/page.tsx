"use client";
import { useState, useEffect } from "react";
import { User, Bell, HelpCircle, Settings, LogOut } from "lucide-react";
import { FaEdit, FaTrash, FaSearch, FaPlus, FaArrowLeft } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const CadastroProfessor = () => {
  return (
    <main className="flex-1 ">
      <div className="">
        <div className="flex p-19 justify-between">
          <h2 className=" flex  text-2xl font-semibold text-white ">
            Cadastro de Professor
          </h2>
          <button className="bg-white text-black px-4 py-2 rounded flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar
          </button>
        </div>

        {/* Table */}
        <div className="flex justify-center items-center ">
          <div className=" flex items-center justify-center w-[86rem] h-[40rem] bg-[#313056]/25 bg-opacity-30 p-50 shadow-md rounded-4xl ">
            {/* Formulario */}
            <form className="flex items-center justify-center ml-[-100px]  w-[86rem] h-[30rem] grid grid-cols-2 gap-4">
              {/* Nome do Aluno */}
              <div>
                <label className="text-white font-semibold">
                  Nome do Professor <span className="text-red-800">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-[30rem] p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-[#D9D9D9]" 
                  />
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="text-white font-semibold">
                  Data de Nascimento <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-white font-semibold">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-[30rem] p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Matrícula */}
              <div>
                <label className="text-white font-semibold">Matrícula</label>
                <div className="relative">
                  <input className="w-full p-3 border rounded-lg bg-[#D9D9D9]"/>
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Especialidade */}
              <div>
                <label className="text-white font-semibold">
                  Especialidade <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  bg-[#D9D9D9]">
                  <option>Selecione</option>
                  <option>Programacão</option>
                  <option>Banco de datos</option>
                </select>
              </div>

              {/* Senha */}
              <div>
              <label className="text-white font-semibold">
                  Senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="text-white font-semibold">
                  Confirmar Senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"></span>
                </div>
              </div>

              {/* Botón de Guardar */}
              <div className="col-span-2 flex justify-center mt-4">
                <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition">
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </main>
  );
};

export default CadastroProfessor;
