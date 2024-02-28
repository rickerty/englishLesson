$(document).ready(function(){
    $.getJSON("files.json", function(data){

       
        let word
        let wordSecond
        function newWord(){
            let length = data.length
            let number = Math.floor(Math.random() * length)
            let numberOfLanguage = Math.floor(Math.random() * 2)
            
            if (numberOfLanguage == 0) {
                word = data[number].polski
                wordSecond = data[number].angielski
                
            } else {
                word = data[number].angielski
                wordSecond = data[number].polski
            }
            document.getElementById("slowo").innerText = word
        }

        newWord()


        const buttonClick = document.getElementById("submitButton");
        buttonClick.addEventListener("click", function(){
        let answer = document.getElementById("answer").value.toLowerCase()
        
        
            if (wordSecond == answer){
                console.log(wordSecond,answer,word)
                document.getElementById('firstAnswer').innerText = word+ ' - ';
                document.getElementById('secondAnswer').innerText = answer;
                document.getElementById('correct').innerHTML = '<i class="fa-solid fa-check fa-beat"></i>';
                document.getElementById("answer").value = ''
            }
            else {
                document.getElementById('correct').innerHTML = ' <span style="color: Tomato;"><i class="fa-solid fa-xmark fa-beat"></i></span';
                document.getElementById('firstAnswer').innerText = wordSecond+ ' - ';
                document.getElementById('secondAnswer').innerText = word;
                document.getElementById("answer").value = ''
            }
        
            newWord()
        })
    }).fail(function(){
        console.log("coś nie tak")
    })
})
