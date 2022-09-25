var i=0;
function changetext(){
    if(i>15){
        i=0
    }
    list_of_paragraphs=["Now that games are made using open HTML5 technology you can actually play many of them on your phone or tablet too. Just open your mobile browser and enter 'friv.com' ...see you there!","When Friv started in 2006 there was no such thing as a 'smartphone' and people mostly played games on their desktop computers at home. The world has changed; now a lot of people visit Friv on their phones and tablets from home, school, work and even while travelling!","The games on Friv play in full screen mode. That means that we use all of your screen for the action, and don't place any distractions or ads around the games. If you want our lovely menu to be in full screen mode too, press F11 on your keyboard. Remember to press it again to get your browser back to normal!","At Friv we try to keep the number of adverts we show to the absolute minimum - to make gaming better for you! We'll NEVER interrupt your game with an ad or make you sit through a video. That would be rude.","There are some games you will only find on Friv and nowhere else, like Mitch and Titch and Crazy Candy Creator. We made them specially for you!","Secret: If you click on the Friv logo at the top of the page, you will hear our menu music. Click on it 10 times you'll get extra games!","Friv was started after we saw how bad it was for kids trying to play online games at school. Nothing but endless ads and bad games. We knew we could do better. Friv is now popular with players of all ages.","At Friv we don't have much money for advertising, so we rely on our players to spread the word. Thank you!","Back in 2006, the main reason we used the made up word 'Friv' was because we thought it would be easy to type and remember. Around the world people pronounce it in VERY different ways. Freev-eh!","There is actually a special Friv site for schools - but anyone can use it. At www.friv4school.com there are less of the shooting and dressup games, but more fun puzzle games. Try it!","The Friv logo at the top of the page is a vector image. It's not stored as dots or 'pixels' but as mathematical lines. It means that no matter how big your screen is, the logo will always stay sharp.","We didn't need to buy any expensive software or fancy computers to make Friv. Anyone can learn to code for free. Just search for 'HTML tutorials' on YouTube - it's a great place to start.",
    "The quickest way to get to Friv is to simply type 'friv.com' into your address bar. It's faster than using a search engine!","One day we found some old Victorian story books in a dusty leather suitcase. Some of them were so good we read them out for you as bedtime stories - find them in 'Friv Daily' at the bottom of the page.","When you click on a game below, your computer sends a request to our servers to send the game to you. The information travels as beams of light along fibre optic cables under the sea. But the light can only travel about 50 miles / 70 kilometres or so before it becomes too faint, so there are amplifiers called 'repeaters' dotted all the way along the thousands of miles of cables to keep the data flowing!","Once you have played a certain number of games you will see a poo emoji at the  of this page. Mostly he likes to sleep. If you click on him, he, well - let's just say he's been clicked on literally MILLIONS of times!"]

    document.getElementById("paragraph1").innerText="Fascinating Frivolous Fact For Fanatical Friv Fans" +" "+(i+1).toString()+"/16 (click for next)"
    document.getElementById("paragraphs").innerText=list_of_paragraphs[i]
    i++
    console.log(i)
}
function setdate(){
    d=new Date()
    daymsg=""
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    message=""
    month=months[d.getMonth()]
    day=d.getDate()
    if(day==1){
        daymsg="1st"
    }
    else if(day==2){
        daymsg="2st"
    }
    else if(day==3){
        daymsg="3rd"
    }
    else{
        daymsg=day.toString()+"th"
    }
    message="it's"+" "+days[d.getDay()]+" "+daymsg+" "+month
   
    document.getElementById("date").innerText=message

    
}
function play_song(){
    music=document.getElementById("music")
    
    if(document.getElementById("music_button").innerText=="tap to pause daily chiptune"){
        music.pause()
        document.getElementById("music_button").innerText="tap to play daily chiptune"
        
    }
    else{
        music.play()
        music.currentTime = 0
        document.getElementById("music_button").innerText="tap to pause daily chiptune"
    }
}
function generate_quote(){
    i=Math.floor(Math.random()*5)
    list_of_quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela","The way to get started is to quit talking and begin doing. -Walt Disney","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs","If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"]
    document.getElementById("quote").innerText=list_of_quotes[i];
}
function generate_limerick(){
    i=Math.floor(Math.random()*4)
    list_of_limerick=["There was a young woman named Bright,Whose speed was much faster than light.She set out one day,In a relative way,And returned on the previous night.","There was an odd fellow named Gus, When traveling he made such a fuss.He was banned from the train,Not allowed on a plane,And now travels only by bus."," There once was a fly on the wall,I wonder, why didn’t it fall?Because its feet stuck? Or was it just luck? Or does gravity miss things so small?","Limericks I cannot compose,With noxious smells in my nose.But this one was easy,I only felt queasy,Because I was sniffing my toes."]
    document.getElementById("limerick").innerText=list_of_limerick[i]
}