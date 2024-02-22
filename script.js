const questions = [
    {
        question:"उत्तरी छोटा नागपुर प्रमंडल का मुख्यालय कहाँ है?",
        answers: [
            { text: "रांची", correct: false},
            { text: "जमशेदपुर", correct: false},
            { text: "हजारीबाग", correct: true},
            { text: "लातेहार", correct: false},
        ] 
    },

    {
        question:"झारखंड में भगवान बिरसा जैविक उद्यान कहाँ है?",
        answers: [
            { text: "हजारीबाग", correct: false},
            { text: "रांची", correct: true},
            { text: "लातेहार", correct: false},
            { text: "कोडरमा", correct: false},
        ] 
    },

    {
        question:"झारखंड में सर्वाधिक लंबे कार्यकाल तक राज्यपाल कौन रहे?",
        answers: [
            { text: "सैय्यद सिब्ते राजी", correct: true},
            { text: "द्रौपदी मुर्मू", correct: false},
            { text: "प्रभात कुमार", correct: false},
            { text: "वेद मारवाह", correct: false},
        ] 
    },

    {
        question:"बंगाल से निष्कासन के बाद मौलाना आजाद 1916 से 1920 तक कहाँ रहे?",
        answers: [
            { text: "रांची", correct: true},
            { text: "लातेहार", correct: false},
            { text: "जमशेदपुर", correct: false},
            { text: "पलामू", correct: false},
        ] 
    },

    {
        question:"तिलका मांझी को फांसी कब दी गयी?",
        answers: [
            { text: "1755", correct: false},
            { text: "1777", correct: false},
            { text: "1785", correct: true},
            { text: "1866", correct: false},
        ] 
    },

    {
        question:"झारखंड में राष्ट्रीय राजमार्गों की कुल लंबाई कितनी है?",
        answers: [
            { text: "1850 किमी", correct: false},
            { text: "1960 किमी", correct: true},
            { text: "1950 किमी", correct: false},
            { text: "2000 किमी", correct: false},
        ] 
    },

    {
        question:"जनसंख्या की दृष्टि से झारखंड का सबसे बड़ा जिला कौन सा है?",
        answers: [
            { text: "रांची", correct: true},
            { text: "कोडरमा", correct: false},
            { text: "लातेहार", correct: false},
            { text: "पलामू", correct: false},
        ] 
    },

    {
        question:"झारखंड का आकार किसकी तरह का है?",
        answers: [
            { text: "त्रिभुज", correct: false},
            { text: "चतुर्भुज", correct: true},
            { text: "पंचभुज", correct: false},
            { text: "षट्भुज", correct: false},
        ] 
    },

    {
        question:"डोमकच क्या है?",
        answers: [
            { text: "लोकनृत्य", correct: true},
            { text: "लोकगीत", correct: false},
            { text: "पर्व", correct: false},
            { text: "जनजाति", correct: false},
        ] 
    },

    {
        question:"हुंडरू जलप्रपात किस पठार पर है?",
        answers: [
            { text: "उत्तरी छोटा नागपुर के पठार", correct: false},
            { text: "दक्षिणी छोटा नागपुर का पठार", correct: false},
            { text: "रांची का पठार", correct: true},
            { text: "पलामू का पठार", correct: false},
        ] 
    },

    {
        question:"झारखंड सरकार ने स्वतंत्रता सेनानियों की पेंशन राशि 3000 रुपये से बढाकर कितनी कर दी थी? ",
        answers: [
            { text: "4000", correct: false},
            { text: "7000", correct: false},
            { text: "5000", correct: true},
            { text: "9000", correct: false},
        ] 
    },

    {
        question:"राज्य विद्युत नियामक आयोग का गठन कब किया गया?",
        answers: [
            { text: "2000", correct: false},
            { text: "2002", correct: true},
            { text: "2004", correct: false},
            { text: "2005", correct: false},
        ] 
    },

    {
        question:"स्वर्णरेखा नदी कहाँ से निकलती है?",
        answers: [
            { text: "छोटा नागपुर का पठार", correct: true},
            { text: "रांची का पठार", correct: false},
            { text: "विंध्यांचल पर्वत", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"भारत में लाह के उत्पादन में झारखंड का कौन सा स्थान है?",
        answers: [
            { text: "पहला", correct: true},
            { text: "दूसरा", correct: false},
            { text: "तीसरा", correct: false},
            { text: "चौथा", correct: false},
        ] 
    },

    {
        question:"कुंदा मेला कहाँ अयोजित किया जाता है?",
        answers: [
            { text: "प्रतापपुर", correct: true},
            { text: "हजारीबाग", correct: false},
            { text: "रांची", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"कौलेश्वरी मंदिर कहाँ स्थित है?",
        answers: [
            { text: "चतरा", correct: true},
            { text: "दुमका", correct: false},
            { text: "लातेहार", correct: false},
            { text: "कोडरमा", correct: false},
        ] 
    },

    {
        question:"कोल विद्रोह कब हुआ था?",
        answers: [
            { text: "1817", correct: false},
            { text: "1822", correct: false},
            { text: "1755", correct: false},
            { text: "1831", correct: true},
        ] 
    },

    {
        question:"भारत के खनिज उत्पादन का कितना प्रतिशत झारखंड में होता है?",
        answers: [
            { text: "30%", correct: false},
            { text: "35%", correct: false},
            { text: "40%", correct: true},
            { text: "45%", correct: false},
        ] 
    },

    {
        question:"कौन सी भौगोलिक रेखा झारखंड से गुजरती है?",
        answers: [
            { text: "कर्क रेखा", correct: true},
            { text: "मकर रेखा", correct: false},
            { text: "भूमध्य रेखा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"पहला विशुद्ध गांधीवादी आंदोलन कौन सा था?",
        answers: [
            { text: "ताना भगत आंदोलन", correct: true},
            { text: "असहयोग आंदोलन", correct: false},
            { text: "सविनय अवज्ञा आंदोलन", correct: false},
            { text: "भारत छोड़ो आंदोलन", correct: false},
        ] 
    },

    {
        question:"मैथन जलविद्युत केंद्र किस जिले में है?",
        answers: [
            { text: "लातेहार", correct: false},
            { text: "कोडरमा", correct: false},
            { text: "धनबाद", correct: true},
            { text: "चतरा", correct: false},
        ] 
    },

    {
        question:"झारखंड की पूर्व से पश्चिम तक चौड़ाई कितनी है?",
        answers: [
            { text: "464 किमी", correct: true},
            { text: "472 किमी", correct: false},
            { text: "522 किमी", correct: false},
            { text: "422 किमी", correct: false},
        ] 
    },

    {
        question:"‘धुमकुरिया’ किस जनजाति की सामाजिक संस्था है?",
        answers: [
            { text: "उरांव", correct: true},
            { text: "हो", correct: false},
            { text: "संथाल", correct: false},
            { text: "मुंडा", correct: false},
        ] 
    },

    {
        question:"बेठ बेगारी पर रोक कब लगी?",
        answers: [
            { text: "1905", correct: false},
            { text: "1908", correct: true},
            { text: "1909", correct: false},
            { text: "1910", correct: false},
        ] 
    },

    {
        question:"हुंडरू जलप्रपात कितने मीटर की ऊंचाई है?",
        answers: [
            { text: "240 मीटर", correct: false},
            { text: "320 मीटर", correct: true},
            { text: "335 मीटर", correct: false},
            { text: "421 मीटर", correct: false},
        ] 
    },

    {
        question:"खनिज उतपादन में झारखंड का भारत में कौन सा स्थान है?",
        answers: [
            { text: "पहला", correct: true},
            { text: "दूसरा", correct: false},
            { text: "तीसरा", correct: false},
            { text: "चौथा", correct: false},
        ] 
    },

    {
        question:"झारखंड का न्यूनतम अनुसूचित जनजाति प्रतिशतवाला जिला कौन सा है?",
        answers: [
            { text: "लातेहार", correct: true},
            { text: "कोडरमा", correct: false},
            { text: "चतरा", correct: false},
            { text: "धनबाद", correct: false},
        ] 
    },

    {
        question:"संथाल विद्रोह का दमन किसने किया था?",
        answers: [
            { text: "जनरल लाइड", correct: true},
            { text: "कैप्टन विलकिंसन", correct: false},
            { text: "लार्ड मेयो", correct: false},
            { text: "चैपमैन", correct: false},
        ] 
    },

    {
        question:"टिस्को की स्थापना कब हुई?",
        answers: [
            { text: "1905", correct: false},
            { text: "1907", correct: true},
            { text: "1906", correct: false},
            { text: "1908", correct: false},
        ] 
    },

    {
        question:"झारखंड के किस जिले में बाघों के लिए संरक्षित वन स्थित है?",
        answers: [
            { text: "लातेहार", correct: true},
            { text: "कोडरमा", correct: false},
            { text: "चतरा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड में राष्ट्रीय राजमार्गों की लंबाई कितनी है?",
        answers: [
            { text: "2754 किमी", correct: false},
            { text: "2649 किमी", correct: true},
            { text: "2552 किमी", correct: false},
            { text: "2441 किमी", correct: false},
        ] 
    },

    {
        question:"झारखंड का सबसे ऊंचा पर्वत कौन सा है?",
        answers: [
            { text: "पारसनाथ", correct: true},
            { text: "दलमा", correct: false},
            { text: "सतपुड़ा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"दलमा पहाड़ी कहाँ है?",
        answers: [
            { text: "जमशेदपुर", correct: true},
            { text: "हजारीबाग", correct: false},
            { text: "चतरा", correct: false},
            { text: "लातेहार", correct: false},
        ] 
    },

    {
        question:"हिजला मेला कब प्रारंभ हुआ?",
        answers: [
            { text: "1887", correct: false},
            { text: "1880", correct: true},
            { text: "1889", correct: false},
            { text: "1890", correct: false},
        ] 
    },

    {
        question:"पालकोट राजमहल किस जिले में है?",
        answers: [
            { text: "हजारीबाग", correct: false},
            { text: "गुमला", correct: true},
            { text: "पूर्वी सिंहभूम", correct: false},
            { text: "पश्चिमी सिंहभूम", correct: false},
        ] 
    },

    {
        question:"ज़ेवियर लेबर रिसर्च इंस्टिट्यूट झारखण्ड में कहाँ है?",
        answers: [
            { text: "हजारीबाग", correct: false},
            { text: "जमशेदपुर", correct: true},
            { text: "कोडरमा", correct: false},
            { text: "लातेहार", correct: false},
        ] 
    },

    {
        question:"भारतीय टीम का प्रतिनिधित्व करनेवाले विमल लकड़ा का संबंध किस खेल से है?",
        answers: [
            { text: "हॉकी", correct: true},
            { text: "टेनिस", correct: false},
            { text: "क्रिकेट", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"क्षेत्रफल की दृष्टि से सबसे बड़ा जिला कौन है?",
        answers: [
            { text: "पूर्वी सिंहभूम", correct: false},
            { text: "चतरा", correct: false},
            { text: "पश्चिमी सिंहभूम", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड के गठन के बाद निर्मित प्रथम जिला कौन था?",
        answers: [
            { text: "लातेहार", correct: true},
            { text: "कोडरमा", correct: false},
            { text: "चतरा", correct: false},
            { text: "रांची", correct: false},
        ] 
    },

    {
        question:"पहाडि़या दीवाकालीन विद्यालयों की संख्या कितनी है?",
        answers: [
            { text: "28", correct: false},
            { text: "32", correct: true},
            { text: "31", correct: false},
            { text: "27", correct: false},
        ] 
    },

    {
        question:"1913 में गिरिडीह में खंभे पर ‘आवर स्वाधीन भारत’ शीर्षक के पर्चे किसने चिपकाए थे?",
        answers: [
            { text: "निर्मलचंद्र बनर्जी", correct: true},
            { text: "अरुणाआसिफ अली", correct: false},
            { text: "राधाकृष्ण", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"जयपाल सिंह आदिवासी महासभा के अध्यक्ष कब बने थे?",
        answers: [
            { text: "1939 ई.", correct: true},
            { text: "1933 ई.", correct: false},
            { text: "1941 ई.", correct: false},
            { text: "1947ई.", correct: false},
        ] 
    },

    {
        question:"कोल्हुआ झील झारखंड के किस जिले में स्थित है?",
        answers: [
            { text: "चतरा", correct: true},
            { text: "हजारीबाग", correct: false},
            { text: "लातेहार", correct: false},
            { text: "कोडरमा", correct: false},
        ] 
    },

    {
        question:"हुल झारखंड पार्टी का गठन कब हुआ था?",
        answers: [
            { text: "1962 ई", correct: false},
            { text: "1965 ई", correct: false},
            { text: "1968 ई", correct: true},
            { text: "1971 ई", correct: false},
        ] 
    },

    {
        question:"कांग्रेस के रामगढ़ अधिवेशन के दौरान, किसकी अध्यक्षता में अखिल भारतीय समझौता विरोधी सम्मेलन आयोजित किया गया?",
        answers: [
            { text: "सुभाष चंद्र बोस", correct: true},
            { text: "रासबिहारी बोस", correct: false},
            { text: "जवाहर लाल नेहरु", correct: false},
            { text: "सरदार वल्लभभाई पटेल", correct: false},
        ] 
    },

    {
        question:"जमशेदपुर स्थित टाटा स्टील कंपनी के मजदूरों ने एस.एन. हलदर एवं व्योमकेश चक्रवर्ती के नेतृत्व में जमशेदपुर वर्कर्स एसोसिएशन की स्थापना कब की?",
        answers: [
            { text: "1918 ई", correct: false},
            { text: "1920 ई", correct: true},
            { text: "1922 ई", correct: false},
            { text: "1930 ई", correct: false},
        ] 
    },

    {
        question:"अखिल भारतीय ट्रेड यूनियन कांग्रेस का अधिवेशन झरिया में किस वर्ष हुआ?",
        answers: [
            { text: "1929 ई.", correct: true},
            { text: "1925 ई.", correct: false},
            { text: "1931 ई.", correct: false},
            { text: "1934 ई.", correct: false},
        ] 
    },

    {
        question:"झारखण्ड धाम किस जिले में हैं ?",
        answers: [
            { text: "दुमका", correct: false},
            { text: "हजारीबाग", correct: false},
            { text: "गिरिडीह", correct: true},
            { text: "बोकारो", correct: false},
        ] 
    },

    {
        question:"झारखंड में मुख्यमंत्री ग्राम सेतु किस वर्ष शुरू की गई ?",
        answers: [
            { text: "2005", correct: false},
            { text: "2003", correct: false},
            { text: "2002", correct: false},
            { text: "2001", correct: true},
        ] 
    },

    {
        question:"झारखण्ड राज्य में राजमहल ट्रैप कहा स्थित हैं ?",
        answers: [
            { text: "दक्षिणी-पूर्वी भाग में", correct: false},
            { text: "उत्तरी-पश्चिम भाग में", correct: false},
            { text: "उत्तरी भाग में", correct: false},
            { text: "उत्तर-पूर्वी भाग में", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 