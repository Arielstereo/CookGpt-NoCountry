import { useState, useEffect } from "react";
import useRecipeStore from "../store/useRecipeStore";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  
  const [all, setAll] = useState([]);
  

  let categorias = ["Desayuno", "Almuerzo", "Cena", "Merienda", "Todas"];

  function handleCategory(e) {
    // console.log(e.target.value)
    // setSeleccionadas([...seleccionadas,null])
    // for(var favory of favorites){
    //     if(favory.category === e.target.value){
    //       setSeleccionadas([...seleccionadas,favory])        }
    //       console.log(favory)
    //     }
    const select = favorites.filter(favory => favory.category === e.target.value && favory )
    if (e.target.value === "Todas") {      
      setAll(favorites);
    }else{       
      setAll(select);
    }
    
  }
  useEffect(() => {
      setAll(favorites);
  }, []);  

  return (
    <div className="max-w-screen-2xl mx-48 px-4">
      <header className="flex flex-col justify-center items-center pt-32 gap-20">
        {favorites.length > 0 ? (
          <h1 className="text-6xl font-bold">Recetas guardadas</h1>
        ) : (
          <h1 className="text-6xl font-bold">No tienes recetas guardadas</h1>
        )}
        <div className=" w-full">
          <select className="bg-[#D9D9D9] border  border-[#8C1407] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3" onChange={handleCategory}>
            <option  disabled defaultValue="" selected className='font-bold' >Categorias
            </option>
            {categorias.map((categoria,index) => (
                <option key={index} value={categoria} className='font-bold'>{categoria}</option>           
            ))}
          </select>
        </div>

        {
          all.length === 0? 'No hay recetas guardadas': all.map((favory, index) => (
              <FavoriteCard
                  key={index}
                  title={favory.title}
                  category={favory.category}
                  recipe={favory.recipe}
                />
            ))
          
          }
        
      </header>
    </div>
  );
};

export default Favorites;
