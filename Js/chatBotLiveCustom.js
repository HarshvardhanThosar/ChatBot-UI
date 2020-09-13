// Selecting required HTML elements
var uiDomStyleClass             = document.querySelector( "html head style" )
var uiChatBot                   = document.querySelector( ".chatBot" )
var uiChatOpenTrigger           = document.querySelector( ".chatBot .chatBotHeading #chatOpenTrigger" )
var uiChatSeparater             = document.querySelector( ".chatBot .chatBotHeading+hr" )
var uiChatSession               = document.querySelector( ".chatBot .chatBody .chatSession" )
var uiChatBotTextArea           = document.querySelector( ".chatBot .chatForm #chatTextBox" )
var uiChatBotSendButton         = document.querySelector( ".chatBot .chatForm #sendButton" )

// Getting user input for custom settings
var uiAccentColorInput          = document.querySelector( "form.stylingController #accentColorInput" )
var uiAccentColorPreview        = document.querySelector( "form.stylingController #accentColorInput + .previewColor" )
var uiBackgroundColorInput      = document.querySelector( "form.stylingController #backgroundColorInput" )
var uiBackgroundColorPreview    = document.querySelector( "form.stylingController #backgroundColorInput + .previewColor" )
var uiChatHeadingInput          = document.querySelector( "form.stylingController #chatHeadingInput" )
var uiDefaultMessageInput       = document.querySelector( "form.stylingController #defaultMessageInput" )

// Getting settings from customUI.json file
var settingsImport
var requestJson = new XMLHttpRequest()
requestJson.open('GET','./Misc/customUI.json')
requestJson.onload = function() {
    settingsImport = JSON.parse(requestJson.responseText)
    customUIJSON = settingsImport
    applyCustomSettings( settingsImport )
}
requestJson.send()

// Function to apply custom Settings
function applyCustomSettings( settingsImport ){
    // Accent Controls
    var accentColor             = settingsImport.accentColor
    if( accentColor == "" )
        accentColor             = "#1a73e8"

    // Background Controls
    var backgroundColor         = settingsImport.backgroundColor
    if( backgroundColor == "" )
        backgroundColor         = "#333333"

    // ChatBot Heading Controls
    var chatBotCustomHeading    = settingsImport.chatBotHeading
    if( chatBotCustomHeading == "" )
        chatBotCustomHeading    = "Any Queries? Ask Me!"

    // Chat Initial Message Controls
    let chatDefaultText         = settingsImport.defaultText
    if( chatDefaultText == "" )
        chatDefaultText         = "Hi! I am ChatBot."

    // Seeting accent color on loading page
    uiAccentColorPreview.style.backgroundColor = accentColor
    uiChatOpenTrigger.style.backgroundColor = accentColor
    uiChatSeparater.style.backgroundColor = accentColor    
    uiDomStyleClass.innerHTML = ".accentColor{ background:"+accentColor+"!important;}"
    uiChatBotTextArea.style.border = "1px solid "+accentColor
    uiChatBotSendButton.style.backgroundColor = accentColor
    // Setting background color on loading page
    uiBackgroundColorPreview.style.backgroundColor = backgroundColor
    uiChatBot.style.backgroundColor = backgroundColor
    // Setting ChatBot Heading
    uiChatOpenTrigger.innerHTML = chatBotCustomHeading
    // Setting initial message
    chatBotInitiateMessage = chatDefaultText

    // Accent Controls
    // Change the accent styling while typing
    accentColorInput.addEventListener("keyup", ()=>{
        if( uiAccentColorInput.value == "" )
            accentColor = "#1a73e8"
        else
            accentColor = "#"+uiAccentColorInput.value
        uiAccentColorPreview.style.backgroundColor = accentColor
        uiChatOpenTrigger.style.backgroundColor = accentColor
        uiChatSeparater.style.backgroundColor = accentColor    
        uiDomStyleClass.innerHTML = ".accentColor{ background:"+accentColor+"!important;}"
        uiChatBotTextArea.style.border = "1px solid "+accentColor
        uiChatBotSendButton.style.backgroundColor = accentColor
    })

    // Background controls
    // Change the background styling while typing
    backgroundColorInput.addEventListener("keyup", ()=>{
        if( backgroundColorInput.value == "" )
            backgroundColor = "#333333"
        else
            backgroundColor = "#"+uiBackgroundColorInput.value
        uiBackgroundColorPreview.style.backgroundColor = backgroundColor
        uiChatBot.style.backgroundColor = backgroundColor
    })

    // ChatBot Heading controls
    // Change the heading styling while typing
    uiChatHeadingInput.addEventListener("keyup", ()=>{
        if( uiChatHeadingInput.value == "" )
            chatBotCustomHeading = "Any Queries? Ask Me!"
        else
            chatBotCustomHeading = uiChatHeadingInput.value
        uiChatOpenTrigger.innerHTML = chatBotCustomHeading
    })

    // ChatBot default message controls
    // Change the default message styling while typing
    uiDefaultMessageInput.addEventListener("keyup", ()=>{
        if( uiDefaultMessageInput.value == "" )
            chatDefaultText = "Hi! I am ChatBot."
        else
            chatDefaultText = uiDefaultMessageInput.value
        uiChatSession.innerHTML = ""
        chatBotInitiateMessage = chatDefaultText
        //  // Initiate chat again
        initiateConversation()
        })

    document.querySelector("body").onload = ()=>{
        uiDomStyleClass.innerHTML = ".accentColor{ background:"+accentColor+"!important;}"
    }
}