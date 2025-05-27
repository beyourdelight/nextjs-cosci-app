'use client'
export default function AppWelcome() {
    const title = 'Welcome to Cosci';
    const currentYear = <p>2025</p>;
    const isShow = true;

    const handleClick = () => {
        alert ('Hello, TypeScript!');
    }
    return (
        <>
        <p>{title.toLocaleUpperCase()}</p>
        {/* <button>className="bg-blue-700 p-3 m-3 text white") {
        }</button> */}
        ,<button className="bg-blue-700 p-3 m-3 text white rounded-lg"onClick={handleClick}>กดได้เลยจ้า</button>
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