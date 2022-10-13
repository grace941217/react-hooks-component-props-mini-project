import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const articleArray = posts.map((articleObj) => {
        return (
            <Article
                key={articleObj.id}
                title={articleObj.title}
                date={articleObj.date}
                preview={articleObj.preview}
                minutes={articleObj.minutes}
            />
        )
    });

    return <main>{articleArray}</main>
}

export default ArticleList;