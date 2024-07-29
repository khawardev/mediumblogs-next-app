import { extractAndValidateContent } from '@/lib/storyCheckRegix';
import React from 'react';



const StoryCheckRegix = ({ htmlContent }: { htmlContent: any }) => {

    const result = extractAndValidateContent(htmlContent);

    if (result.error) {
        return <div>{result.error}</div>;
    }

    return (
        <div>
            <div>
                <h2>Heading:</h2>
                <p>{result.heading}</p>
            </div>
            <div>
                <h2>Paragraph:</h2>
                <p>{result.paragraph}</p>
            </div>
            <div>
                <h2>Image:</h2>
                <img src={result.imageUrl} alt="Extracted content" />
            </div>
        </div>
    );
};

export default StoryCheckRegix;
