import App from "next/app";
import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <hr />
      <AppWelcome />
      <AppWelcome />
      <AppWelcome />
    </div> //ใช้ <> and </>  แทน div ได้
  );
}