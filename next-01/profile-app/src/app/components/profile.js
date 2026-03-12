import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-3xl mb-6">
        Arthur Vinícius Moreira da Silva
      </h1>
      
      <div className="w-40 h-40 relative mb-6">
        <img
          src='/foto perfil.jpg' 
          alt="Foto de perfil"
          className="w-40 h-40 rounded-lg object-cover"
        />
      </div>

      <div className="text-center">
        <p>
          Sou estudante de Sistemas para Internet na UNICAP.
        </p>
      </div>
    </div>
  );
}