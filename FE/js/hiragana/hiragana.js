const form = document.getElementById("form-bg");
const main_section = document.getElementById("main-container");

formOptions = document.querySelectorAll('input[name="option"]');

labelOptions = document.getElementsByClassName("option");
options = document.getElementsByClassName("options");

/*options hiragana*/
let hiraganaChoices = [["", ""], ["", ""], ["", ""]];
let hiraganaAnswer;

const hiraganaCharts = {
    あ:"", い:"", う:"", え:"", お:"",
    か:"", き:"", く:"", け:"", こ:"",
    さ:"", し:"", す:"", せ:"", そ:"",
    た:"", ち:"", つ:"", て:"", と:"",
    な:"", に:"", ぬ:"", ね:"", の:"",
    は:"", ひ:"", ふ:"", へ:"", ほ:"",
    ま:"", み:"", む:"", め:"", も:"",
    や:"", ゆ:"", よ:"", 
    ら:"", り:"", る:"", れ:"", ろ:"",
    わ:"", を:"", ん:"",
}

const hiraganas = [
    ["あ", "A"], ["い", "I"], ["う", "U"], ["え", "E"], ["お", "O"],
    ["か", "KA"], ["き", "KI"], ["く", "KU"], ["け", "KE"], ["こ", "KO"], 
    ["さ", "SA"], ["し", "SHI"], ["す", "SU"], ["せ", "SE"], ["そ", "SO"], 
    ["た", "TA"], ["ち", "CHI"], ["つ", "TSU"], ["て", "TE"], ["と", "TO"], 
    ["な", "NA"], ["に", "NI"], ["ぬ", "NU"], ["ね", "NE"], ["の", "NO"], 
    ["は", "HA"], ["ひ", "HI"], ["ふ", "FU"], ["へ", "HE"], ["ほ", "HO"], 
    ["ま", "MA"], ["み", "MI"], ["む", "MU"], ["め", "ME"], ["も", "MO"], 
    ["や", "YA"], ["ゆ", "YU"], ["よ", "YO"], 
    ["ら", "RA"], ["り", "RI"], ["る", "RU"], ["れ", "RE"], ["ろ", "RO"], 
    ["わ", "WA"], ["を", "WO"], ["ん", "N"],
]

function openForm(){
    document.body.classList.add("activeForm");

    form.style.display = "flex";
    form.style.justifyContent = "center";
    form.style.alignItems = "center";

    loadHiraganas();
}

function closeForm() {
    document.body.classList.remove("activeForm");

    form.style.display = "none";
}

function loadHiraganas(){
    //Insert Three new hiragana charts
    for(let i = 0; i <= 2; i++){
        newValue = Math.floor(Math.random() * hiraganas.length);

        hiraganaChoices[i][0] = hiraganas[newValue][0];
        hiraganaChoices[i][1] = hiraganas[newValue][1];
    }

    //add it to options radio
    for(let i = 0; i <= hiraganaChoices.length; i++){
        console.log(hiraganaChoices[i]);
        options[i].value = hiraganaChoices[i][1];
        labelOptions[i].innerHTML = hiraganaChoices[i][1];
    }
}

function confirmGuess(){

    formOptions.forEach( option => {
        if(option['checked']){
            console.log(`checked - ${option.value}`);
        }
    });
}