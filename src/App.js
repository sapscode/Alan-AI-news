import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '40d52f6504cf363d9a2100998d2e62522e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticle, setNewsArticle] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines'){
                    setNewsArticle(articles);
                }
            }
        });
    }, []);

    return (
    <div className="App">
        <h1>Alan AI News</h1>
        <NewsCards articles={newsArticle}/>
    </div>
    );
}

export default App;
