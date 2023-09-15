import { Link } from "react-router-dom";

const FooterIcon = ({ href, src, alt }) => {
    return (
        <Link
            style={{
                width: '20px',
                marginLeft: '4px',
                marginRight: '4px',
                padding: '3px',
                transition: 'opacity 0.2s',
            }}
            to={href}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    '&:hover': {
                        opacity: '0.74',
                    },
                }}
            />
        </Link >
    )
}

export default FooterIcon;