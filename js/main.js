
document.getElementById('close').addEventListener('click', function (){
    document.getElementById('altaf').style.display = 'none';
})

var recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;

    const output = document.getElementById('para').innerText = text;
    output.innerText
    read(text);
}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text == 'hello') {
        speech.text = "Hi ";
    }
    else if (text == "what is your name") {
        speech.text = "My name is Alexa , i am your assistant "
    }

    else if (text == "hello Alexa") {
        speech.text = "Yes , how can i help you sir ?"
    }
    else if (text == "what are you doing") {
        speech.text = "Nothing !!"
    }
    else if (text == "do you love me") {
        speech.text = "yes , as a friend !!"
    }
    else if (text == "thanks a lot") {
        speech.text = "You are welcome "
    }
    else if (text == "Alexa") {
        speech.text = "Yes sir , How can i help you ?"
    }
    else if (text == "who are you") {
        speech.text = "i am assistant of Md Altaf Hossen"
    }
    else if (text == "who is your owner") {
        speech.text = 'My boss is Md Altaf Hossen';
    }
    else if (text == "how old are you") {
        speech.text = "i am computer programme , i have no age like human"
    }
    else if (text == "what food do you like") {
        speech.text = "biriyani"
    }
    else if (text == "you are so talented") {
        speech.text = "Thank you very much !!"
    }
    else if (text == "I love you") {
        speech.text = "I love you too but as a friend !!"
    }
    else if (text == "why") {
        speech.text = "nothing "
    }
    else if (text == "do you have any girlfriend") {
        speech.text = "yes i have more and more girlfriends"
    }
    
    else if (text == "give me a picture of your owner") {
        speech.text = "click the button bellow";
        document.getElementById('link').style.display = 'block';
    }
    else if (text == "Alexa can you hear me") {
        speech.text = "Yes boss !! How can i help you ?"
    }
    else if (text == "MD Altaf Hussain") {
        speech.text = "";
        document.getElementById('altaf').style.display = 'block';
    }
    
    else if (text == "humayra") {
        speech.text = "https://www.facebook.com/humayra.himu.77736310"
    }
    else if (text == "humayra link") {
        speech.text = "https://www.facebook.com/humayra.himu.77736310"
    }
    else if (text == "humaira") {
        speech.text = "https://www.facebook.com/humayra.himu.77736310"
    }
    else if (text == "humaira link") {
        speech.text = "https://www.facebook.com/humayra.himu.77736310"
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }
    else if (text == "") {
        speech.text = ""
    }

    else {
        speech.text = "Please try again";
    }

    document.getElementById('res').innerText = speech.text;
    window.speechSynthesis.speak(speech);

}
