
import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <hr />
      <AppWelcome headTitle="Whats up man" isShow={true} />
      <AppWelcome />
      <AppWelcome />
      <AppWelcome />
    </div> //ใช้ <> and </>  แทน div ได้
  );
}