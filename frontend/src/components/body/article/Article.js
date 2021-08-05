import React from 'react'
import image1 from '../../../map.jpg'
import './Article.css'

const Article = () => {
    return (
        <div className="Article">
            <div className="aTitle"><b>Biden Team Removes Tweet Showing Divided Morocco Map</b></div>
            <div className="aPreview">Amid Algerian declarations of a radical shift in US policy, the Biden administration removed all
            doubt by deleting the controversial post</div>
            <div className="aAuthor">Author : bouchra mh</div>
            <div className="aImage"><img src={image1} /></div>
            <div className="aText">"The social media team in charge of US President Joe Biden’s Twitter account has  deleted its controversial " +
                        "posts that caused online furore over the past 24 hours. The tweet showed Morocco’s map incorrectly, " +
                        "excluding southern provinces in Western Sahara, along with several other glaring errors.\n" +
                        "Biden shared a global map yesterday with a caption boasting about US vaccine donations after more " +
                        "than a year of vaccine hoarding. The tweet did not only make disingenuous claims about the US contribution to " +
                        "global vaccine access, it additionally showed a divided map of Morocco, claimed Crimea as Russian and neglected " +
                        "to feature most island nations."</div>
        </div>
    )
}

export default Article
