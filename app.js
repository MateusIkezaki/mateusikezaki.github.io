var time = 3000;
const specialty = document.querySelector('.specialty');
const repeat = true;
const display = document.querySelector('.display-container')

var currentsource;

var currentitem = 0;
const backgrounds = ["'Unity.png'", "'Faceless (4).png'", "'Casa Nobre Home Page.png'"]
const titles = ["Unity Engine", "Pixel Art/Animation", "Web Development"]
const subtitles = [
    "Game development on Unity is what I do best. I've been using it since 2017 and have published many projects in my itch.io page, which you can find in the 'Projects' page",
    "I always make my own animations and sprites for my games. I use piskel to create my sprite sheets. You can find some of my work in the Gallery.",
    "I began developing websites back in 2018. My specialty is front end in HTML, CSS and Javascript. With that said, I do know basic database management with NeDB and Node.js."
]

const descriptions = [
    "This is Kaonashi from Spirited Away, directed by Hayao Miyazaki. If I'm not mistaken, I made this pixel art in 2018 and I was particularly proud of this one. I've always admired Miyazaki's work and Spirited Away was no exception. I remember being absolutely terrified of Kaonashi as a kid, but looking at him now, I really like his mask.",
    "I drew this one right after drawing Kaonashi. I had just played Majora's Mask, which is a game I really enjoyed. It's such a bizarre plot, it really intrigued me. The Legend of Zelda was a major inspiration for, what's probably my biggest project yet, Phantom Tower. This franchise is probably the reason why I like boss fights so much.",
    "This pixel art is dedicated to my group of friends. We call ourselves 'The Artists' Guild,' mainly because everyone in this specific group has interest in some form of art, like cinema, drama, game development, plastic art, music, etc. I drew my friends in pixels and tried to represent their interests and passions with the symbols you see floating above each one of them(by the way, I'm the one in the far bottom left corner).",
    "A pixelated self portrait. I remember being pretty happy with this one. I honestly think it's accurate. This pixel art was originally made for my previous portfolio attempt, which can be found under the 'Websites' page.",
    "I drew this pixel art as a birthday gift for a friend. Since we were(and still are by the time I'm writing this) in quarantine, I couldn't really give him anything physical(well, I guess I could've bought something online, but where's the fun in that?), so I decided to make him a pixel art. The guy is absolutely obsessed for Berserker(manga), so I drew him holding Gut's(protagonist) blade. The Japanese writing says 'Nando,' which is his nickname.",
    "My friends and I used to have these weekly Art Challenges where we would choose a theme and just produce something related to that theme and share with everyone by the end of the week. This pixel art's theme was 'Afterlife,' so I decided to do something video games related. I honestly think it's a bit freaky to think how video game characters are stuck in a loop of living and dying for eternity with no memories from their past lives whatsoever. And what happens when you just drop the game? Do they get stuck in a purgatory realm forever? I wanted to play with that idea a little bit, which is why I drew this pixel art.",
    "This was made in memory of Stefán Karl Stefánsson(1975 - 2018). Lazy Town was a huge part of my childhood and learning that Stefán had passed away was pretty heartbreaking. But you know what? I think he went out like a hero, ironically enough. The way he embraced the memes just earned a lot of people's respect on the internet, mine included, so I decided to make something celebrating his life.",
    "I made this during a Computer Science lesson. The class was about to end and I was done with my tasks so I decided to animate something. I don't really know were I got the idea from, but I felt like drawing a pet Goomba.",
    "This is a weird one, not gonna lie. I drew this one back in 2017. I tried to recreate the famous train scene from Spirited Away, with Tihiro and Kaonashi, but if it took place in a modern subway. I know it's not the best looking pixel art ever, but I think what makes it special is the fact that I was trying to step out of my comfort zone here. If you look closely, Kaonashi is a bit transparent and I also drew light. Thing is, everything was made in a single layer, which means I had to keep changing shades to make the transparent and light effect instead of a creating a new layer and reducing its opacity.",
    "Pixel art of Jotaro from Jojo's Bizarre Adventure: Stardust Crusaders. It was originally made for a game I was working on back in 2017. I was a newbie in Unity back then. The game was supposed to be a Boss rush, where you would fight characters from multiple franchises. I only programmed two bosses before dropping the project, Jotaro was one of them. Once the boss was defeated, the player would then unlock one of the boss' skills and use it as their own. I did have a blast programming a Jotaro boss battle regardless. Funnily enough, this simple project was what would later on inspire me to develop Phantom Tower, which has basically the same concept, except you fight original characters.",
    "Regular scout from Attack on Titan. I drew this one to practice my pixel art skills. I was still trying to figure out my art style back then so I would draw random characters occasionally. I've always been a huge fan of Attack on Titan, so I thought drawing a scout's equipment would be both good practice and fun.",
    "This is a skyscrapper I drew for a game I was developing in 2017. The game was never finished but it was a parkour side scroller, heavily inpsired on Mirror's Edge. The skyscrapper was drawn for the game's background. I trying to go for a City of Glass kind of vibe. It turned out much better than what I was expecting so I decided to put it in here too.",
    "A pixel art of Link, from The Legend of Zelda franchise. Again, I was trying to find my artstyle with this pixel art. Compared to the Scout pixel art, you can see I'm taking a much more simplistic style to this one.",
    "This is a character that was supposed to act like an advisor such as Navi from The Legend of Zelda in a game I was working on with my colleagues from a Computer Science school. The game was intended to be a social criticism towards poverty and the job market, but it ended up getting canceled because we thought it would be too controversial. I was still pretty happy with the character's design regardless.",
    "I'm a huge fan of One Punch Man. I really like the characters' design, especially Saitama's simplistic yet iconic costume. I wanted to give Saitama a go, because I wanted to see how he would look like in a simplistic pixel art style. I must say I'm proud of this one, I think the simplistic artsyle fits the character well.",
    "Ohaguro Bettari is a monster from the Japanese folclore. She's a woman with black teeth and no eyes and will scare men by luring them close and revealing her face. Japanese folclore is something I find super bizarre, in a good way. It just makes me wonder how did they come up with such terrifying creatures back then. I wanted to practice shading with light and shadows in this pixel art. It was definitely a good exercise.",
    "I drew Chell from Portal to, once again, try to find my art style. I like her design, especially the portal gun. With that said, I never really played Portal myself. Can't remember why I chose to draw her specifically either, guess I just thought it would look cool(?).",
    "I drew this character just because I was practicing and thought it would be cool to draw an original character for a change. So I designed this character. He wasn't drawn for a game or anything, it was just me having fun really. It turned out very decent I would say. His hat allowed me to play around with shadows a little bit and I was just overall happy with his design.",
    "Just like the Samurai, I drew this one just for fun. I was kind of addicted to Uncharted 4 at the time and I was trying to draw a survivor sort of, so I guess that's the best way to describe this one: a Nathan Drake-ish survivor looking guy. His outfit does resemble a pilot outfit. I really liked the simplicity behind this one, I might recycle this sprite for a future project, who knows?",
    "Yet another concept art. This was made way back in 2016. We were pitching game ideas for a project we were about to have in the Computer Science school, so I came up with a sort of like a 2D Shadow of the Colossus kind of game. The idea was to have the bosses as moving levels, so your goal was to get to its weak spot. This colossus was going to be one of the bosses. None of the other colossus were nearly as good as this one and until this day I still think it's a decent looking pixel art.",
    "Here I was trying to find my own art style so I started drawing random characters to practice. I wasn't really a Photoshop fan up until recently so I decided to give it a go and I am enjoying quite a lot. As a huge Uncharted fan, I thought Nathan Drake would be a really good starting point because of his simplistic design and iconic clothing.",
    "This was a brainstorming exercise for weapons concept art during a game development course. I thought it turned out better than I had expected so I ended up putting it in here.",
    "After I finished drawing Nathan Drake I decided to celebrate the release of The Last of Us Part 2 by drawing Joel Miller, probably my favourite character in the entire franchise. The game caused some controversy to say the least, but I honestly enjoyed it a lot, even with the questionable pacing and plot choices. I used this drawing to explore alternative tools(such as the gradient for the lamp effect and motion blur for the dots representing moths) and brushes(I used a more scattered brush for the blood on Joel's shirt).",
    "I was super late to the party when I first watched this movie 4 years after its release. I absolutely loved it nonetheless and even made me appreciate my dreams more. The artstyle and animation are one of the most gorgeous I've ever seen, in fact they were one of the reasons why I started drawing more on Photoshop. I tried exploring more cloth behavior in this one, that's why you can see the little wrinkles on Mitsuha's shirt. I also played around with shadows to see what I could come up with. If you compare this drawing to the other ones I made in this style you will probably notice how the shadows on the other two are a lot more linear.",
    "I was practicing portraits when I drew this one. Since I was extremely excited for Attack on Titan's final season, I decided to draw Reiner Braun for practice, especially because the armored titan is my favorite titan. I remember extremely happy with this one. This drawing was a huge motivation for me to keep illustrating.",
    "This is the very first promotional poster I made for my biggest project to date: Phantom Tower. I started practicing digital illustration so I could promote my own games without having to hire a freelancer. This was a particularly exciting project. As I was wrapping this poster up, I realized how close I was from publishing a 2 year long project. The art style based on the illustrations a friend made for the game's cutscenes.",
    "I drew this for a school project about building landscapes. I wanted to practice perspective for a while so this was the perfect opportunity. I basically recreated a photograph I took at the Design Society art center in Shenzhen. There was this strange statue staring at a pyramid across a glass panel. The lonely composition inspired me to rethink the scenario and add a completely new context, which is what I did in this illustration.",
    "During the production of Phantom Tower I realized that I seriously needed to improve my animation skills. I lacked the understanding of basic concepts so I took some time during art class to study animation concepts and techniques. I was extremely proud of this animation. It feels smooth and it flows well, unlike my previous idling animations, which were stiff and choppy. I played around with drag to give weight to the character's movement and that technique alone improved the quality of this animation a lot.",
    "This was probably the hardest animation I made for this character. The fork spin was particularly difficult to figure out, but I managed to convey that movement successfully by changing the fork's shape in two frames, thus creating the illusion of rotation. I had a lot of fun making this one. I got to practice techniques such as smearing and distortion to express movement.",
    "I had a blast making this running cycle too. I had never properly analyzed a run cycle and it's incredible how there's a specific pattern that can be followed for every running animation. Understanding this pattern was key to making this animation and it's a knowledge I consider to be one of the most important I've acquired during this project.",
    "",
    ""
]

