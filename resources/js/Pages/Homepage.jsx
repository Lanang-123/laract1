import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Content from "../Components/Content.jsx"
import Navbar from "../Components/Navbar.jsx"
import Paginator from "../Components/Paginator.jsx"



export default function Homepage ({title,desc,news}) {
    console.log(news)
    return (
        <>
            <Head title={title}/>
            <Navbar />
            <div className="min-h-screen bg-slate-900 flex justify-center items-center font-semibold flex-col">
                <h1 className="text-3xl text-white md:text-5xl">{title}</h1>
                <h5 className="text-white">{desc}</h5>
            </div>
            <Content news={news.data}/>
            <div className="flex justify-center items-center bg-white">
                <Paginator meta={news.meta}/>
            </div>
        </>
    )
}