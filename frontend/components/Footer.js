const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-light)', padding: '1rem' }}>
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} English Learning Platform
            </div>
        </footer>
    );
};

export default Footer;
