# ChatBot-UI

<img src="https://github.com/HarshvardhanThosar/SourceMediaFiles/blob/master/ChatBot-UI/GfxSources/ChatBot-UI-Banner.png" style="border-radius: 10px;" alt="ChatBot UI Banner" width="100%">

###### ChatBot UI is just a basic user interface piece for chatbot. Feel free to use this code in your chatbots.

[<img src="https://github.com/HarshvardhanThosar/SourceMediaFiles/blob/master/ChatBot-UI/GfxSources/livePreviewButton.png" style="border-radius: 10px;" alt="click for live preview" width="100%">](https://harshvardhanthosar.github.io/ChatBot-UI/)

<img src="https://github.com/HarshvardhanThosar/SourceMediaFiles/blob/master/ChatBot-UI/GfxSources/ChatBot-UI.gif" style="border-radius: 10px;" alt="ChatBot UI Working" width="100%">

___

## Directions to use ChatBot-UI

* ### Download the complete project

    Download the complete project and extract the zip file. It comes with all the files required for this chatbot implementation.

* ### Add following Html piece

    Copy the following piece of code to your __Html__ files ( at the very bottom, just before `</body>` ) where you want to add this chatbot feature.

```html
<div class="chatBot">
    <div class="chatBotHeading">
        <label for="chatTextBox" id="chatOpenTrigger" class="">Any Queries? Ask Me!</label>
    </div>
    <hr class="">
    <div class="chatBody">
        <div class="chatSession">
        </div>
    </div>
    <form class="chatForm" autocomplete="off">
        <div class="typingArea">
            <textarea name="chatInput" id="chatTextBox" class="textArea" onblur="if(!validateMessage()) this.value = 'Type here...'" onfocus="if(!validateMessage()) this.value = ''"></textarea>
            <button type="submit" class="sendButton" id="sendButton"><img src="./Gfx/send.svg" alt="Send" srcset=""></button>
        </div>
        <button type="button" id="chatCloseTrigger">Close Chat!</button>
    </form>
</div>
<script src="./Js/chatBotConversation.js"></script>
<script src="./Js/chatBotValidate.js"></script>
<script src="./Js/chatBotAnimate.js"></script>
```

* ### Copy the Css & Js files
    
    >Copy the extracted files _( except __index.html__ )_ to your project directory.

    You would need to place all the _Css_ & _Js_ files in your ___Css___ & ___Js___ folders respectively.

    You can skip the following files:

    * _main.css_ present in ___Css___ folder.
    * _chatBotLiveCustom.js_ & _customSettingsDownload.js_ present in ___Js___ folder.
    * _customUI.json_ & _chatBotCustom.js_ present in the ___Misc___ & ___Js___ folders respectively ( Keep it in case of custom UI ).
    * All files in ___Gfx___ folder _( except __send.svg__, as it is part of the UI but you can replace the default graphics with your graphics. Just make sure the new files should be named as their default counterparts and are placed in appropriate directories. )_
    <!-- s -->

* ### Get your Custom UI

    Customize the ChatBot and download the settings from the following link.
    
    [ Customize your ChatBot here. ](https://harshvardhanthosar.github.io/ChatBot-UI/)

    The downloaded _customUI.json_ file would contain all your preferences. Create a ___Misc___ folder in your project directory and place this _customUI.json_ file into it.
    Link the _chatBotCustom.js_ present in the ___Js___ folder along with other js links.
___

[<img src="https://github.com/HarshvardhanThosar/SourceMediaFiles/blob/master/ChatBot-UI/GfxSources/footerBanner.png" alt="ChatBot UI Working" width="100%">](https://github.com/HarshvardhanThosar)
