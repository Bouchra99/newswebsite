import '../../styles/categoryBlock.css'


const CategoryBlock = (props) => {
    const article = props.article;
    return (
        <div className ="cBlock">
            <div className ="cTitle"><b>{article.title}</b></div>
            <div className ="cPreview">{article.preview}</div>
        </div>
    )
}

export default CategoryBlock
