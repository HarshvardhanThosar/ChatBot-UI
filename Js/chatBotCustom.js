// Selecting required HTML elements
var uiDomStyleClass             = document.querySelector( "html head style" )
var uiChatBot                   = document.querySelector( ".chatBot" )
var uiChatOpenTrigger           = document.querySelector( ".chatBot .chatBotHeading #chatOpenTrigger" )
var uiChatSeparater             = document.querySelector( ".chatBot .chatBotHeading+hr" )
var uiChatBotTextArea           = document.querySelector( ".chatBot .chatForm #chatTextBox" )
var uiChatBotSendButton         = document.querySelector( ".chatBot .chatForm #sendButton" )

var uiAccentColorPreview        = document.querySelector( "form.stylingController #accentColorInput + .previewColor" )
var uiBackgroundColorPreview    = document.querySelector( "form.stylingController #backgroundColorInput + .previewColor" )

// Getting settings from customUI.json file
var requestJson = new XMLHttpRequest()
var settingsImport
requestJson.open( 'GET','./Misc/customUI.json' )
requestJson.onload = function() {
    settingsImport = JSON.parse( requestJson.responseText )
    applyCustomSettings( settingsImport )
}
requestJson.send()

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
}