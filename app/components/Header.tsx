import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

export default function Header({ isLoggedIn }) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("language")
      ? localStorage.getItem("language")
      : "ESP";
  });
  
  
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setCurrentLanguage(storedLanguage);
      }
    }
  }, []);

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "ESP" ? "ENG" : "ESP";
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav className="flex items-center justify-between bg-gradient-to-b from-[#32526E] to-[#4B79A1] dark:bg-[#172a41] p-4 lg:px-20 w-full h-20 fixed top-0 z-50 shadow-lg sticky">
          <div className="flex items-center space-x-5 pl-4 lg:pl-20 w-full justify-between md:justify-start">
            <Link to="/" className="text-white logo">
              <img
                src="/assets/images/logo-antivirus.png"
                alt="Antivirus Logo"
                className="h-24 md:h-20"
              />
            </Link>

            {/* Se crea navbar */}
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-yellow-300">
                Inicio
              </Link>

              <Link
                to={isLoggedIn ? "/novedades" : "/?oportunidades"}
                className="text-white hover:text-yellow-300"
              >
                Oportunidades
              </Link>

              <Link
                to="/?servicios"
                className="text-white hover:text-yellow-300"
              >
                Servicios
              </Link>
            </nav>

            {/* Se crea menu hamburguesa móvil */}

            <button
              className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-white filter invert brightness-0"
              onClick={toggleModal}
              aria-label="Abrir menú"
            >
              <img
                src="/assets/images/barra-de-menus.png"
                alt="Menú"
                className="w-8 h-8 object-contain"
              />
            </button>
          </div>

          {/* Se crean botones de Login y Registro */}
          
          <div className="hidden md:flex items-center space-x-4 pr-4 lg:relative">
            <Link
              to="/login"
              // className="relative flex items-center justify-between px-6 py-2 bg-white text-[#32526E] rounded-md font-semibold shadow hover:bg-yellow-300 transition w-[120px]"
              className="relative flex items-center justify-between px-6 py-2 bg-white text-[#32526E] rounded-md font-semibold shadow transition w-[120px]"
            >
              Ingresa
              <img
                src="/assets/images/flecha_azul.png"
                alt="Flechas azul"
                className="w-8 h-8"
              />
            </Link>
            <Link
              to="/register"
              // className="relative flex items-center justify-between px-6 py-2 bg-white text-[#32526E] rounded-md font-semibold shadow hover:bg-yellow-300 transition w-[120px]"
              className="relative flex items-center justify-between px-6 py-2 bg-white text-[#32526E] rounded-md font-semibold shadow transition w-[140px] "
            >
              Regístrate
              <img
                src="/assets/images/flecha_colores.png"
                alt="Flechas azul"
                className="w-8 h-8"
              />
            </Link>
            {/* <Link
              to="/register"
              className="px-4 py-2 bg-white text-[#32526E] rounded-md font-semibold shadow hover:bg-yellow-300 transition"
            >
              Registraté
            </Link> */}
          </div>

          {/* Se crea botón de cambio de idioma */}

          <button
            onClick={toggleLanguage}
            className="ml-4 text-white hover:scale-110"
          >
            {currentLanguage}
          </button>

          {/* Se crea botón de Modo Oscuro/Claro */}

          <div className="relative ml-3 lg:ml-5">
            <button
              onClick={toggleDarkMode}
              className="transition-transform transform hover:scale-110"
            >
              <img src={darkMode ? "/assets/images/modo-claro.png" : "/assets/images/modo-oscuro.png"} 
              alt={darkMode ? "Light Mode" : "Dark Mode"} 
              className="w-12 h-12 object-contain filter invert brightness-0"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}