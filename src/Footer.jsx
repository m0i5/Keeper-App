const date = new Date();
const currentYear = date.getFullYear();


export default function Footer() {
    return <p className="footer"> Copyright {currentYear} </p>
}