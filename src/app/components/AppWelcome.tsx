'use client'
import { useState } from "react";

type AppWelcomeProps = {
    headTitle?: string;
    isShow?: boolean;
}
export default function AppWelcome({ headTitle, isShow }: AppWelcomeProps) {
   // const title = 'Welcome to Next.js';
    const [title, setTitle] = useState('Welcome to Cosci');
    const currentYear = <p>2025</p>;

    const handleClick = () => {
        setTitle ('Hello,SWU');
        alert ('Hello, TypeScript!');
    }
    return (
        <>
        <h1>{headTitle}</h1>
        <p>{title.toLocaleUpperCase()}</p>

        {/* <button>className="bg-blue-700 p-3 m-3 text white") {
        }</button> */}

        ,<button className="bg-blue-700 p-3 m-3 text-white rounded-lg"onClick={handleClick}>กดได้เลยจ้า</button>
        {currentYear}
        {
            isShow && <p>Date: 01/08/1994</p>
        }
        {
            isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
            //  isShow ? true             :        false
        }
        </>
    );
    }