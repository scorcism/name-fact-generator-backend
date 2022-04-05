const express = require('express');
const router = express.Router();

const lines_user = (name, gender) => {

    let guygirl;
    let hisher;
    let heshe;
    let himher;
    let girlguy;


    if (gender == "f" || gender == "F") {

        heshe = "She";
        hisher = "Her";
        guygirl = "girl";
        himher = "her";
        girlguy = "guy";
    }
    else if (gender == "m" || gender == "M") {

        heshe = "He";
        hisher = "His";
        guygirl = "guy";
        himher = "him";
        girlguy = "girl";
    }
    else if (gender == "g" || gender == "G") {

        heshe = "he/she";
        hisher = "His/Her";
        guygirl = "guy/girl";
        himher = "him/her";
        girlguy = "girl/guy";
    }


    lines = [
        heshe.concat(" is fun and playful, but has a serious side."),
        "A smart, talented and humorous ".concat(guygirl).concat(", who likes to take charge."),
        "A ".concat(guygirl).concat(" with a big heart."),
        "Very rare though, ".concat(" is usually a very sweet person and is protective when it comes to ").concat(" friends."),
        "A perfect blend of brains and strength.",
        "Someone who has many dreams and desires.",
        name.concat(" is a great listener and you can always trust ").concat(" with anything."),
        name.concat(", a fun energetic ").concat(guygirl).concat(", this ").concat(guygirl).concat(" just oozes charisma."),
        "A nice ".concat(guygirl).concat(",who respect the feelings of ").concat(girlguy).concat("s, good looking personality,charming,smart."),
        "Many ppl find ".concat(name).concat(" rude and arrogant but ").concat(heshe).concat(" is the best and thus has many enemies."),
        "An attractive, charming ".concat(guygirl).concat(",full of joy."),
        heshe.concat(" is a great person who will be the best friend you ever had once you crack ").concat(hisher).concat(" hard outer shell."),
        "Romantic and charming.",
        "One of the sweetest ".concat(guygirl).concat("s you will come across although keep ").concat(himher).concat(" in your life when ").concat(heshe).concat(" comes across you. You might regret leaving ").concat(himher).concat("."),
        name.concat(" is a very unique and interesting person."),
        name.concat(" is an amazing friend and ").concat(heshe).concat(" will always be there for you."),
        name.concat("'s have elegance, charm and good taste, are naturally kind, very gentle, and lovers of beauty."),
        heshe.concat(" notices when your down and always brings you back up."),
        heshe.concat(" is a kind and caring person."),
        name.concat(" is overall funny, kind, a savage, intelligent and just overall an amazing person."),
        hisher.concat(" beauty over powers all the other ").concat(guygirl).concat("s and not only is ").concat(heshe).concat(" smoking hot but ").concat(hisher).concat(" style is so cool."),
        "Not a fan of romantic commitments but deeply committed to ".concat(hisher).concat(" fail out and friends."),
        name.concat(" is extremely smart, loving and knowledgeable person."),
        "The epitome of cool. Often used to denote someone whose very understanfing.",
        "Everyone likes ".concat(himher).concat("."),
        heshe.concat(" has big dreams, and ").concat(heshe).concat(" can make them come true."),
        "You want to be like this ".concat(guygirl).concat(", ").concat(heshe).concat("'s just too good to be true. A true legend."),
        "keep ".concat(himher).concat(" in your life when ").concat(heshe).concat(" comes across you. You might regret leaving ").concat(himher).concat("."),
        name.concat(" is a healer of hearts."),
        "The Kind of person who is one in million",
        name.concat(" is smart,funny and beautiful."),
        heshe.concat("'s smart beautiful kind and caring."),
        "Time files with a ".concat(name).concat(", as they are simply mesmerizing."),
        name.concat(" has an amazing personality. Also funny and fun to be around."),
        heshe.concat(" is very funny, smart, and good at event the new things ").concat(heshe).concat(" tries."),
        name.concat(" thinks ").concat(heshe).concat("'s unattractive but every ").concat(girlguy).concat(" ").concat(heshe).concat(" walks past just stops and stares."),
        "Strong opinions but has an open mind.",
        "Usually loves hugs and respects people a lot.",
        heshe.concat("'s adorable, ").concat(heshe).concat("'s hot, ").concat(heshe).concat("'s everything a ").concat(girlguy).concat(" craves for."),
        "A good looking ".concat(guygirl).concat(" with a perfect smile."),
        "Cuddly like a teddy bear but strong like a soldier.",
        heshe.concat(" is loveable, caring, but also tough and protective."),
        girlguy.concat("s really dig a ").concat(guygirl).concat(" like ").concat(himher).concat(" cuz ").concat(heshe).concat("'s got most of the skills.."),
        "Will make you laugh a lot.",
        "This person is always well dressed and very loved.",
        heshe.concat(" is a perfectionist."),
        "The most beautiful eyes in the whole wide world. They Look like stars and if you look too deep you'll get lost in them.",
        "Diplomatic and urbane.",
        "Always genuine and will try and help out if you're in need.",
        name + "'s Run the world, and always get what they desire.",
        "A beautiful ".concat(guygirl).concat(" who makes people laugh all the time."),
        name + "'s funny as hell.",
        "Quite with the ones ".concat(heshe).concat(" is unfamiliar with, and ecstatic with those ").concat(heshe).concat(" prizes."),
        name + " is an amazing person.",
        name + " is a very smart and caring person.",
        "When they need to talk and gives great advice to any and everyone.",
        name + " is a very smart, sweet, good looking and extremely intelligent ".concat(guygirl).concat("."),
        "Easygoing and sociable.",
        heshe.concat(" can talk to basically anything or anyone for hours."),
        "One of the most wonderful person you will ever meet in your life.",
        "Will do anything for friends.",
        heshe.concat(" is dutiful and will never put ").concat(hisher).concat(" own thoughts and feelings before ").concat(hisher).concat(" loved ones."),
        "Wise enough to overcome every situation.",
        heshe.concat(" makes you smile with all your heart and you love ").concat(himher).concat(" and never want to loose ").concat(himher).concat("."),
        "Very passionate and romantic and emotional too!",
        "If u r ".concat(hisher).concat(" ").concat(girlguy).concat(" he'll take care of u like a little diamond of ").concat(hisher).concat("."),
        name + " has a kind heart, and is family oriented.",
        "Will insist that ".concat(heshe).concat(" is a piece of hard candy, but if you dig deep enough ").concat(heshe).concat("'s got a soft chewy center."),
        heshe.concat(" is likesd by everyone and also has a great taste in fashion."),
        "A very awesome person who is well rounded and good at everything.",
        name.concat(" can't be wholly defined in few words because ").concat(heshe).concat("'s so close to perfection that any words for ").concat(hisher).concat(" just won't be good enough."),
        "Helps everyone, great friend, crazy about many things.",
        name.concat(" is a ").concat(guygirl).concat(" you will want to hold close forever."),
        "Loves to party and have fun, and can always make you smile.",
        hisher.concat(" smile is infectious and ").concat(heshe).concat(" laughs all the time which everyone loves about ").concat(himher).concat("."),
        name.concat(" is completely down to earth and sweet and kind. ").concat(heshe).concat(" is the best friend anybody could ever wish for!"),
        name.concat(" might come off as indifferent and impatient occasionally but it's only because they are working for greater good which takes a lot of effort."),
        "Cute and caring. One of the nicest people you'll meet.",
        "Stunning long legs, hazel eyes, perfect smile, dimples, freckles, and every ".concat(girlguy).concat(" dream."),
        "Everything ".concat(heshe).concat(" does is so sexy and appealing, when you see ").concat(himher).concat(".."),
        heshe.concat(" thinks only about only the lucky ").concat(girlguy).concat(" ").concat(heshe).concat(" loves and no one else."),
        "Someone you can talk to and trust.",
        name.concat(" is funny and ").concat(heshe).concat(" will make you laugh in the hardest times beacuase ").concat(heshe).concat(" loves to see people smile."),
        "The most perfect ".concat(guygirl).concat(" in the universe."),
        heshe.concat(" is a strong hearted charming person."),
        heshe.concat(" is good looking, polite, and just all round plain awesome."),
        heshe.concat(" holds ").concat(hisher).concat(" emotions and true feelings back ").concat(heshe).concat("'s very protective of what ").concat(heshe).concat(" cares for."),
        "Everyone likes ".concat(himher).concat("."),
        "Destined to become a person who does not have an average job.",
        "One of the most unique ".concat(guygirl).concat(" you'll every meet."),
        name.concat("'s are extremely caring, affable, and they are very sensititve but tend to hide it."),
        heshe.concat("'s the kind of ").concat(guygirl).concat("who's so loveable that everyone likes her."),
        "Black hair, brown eyes, falls in love hard and fast but won't admit it.",
        "You are really lucky if you have a ".concat(name).concat(" in your life especially if you are dating her."),
        name.concat(" is and achiever and the best person you turn to when you need a shoulder to cry on."),
        name.concat(" is the definition of compassion."),
        "The best person ever. ".concat(heshe).concat(" is one of a kind."),
        heshe.concat("'s beautiful, lovely body and lovely personality."),
        "A ".concat(name).concat(" is worthy of being a friend for quite a long time."),
        heshe.concat(" doesn't know how valuable ").concat(heshe).concat(" really is so make ").concat(himher).concat(" realise ").concat(hisher).concat(" worth."),
        heshe.concat(" is unique in every way starting from ").concat(hisher).concat(" name to ").concat(hisher).concat(" looks and personality."),
        "Always will have your back no matter who you are unless you get on ".concat(hisher).concat(" bad; once you on ").concat(hisher).concat(" bad side there's no coming back."),
        heshe.concat(" is loyal to people and won't back stab you."),
        "Really beautiful, has an amazing body.",
        "The ruler of real goon nation and one of a kind.",
        "Never less than awesome.",
        name.concat("'s are the model type, loved by ").concat(girlguy).concat(", and hated by some ").concat(guygirl).concat("s who are jealous."),
        name.concat(" can do whatever ").concat(heshe).concat(" puts ").concat(hisher).concat(" mind to and ").concat(heshe).concat(" is not quitter, ").concat(heshe).concat(" does not give up easily on anything or anyone."),
        heshe.concat(" loves music."),
        name.concat(" is a very smart and caring person."),
        heshe.concat(" has a rocken model body that makes other ").concat(guygirl).concat(" jealous, but ").concat(heshe).concat(" is very modest."),
        "They are logical, understanding, and see through any trick or gig you try to pull on them.",
        "The person who radiates happiness.",
        name.concat(" is a ").concat(guygirl).concat(" who is not really insecure and is quite protective sometimes."),
        "They have trouble expressing their emotions in real life, but it takes the right person to see through this barrier and into their true hearts.",
        name.concat(" has beautiful hairs."),
        heshe.concat(" is really funny and sarcastic but really sweet and kindhearted at the same time."),
        "If you ever come across a ".concat(name).concat(" never let ").concat(himher).concat(" go because ").concat(heshe).concat("'ll be the best thing that you've ever had."),
        name.concat(" have a lot of talent in the arts and performance arts and have quite a lot of sports potential that they may/may not put to use."),
        "Someone who loves and cares for everyone.",
        "Modest, but also speak ".concat(hisher).concat(" mind in a way that others can't."),
        "Sometimes you need to have patience with ".concat(himher).concat(" because ").concat(heshe).concat(" has anger issues but ").concat(heshe).concat("'ll get over it very fast."),
        heshe.concat("'s beautiful, talented and intelligent af You can not ignore a ").concat(name).concat(", If you do, you have forgotten it till you die."),
        "Smart and out to prove the world wrong.",
        "It's like a drug! Your heart races and you can't get enough of ".concat(name).concat("'s gorgeousness."),
        "If you ever find ".concat(himher).concat(" just hold on tight and never let go cause ").concat(heshe).concat(" is a gem."),
        name.concat(" is are the best !"),
        name.concat("'s are absolutely stunning, gorgeous, and allurging."),
        heshe.concat(" cares about ").concat(hisher).concat(" family and ").concat(hisher).concat(" friends and is a person who is trustworthy."),
        heshe.concat(" is not only unique but one of a kind."),
        name.concat(" is too perfect to describe."),
        name.concat(" likes to keep ").concat(hisher).concat(" circle tight and small,").concat(heshe).concat("  is picky about who ").concat(heshe).concat(" trusts, and isn't fond of large circles."),
        girlguy.concat(" really wish to have a man who is protective enough and secure enough."),
        heshe.concat("'ll leave you coming back for more; wanted by many."),
        "Their eyes, eyebrows, and overall facial structure are striking.",
        "Idealistic and peaceable."
    ]
    let fact = [];

    for (let i = 0; i <= 6; i++) {
        let count = Math.floor(Math.random() * lines.length);
        let line = lines[count]
        fact.push(line)
    }

    return fact;
}

router.get('/', (req, res) => {
    const name = req.query.name;
    const gender = req.query.gender;

    const line = lines_user(name, gender);

    res.json(line)
})


module.exports = router