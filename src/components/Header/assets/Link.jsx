const Link = ({link}) => {
    return (
            <li key={link.title}>
                <a href={link.href}>
                    {link.title} 
                </a>
            </li>
        );
    }

export default Link;