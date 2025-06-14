export default function Footer() {
    return (
        <footer className="flex justify-center items-center p-4" style={{ backgroundColor: '#3a3a3a', color: '#ffffff' }}>
            <p>© {new Date().getFullYear()} My App</p>
        </footer>
    );
}