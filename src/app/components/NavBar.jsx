'use client'

import React, { useState } from "react";
import Image from "next/image";

export default function NavBar() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }


    return (
        <section>
            <nav id='nav' className='hidden md:flex nav md:px-16 px-10 py-3 justify-between items-center w-full z-50 absolute'>
                <Image src='/sublogo mf 2.0.png' width={50} height={50} alt='logo mf' />
                <div className="flex flex-row items-center">
                    <form onSubmit={handleSubmit}>
                        <div className="flex md:flex-row flex-col">
                            <div >
                                <label htmlFor="user" className="text-white mr-3">Usuário</label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="email"
                                    name="user"
                                    id="user-input"
                                    placeholder="digite seu email"
                                    className="w-48 h-12 bg-transparent border rounded-md px-3 text-white" />
                            </div>
                            <div >
                                <label htmlFor="password" className="text-white mx-3">Senha</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password-input"
                                    placeholder="digite sua senha"
                                    className="w-48 h-12 mr-5 bg-transparent border rounded-md px-3 text-white" />
                            </div>
                            <button className='gradient-button flex flex-row'>Login
                            </button>

                        </div>
                    </form>

                </div>
            </nav>
        </section>
    )
}