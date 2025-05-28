import Contact01Page from "@/components/contact-01/contact-01";
export default async function About() {
    const data = await fetch('https://api.codingthailand.com/api/version');
    const apiInfo = await data.json();

    return (
        <>
        {/* <p>{JSON.stringify(apiInfo)}</p> */}
        {
            apiInfo && <Contact01Page version={apiInfo.data.version} />

        }
        
        </>
    );
}