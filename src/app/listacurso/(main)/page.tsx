"use client";
import { useState, useEffect } from "react";
import { User, Bell, HelpCircle, Settings, LogOut, Mail, Lock, GraduationCap, Search, Plus } from "lucide-react";
import { FaEdit, FaTrash, FaSearch, FaPlus, FaArrowLeft } from "react-icons/fa";
import React from "react";
import Image from "next/image"; 
import { Pencil, Trash2 } from 'lucide-react';
import { Playfair_Display } from "next/font/google";



const playfair = Playfair_Display({ subsets: ["latin"], weight: "400", style:'normal' });
const data = [
  { codigo: 'SIS', nombre: 'Sistemas da Informação', descripcion: 'O curso de Sistemas de Informação prepara profissionais para desenvolver, gerenciar e manter sistemas computacionais e soluções tecnológicas. Combinando conhecimentos em programação, banco de dados, redes e segurança da informação, o curso forma especialistas capazes de otimizar processos empresariais por meio da tecnologia.' },
  { codigo: "DIR", nombre: "Direito", descripcion: "A graduação em Direito capacita profissionais para atuar na defesa da justiça e dos direitos individuais e coletivos. Os estudantes aprendem sobre legislação, ética, processos jurídicos e diferentes áreas do Direito, como penal, civil, trabalhista e constitucional. O curso permite seguir carreiras na advocacia, magistratura, Ministério Público e outras áreas jurídicas." },
  { codigo: "MED", nombre: "Medicina", descripcion: "O curso de Medicina forma médicos aptos a diagnosticar, tratar e prevenir doenças, promovendo a saúde e o bem-estar da população. Com uma base sólida em ciências biológicas e treinamento prático em hospitais e clínicas, os estudantes desenvolvem habilidades técnicas e humanísticas essenciais para o cuidado com os pacientes." },
  { codigo: "MAT", nombre: "Matemática", descripcion: "A licenciatura ou bacharelado em Matemática desenvolve o raciocínio lógico e a capacidade de resolver problemas complexos. O curso abrange áreas como álgebra, cálculo, estatística e geometria, preparando profissionais para atuar no ensino, pesquisa e em setores como finanças e tecnologia." },
  { codigo: "ODO", nombre: "Odontologia", descripcion: "A graduação em Odontologia forma cirurgiões-dentistas especializados no diagnóstico, prevenção e tratamento de doenças bucais. O curso oferece conhecimento teórico e prático em áreas como ortodontia, implantodontia e periodontia, possibilitando atuação em clínicas, hospitais e pesquisas científicas." },
  { codigo: "JOR", nombre: "Jornalismo", descripcion: "O curso de Jornalismo capacita profissionais para investigar, produzir e transmitir informações com ética e responsabilidade. Com foco em comunicação, redação, audiovisual e novas mídias, a graduação prepara jornalistas para atuar em veículos impressos, televisivos, digitais e corporativos." }
];


const ListaCurso = () => {
  return ( 
    <div>  
      <div className="flex p-19 justify-between">
          <h2 className={`${playfair.className} p-3 text-indigo-900 text-5xl flex text-2xl font- text-white`}>
            Lista de Cursos 
          </h2>
          <div className="relative  mt-[1rem]  w-[30rem] ">
            <input
              type="text"
              placeholder="Search "
              className={`${playfair.className} w-full h-[60px] px-4 py-2 pl-10 text-2xl text-white border border-gray-300 placeholder:text-gray-100 rounded-3xl focus:outline-none `}
            />
            <FaSearch className="absolute h-[35px] left-3 top-3 text-gray-300"/>
          </div>
          <button className={`${playfair.className} bg-white text-black px-10  rounded-2xl flex items-center`}>
            <Plus  className="mr-3" /> Novo Curso
          </button>
      </div>

      <div className="p-10  h-[55rem] flex justify-center items-center">
        <div className="w-full h-[55rem] bg-white rounded-3xl overflow-hidden shadow-lg">
          <table className="w-full">
            <thead className="h-[6rem]">
              <tr className="bg-[#313056] text-white">
                <th className={`${playfair.className} text-2xl  p-3`}>Código</th>
                {/* <ChevronDown /> */}
                <th className={`${playfair.className} text-2xl p-3 w-[20rem]`}>Nome</th>
                <th className={`${playfair.className} text-2xl h-[10px] w-[65rem] p-3`}>Descrição</th>
                <th className={`${playfair.className} text-2xl rounded-tr-3xl p-3`}>Ação</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className={`${playfair.className} text-[#313056]  text-3xl p-3 h-[8rem]`}>{item.codigo}</td>
                  <td className={`${playfair.className} text-[#313056]  text-2xl p-3 h-[8rem]`}>{item.nombre}</td>
                  <td className={`${playfair.className} text-[#313056]  text-xl p-3 h-[8rem]`}>{item.descripcion}</td>
                  <td className={`${playfair.className} text-[#313056]  p-3 flex gap-2 justify-center h-[8rem]`}>
                    <button className=" hover:text-blue-800">
                      <Pencil size={30} />
                    </button>
                    <button className=" hover:text-red-800">
                      <Trash2 size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};  

export default ListaCurso;
