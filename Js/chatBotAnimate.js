//  // Selecting elements that are supposed to be animated
let animateChatBot          = document.querySelector( ".chatBot" )
let animateChatSeparater    = document.querySelector( ".chatBot .chatBotHeading + hr" )
let animateChatBody         = document.querySelector( ".chatBot .chatBody" )
let animateChatForm         = document.querySelector( ".chatBot .chatForm" )

//  // Selecting trigger elements of animation
let chatOpenTrigger         = document.querySelector( ".chatBot .chatBotHeading #chatOpenTrigger" )
let chatCloseTrigger        = document.querySelector( ".chatBot .chatForm #chatCloseTrigger" )

//  // Setting up trigger for click event
chatOpenTrigger .addEventListener( "click" , openChatBot  )
chatCloseTrigger.addEventListener( "click" , closeChatBot )

//  // Selecting chat session to clear after conversation ends
let chatSession             = document.querySelector( ".chatBot .chatBody .chatSession" )

//  // Count the iteration for opening the ChatBot,
//  // If count is 0, Initialize chat
//  // Else continue the chat
var chatBotIteration        = 0

//  // Function to open ChatBot
function openChatBot() {
    setTimeout(function(){
        //  // Animate ChatBot
        animateChatBot.classList.add( "active" )
    }, 0)
    setTimeout(function(){
        //  // Animate ChatOpenTrigger
        chatOpenTrigger.classList.add( "active" )
    }, 250)
    setTimeout(function(){
        //  // Animate ChatSeperater
        animateChatSeparater.classList.add( "active" )
    }, 500)
    setTimeout(function(){
        //  // Animate ChatBody
        animateChatBody.classList.add( "active" )
    }, 750)
    setTimeout(function(){
        //  // Animate ChatForm
        animateChatForm.classList.add( "active" )
    }, 1000)
    if( chatBotIteration == 0 )
        setTimeout(function(){
            //  // Initiate chat
            initiateConversation()
        }, 2000)
    chatBotIteration++
}

//  // Function to close ChatBot
function closeChatBot() {
    setTimeout(function() {
        //  // Animate ChatForm
        animateChatForm.classList.remove( "active" )
    }, 0)
    setTimeout(function() {
        //  // Animate ChatBody
        animateChatBody.classList.remove( "active" )
    }, 250)
    setTimeout(function() {
        //  // Animate ChatSeperater
        animateChatSeparater.classList.remove( "active" )
    }, 500)
    setTimeout(function() {
        //  // Animate ChatOpenTrigger
        chatOpenTrigger.classList.remove( "active" )
    }, 750)
    setTimeout(function() {
        //  // Animate ChatBot
        animateChatBot.classList.remove( "active" )
        //  // Clear the chat
        //  // ------------ Uncomment the next line if you want to clear chat everytime you close the ChatBot.
        // chatSession.innerHTML = ""
    }, 1000)
}