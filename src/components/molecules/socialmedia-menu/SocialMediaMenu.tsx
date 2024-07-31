import { FacebookIcon, YoutubeIcon, WhatsappIcon } from '@/assets/svgs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '@/config';
import './socialmedia-menu.scss';

interface SocialMediaLinks {
  facebook?: string;
  youtube?: string;
  whatsapp?: string;
}

export function SocialMediaMenu() {
  const data = `${config.baseUrl}data/socialmedia.json`;

  const [socialmedia, setSocialmedia] = useState<SocialMediaLinks>({});

  useEffect(() => {
    fetch(data)
      .then(response => response.json())
      .then(setSocialmedia);
  }, []);

  return (
    <ul className='socialmedia-menu'>
      {!!socialmedia.facebook && (
        <li>
          <Link to={socialmedia.facebook} target='_blank' rel='noreferrer'>
            <img src={FacebookIcon} alt='Icon Facebook' />
          </Link>
        </li>
      )}
      {!!socialmedia.youtube && (
        <li>
          <Link to={socialmedia.youtube} target='_blank' rel='noreferrer'>
            <img src={YoutubeIcon} alt='Icon YouTube' />
          </Link>
        </li>
      )}
      {!!socialmedia.whatsapp && (
        <li>
          <Link to={socialmedia.whatsapp} target='_blank' rel='noreferrer'>
            <img src={WhatsappIcon} alt='Icon WhatsApp' />
          </Link>
        </li>
      )}
    </ul>
  );
}
