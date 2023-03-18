import axios from 'axios';

const OPENAI_API_KEY = 'your_openai_api_key';

const getWordData = async (word) => {

    import { checkIfEnglishWord } from 'check-if-word';

    // In your handleKeyPress function, add this check before making API calls:
    if (checkIfEnglishWord(word + key)) {
      // Proceed with the API calls
      try {
        // Check if the word is safe and a real English word.
        // Then, get a Google image of the word.
        // Implement your logic here.
    
        const openAIApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    
        // Call the GPT API for explanations, stories, and facts.
        const prompt = `Explain the word "${word}" to a 5-year-old child, followed by a short story and an interesting fact about it.`;
        const response = await axios.post(
          openAIApiUrl,
          {
            prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.7,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
          }
        );
    
        const output = response.data.choices[0].text.trim();
    
        // Process the output and extract explanation, story, and fact.
        // Implement your logic here.
    
        return {
          imageUrl: 'image_url_here',
          explanation: 'explanation_here',
          story: 'story_here',
          fact: 'fact_here',
        };
      } catch (error) {
        console.error('Error getting word data:', error);
        return null;
      }
    };
    }


  

export { getWordData };