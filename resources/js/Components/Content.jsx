import React,{useState,useEffect} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';



const isNews = (news) => {
    return news.map((data,i)=>(
                       <div className="card  shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-base line-clamp-1">
                            {data.title}
                            </h2>
                            <div className="badge badge-secondary text-xs my-1">{data.category}</div>
                            <p className="text-sm  line-clamp-3">{data.description}</p>
                            <div className="card-actions justify-end mt-2">
                                <div className="badge badge-outline badge-sm">Fashion</div> 
                                <div className="badge badge-outline badge-sm">Products</div>
                            </div>
                        </div>
                        </div>
                        ))
}


const noNews = () => {
    return <div className="min-h-screen flex justify-center items-center text-slate-800 text-center text-5xl font-semibiold">Data Post Masih Kosong</div>
}

export default function Content ({news}) {
   
    return(
        <div>
            <div className="py-16 bg-gray-50">  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 space-y-2 mx-auto text-center">
                        <span className="text-cyan-600">BLOGS</span>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Berita terupdate dan terkini</h2>
                        <p className="md:w-12/12 ">Informasi yang Anda butuhkan semuanya tersedia disini,tentunya berita menarik dan faktual</p>  
                    </div>
                    {!news.length && noNews()}
                    <div className="grid gap-3 md:grid-cols-5 justify-center">
                    {news.length && isNews(news)}
                    </div>
                </div>
            </div>        
        </div>
    )
}