window.onload = function () {
    console.log("Loaded!");
    var wordList = [ // 56 food words damn!
        "almond",
        "apple",
        "banana",
        "biscuit",
        "butterscotch",
        "cherry",
        "coconut",
        "cornflakes",
        "durian",
        "garlic",
        "hamburger",
        "honey",
        "kiwi",
        "lasagna",
        "lettuce",
        "lemonade",
        "lollipop",
        "lychee",
        "macaroni",             /***********************************/
        "marshmallow",          /********* To be randomised *******/
        "mayonnaise",           /**********************************/
        "mozzarella",
        "mushroom",
        "oatmeal",
        "omelette",
        "oregano",
        "oyster",
        "paneer",
        "papaya",
        "pasta",
        "peanut",
        "pepperoni",
        "pickle",
        "pineapple",
        "pizza",
        "pudding",
        "radish",
        "salad",
        "sausage",
        "soup",
        "spaghetti",
        "spinach",
        "stew",
        "strawberry",
        "sushi",
        "toast",
        "tomato",
        "turmeric",
        "vanilla",
        "vinegar",
        "waffle",
        "walnut",
        "watermelon",
        "wheat",
        "yolk",
        "zucchini"
    ]

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let guessLimit = 6;
    let guessed = [];

    function randomFoods() {
        index = Math.floor(Math.random() * wordList.length);
        answer = wordList[index];
        //console.log(index);
        answerString = answer.split('');
    }

    randomFoods();

    for (let i=0; i<answerString.length; i++) {
        console.log("_ ");
        
    
    }

    document.getElementById("word").innerHTML = answer;
    //document.getElementById("word").innerHTML = "_ ";

    alphabet.forEach(skim);
    function skim(item) {
        document.getElementById("keyboard").innerHTML += item + " ";
    }


}

console.log("Not loaded fully yet!");
