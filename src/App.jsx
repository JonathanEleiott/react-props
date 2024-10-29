import Animal from './Animal.jsx';

import { useState } from 'react';

import bunnyImg from './assets/bunnyInBasket.jpeg';
import chimpanzeeImg from './assets/babyChimp.jpeg';
import raccoonImg from './assets/raccoon.jpg';
import llamaImg from './assets/llama.jpg';
import platypusImg from './assets/platypus.jpg';

const App = () => {
  const [animalList, setAnimalList] = useState([
    {
      id: 1,
      type: `bunny`,
      imagePath: bunnyImg,
      description: `fluffer`
    },
    {
      id: 2,
      type: `raccoon`,
      imagePath: raccoonImg,
      description: `trash panda`
    },
    {
      id: 3,
      type: `llama`,
      imagePath: llamaImg,
      description: `spit spit`
    },
    {
      id: 4,
      type: `platypus`,
      imagePath: platypusImg,
      description: `nature's mystery`
    },
    {
      id: 5,
      type: `chimpanzee`,
      imagePath: chimpanzeeImg,
      description: `ape not kill ape`
    },
    {
      id: 6,
      type: `chimpanzee`,
      imagePath: chimpanzeeImg,
      description: `ape not kill ape`
    }
  ]);

  return (
    <>
      <h1>React Animals</h1>

      {
        animalList.length > 3 ? 
          <p>Thank you to all those who donated animals!</p> : 
          <p>Please donate animals today!</p>
      }

      {
        animalList.map((singleAnimal) => {
          return (
            <Animal
              key={singleAnimal.id}
              animalType={singleAnimal.type} 
              imgUrl={singleAnimal.imagePath}
              description={singleAnimal.description}
            />
          )
        })
      }


      {/* OLD WAY WITHOUT COMPONENTS */}

      {/* <h2>Bunny</h2>
      <img src={BunnyPic} />
      <p>Bunnies are cute and fluffy</p>

      <h2>Chimp</h2>
      <img src={ChimpPic} />
      <p>Tree climbers</p> */}



      {/* MANUAL ENTRY WITH COMPONENTS */}

      {/* <Animal 
        animalType="Bunny" 
        imgUrl={bunnyImg} 
        description="Bunnies are fluffy" 
      />

      <Animal 
        animalType="Chimp"
        imgUrl={chimpanzeeImg}
        description="Tree climbers" 
      />

      <Animal 
        animalType="Llama"
        imgUrl={llamaImg}
        description="spit spit" 
      /> */}


    </>
  )
}

export default App
