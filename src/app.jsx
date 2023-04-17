import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";




export default function App() {
    return ( < div className = "*" >

        <Heading / >
        <Note / >
        <Footer / >

        <Card name = "Baxxter"
        img = ""
        tel = "+78 88 88 88"
        email = "baxxter@gmail.com"     
        />

        <Card 
        name = "Swans"
        img = ""
        tel = "65465465"
        email = "baxx6546546.com" 
        />

    </div>
    )
}


