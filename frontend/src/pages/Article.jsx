import './article.css'
import { useEffect,useState } from 'react';
import AddComment from '../components/blocks/AddComment';
import CommentList from '../components/blocks/CommentList';

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
    // {console.log(a)}
    return (
        <div className="Article">
            {/* {console.log(a)} */}
            <div className="aTitle"><b>{a.title}</b></div>
            <div className="aPreview">{a.preview}</div>
            {/* <div className="aAuthor">{a.author}</div> */}
            {/* <div className="aImage">image</div> */}
            <div className="aText">{a.text}</div>
            <br/><br/>

            <p className="aPreview">Write a comment </p>

            <AddComment/>
            {/* <p className="aPreview">comments </p> */}

            <CommentList/>

        </div>
    )
}

export default Article
