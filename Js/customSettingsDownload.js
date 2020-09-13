// Selecting element to view chat
var downloadTrigger = document.querySelector( "#downloadSettingsTrigger" )
var downloadAnchor  = document.querySelector( "#downloadSettingsAnchor" )

// Settign function to download
downloadTrigger.addEventListener( "click" , ()=>{
    var newCustomUIJSON             =   {
                                            "accentColor"     : "#1a73e8",
                                            "backgroundColor" : "#333333",
                                            "chatBotHeading"  : "Any Queries? Ask Me!",
                                            "defaultText"     : "Hi! I am ChatBot."
                                        }
    newCustomUIJSON.accentColor     = "#"+document.querySelector( "form.stylingController #accentColorInput" ).value
    newCustomUIJSON.backgroundColor = "#"+document.querySelector( "form.stylingController #backgroundColorInput" ).value
    newCustomUIJSON.chatBotHeading  = document.querySelector( "form.stylingController #chatHeadingInput" ).value
    newCustomUIJSON.defaultText     = document.querySelector( "form.stylingController #defaultMessageInput" ).value
    var dataString                  = "data:text/json;charset=utf-8," + encodeURIComponent( JSON.stringify( newCustomUIJSON ) )
    downloadAnchor.setAttribute( "href" , dataString );
    downloadAnchor.setAttribute( "download" , "customUI.json" );
    downloadAnchor.click();
} )