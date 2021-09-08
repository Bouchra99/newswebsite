import './article.css'
import { useEffect,useState } from 'react';

const Article = ({match}) => {
    // console.log(match)
    useEffect(()=>{
        fetchItem();
    }, []);

    const [a, setItem] = useState({})

    const fetchItem = async () =>{
        const fetchItem = await fetch(
            `http://localhost:8080/api/v2/articles/
            ${match.params.id}`)
    
    const a = await fetchItem.json();
    setItem(a)
    };

    return (
        <div className="Article">
            {/* {console.log(a)} */}
            <div className="aTitle"><b>{a.title}</b></div>
            <div className="aPreview">{a.preview}</div>
            {/* <div className="aAuthor">{a.author}</div> */}
            {/* <div className="aImage">image</div> */}
            <div className="aText">{a.text}</div>
        </div>
    )
}

export default Article
