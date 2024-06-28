import { useState } from "react";
import FirstThing from "../components/Register/FirstThing";
import LastThing from "../components/Register/LastThing";

function Login() {
  const [page, setPage] = useState<"first" | "last">("first");
  function togglePage(to: "first" | "last") {
    setPage(to);
  }
  return (
    <div className='h-full'>
      {page === "first" ? (
        <FirstThing togglePage={togglePage} />
      ) : (
        <LastThing togglePage={togglePage} />
      )}
    </div>
  );
}

export default Login;
