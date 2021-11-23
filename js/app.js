const btnSpeak = document.querySelector(".btn-speak");
const text = document.querySelector(".text");

try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new SpeechRecognition();

    // All the commands
    const list = [
       ["Hi, how can i help you?", "Hello, how can i help you?"],
       ["I'm good, thanks for asking, how can i help?"],
       ["I live on the Singidunum University's server."],
       ["I was created by the team from Singidunum University."],
       ["My name is Raven.", "I wan given the name Raven."]
    ];

    // When the user stops speaking
    r.onresult = function (event) 
    {
        const resultIndex = event.resultIndex;
        const transcript = event.results[resultIndex][0].transcript;
        talk(transcript);
    }

    // Event listener for the main button
    btnSpeak.addEventListener('click', function() 
    {
        r.start();
    });

    // Function talk
    function talk (text) 
    {
        // Main instance
        const s = new SpeechSynthesisUtterance();
        s.text = "I am not programmed to process that command.";

        // ...
        if (text.includes("hello") || text.includes("hi") || text.includes("good morning") || text.includes("good day") || text.includes("good evening")) 
        {
            const answer = list[0][Math.floor(Math.random() * list[0].length)];
            s.text = answer;
        }
        else if (text.includes("how are you")) 
        {
            const answer = list[1][Math.floor(Math.random() * list[1].length)];
            s.text = answer;
        }
        else if (text.includes("where do you live") || text.includes("where are you"))
        {
            const answer = list[2][Math.floor(Math.random() * list[2].length)];
            s.text = answer;
        }  
        else if (text.includes("who created you") || text.includes("who made you") || text.includes("who programmed you"))
        {
            const answer = list[3][Math.floor(Math.random() * list[3].length)];
            s.text = answer;
        }
        else if (text.includes("What is your name") || text.includes("What's your name") || text.includes("How do they call you") || text.includes("name")) 
        {
            const answer = list[4][Math.floor(Math.random() * list[4].length)];
            s.text = answer;
        }
        else if (text.includes("search for")) 
        {
            let query = text.slice(10);
            window.open(`https://www.google.com/search?q=${query}`);
            s.text = `Here is what i found for ${query}`;
        }
        else if (text.includes("location")) 
        {
            let query = text.slice(9);
            window.open(`https://www.google.rs/maps?q=${query}`);
            s.text = `Here is what i found for ${query}`;
        }
        else 
        {
            s.text = "I am not programmed to process that command.";
        }
        
        // Tune the voice & speak out the answer
        s.volume = 1;
        s.rate = 0.8;
        s.pitch = 1;
        window.speechSynthesis.speak(s);
    }
} 
catch (e) 
{
    window.location.replace("error.html");
}
