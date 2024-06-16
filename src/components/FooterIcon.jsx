import { Link } from 'react-router-dom';

const FooterIcon = ({ href, src, alt }) => {
  return (
    <Link
      style={{
        width: '20px',
        margin: '0 2px',
        padding: '3px',
        transition: 'opacity 0.2s',
      }}
      to={href}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '20px',
        }}
      />
    </Link>
  );
};

export default FooterIcon;
