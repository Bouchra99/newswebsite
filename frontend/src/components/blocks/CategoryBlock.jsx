import './categoryBlock.css'
import openArticle from '../../pages/openArticle'


const CategoryBlock = (props) => {
   
    return (
        <div className ="cBlock">
            <div className ="cTitle"><b>{props.title}</b></div>
            <div className ="cPreview">{props.preview}</div>
        </div>
    )
}

export default CategoryBlock
