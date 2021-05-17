// This page is where all information for every film on the top and bottom list is loaded from.

let suggestions = [
 {
   id: "310-to-yuma",
   // this information is what displays on the "top" and "bottom" pages, and also inside each modal.
   title: "3:10 to Yuma",
   year: "2007",
   img: "310toYuma-L",
   description: "Civil War veteran and small-time rancher Dan Evans decides to escort Ben Wade, an outlaw, for a paltry sum of 200 dollars to regain his lost honour and retrieve his barn from Glen Hollander.",
   rating: "Rating (8.6/ 10)",
   cast: "directed by James Mangold and produced by Cathy Konrad, and starring Russell Crowe and Christian Bale in the lead roles, with supporting performances by Peter Fonda, Gretchen Mol, Ben Foster, Dallas Roberts, Alan Tudyk, Vinessa Shaw, and Logan Lerman.",
// by specifying the page, it allows the site to understand which movies to display on which page. Either the "top" or "bottom" page.
   page: "top",
 },
 {
   id: "anchorman",
   title: "Anchorman: The Legend of Ron Burgundy",
   year: "2004",
   img: "Anchorman-L",
   description: "Ron Burgundy, a prominent anchor, enjoys his success amidst the male-driven industry of the news industry. However, everything changes when Veronica, an ambitious reporter, comes into the picture.",
   rating: "Rating (7.7 /10)",
   page: "top",
 },

 {
   id: "braveheart",
   title: "Braveheart",
   year: "1995",
   img: "Braveheart-L",
   description: "William Wallace, a Scottish rebel, along with his clan, sets out to battle King Edward I of England, who killed his bride a day after their marriage.",
   rating: "Rating (7.8/ 10)",
   page: "top",
 },

 {
   id: "fellowship-of-the-ring",
   title: "Lord of the Rings: The Fellowship of the Ring",
   year: "2001",
   img: "FellowshipoftheRing-L",
   description: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
   rating: "Rating (9.6/ 10)",
   page: "top",
 },

 {
  id: "gladiator",
  title: "Gladiator",
  year: "2000",
  img: "Gladiator-L",
  description: "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
  rating: "Rating (8/ 10)",
  page: "top",
},

{
  id: "howls-moving-castle",
  title: "Howl's Moving Castle",
  year: "2004",
  img: "Howl'sMovingCastle-L",
  description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
  rating: "Rating (8.6/ 10)",
  page: "top",
},

{
  id: "inception",
  title: "Inception",
  year: "2010",
  img: "Inception-L",
  description: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
  rating: "Rating (8/ 10)",
  page: "top",
},

{
  id: "kung-fu-panda",
  title: "Kung Fu Panda",
  year: "2008",
  img: "KungFuPanda-L",
  description: "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.",
  rating: "Rating (7.6/ 10)",
  page: "top",
},

{
  id: "les-miserables",
  title: "Les Misérables",
  year: "2012",
  img: "LesMiserables-L",
  description: "Jean Valjean, a prisoner, breaks parole in order to start life anew. He soon becomes the caretaker of a young girl but his past comes back to catch up with him.",
  rating: "Rating (7.5/ 10)",
  page: "top",
},

{
  id: "master-and-commander",
  title: "Master and Commander: The Far Side of the World",
  year: "2003",
  img: "MasterandCommander-L",
  description: "Captain Jack Aubrey orders his team to set out in search of a French war vessel. However, when his own ship is heavily damaged, he realises the task is not as easy as it seems.",
  rating: "Rating (7.9/ 10)",
  page: "top",
},

{
  id: "oldboy",
  title: "Oldboy",
  year: "2003",
  img: "Oldboy-L",
  description: "A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him.",
  rating: "Rating (9.1/ 10)",
  page: "top",
},

{
  id: "princess-mononoke",
  title: "Princess Monooke",
  year: "1997",
  img: "PrincessMononoke-L",
  description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
  rating: "Rating (8.8/ 10)",
  page: "top",
},

{
  id: "prisoners",
  title: "Prisoners",
  year: "2013",
  img: "Prisoners-L",
  description: "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
  rating: "Rating (8.5/ 10)",
  page: "top",
},

{
  id: "indiana-jones",
  title: "Indiana Jones and the Raiders of the Lost Ark",
  year: "1981",
  img: "RaidersoftheLostArk-L",
  description: "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
  rating: "Rating (8.7/ 10)",
  page: "top",
},

{
  id: "this-is-the-end",
  title: "This is the End",
  year: "2013",
  img: "ThisistheEnd-L",
  description: "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves.",
  rating: "Rating (7.4/ 10)",
  page: "top",
},

{
  id: "ratatouille",
  title: "Ratatouille",
  year: "2007",
  img: "Ratatouille-L",
  description: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  rating: "Rating (8/ 10)",
  page: "top",
},

{
  id: "return-of-the-king",
  title: "Lord of the Rings: Return of the King",
  year: "2003",
  img: "ReturnoftheKing-L",
  description: "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
  rating: "Rating (9.9/ 10)",
  page: "top",
},

{
  id: "revenge-of-the-sith",
  title: "Star Wars: Revenge of the Sith",
  year: "2005",
  img: "RevengeoftheSith-L",
  description: "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
  rating: "Rating (8.4/ 10)",
  page: "top",
},

{
  id: "room",
  title: "Room",
  year: "2015",
  img: "Room-L",
  description: "After years of being held captive in an isolated shed by a kidnapper, Joy and her little son, Jack, manage to escape the confinement and gain their freedom.",
  rating: "Rating (8.5/ 10)",
  page: "top",
},

{
  id: "shrek",
  title: "Shrek 2",
  year: "2004",
  img: "Shrek2-L",
  description: "When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.",
  rating: "Rating (7.8/ 10)",
  page: "top",
},

{
  id: "good-bad-and-the-ugly",
  title: "The Good, the Bad and the Ugly",
  year: "1966",
  img: "theGoodtheBadandtheUgly-L",
  description: "During the Civil War, two men, Blondie and Tuco, form an uncomfortable alliance while looking for treasure. They must also outwit Angel Eyes, an outlaw who wants to plunder the riches for himself.",
  rating: "Rating (8.9/ 10)",
  page: "top",
},

{
  id: "the-tiger",
  title: "The Tiger: An Old Hunter's Tale",
  year: "2015",
  img: "theTiger-L",
  description: "A tragedy makes Man-duk, a revered hunter, give up hunting. He keeps declining the government's requests to hunt down the last remaining tiger in Korea until his own son suffers the beast's wrath.",
  rating: "Rating (9/ 10)",
  page: "top",
},

{
  id: "the-wind-rises",
  title: "The Wind Rises",
  year: "2013",
  img: "theWindRises-L",
  description: "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi (Hideaki Anno), whose storied career includes the creation of the A6M World War II fighter plane.",
  rating: "Rating (8.8/ 10)",
  page: "top",
},

{
  id: "three-billboards",
  title: "Three Billboards Outside Ebbing, Missouri",
  year: "2017",
  img: "ThreeBillboards-L",
  description: "Mildred Hayes is devastated after the rape and murder of her daughter. Months later, she protests and challenges the police officials when they fail to capture the culprit.",
  rating: "Rating (8.9/ 10)",
  page: "top",
},

{
  id: "train-to-busan",
  title: "Train to Busan",
  year: "2016",
  img: "TraintoBusan-L",
  description: "Seok-woo and his daughter are on a train to Busan on the latter's birthday to see his wife. However, the journey turns into a nightmare when they are trapped amidst a zombie outbreak in South Korea.",
  rating: "Rating (8.6/ 10)",
  page: "top",
},

{
  id: "artemis-fowl",
  title: "Artemis Fowl",
  year: "2020",
  img: "ArtemisFowl",
  description: "In an attempt to find his missing father, Artemis Fowl, a 12-year-old criminal prodigy, comes across the secret world of fairies. Soon, he ends up in a deadly battle with the powerful fairies.",
  rating: "Rating (4.2/ 10)",
  page: "bottom",
},

{
  id: "baywatch",
  title: "Baywatch",
  year: "2017",
  img: "Baywatch",
  description: "Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.",
  rating: "Rating (5.5/ 10)",
  page: "bottom",
},

{
  id: "birdemic",
  title: "Birdemic: Shock and Terror",
  year: "2010",
  img: "Birdemic",
  description: "A horde of mutated birds descends upon the quiet town of Half Moon Bay, California. With the death toll rising, Two citizens manage to fight back, but will they survive Birdemic?",
  rating: "Rating (1.8/ 10)",
  page: "bottom",
},

{
  id: "cats",
  title: "Cats",
  year: "2019",
  img: "Cats",
  description: "An abandoned cat discovers a new life after stumbling into the world of the Jellicles. The tribe competes annually to determine the Jellicle Choice who would journey to Heaviside Layer and be reborn.",
  rating: "Rating (2.8/ 10)",
  page: "bottom",
},

{
  id: "catwoman",
  title: "Catwoman",
  year: "2004",
  img: "Catwoman",
  description: "A shy woman, endowed with the speed, reflexes and senses of a cat, walks the thin line between being a criminal and a hero even as a detective doggedly pursues her, fascinated by both of her personas.",
  rating: "Rating (4.4/ 10)",
  page: "bottom",
},

{
  id: "dinner-for-schmucks",
  title: "Dinner for Schmucks",
  year: "2010",
  img: "DinnerforSchmucks",
  description: "When Tim learns that his supervisor hosts a monthly dinner where his colleagues make a fool out of their guests, he decides to take an eccentric Barry Speck to the party hoping to land a promotion.",
  rating: "Rating (5/ 10)",
  page: "bottom",
},

{
  id: "dumb-and-dumberer",
  title: "Dumb and Dumberer: When Harry Met Lloyd",
  year: "2003",
  img: "Dumband",
  description: "Harry Dunne and Lloyd Christmas meet in high school and become best friends. They decide to help Principal Collins set up a special needs class, but rise in revolt on discovering his true intentions.",
  rating: "Rating (3.7/ 10)",
  page: "bottom",
},

{
  id: "emoji-movie",
  title: "Emoji Movie",
  year: "2017",
  img: "EmojiMovie",
  description: "Gene, a multi-expression emoji, gets sentenced to be deleted after he messes up a message his user Alex sends to his crush. Gene escapes the agents sent to destroy him and accepts his uniqueness.",
  rating: "Rating (3/ 10)",
  page: "bottom",
},

{
  id: "grown-ups",
  title: "Grown Ups",
  year: "2010",
  img: "GrownUps",
  description: "Five childhood friends take their families for a weekend trip to a lake house in their hometown, where they reunite to attend the funeral of their former high school basketball coach.",
  rating: "Rating (5.2/ 10)",
  page: "bottom",
},

{
  id: "father-figures",
  title: "Father Figures",
  year: "2017",
  img: "FatherFigures",
  description: "Two brothers realise that their mother has been lying to them about their father. As a result, they set out on a road trip to meet different men who can potentially be their long-lost parent.",
  rating: "Rating (4.9/ 10)",
  page: "bottom",
},

{
  id: "flubber",
  title: "Flubber",
  year: "1997",
  img: "Flubber",
  description: "Philip tries his best to create a new source of energy which will save his college from being shut down. In the process, he ends up creating a rubber-like substance, which helps objects jump higher.",
  rating: "Rating (5.5/ 10)",
  page: "bottom",
},

{
  id: "hellboy",
  title: "Hellboy",
  year: "2019",
  img: "Hellboy",
  description: "Hellboy, a supernatural being, protects the earth with the Bureau for Paranormal Research and Defense. Soon, he faces the Blood Queen, an ancient witch who wants to bring about the end of the world.",
  rating: "Rating (5/ 10)",
  page: "bottom",
},

{
  id: "holmes-and-watson",
  title: "Holmes and Watson",
  year: "2018",
  img: "HolmesandWatson",
  description: "At the Buckingham Palace, Detective Holmes and Doctor Watson stumble upon a murder scene and receive a note which says that they have four days to solve the crime or the Queen will die.",
  rating: "Rating (3.5/ 10)",
  page: "bottom",
},

{
  id: "little-fockers",
  title: "Little Fockers",
  year: "2010",
  img: "LittleFockers",
  description: "A strict and old-fashioned patriarch, Jack Byrnes, is unhappy with his son-in-law, Greg, when he takes up a second job at a drug company. So, he wants him to prove his capability by testing him.",
  rating: "Rating (4.7/ 10)",
  page: "bottom",
},

{
  id: "mortal-kombat",
  title: "Mortal Kombat: Annihilation",
  year: "1997",
  img: "MortalKombat",
  description: "Liu Kang and a few other martial arts warriors must unite and try to save Earth from evil forces who plan to invade the planet.",
  rating: "Rating (4.5/ 10)",
  page: "bottom",
},

{
  id: "troll",
  title: "Troll 2",
  year: "1990",
  img: "Trolls2",
  description: "A vacationing family discovers that the entire town they're visiting is inhabited by goblins, disguised as humans, who plan to eat them.",
  rating: "Rating (5/ 10)",
  page: "bottom",
},

{
  id: "movie-43",
  title: "Movie 43",
  year: "2013",
  img: "Movie43",
  description: "A series of interconnected short films follows a washed-up producer as he pitches insane story lines featuring some of the biggest stars in Hollywood.",
  rating: "Rating (4.3/ 10)",
  page: "bottom",
},

{
  id: "nick-fury",
  title: "Nick Fury: Agent of S.H.I.E.L.D",
  year: "1998",
  img: "NickFury",
  description: "Agent Nick Fury is asked to fight the menace of Hydra after exiling himself in the Yukon since the end of the Cold War.",
  rating: "Rating (3.8/ 10)",
  page: "bottom",
},

{
  id: "paul-blart",
  title: "Paul Blart: Mall Cop",
  year: "2009",
  img: "PaulBlart",
  description: "Paul, a single dad who makes ends meet by working as a security guard at a mall, must save the day after thieves, dressed as Santa's employees, take over the mall.",
  rating: "Rating (2.2/ 10)",
  page: "bottom",
},

{
  id: "sharknado",
  title: "Sharknado",
  year: "2013",
  img: "Sharknado",
  description: "Nature's deadliest killer takes to the skies in the ultimate gill-ty pleasure as a group of friends try to save the Santa Monica coast from shark-infested tornadoes.",
  rating: "Rating (2.5/ 10)",
  page: "bottom",
},

{
  id: "son-of-the-mask",
  title: "Son of the Mask",
  year: "2005",
  img: "SonoftheMask",
  description: "A cartoonist faces a dilemma when his dog chances upon the mask of Loki. After conceiving an infant son by the magical powers of the mask, he understands just how difficult child raising can be.",
  rating: "Rating (3/ 10)",
  page: "bottom",
},

{
  id: "suicide-squad",
  title: "Suicide Squad",
  year: "2016",
  img: "SuicideSquad",
  description: "Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind, the squad is sent to stop her.",
  rating: "Rating (5.7/ 10)",
  page: "bottom",
},

{
  id: "superbabies",
  title: "Superbabies: Baby Geniuses 2",
  year: "2004",
  img: "Superbabies",
  description: "A group of smart-talking toddlers find themselves at the center of a media mogul's experiment to crack the code to baby talk. The toddlers must race against time for the sake of babies everywhere.",
  rating: "Rating (2/ 10)",
  page: "bottom",
},

{
  id: "superman",
  title: "Superman IV: The Quest for Peace",
  year: "1987",
  img: "SupermanIV",
  description: "With the world on the brink of a nuclear war, Superman takes it upon himself to destroy all nuclear weapons. Lex Luthor, however, creates Nuclear Man, a force strong enough to take down Superman.",
  rating: "Rating (5/ 10)",
  page: "bottom",
},

{
  id: "the-room",
  title: "The Room",
  year: "2003",
  img: "TheRoom",
  description: "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again.",
  rating: "Rating (6/ 10)",
  page: "bottom",
},
];
