import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My App. All Rights Reserved.</p>
      <div>
        <a
          href='https://facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          Facebook
        </a>
        <a href='https://twitter.com' rel='noopener noreferrer' target='_blank'>
          Twitter
        </a>
        <a
          href='https://linkedin.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export { Footer };
