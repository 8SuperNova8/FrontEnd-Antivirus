import type { MetaFunction } from "@remix-run/node";
import Inicio from "~/components/Inicio";
import Oportunity from "~/components/Oportunity";

export const meta: MetaFunction = () => {
  return [
    { title: "Inicio - App Fundación Antivirus" },
    { name: "description", content: "Página de inicio de Antivirus" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans bg-gray-100">
      <Navbar></Navbar>
      <Inicio/>
      <Oportunity/>
    </div>

  );
}