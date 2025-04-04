const check = "/assets/register/icons/check.svg"
export default function GridRegister() {
    const gridData = [
        {
            id: 1,
            title: "Registro y creación del perfil personal",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

        },
        {
            id: 2,
            title: "Guardar oportunidades",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

        },
        {
            id: 3,
            title: "Recomendaciones personalizadas",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

        },
        {
            id: 4,
            title: "Contenido exclusivo",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",

        },

    ]
    return (
        <div>
            <h2 className="text-center text-[#1D1856] font-bold font-raleway text-4xl py-12">¡Obtén los siguientes beneficios!</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 px-20 pb-10">
                {gridData.map((data) => (
                    <div key={data.id} className="flex flex-col">
                        <h3 className="text-2xl text-[#FAA307] font-bold font-raleway">{data.title}</h3>
                        <p className="text-xl font-raleway">{data.description}</p>
                        <div className=" w-16 self-end ">
                            <img src={check} alt="check" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}