var header = document.getElementById("header")
var sticky = header.offsetTop
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
var navslideisactive = false;

window.onscroll = function() {DetectPagePos()}

let lastscroll = 0

const Add = () => {
    currentitem = (currentitem < backgrounds.length - 1) ? (currentitem + 1) : 0;
    Transition()
}

const Subtract = () => {
    currentitem = (currentitem != 0) ? (currentitem - 1) : backgrounds.length - 1;
    Transition()
}

const Transition = () => {
    specialty.style.opacity = "0";
    window.setTimeout('Change_Specialty()', 1000);
} 

const Change_Specialty = () => {
    //specialty.style.opacity = 0;
    
    specialty.querySelector('h1').textContent = titles[currentitem];
    specialty.querySelector('h4').textContent = subtitles[currentitem];
    specialty.style.backgroundImage = `url(${backgrounds[currentitem]})`;
    specialty.style.opacity = 1;
}

const DetectPagePos = () => {
    if(window.innerWidth < 1024) return
    if(window.pageYOffset > sticky) header.classList.add("sticky")
    else header.classList.remove("sticky")
}

const HideNav = () =>{
    if(window.innerWidth < 1024) return
    window.addEventListener("scroll", () => {
        const currentscroll = window.pageYOffset
        if(currentscroll < lastscroll || currentscroll <= sticky) header.style.top = '0%';
        else header.style.top = '-50%'

        lastscroll = currentscroll
    })
}

HideNav()

const NavSlide = () => {
    
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', (event) => {

        nav.classList.toggle('nav-active')
        document.querySelector('.blackscreen').style.opacity = .7;
        navslideisactive = !navslideisactive;

        navlinks.forEach((links, index)  => {
            if(!links.style.animation) links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +.5}s`
            else links.style.animation = ''
        })

        if(navslideisactive) document.querySelector('.blackscreen').style.opacity = .8;
        else document.querySelector('.blackscreen').style.opacity = 0;
        
        burger.classList.toggle('toggle')
    })
    
}

NavSlide()

const HideDisplay = () => {
    display.classList.toggle('displayin')
    document.querySelector('.blackscreen').style.opacity = 0
}

const Display = (source, title, sub, desc) => {
    document.querySelector('.blackscreen').style.opacity = .7
    display.classList.toggle('displayin')
    document.getElementById('displaysource').src = source
    document.getElementById('title').textContent = title
    document.getElementById('sub').textContent = sub
    document.getElementById('desc').textContent = desc
    document.getElementById('download').href = source
}