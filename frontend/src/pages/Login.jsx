import { useState } from 'react';
import img from '../assets/images/Group8.svg';
import { Link, useAsyncValue } from 'react-router-dom';


const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  // const url = useLocation();
  // // const ruta = url.state;
  // console.log('ruta', url);
  const [dataUser, setDataUser] = useState(initialValues);
  // const {error, setError} = useState({});
  
  const validate = () => {
    let errorsList = {};

    if (!dataUser.email)
      errorsList = { ...errorsList, email: "Campo obligatorio." };
    // else if (dataUser.username.length < 4 || dataUser.username.length > 8)
    //   errorsList = {
    //     ...errorsList,
    //     username: "Debe tener como minimo 4 caracteres y 8 maximo.",
    //   };
      if(!dataUser.password)
      errorsList = { ...errorsList, password: "Campo obligatorio." };
      else if(dataUser.password.length < 4 || dataUser.password.length > 8)
      errorsList = {
        ...errorsList,
        password: "Debe tener como minimo 4 caracteres y 8 maximo.",
      };

    return errorsList;
  };
  const handleData = async (e) => {
    e.preventDefault();
    console.log(dataUser);
    if(Object.keys(validate()).length === 0){
      await fetch('https://chefgtp.onrender.com/api/auth',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
      })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('loginData', JSON.stringify(response.data))
        
        console.log(response)})
      .catch(error => console.log(error))   
      .finally(() => {
        console.log('Finalizado');
      })
    }else{
      alert('Verifique los Campos')
    }
  };
  
  return (
    <>  
    <div className=' h-screen flex-col items-center justify-center py-5'  >

      <img src={img} alt="img" className="w-[11rem] mx-auto "/>
      <h1 className="text-3xl font-normal text-center my-4">BIENVENIDO</h1>
      {/* <h3 className='text-center text-2xl font-bold mb-2' style={{fontFamily: 'SF Pro Display'}}>Iniciar Sesion</h3> */}
      <form action="" onSubmit={handleData} className="flex flex-col sm:w-1/2  justify-around mx-auto ">
        
        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)'}}
        className='w-11/12 mx-auto border ps-2 text-xl py-2  placeholder:bolder placeholder:text-black placeholder:text-900'
        type="text" 
        placeholder="Email"
        name="email"
        value={dataUser.email}
        onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} 
        
        autoFocus       />
        <small className='text-red-600 mt-2 ms-4 sm:ms-8'>{validate().email}</small>

        

        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)'}}
        className='w-11/12 mx-auto ps-2 text-xl py-2 mt-3  placeholder:bolder placeholder:text-black placeholder:text-900'
        type="password" 
        name="password"
        placeholder='Contraseña...'
        value={dataUser.password} 
        
        onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })}
        />
        <small className='text-red-600 mt-2 ms-4 sm:ms-8'> {validate().password}</small>
        <Link to="/" className="text-xl font-bold mt-2 ms-4 sm:ms-8" style={{fontFamily: 'SF Pro Display'}}>¿Has olvidado la contraseña?</Link>

        
        <Link to="/auth/register" className="ms-4 sm:ms-8  btn btn-outline my-5 text-dark-900 font-bold border-amber-900 tracking-wider rounde me-4 sm:me-6" style={{
        borderRadius: '10px'}}>Registrate</Link>




        <button 
        type="submit" 
        className="btn btn-amber-900 hover:bg-[#17f36b] text-white  tracking-wider py-5 px-4 rounded ms-4 sm:ms-8 me-4 sm:me-6"
        style={{backgroundColor: '#8D2607',
        borderRadius: '10px'}}>
          Iniciar Sesion</button>


      </form>
    </div>
    </>
  )
}

export default Login