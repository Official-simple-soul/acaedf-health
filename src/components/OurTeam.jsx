import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const cardData = [
  {
    imgSrc: '/images/team-1.jpeg',
    name: 'Walter park',
    title: 'Chief Executive Officer',
    socialLinks: [
      { icon: <AiFillFacebook />, url: '#' },
      { icon: <AiFillTwitterSquare />, url: '#' },
      { icon: <AiFillInstagram />, url: '#' },
      { icon: <AiFillLinkedin />, url: '#' },
    ],
  },
  {
    imgSrc: '/images/team-2.jpeg',
    name: 'Another Name',
    title: 'Another Title',
    socialLinks: [
      { icon: <AiFillFacebook />, url: '#' },
      { icon: <AiFillTwitterSquare />, url: '#' },
      { icon: <AiFillInstagram />, url: '#' },
      { icon: <AiFillLinkedin />, url: '#' },
    ],
  },
  {
    imgSrc: '/images/team-3.jpeg',
    name: 'Another Name',
    title: 'Another Title',
    socialLinks: [
      { icon: <AiFillFacebook />, url: '#' },
      { icon: <AiFillTwitterSquare />, url: '#' },
      { icon: <AiFillInstagram />, url: '#' },
      { icon: <AiFillLinkedin />, url: '#' },
    ],
  },
  {
    imgSrc: '/images/team-4.jpeg',
    name: 'Another Name',
    title: 'Another Title',
    socialLinks: [
      { icon: <AiFillFacebook />, url: '#' },
      { icon: <AiFillTwitterSquare />, url: '#' },
      { icon: <AiFillInstagram />, url: '#' },
      { icon: <AiFillLinkedin />, url: '#' },
    ],
  },
];

function OurTeam() {
  return (
    <section id='team-section' class='py-20 px-8'>
      <div class='container'>
        <div class='text-center'>
          <h1 class='font-bold text-3xl'>TEAM</h1>
          <p class='text-secondary'>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className='grid grid-cols-4 gap-10 py-4'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='col-lg-3 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0'
            >
              <div className='card member-shadow border-0'>
                <div className='img-box img-parent'>
                  <img src={card.imgSrc} className='card-img-top' alt='...' />
                  <div className='img-icons'>
                    {card.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className='text-white text-2xl'
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='card-body text-center py-2 bg-pri text-white'>
                  <h5 className='card-title font-bold'>{card.name}</h5>
                  <p
                    className='card-text text-secondary'
                    style={{ fontSize: '12px' }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
