import { useState } from "react";
import {categories} from "../../data/categories.json"

const CategoriesTable = () => {
    const [canEditArray, setCanEditArray] = useState(categories.map(() => false));

    const handleEditClick = (index) => {
        const updatedCanEditArray = canEditArray.map((value, i) => i === index);
        setCanEditArray(updatedCanEditArray);
    };

    return (
        <>
            <table id="CategoriesTable" className="w-3/5 mx-auto bg-white shadow-md font-title text-center animate-fade-down animate-once animate-ease-out animate-duration-[2500]">
                <thead className="mt-24">
                    <tr className="bg-orangeDark text-white font-title text-lg">
                        <th className="px-10 py-2 border-x-2"> Categoría </th> 
                        <th className="px-10 py-2 border-x-2"> # Restaurantes </th> 
                        <th className="px-10 py-2 border-x-2">  </th> 
                    </tr>
                </thead>

                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index} className="border-y-2">
                            <td className={`border-x-2 border-y-2 bg-white ${canEditArray[index] ? "border-yellowDark" : ""}`}> 
                                <input type="text" id="" className="w-full h-full text-center bg-white" value={item.categoria} 
                                disabled={!canEditArray[index]}/> 
                            </td>

                            <td className={` border-x-2 border-y-2 bg-white ${canEditArray[index] ? "border-yellowDark" : ""}`}> 
                                <input type="text" id="" className="w-full h-full text-center bg-white" value={item.cantRestaurantes} 
                                disabled={!canEditArray[index]}/> 
                            </td>

                            <td className="px-10 py-2 border-x-2"> 
                                <button className="hover:scale-110" onClick={() => handleEditClick(index)}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                canEditArray.includes(true) ? (
                    <section className="flex justify-center pb-12 mx-10 mt-10">
                        <input type="button" id="button-signIn" value="Confirmar" onClick={""}
                        className={`w-1/6 px-4 py-4 rounded-lg bg-yellowDark shadow-md text-black text-sm font-bold font-title hover:cursor-pointer hover:scale-105`}/>
                    </section>
                ) : false
            }
        </>
    );
}

export default CategoriesTable