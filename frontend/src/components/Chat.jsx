import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { IoArrowRedoSharp } from "react-icons/io5";

const Chat = () => {
  return (
    <div className="flex flex-col gap-16 w-[600px]">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble">
          Hola, dime que ingredientes tienes!
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img
              alt="avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-info">
          Tomate - palta - pollo
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble">
          Aqui tienes una receta:
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quisquam eius consequuntur odio repudiandae corrupti at
            quidem inventore, saepe fugiat laboriosam dicta numquam delectus?
            Deleniti?
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <h4 className="font-bold text-xl mx-auto">Te gustó esta receta?</h4>
        <div className="flex mx-auto mt-8 gap-8">
          <button className="btn btn-success px-32"><BsHandThumbsUp className="text-slate-50 w-6 h-6"/></button>
          <button className="btn btn-error px-32"><BsHandThumbsDown className="text-slate-50 w-6 h-6"/></button>
        </div>
      </div>
      <div className="flex gap-2"> 
      <input type="text" placeholder="Ingresa tus ingredientes.." className="input input-bordered input-info rounded-2xl w-full" />
      <button className="btn btn-circle btn-info"><IoArrowRedoSharp  className="w-8 h-8 text-slate-50" /></button>
      </div>
    </div>
  );
};

export default Chat;
