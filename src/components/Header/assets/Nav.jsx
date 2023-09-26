import Link from "./Link";

const Nav = ({mainClass, links}) => {
    return (
        <ul className={mainClass}>
            {links.map((link, i) => (
                <Link link={link} key={link.title + i} />
            ))}
        </ul>
    );
};

export default Nav; 
