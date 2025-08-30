// Demo data for the proposal app - customize this with your real story!

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  image?: string;
}

export interface Memory {
  id: string;
  date: string;
  title: string;
  description?: string;
  images: string[];
  type: "image" | "video";
}

// Diary entries - start from your actual meeting date and add your story!
export const demoEntriesData: DiaryEntry[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "The First Hello",
    content:
      "On 27th June around the evening, she messaged me on Facebook after finding my advertisement on a matrimony page. That first 'Hi' went into my spam folder, so I couldn’t reply right away. When I finally discovered it, I felt something spark inside me — this was the moment our story truly began.",
  },
  {
    id: "2",
    date: "2025-06-28",
    title: "Opening Up",
    content:
      "At 2 AM I finally replied to her message. I apologized for being late and shared my details — my date of birth, education, future aspirations, and the kind of partner I dreamed of. She asked curiously if I was 27, since she thought I looked older. I admitted I was a little overweight but promised to work on myself for my partner. She shared her details and even sent a photo in view-once mode — when I opened it, I was stunned. She was the most beautiful woman I had ever laid my eyes on. She said, 'All that matters is loyalty and care, not looks or money.' We found out our birthdays were the same, which made us laugh. She asked about my expectations, and I promised her: 'I’ll take care of you forever, listen to you, and love you unconditionally.' We chatted about likes and dislikes, then finally wished each other good night at 12:10 AM.",
  },
  {
    id: "3",
    date: "2025-06-29",
    title: "Exams and Care",
    content:
      "That day our talks were filled with small but meaningful exchanges. I explained to her how Netflix and Prime needed separate downloads. She mentioned her upcoming exam and her sibling’s plans. I reassured her: 'Don’t get disturbed too much, eat well, and focus on your studies.' I shared about my Airtel subscription perks, and she talked about her college near Khardah. Before bed, I asked if she had dinner and wished her good night, hoping she’d rest well. Our connection deepened through these simple caring moments.",
  },
  {
    id: "4",
    date: "2025-06-30",
    title: "Between Trains and Texts",
    content:
      "The day began with warm good morning greetings. She told me her exam went well. When I invited her for an audio call, she agreed but said she was at the station. She teased: 'If you’re busy, it’s okay, don’t call.' Her father called as her train was about to arrive, so we ended the chat with me telling her to rest. It was a day of playful back-and-forths and care even during her travel.",
  },
  {
    id: "5",
    date: "2025-07-01",
    title: "The Number Hunt Begins",
    content:
      "This was the start of an unforgettable chapter — I kept asking her for her number, but she dodged again and again. At one point she even gave me a confusing range of numbers. I was desperate, trying every possibility. I teased her about arranged marriage, saying: 'Arrange marriage toh divorce besi hoy na.' She replied about someone whose ex-husband had caused her pain: 'Na, or ex-husband chilo oi rkom jar jnno songsar vengeche.' The chase for her number became a full-day adventure — playful, stubborn, and intense.",
  },
  {
    id: "6",
    date: "2025-07-02",
    title: "The Number Hunt Continues",
    content:
      "The second day of the number chase was just as restless. I sent messages like 'Banger', 'Ato bangla', 'Amar bangla porte iktu osubidha hoy.' She kept resisting, teasing me. I even told her, 'Sobai ke bolbe amar husband best.' In between the chase, I playfully said: 'Tumi biye korle tale ekta puro coaching baniye debo tomae.' The search consumed me — two days of relentless persistence, only fueled by the hope of hearing her voice.",
  },
  {
    id: "7",
    date: "2025-07-03",
    title: "Matching Horoscopes",
    content:
      "Finally, amidst all the number chase madness, a softer moment arrived. For the first time, we matched our hands for compatibility with an astrologer named Jagadish. She playfully engaged with the idea of horoscopes, and I cherished the sweetness of it. It felt like a symbolic step together, testing if destiny itself was smiling on us.",
  },
  {
    id: "8",
    date: "2025-07-04",
    title: "The WhatsApp Ban",
    content:
      "My desperation to find her number reached a peak — I had been messaging so many possible numbers that WhatsApp flagged my activity. Suddenly my account was banned. It was a crushing moment — two days of effort, suddenly silenced. I felt frustrated and helpless, but determined to come back and continue the search. I wasn’t going to give up on her.",
  },
  {
    id: "9",
    date: "2025-07-05",
    title: "Finding Her Again",
    content:
      "After the ban was lifted, I tried again. And then, almost miraculously, I found her contact through Google Pay. My stubborn belief and restless searching finally paid off. When I messaged her and she replied, I felt an indescribable relief — I had found her at last. That day was filled with joy, as if I had unlocked the first real step of our journey.",
  },
  {
    id: "10",
    date: "2025-07-06",
    title: "Settling into Chats",
    content:
      "With the chaos of the number chase behind us, our conversations felt calmer. We spoke about our daily lives, about studies and simple things, but with a new ease now that we were properly connected. I felt grateful — no more chasing, just the start of us slowly building something real together.",
  },
  {
    id: "11",
    date: "2025-07-07",
    title: "Sharing Little Worlds",
    content:
      "Our chats that day were sprinkled with small things — food, daily routines, and her studies. I reminded her, 'Khub porashona koro, sab thik hobe.' She laughed about how tired she was but still found time to text me. These little slices of life slowly stitched our worlds together.",
  },
  {
    id: "12",
    date: "2025-07-08",
    title: "Late Night Comfort",
    content:
      "The night stretched late as we talked. She opened up about her worries, and I reassured her: 'Tumi thakle amar ar kichu dorkar nei.' She teased me for being too filmy, but behind her words, I felt her warmth. It was one of those nights when sleep mattered less than being there for each other. That same day, I shared our love story with my younger sister, who in her excitement told everyone in my family. Soon my jamai babu and didi found out too, and they teased me lovingly, saying I was going to do a love marriage.",
  },
  {
    id: "13",
    date: "2025-07-09",
    title: "Growing Familiar",
    content:
      "By now, our conversations had grown more familiar and playful. She’d send me lines in Bangla, and I would fumble, replying: 'Ato bangla likhbe na, amar porte osubidha hoy!' She laughed at my broken replies. It was becoming our rhythm — teasing, laughing, learning each other’s quirks.",
  },
  {
    id: "14",
    date: "2025-07-10",
    title: "Building Curiosity",
    content:
      "The day was filled with curiosity — she asked me about my past, and I asked her about hers. We spoke about family, responsibilities, and what makes us truly happy. She said quietly: 'Jodi tumi thako, tahole ami khusi.' These soft admissions felt like the first roots of something deeper.",
  },
  {
    id: "15",
    date: "2025-07-11",
    title: "Our First Unplanned Date",
    content:
      "That day became magical without any planning. She suddenly called me and asked to meet at Sealdah before leaving for Chunakhali to see her mom. I rushed, heart racing, and there she was — in front of me for the very first time. We didn’t need fancy places or perfect timing. Just standing there together made it unforgettable. That was the day I realized how real everything was becoming.",
  },
  {
    id: "16",
    date: "2025-07-12",
    title: "After the First Meeting",
    content:
      "The day after meeting her at Sealdah felt surreal. Every message carried the memory of how she looked in real life. I told her, 'Shotti bolchi, tomar chokh amar matha ghuriye dilo.' She laughed shyly but I could sense her happiness. Meeting her changed the way every chat felt — now I knew the warmth behind the words. That very day, Paramita also gathered her courage and told her mother about me for the first time. It was a quiet but powerful step that made everything more real between us.",
  },
  {
    id: "17",
    date: "2025-07-17",
    title: "Worries and Reassurance",
    content:
      "She opened up about her family and the pressures around her. I listened carefully, telling her, 'Ami thakbo tomar pashe, jotoi asubidha hok.' She said softly, 'Dekhbo.' That short word carried her hope and doubt together, and I promised myself to earn her trust every day. Around this time, my didi got our kundli matched — most of the gunas matched well. Didi then said she wanted to speak directly with Paramita and asked her to tell her parents to call mine so both sides could meet by Raksha Bandhan when didi would be home. Paramita agreed but later admitted she needed more time to tell her father, since she was afraid.",
  },
  {
    id: "18",
    date: "2025-07-14",
    title: "Caring in Small Ways",
    content:
      "That day was filled with gentle care. I asked her again and again, 'Kheyecho?' She teased, 'Tumi amar maa naki?' I laughed and said, 'Maa na, husband hote chai.' It turned into playful banter, but beneath the jokes was a sincerity I couldn’t hide. But at home, I was struggling — I quit eating and argued with my family, who still refused to believe in us because of the gan mismatch. Finally, I had my gana checked again and it turned out I was rakshas too. With that, everything worked out, and this time my family began to listen.",
  },
  {
    id: "19",
    date: "2025-07-15",
    title: "Dreaming Ahead",
    content:
      "Our chats drifted toward the future. She asked, 'Tumi ki bhabcho amader niye?' I shared my vision of a life together, full of respect and laughter. She didn’t answer directly, but sent a shy emoji that said enough. The silence between words carried more than sentences could.",
  },
  {
    id: "20",
    date: "2025-07-16",
    title: "Between Studies and Us",
    content:
      "Her exams were still ongoing, so much of the day was her worrying about papers. I encouraged her, saying: 'Bhalo hobe, stress koro na.' In between studies, we sneaked in little talks about our day. Even in her busy schedule, she made time — and that meant the world to me.",
  },
  {
    id: "21",
    date: "2025-07-17",
    title: "Everyday Rhythms",
    content:
      "By now our chats had settled into a rhythm. She’d tell me about her college and siblings, and I’d tell her about my work. I reminded her, 'Besh porashona koro, ami tomar upor obhimaan korte chai.' She teased me, saying I was behaving like her teacher. But behind the jokes, there was comfort in our routine.",
  },
  {
    id: "22",
    date: "2025-07-18",
    title: "Late Night Teasing",
    content:
      "That night turned playful. She teased me for sending too many long paragraphs. I replied, 'Tomar jonne joto likhi, kom hoy.' She sent laughing emojis and said, 'Thak, ar likho na!' We kept bantering past midnight until one of us finally said good night.",
  },
  {
    id: "23",
    date: "2025-07-19",
    title: "A Glimpse of Vulnerability",
    content:
      "She shared some of her past — the struggles, the heartbreak. I listened quietly and assured her, 'Ei bar sob thik hobe, ami thakbo tomar pashe.' She didn’t reply for a while, then softly said, 'Dekha jabe.' That pause carried the weight of her hope and fear together.",
  },
  {
    id: "24",
    date: "2025-07-24",
    title: "Good Morning, Good Night",
    content:
      "That day was simple yet sweet. Morning began with her text, 'Good morning,' and ended with me saying, 'Good night, bhalo kore ghumio.' Between those, we spoke about small things — her lunch, my errands, random jokes. The normalcy itself felt special. But this day also marked a big step: Paramita finally told her father about me. He said he would get my address verified, though she was nervous about his reaction.",
  },
  {
    id: "25",
    date: "2025-07-21",
    title: "Plans and Possibilities",
    content:
      "We began talking about where we might meet again. She mentioned she was nervous but also excited. I suggested, 'Amra ekdin ekshathe ghurte jabo.' She laughed nervously and replied, 'Dekha jabe.' It was still uncertain, but just imagining it made the day lighter.",
  },
  {
    id: "26",
    date: "2025-07-22",
    title: "Closer Through Words",
    content:
      "She started sharing more — from little family details to dreams about her future. I found myself opening up too, telling her about my fears and aspirations. By the end of the night, I realized words alone had brought us so much closer.",
  },
  {
    id: "27",
    date: "2025-07-23",
    title: "Her Schedules, My Waiting",
    content:
      "She was busy that day, shuffling between coaching and home tasks. I waited patiently, checking my phone every few minutes. When she finally messaged, I replied instantly. She teased me, 'Ato taratari reply?' I told her honestly, 'Ami tomar message er jonne wait kortesilam.'",
  },
  {
    id: "28",
    date: "2025-07-24",
    title: "Jokes and Promises",
    content:
      "Our conversation turned silly at times — about food, about random things like TV shows. In between jokes, I said, 'Ami tomar pashe thakbo sobsomoy.' She brushed it off playfully, but I meant every word.",
  },
  {
    id: "29",
    date: "2025-07-25",
    title: "Anticipation Builds",
    content:
      "We started to talk more seriously about meeting. I could sense her hesitation, but also her interest. I said, 'Cholo ekdin ekta movie dekhte jabo.' She didn’t answer directly but changed the topic with a smiley. Still, my heart knew the idea wasn’t rejected.",
  },
  {
    id: "30",
    date: "2025-07-26",
    title: "Counting Down",
    content:
      "By now I was counting the days until we could meet again. She teased me, 'Ato utsuk keno?' I admitted, 'Tomar sathe movie dekhar jonne.' She sent a blushing emoji. The countdown to our first real planned date had quietly begun.",
  },
  {
    id: "31",
    date: "2025-07-27",
    title: "The Day Before",
    content:
      "Excitement buzzed through every message as we prepared for our first real date. She was nervous, I was restless. We teased each other — me promising not to be late, her warning me, 'Besi excited hyo na!' The anticipation of finally spending proper time together was almost too much to handle.",
  },
  {
    id: "32",
    date: "2025-07-28",
    title: "First Movie Together at Inox",
    content:
      "The big day arrived. I went all the way to Habra to pick her up, and together we headed to Forum Mall Inox. It wasn’t just our first planned date — it was her very first movie theatre experience. Sitting beside her in the dark, sharing small smiles and whispers, felt like magic. Watching her enjoy something so new made my heart full. That day will always be etched as one of the most special memories of my life.",
  },
  {
    id: "33",
    date: "2025-07-29",
    title: "After the Movie",
    content:
      "The day after the movie, our chats were filled with recollections. I told her how beautiful she looked, and she shyly replied, 'Besi bolcho.' But I could feel her happiness between the lines. For the first time, we shared a memory that was ours alone — outside screens, outside messages.",
  },
  {
    id: "34",
    date: "2025-07-30",
    title: "Settling into Us",
    content:
      "Life slipped back into routine, but now with an added sweetness. Every good morning and good night carried the memory of the movie date. Even when she was busy with coaching, a single text from her felt warmer than before.",
  },
  {
    id: "35",
    date: "2025-07-31",
    title: "Talking Futures",
    content:
      "That day we spoke again about the future — about studies, career, and eventually marriage. She said softly, 'Amar family raji hobe toh?' I told her, 'Jotoi asubidha hok, ami tomar sathe thakbo.' The seriousness of our words grew alongside our bond.",
  },
  {
    id: "36",
    date: "2025-08-01",
    title: "Playful Evening",
    content:
      "Amidst all the serious talks, that evening turned playful. I sent her exaggerated voice notes, joking about how I’d take care of everything after marriage. She replied with endless laughing emojis and said, 'Tumi pagol!' Her laughter was my favorite sound. But behind the fun, something heavy arrived — her mother had a bad dream about me, where she saw I would die in an accident. Frightened, she refused to agree to our marriage. It hurt deeply, but Paramita stood firm, saying she wanted to fight for us.",
  },
  {
    id: "37",
    date: "2025-08-02",
    title: "Planning Again",
    content:
      "We started planning our next meeting. I suggested Barasat, and she agreed with a shy hesitation. I promised, 'Ebar ekta chhoto breakfast korbo ekshathe.' She didn’t say much, but her little smiley said more than words could.",
  },
  {
    id: "38",
    date: "2025-08-03",
    title: "Our First Breakfast at Hazarduari",
    content:
      "This day became another milestone. We met in Barasat and went to Hazarduari restaurant — our very first breakfast together. Sitting across from her at the table, sharing food, laughing over little things — it was simple yet perfect. Ordinary to the world, but extraordinary to me because it was our first meal as 'us'.",
  },
  {
    id: "39",
    date: "2025-08-04",
    title: "The Morning After",
    content:
      "The next day was full of nostalgia from yesterday. We relived every detail of the breakfast — what she ordered, how she smiled, how I couldn’t stop looking at her. I told her, 'Ekdom biye hoye geche bole mone hochhilo.' She only replied with a blushing emoji, but that said it all.",
  },
  {
    id: "40",
    date: "2025-08-05",
    title: "Growing Natural",
    content:
      "By now, being with her felt natural. Our talks weren’t just about 'getting to know each other' anymore — they were about sharing life. From food to studies to family chores, everything became part of our story. I realized that day — this wasn’t just talking anymore. It was living, together.",
  },
  {
    id: "41",
    date: "2025-08-06",
    title: "Midweek Comfort",
    content:
      "She was caught up with studies and chores, but still found moments to text me. I kept reminding her, 'Porashona r sathe bhalo kore khaoa-dawa koro.' She teased me again, 'Ami ki chhoto baccha?' I laughed and said, 'Na, tumi amar sobkichu.' The comfort of small care filled the day.",
  },
  {
    id: "42",
    date: "2025-08-07",
    title: "Dreamy Conversations",
    content:
      "That evening we drifted into dreaming aloud — about travel, about what our home together would feel like. She joked, 'Tumi beshi swapno dekho.' I admitted, 'Swapno na, plan.' She replied with her quiet smile, and in that silence, hope took root.",
  },
  {
    id: "43",
    date: "2025-08-08",
    title: "Caring More",
    content:
      "She seemed a little low that day, and I kept checking on her. 'Bhalo acho?' I asked again and again. Finally she said, 'Tomar chinta beshi.' But I could tell she secretly liked the way I cared. That night, she wished me good night first, and it meant more than words.",
  },
  {
    id: "44",
    date: "2025-08-09",
    title: "The Plan for Sealdah",
    content:
      "We finalized plans to meet again. I suggested Sealdah, where we had first met by chance. She agreed. I could sense her nervous excitement. I told her, 'Ebar puro din tomar sathe thakbo.' She replied with just a shy emoji, but I knew how much it meant.",
  },
  {
    id: "45",
    date: "2025-08-10",
    title: "Sealdah Date – A Recreation",
    content:
      "This day felt like recreating magic. We met at Sealdah again, retracing the steps of our first meeting. Holding her hand, walking together, laughing in the same surroundings — it was as if time had folded back. Afterwards, I dropped her at her sister’s home in Sonarpur, just like before. A circle completed, yet this time with deeper meaning.",
  },
  {
    id: "46",
    date: "2025-08-11",
    title: "After the Sealdah Day",
    content:
      "Our chats overflowed with memories from the previous day. I teased her, 'Dekhechho, shob theke beshi ami ebar hasiechilam.' She replied, 'Tumi khub pagol.' Every little moment — from the train to the goodbye — was relived again and again in words.",
  },
  {
    id: "47",
    date: "2025-08-12",
    title: "Sweet Exchanges",
    content:
      "That day our messages were full of sweetness. I told her, 'Tomar sathe thakle din ta sundor hoye jay.' She replied, 'Tumi beshi bolcho.' But I knew she was smiling as she typed. We talked about her studies, my work, and everything in between — but the undertone was love.",
  },
  {
    id: "48",
    date: "2025-08-13",
    title: "Filling the Distance",
    content:
      "We couldn’t meet, but words filled the gap. I sent her small stories from my day, she replied with her own. It felt like weaving a shared diary through chat itself. I realized, even distance couldn’t dim what we had started.",
  },
  {
    id: "49",
    date: "2025-08-14",
    title: "Hints of Care",
    content:
      "She asked me if I had eaten, a small question but the first time she had initiated it like that. I smiled at my screen for minutes before replying, 'Haan, tomar jonno kheye niyechi.' These little moments showed how her care was slowly blossoming.",
  },
  {
    id: "50",
    date: "2025-08-15",
    title: "Looking Ahead",
    content:
      "We began talking about the next meeting. She had an eye treatment coming up, and I promised to be there with her. She didn’t say much, but I could feel her relief. Plans were made for Barasat, unknowingly setting the stage for another milestone together.",
  },
  {
    id: "51",
    date: "2025-08-16",
    title: "Our First Lunch in Barasat",
    content:
      "This day became a turning point. I accompanied her to Barasat for her eye treatment, determined to be by her side. Afterwards, we shared our very first lunch together. Sitting at the same table, eating side by side, I felt the quiet intimacy of love in its purest form. It wasn’t a grand date, but the care in that moment made it unforgettable.",
  },
  {
    id: "52",
    date: "2025-08-17",
    title: "The Care Continues",
    content:
      "The next day our talks lingered around her treatment. I asked again and again if her eyes were okay. She finally said, 'Tumi beshi chinta koro.' But I knew she liked the concern. Her comfort with me was growing deeper each day.",
  },
  {
    id: "53",
    date: "2025-08-18",
    title: "Shared Smiles",
    content:
      "That day was full of lightheartedness. She sent me funny lines, I countered with silly emojis. At one point she wrote, 'Pagol,' and I replied, 'Tomar pagol.' It felt like the banter of two people who had slowly become inseparable.",
  },
  {
    id: "54",
    date: "2025-08-19",
    title: "Family Talks",
    content:
      "She mentioned more about her family that day — her siblings, her father’s calls, little household details. I listened carefully, imagining myself becoming a part of it someday. I said softly, 'Ami tomar paribarer ekjon hote chai.' She didn’t answer directly, but sent a little heart emoji.",
  },
  {
    id: "55",
    date: "2025-08-20",
    title: "Evenings of Care",
    content:
      "Evenings became our favorite time to talk. That night she asked, 'Tumi ekhono jaagcho?' I replied, 'Tomar sathe kotha bolbo bole jaagchi.' She laughed and told me to sleep, but I knew she loved that I was awake just for her.",
  },
  {
    id: "56",
    date: "2025-08-21",
    title: "Moments of Silence",
    content:
      "Our chat wasn’t always overflowing. Sometimes there were silences — minutes, even hours. But the silences felt natural. I told her once, 'Tomar sathe chup thaka o sundor lage.' She replied with just a simple smiley, but it carried weight.",
  },
  {
    id: "57",
    date: "2025-08-22",
    title: "Gentle Assurances",
    content:
      "She sounded worried about studies and exams again. I reassured her, 'Chinta korona, tomar jonne ami achhi.' She told me, 'Ami toh chesta korchi.' I reminded her, 'Chesta korle sob hobe.' It became our rhythm — her worries, my promises, our faith.",
  },
  {
    id: "58",
    date: "2025-08-23",
    title: "Small Things, Big Meanings",
    content:
      "That day we talked about food, about daily chores, about random nothings. Yet every word felt meaningful. I realized love doesn’t always grow in big moments — sometimes it’s hidden in the tiniest exchanges.",
  },
  {
    id: "59",
    date: "2025-08-24",
    title: "The Dependence Grows",
    content:
      "She asked me casually, 'Kothay acho?' — the kind of small check-in that only comes when someone has become part of your life. I replied instantly, 'Tomar kache.' She laughed at my cheesiness, but didn’t hide how much she liked it.",
  },
  {
    id: "60",
    date: "2025-08-25",
    title: "Looking Forward",
    content:
      "We ended the day by talking about meeting again soon. Plans weren’t fixed yet, but just the thought of the next time kept us both smiling. I told her, 'Prottek diner sathe amader golpo barche.' She replied, 'Hmm, thik bolecho.' And with that, another page of our story was written.",
  },
  {
    id: "61",
    date: "2025-08-26",
    title: "Late Night Whispers",
    content:
      "That night stretched long into late hours as we whispered over messages. She kept saying, 'Besi derite kotha bolona, amar porashona ache.' I teased back, 'Tumi porashona ar ami dujon ke ek sathe manage korte parbo.' She laughed, but I knew she secretly liked it. That day something unexpected happened too — while on call with her, I overheard her arguing with her mother because she forgot to mute herself. I heard her clearly saying she would marry me no matter what. Listening silently, I felt proud and deeply happy that she was fighting for us.",
  },
  {
    id: "62",
    date: "2025-08-27",
    title: "Another Test, Another Support",
    content:
      "She had another exam coming up, and her tension was showing. I kept reminding her, 'Tomar upor amar bishwas ache.' She only replied, 'Dekhi ki hoy.' That quiet confidence she placed in me while she carried her own doubts showed just how far we’d come.",
  },
  {
    id: "63",
    date: "2025-08-28",
    title: "Rainy Day Vibes",
    content:
      "It rained heavily, and we joked about meeting under one umbrella. I said, 'Ekta chhoto chhata ar dujon manush — chole jabe.' She replied with endless laughing emojis. That silly fantasy filled the day with warmth.",
  },
  {
    id: "64",
    date: "2025-08-29",
    title: "Checking On Each Other",
    content:
      "That day she kept checking on me instead. 'Kheyecho?' 'Kaj kemon cholche?' — her questions came in small bursts. I smiled to myself — she might not admit it, but she had started caring more than she let on.",
  },
  {
    id: "65",
    date: "2025-08-30",
    title: "Playful Arguments",
    content:
      "We play-fought over something silly — I can’t even remember what started it. I called her 'borohotho stubborn,' and she fired back with 'tumi pagol.' The banter ended with us laughing at ourselves, realizing even our arguments were just another form of closeness. At the same time, we were planning for tomorrow — our secret meeting. We decided to go to Lenskart to get her frame changed, then head to a restaurant, afterwards spend some quiet time in a park, and finally I would drop her home. Just the thought of tomorrow filled me with restless excitement.",
  },
];

