import type { MetaFunction } from "@remix-run/node";
import Inicio from "~/components/Inicio";

import Navbar from "~/components/Navbar";
import Oportunity from "~/components/Oportunity";

export const meta: MetaFunction = () => {
  return [
    { title: "Antivirus" },
    
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

