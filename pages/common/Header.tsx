import Link from "next/link";

const Header = () => {
    const linkStyle = {
        marginRight: 15
    };
    return (
        <div>
            <Link href="/lotto/lotto">
                <a style={linkStyle}>로또</a>
            </Link>
            <Link href="/user/userAddSucess">
                <a style={linkStyle}>회원가입 완료</a>
            </Link>
            <Link href="/user/userEmailCfm">
                <a style={linkStyle}>이메일 인증</a>
            </Link>
            <Link href="/user/userPwNewChange">
                <a style={linkStyle}>비밀번호 변경</a>
            </Link>
            <Link href="/user/userPwReSetting">
                <a style={linkStyle}>비밀번호 재 설정</a>
            </Link>
        </div>
    )

}
export default Header;