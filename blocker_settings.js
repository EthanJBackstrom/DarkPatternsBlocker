console.log("blocker_settings.js script loaded");

//regex for better comptabability
const confirmshamingPatterns = [
    /i\s*don't\s*want\s*smarter\s*email/i,    
    /yes\s*!?\s*i'd\s*like\s*the\s*discount/i,  
    /no\s*thanks\s*,?\s*i\s*like\s*full\s*price/i, 
    /pay\s*to\s*reject/i,                        
    /exclusive\s*cupon/i,                        
    /i\s*understand\s*that\s*i\s*am\s*losing\s*the\s*above\s*perks/i,  
    /no\s*thanks\s*,?\s*i\s*know\s*everything\s*about/i,  
    /pay\s*to\s*reject/i                          
];


function normalize(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, '').trim();  // Remove punctuation but keep spaces and words
}



 function detectConfirmshaming() {
    const elements = document.querySelectorAll('button, a, input[type="submit"]');

    elements.forEach(element => {
        const text = element.textContent || element.value || "";
        console.log("Raw Text:", text); 

        const match = confirmshamingPatterns.find(pattern => pattern.test(text));
        console.log("Match Found:", match); 

        if (match) {
            element.style.border = "6px solid red";
            element.style.backgroundColor = "#ffdddd ";
            element.title = `DarkPattern (Confirmshaming) Detected: "${match}"`;
        }
    });
}


// Listener for messages 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.action) {
        case "Block Confirmshaming":
            detectConfirmshaming();
            break;
        case "reset":
    try{    
        const elementsToReset = document.querySelectorAll('button, a, input[type="submit"]');
            
            // Loop through each element and remove styles 
            elementsToReset.forEach(element => {
                element.removeAttribute("style");  
                element.removeAttribute("title");  
            });
    } catch (error) {
        console.error("Error with reset:", error)
    }

    }
});

// Run when page finishes loading 
window.addEventListener("load", () => {
    detectConfirmshaming();
});
