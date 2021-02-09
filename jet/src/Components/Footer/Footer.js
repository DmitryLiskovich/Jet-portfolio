import React from 'react';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import './footer.scss';

export function Footer() {
  return (
    <footer className="container">
      <SocialNetwork />
      <div>
        <p>
          Видеооператор и фильммейкер
          <br />
          Женя Соломонов <br />
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
