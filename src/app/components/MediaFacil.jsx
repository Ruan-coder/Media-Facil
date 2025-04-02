import React from "react";
import Image from "next/image";

export default function MediaFacil() {
    return (
        <section className="hidden md:block bg-gradient-to-t from-zinc-400 via-zinc-200 to-zinc-50 w-full ">
            <Image src='/sublogo mf 2.0.png' width={50} height={50} alt='logo mf' className="absolute ml-8 mt-8" />

            <div className="grid grid-cols-2 justify-between items-center z-50 w-full relative overflow-hidden h-[630px]">
                <h2 className="hidden md:block text-6xl font-extrabold tracking-widest z-50 mx-16">PORQUE ESCOLHER O MÉDIA FÁCIL?</h2>
                <div className=" z-30 h-full bg-orange-400 py-28">
                    <Image src='/woman-telemarketing.png' width={660} height={660} alt='hero-image' className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-40" unoptimized />
                    <div className="flex flex-col gap-5 ml-40">
                        <div className="flex flex-row gap-3 items-center z-50 ">
                            <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border"><Image src='/search.svg' width={40} height={40} alt='icon' unoptimized /></span>
                            <p className="text-white font-medium w-48">Pesquisa facilitada por palavra chave</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center z-50 ">
                            <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border"><Image src='/pen.svg' width={40} height={40} alt='icon' unoptimized /></span>
                            <p className="text-white font-medium w-48">Possibilidade de inserir itens não encontrados
                                e receber cotações dos mesmos</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center z-50 ">
                            <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border"><Image src='/calendar.svg' width={40} height={40} alt='icon' unoptimized /></span>
                            <p className="text-white font-medium w-48">Balizamentos bimestrais de preços</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center z-50 ">
                            <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border"><Image src='/paid.svg' width={40} height={40} alt='icon' unoptimized /></span>
                            <p className="text-white font-medium w-48">Impressão das cotações com assinatura digital dos fornecedores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}