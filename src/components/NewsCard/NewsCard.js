import React, { createRef, useEffect, useState } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles'

const NewsCard = ({ article:{ description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop);

    useEffect(() => {
        window.scroll(0, 0);
        setElRefs((refs) => Array(20).fill().map((_,j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={ activeArticle === i ? classes.activeCard : classes.card}> {/* if the article is active then highlight it (classes.activeCard) or show normal card (classes.card) */}
            <CardActionArea href={url} target="_blank"> {/* clickable area */}
                <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png' }/> {/* image will be displayed here */}
                <div className={classes.details}>
                    <Typography variant="body 2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body 2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title}gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body 2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
