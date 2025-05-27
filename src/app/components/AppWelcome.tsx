export default function AppWelcome() {
    const title = 'Welcome to Cosci';
    const currentYear = <p>2025</p>;
    const isShow = true;
    return (
        <>
        <p>{title.toLocaleUpperCase()}</p>
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