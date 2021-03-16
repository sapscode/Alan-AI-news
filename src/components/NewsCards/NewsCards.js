import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@material-ui/core';

import useStyles from './styles'; //will import makestyles as a hook

const NewsCards = ({articles}) => {
    const classes = useStyles(); 
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} i={i}/>
                    </Grid>
                ))};
            </Grid>
        </Grow>
    )
}

export default NewsCards
