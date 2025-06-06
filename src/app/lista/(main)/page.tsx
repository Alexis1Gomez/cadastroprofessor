"use client";
import { useState, useEffect } from "react";
import { User, Bell, HelpCircle, Settings, LogOut, Mail, Lock, GraduationCap } from "lucide-react";
import { FaEdit, FaTrash, FaSearch, FaPlus, FaArrowLeft } from "react-icons/fa";
import React from "react";
import Image from "next/image"; 


const CadastroProfessor = () => {
  return (
    <main className="flex-1 ">
      <div className="">
        <div className="flex p-19 justify-between">
          <h2 className=" flex  text-2xl font- text-white ">
            Cadastro de Professor
          </h2>
          <button  className="bg-white text-black px-4 py-2 rounded flex items-center">
            <FaArrowLeft className="mr-2" /> Voltar
          </button>
        </div>

        {/* Table */}
        <div className="flex justify-center items-center ">
          <div className="flex items-center justify-center w-full max-w-screen-2xl h-full max-h-4xl bg-[#313056]/25 bg-opacity-30 p-50 shadow-md rounded-4xl">
            {/* Formulario */}
            <form className="flex items-center justify-center ml-[-100px]  w-[86rem] h-[30rem] grid grid-cols-2 gap-4">
              {/* Nome do Aluno */}
              <div>
                <label className="text-white font-semibold">
                  Nome do Professor <span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <input   type="text" className="w-[40rem] p-3 pl-10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-[#D9D9D9]"/>
                  <span className="absolute left-3 top-3 text-gray-800"><User className="w-6 h-6 text-[#000]" /></span>
                </div>
              </div>

              {/* Data de Nascimento */}
              <div className="relative left-52">
                <label className="text-white font-semibold">
                  Data de Nascimento <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <input
                    type="date"
                    className="w-[20rem]  p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
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
                    className="w-[40rem]  p-3 pl-10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"><Mail /></span>
                </div>
              </div>

              {/* Matrícula */}
              <div className="relative left-52">
                <label className="text-white font-semibold">Matrícula</label>
                <div className="relative">
                  <input className="w-[20rem] p-3 pl-10  rounded-lg bg-[#D9D9D9]"/>
                  <span className="absolute left-3 top-3 text-gray-500"><GraduationCap /></span>
                </div>
              </div>

              {/* Especialidade */}
              <div >
              <label className="text-white font-semibold">
                  Especialidade <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-[30rem] p-3 pl-10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"><Lock /></span>
                </div>
              </div>

              {/* Senha */}
              <div className="relative top-25 left-25">
              <label className="text-white font-semibold">
                  Confirmar senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-[20rem] p-3 pl-10  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"><Lock /></span>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div className="relative ">
                <label className="text-white font-semibold">
                  Senha <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-[20rem] p-3 pl-10 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#D9D9D9]"
                  />
                  <span className="absolute left-3 top-3 text-gray-500"><Lock /></span>
                </div>
              </div>

              {/* Botón de Guardar */}
              <div className="col-span-2 flex justify-center mt-4">
                <button className="bg-green-500 border border-black text-white py-3 px-20 rounded-lg font-semibold hover:bg-green-600 transition">
                  SALVARR
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
