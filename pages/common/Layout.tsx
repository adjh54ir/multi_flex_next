import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

type AppLayoutProps = {
    children: React.ReactNode;
};


const Layout = ({ children }: AppLayoutProps) => {
    return (
        <div className='.container mx-auto'>
            <Header />
            {children}
        </div>
    )
}
export default Layout