// Demo memories - add your real photos here!
// Updated demoMemoriesData with images array
// Updated demoMemoriesData with specified image counts
export const demoMemoriesData: Memory[] = [
  {
    id: "1",
    date: "2025-06-27",
    title: "Our First Conversation",
    description:
      "The very first message that started our beautiful love story. A moment I’ll treasure forever.",
    images: ["/images/june27-1.jpeg", "/images/june27-2.jpeg"],
    type: "image",
  },
  {
    id: "2",
    date: "2025-07-03",
    title: "Matching Horoscopes",
    description:
      "The first time we matched our hands for compatibility with an astrologer named Jagadish. A sweet and memorable step together.",
    images: Array.from({ length: 5 }, (_, i) => `/images/jul3-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "3",
    date: "2025-07-11",
    title: "Our First Unplanned Date",
    description:
      "That unexpected call from you to meet at Sealdah, before you left for Chunakhali to see your mom. The start of something magical.",
    images: Array.from({ length: 6 }, (_, i) => `/images/jul11-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "4",
    date: "2025-07-28",
    title: "First Movie Together at Inox",
    description:
      "When I went to Habra to pick you up, and we went to Inox Forum Mall together. Not only was it our first planned date, but it was also your very first movie theatre experience—a memory I’ll always cherish.",
    images: Array.from({ length: 9 }, (_, i) => `/images/jul28-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "5",
    date: "2025-08-03",
    title: "Our First Breakfast at Hazarduari",
    description:
      "Our second date at Barasat became extra special because it was our very first breakfast together, shared at Hazarduari restaurant. A simple yet perfect noon filled with warmth.",
    images: Array.from({ length: 18 }, (_, i) => `/images/aug3-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "6",
    date: "2025-08-10",
    title: "Sealdah Date – A Recreation",
    description:
      "Another planned date at Sealdah, recreating our first meeting. I dropped you off at your sister’s home in Sonarpur afterwards, just like before.",
    images: Array.from({ length: 7 }, (_, i) => `/images/aug10-${i + 1}.jpeg`),
    type: "image",
  },
  {
    id: "7",
    date: "2025-08-16",
    title: "Our First Lunch in Barasat",
    description:
      "A special date at Barasat, where I accompanied you for your eye treatment. It also became our very first lunch together—a simple yet deeply meaningful moment of care and love.",
    images: Array.from({ length: 10 }, (_, i) => `/images/aug16-${i + 1}.jpeg`),
    type: "image",
  },
];

// Personal details - customize with your real information
export const personalInfo = {
  yourName: "Pritam",
  yourNickname: "Prit",
  yourLocation: "Mollargate, Kolkata",
  partnerName: "Paramita",
  partnerNickname: "Paro",
  partnerLocation: "House number 75, Habra post office road, West Bengal",
  meetingDate: "June 27th, 2025",
  relationshipStart: "2025-06-27",
  meetingDateFormat: new Date("2025-06-27"),
};

// Proposal text - customize this with your own words!
export const proposalText = {
  mainMessage:
    "From the moment we started talking on June 27th, 2025, I knew you were special. Every conversation, every laugh, every shared moment has only made me fall deeper in love with you. You are my best friend, my confidant, and the love of my life.",
  secondMessage:
    "I want to wake up next to you every morning, share all of life's adventures with you, and grow old together. You complete me in ways I never thought possible.",
  finalQuestion:
    "So, Paro, my love, will you marry me and make me the happiest man alive?",
  yesResponse: "🎉 YES! She Said Yes! 🎉",
  yesMessage: "I can't wait to start our forever together, my beautiful Paro!",
  maybeResponse: "Take All the Time You Need 💕",
  maybeMessage:
    "I'll wait forever for you, my love. You're worth every moment of waiting.",
};

// Love reasons - customize with why you love your partner
export const loveReasons = [
  {
    title: "Your Beautiful Smile",
    description:
      "Every time you smile, my world lights up with a thousand stars. Your joy is contagious and makes every moment magical.",
    icon: "😊",
  },
  {
    title: "Your Kind Heart",
    description:
      "Your compassion and kindness towards everyone around you shows the beautiful soul you have. You make the world a better place.",
    icon: "💝",
  },
  {
    title: "Your Dreams and Ambitions",
    description:
      "Your ambitions and dreams inspire me every day. I want to be part of your journey and support you in achieving everything you desire.",
    icon: "⭐",
  },
];
