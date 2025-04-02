'use client'
import React, { useState } from "react";

export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }


    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="overlay"></div>
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/video-mf.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="z-40 lg:w-1/2 md:w-2/3 w-full grid grid-cols-1 items-center justify-between">

                <div className="md:hidden flex flex-col px-5">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="flex flex-col mt-5">
                                <label htmlFor="user" className="text-white">Usuário</label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="email"
                                    name="user"
                                    id="user-input"
                                    placeholder="digite seu email"
                                    className=" h-12 bg-transparent border rounded-md px-3 text-white" />
                            </div>
                            <div className="flex flex-col py-5">
                                <label htmlFor="password" className="text-white">Senha</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password-input"
                                    placeholder="digite sua senha"
                                    className="h-12 bg-transparent border rounded-md px-3 text-white" />
                            </div>
                            <button className='gradient-button flex flex-row'>Login
                            </button>
                        </div>
                    </form>

                </div>

                <div className="grid grid-cols-1 gap-5 text-white md:px-16 px-5 mt-10">
                    <h1 className="md:text-5xl text-4xl">
                        <b className="text-orange-500">Média Fácil</b>: A solução para pesquisa de preços em compras públicas.
                    </h1>
                    <div >
                        <p >Automatize e compare preços de forma eficiente, garantindo transparência e economia nas aquisições do setor público.
                        </p>
                        <div>
                            <a href="https://wa.me/553337532822?text=Gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Média-Fácil" target="blank">
                                <button className="gradient-button my-5">Demonstração</button></a>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}