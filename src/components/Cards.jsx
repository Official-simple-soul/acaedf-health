import React from "react";
import {
  FaChild,
  FaBriefcaseMedical,
  FaAccessibleIcon,
  FaMonero,
} from "react-icons/fa";

const cardData = [
  {
    title: "Card Title 1",
    icon: <FaChild />,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Card Title 2",
    icon: <FaBriefcaseMedical />,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Card Title 3",
    icon: <FaAccessibleIcon />,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
  {
    title: "Card Title 4",
    icon: <FaMonero />,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card content.",
  },
];

function Cards() {
  return (
    <div className='px-8 text-center mt-5 py-20 relative bg'>
      <h1 className='text-4xl font-bold mb-10 text-white'>
        Stories of our life
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gy-4'>
        {cardData.map((card, index) => (
          <div key={index} className=''>
            <div className='card mx-auto bg-gradient-to-br from-pri to-gray-900  text-white rounded-md shadow-md px-3 py-3 border-0 text-start card-zoom transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-pri'>
              <div className='card-body p-5'>
                <div className='text-center text-4xl flex justify-center'>
                  {card.icon}
                </div>
                <h5 className='card-title my-3 text-2xl text-center font-bold'>
                  {card.title}
                </h5>
                <p className='card-text text-secondary text-center'>
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
