import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from './icons';

const socials = [
  {
    name: 'facebook',
    icon: <Facebook />,
    url: 'https://www.facebook.com/loopielaundry/',
  },
  {
    name: 'instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/loopielaundry/',
  },
  {
    name: 'linkedin',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/company/loopiellc',
  },
  {
    name: 'twitter',
    icon: <Twitter />,
    url: 'https://twitter.com/loopielaundry',
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
        <p>copyright 2019 ©</p>
      </div>
    </div>
  );
};

export default SocialBar;
