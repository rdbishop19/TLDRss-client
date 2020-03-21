import React from 'react';
import './Article.css';
import ArticleData from './ArticleData';

export default function Article({ article, number, methods, index }) {
	return (
		<tr className="article" onClick={(e)=>methods.clickTest(e, index)}>
			<td className="number">
				<span >{number}.</span>
			</td>
            <td title="upvote" className="upvote-link" style={{ verticalAlign: "top"}}>
                <div className="arrow-up"></div>
            </td>
			<td>
			    <ArticleData article={article} />
			</td>
            <td title="view tl;drs" onClick={()=>methods.getSummaries(article.id)} className="tldr-link">
                <div className="arrow-right show-me"></div>
                <div className="arrow-right"></div>
            </td>
		</tr>
	);
}
