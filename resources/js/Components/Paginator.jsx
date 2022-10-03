import React,{useState,useEffect} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';



export default function Paginator({meta}) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return(
        <div className="-mt-3 mb-6">
            <div className="btn-group">
                <Link href={prev} className="btn btn-outline">«</Link>
                <button className="btn ">{current}</button>
                {next &&  <Link href={next}  className="btn btn-outline">»</Link>}
               
            </div>
        </div>
    )
}