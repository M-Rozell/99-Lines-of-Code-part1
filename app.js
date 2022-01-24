var friends = ['Cat', 'James', 'Tommy', 'Rachel', 'Sonya'];




for (let i = 0; i<friends.length; i++)
{
let friendsEach=friends[i];
console.log(friendsEach);

for(let t=99; t>0; t--) {
var word = "lines"
if(t===1){ var word ='line'
};
  
    
  if(t>2){
        console.log(t + " " + word + " of code in the file,",  t,  word,  "of code;", 
        friendsEach,  "strikes one out, cleares it all out,",  t-1, 
        "lines of code in the file.");
    };

     if(t==2){
        console.log(t + " " + word + ' of code in the file,', t, word, 'of code;',
        friendsEach, 'strikes one out, cleares it all out,', t-1, 'line of code in the file.');
    };

    if(t==1){
        console.log(t + " " + word + ' of code in the file,', t, word, 'of code;',
        friendsEach, 'strikes one out, cleares it all out, no more lines of code in the file.');
    }

};    

};
