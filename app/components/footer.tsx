export default function Footer() {
    return (
        <footer className="flex justify-center items-center p-4" style={{ backgroundColor: '#3a3a3a', color: '#ffffff' }}>
            <p>© {new Date().getFullYear()} 学生団体A4</p>
        </footer>
    );
}