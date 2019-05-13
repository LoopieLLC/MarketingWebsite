import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from './icons';

const socials = [
  {
    name: 'facebook',
    icon: <Facebook />,
    url: '/home',
  },
  {
    name: 'instagram',
    icon: <Instagram />,
    url: '/pricing',
  },
  {
    name: 'linkedin',
    icon: <Linkedin />,
    url: '/pricing',
  },
  {
    name: 'twitter',
    icon: <Twitter />,
    url: '/pricing',
  },
];

const SocialBar = (props) => {
  return (
    <div className="socials fixed">
      <div className="social-icons">
        {socials.map((item) => (
          <a href={item.url} alt={item.name} key={item.name}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="copyright vertical-text">
        <p>copyright mmxix ©</p>
      </div>
    </div>
  );
};

export default SocialBar;
