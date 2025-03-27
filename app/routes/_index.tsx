import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import Header from "~/components/Header";
import Inicio from "~/components/Inicio";
import Oportunity from "~/components/Oportunity";
import { Services } from "~/components/Services";

export default function Index() {
  const [searchParams] = useSearchParams();
  const servicesRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  // Verificar si el usuario está autenticado y direccionar

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    setIsLoggedIn(!!userToken);
    }, []);


  useEffect(() => {
    if (searchParams.has("servicios") && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (searchParams.has("oportunidades") && opportunitiesRef.current) {
      opportunitiesRef.current.scrollIntoView({ behavior: "smooth" });
    }

  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header isLoggedIn={isLoggedIn} />
      <Inicio />
      <div ref={opportunitiesRef}>
      </div>
      <Oportunity />
      <div ref={servicesRef}>
      </div>
      <Services />
    </div>
  );
}
