export function Tweet({name , content , like}) {
const onLike = () => { 
    console.log("LIKE" , props.name) ;
 } ;
    return(

        <div className="tweet">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}> {like} ❤️</button>
        </div>
    ) 
}