// Selecting elements to validate
var chatBotTextArea = document.querySelector( ".chatBot .chatForm #chatTextBox" )

function validateMessage() {
    if( chatBotTextArea.value == "" || chatBotTextArea.value == "Type here..." )
        return false
    else
        return true
}