import Link from "next/link";

const Header = () => {
    const linkStyle = {
        marginRight: 15
    };
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/test/Test1">
                <a style={linkStyle}>Test1</a>
            </Link>
            <Link href="/test/Test2">
                <a style={linkStyle}>Test2</a>
            </Link>
        </div>
    )

}
export default Header;