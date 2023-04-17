const date = new Date();
const currentYear = date.getFullYear();


export default function Footer() {
    return <footer className="footer">
    <p className="footer.p"> Copyright © {currentYear} </p>
    </footer>
}


