import React from "react";


const FilterProperties = () => {
    return (
    <div className="bg-gray-200 w-[100%] h-[250px] ">
        <div className="py-16 max-w-[540px] md:max-w-[720px] lg:max-w-[1200px] mx-auto">

            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="xl:cols-span-1 m-2">
                    <input className="p-5 w-full h-2" type="text" placeholder="Tipo de operación" list="typeOperation"/>
                    <datalist id="typeOperation">
                        <option value="Venta"></option>
                        <option value="Arriendo"></option>
                        <option value="Arriendo temporal"></option>
                    </datalist>
                </div>
                <div className="xl:cols-span-1 m-2">
                    <div className="mb-3">
                        <input className="p-5 w-full h-2" type="text" placeholder="Tipo de propiedad" list="typeProp"/>
                        <datalist id="typeProp">
                        <option value="Casa"></option>
                        <option value="Departamento"></option>
                        <option value="Parcela"></option>
                        <option value="Terreno"></option>
                        <option value="Local"></option>
                        <option value="Sitio"></option>
                        <option value="Bodega"></option>
                        <option value="Otro"></option>
                    </datalist>
                    </div>
                    <button className="p-3 w-full drop-shadow-md bg-[#ff8017]/60 rounded-md border border-[#ff8017] text-[#2e2e2e] px-6 py-2  hover:bg-[#ff8017] cursor-pointer">Buscar propiedades</button>
                </div>            
            </div>
        </div>   
    </div>
    )
}

export default FilterProperties;