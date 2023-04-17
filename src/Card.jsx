export default function Card(props) {
    return (
        <div className="note">
            <h2>{props.name}</h2>
            <img 
              src={props.img}
              alt="none"  
            />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}


