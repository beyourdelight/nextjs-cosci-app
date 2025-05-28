import Features05Page from "@/components/features-05/features-05";
const data = await fetch('https://api.codingthailand.com/api/course', {cache: 'no-store'}); // No cache, always fetch fresh data
    const courses = await data.json();
export default async function Course() {
    
return (
    <main>
        {
        courses.data.length > 0 && <Features05Page courses={courses.data} />
        }
    {/* <Features05Page/> */}
    </main>
)

}


