/* Challenge: Arrow Functions
Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

Watch the video (see above) about arrow functions, and see if you can rewrite addExcitement using that syntax. */

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let addExcitement = (theWordArray, specialCharacter, multi) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`. Otherwise, just concatenate the word itself.
         */
        if (i % 3 == 2) {
          buildMeUp += `${theWordArray[i]}` + `${specialCharacter.repeat(multi)} `
        } else {
          buildMeUp += `${theWordArray[i]} `
        }
        console.log(buildMeUp)
    }
}

addExcitement(sentence, "*", 4)
