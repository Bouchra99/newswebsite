import './article.css'
import '../components/blocks/comment.css'
import { useEffect,useState } from 'react';
import AddComment from '../components/blocks/AddComment';
// import CommentList from '../components/blocks/CommentList';
import Comments from '../data/comments';
import Comment from '../components/blocks/Comment'

const Article = ({match}) => {

    console.log("article id : ", match.params.id)

    useEffect(()=>{
        fetchItem();
    }, []);

    const [article, setArticle] = useState({});

    const fetchItem = async () =>{
        const fetchItem = await fetch(
            `http://localhost:8080/api/v2/articles/
            ${match.params.id}`)
    
    const article = await fetchItem.json();
    setArticle(article)
    };
    
    const comment = Comments();
    if(typeof comment!=='undefined'){
        var allComments = comment.filter(comment=>comment.article_id == match.params.id).map( a=> 
            <Comment key ={a.id} comment={a}  />
        ) 
    }

    return (
        <div className="Article">
            <div className="aTitle"><b>{article.title}</b></div>
            <div className="aPreview">{article.preview}</div>
            <div className="aText">{article.text}</div>
            <br/><br/>
            <p className="aPreview">Write a comment </p>

            <AddComment id ={match.params.id}/>
           
            <div className="comment-list">{allComments}</div>

        </div>
    )
}

export default Article
