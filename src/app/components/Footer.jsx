'use client';

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-16">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Média Fácil</h2>
          <p className="mt-2 text-gray-400">
            A solução ideal para pesquisa de preços em compras públicas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Links Úteis</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-orange-500">Sobre</a></li>
            <li><a href="#" className="hover:text-orange-500">Serviços</a></li>
            <li><a href="#" className="hover:text-orange-500">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contato</h3>
          <p className="mt-2 text-gray-400">Telefone: (33) 3753-2822</p>
          <p className="text-gray-400">Email: suporte@mediafacil.com.br</p>
          <a href="https://wa.me/553337532822" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Fale conosco no WhatsApp
            </button>
          </a>
        </div>
      </div>
      
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-gray-400">
        © {new Date().getFullYear()} Média Fácil - Todos os direitos reservados.
      </div>
    </footer>
  );
}
