import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import background from './bicycles.png'

const alanKey = process.env.REACT_APP_API_KEY;

const App = () => {
    const [newsArticles, setnewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1); //since 1st article is 0, 

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines'){
                    setnewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => (prevActiveArticle + 1));
                }
                else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), {fuzzy: true}) : number; //wordsToNumbers = converts word to closest number
                    const article = articles[parsedNumber - 1]; //since article numbers starting from 0

                    if(parsedNumber > articles.length){
                        alanBtn().playText('Please try again ...');
                    }
                    else if(article){
                        window.open(article.url, '_blank'); //_blank = opening on a new tab
                        alanBtn().playText('Opening in a new tab ...');
                    }
                    else {
                        alanBtn().playText('Please try that again...');
                    }
                }
            }
        });
    }, []);

    return (
    <div style={{ backgroundImage: `url(${background})` }} >
        <div className={classes.logoContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C561BAQFzAiAvq0Jg8Q/company-background_10000/0/1565260089604?e=2159024400&v=beta&t=ygcEIMzRHClwTjBwChX2naoGiS2TCeDwozFfEAM73ek" className={classes.alanLogo} alt="logo" />
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
    );
}

export default App;
