import React from 'react';

export const AboutPage = () => {
  return (
    <div className="max-w-[70%] mx-auto bg-gradient-to-r from-red-500 to-black shadow-lg rounded-lg p-6 mb-6  h-[80vh] ">
     <div className='text-center mb-2'> 
     <h2 className="text-3xl font-extrabold mb-4">Universidad Pública de El Alto (UPEA)</h2>
     </div>

  <div className='flex'>
  <div className='max-w-[50%]'>
   <h3 className="text-xl font-semibold mb-2">Objetivos:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Promover la educación superior de calidad y accesible para todos.</li>
        <li>Contribuir al desarrollo científico, tecnológico y cultural de la región y del país.</li>
        <li>Fomentar la investigación aplicada que responda a las necesidades locales y nacionales.</li>
        <li>Formar profesionales competentes y comprometidos con el desarrollo sostenible y la justicia social.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Misión:</h3>
      <p className="mb-4">La Universidad Pública de El Alto tiene como misión principal proporcionar educación superior integral, equitativa y de calidad, orientada al desarrollo humano, social y productivo, mediante la formación de profesionales con competencias científicas, técnicas y éticas, comprometidos con el servicio a la sociedad y la transformación positiva del entorno.</p>
      <h3 className="text-xl font-semibold mb-2">Visión:</h3>
      <p className="mb-4">Ser una institución líder en la educación superior, reconocida por su excelencia académica, investigación innovadora y contribución al desarrollo regional y nacional, siendo un referente en la formación de ciudadanos capaces de enfrentar los desafíos del mundo contemporáneo con responsabilidad y compromiso social.</p>

   </div >
      <div className='ml-10 mx-auto '>
        <ul className="list-disc list-inside mb-4">
          <li className='list-none'><h3 className="text-xl font-semibold mb-2">Desarrolladores:</h3></li>
          <li className='mb-4 '>LIMBER MAMANI CANAZA</li>
          <li className='mb-4 '>BERNARDO LIMA CARDENAS</li>
          <li className='mb-4 '>JOHN LIMBER ILLIMANI CHOQUETA</li>
          <li className='mb-4 '>GERSON CLAROS HUANCA</li>
        </ul>
      </div>
  </div>
    </div>

  );
};

