export type WritingCategory =
  | "Emotional Life"
  | "Self & Overthinking"
  | "Society & Expectations"
  | "Family & Conditioning"
  | "Becoming & Conviction";

export const WRITING_CATEGORIES: WritingCategory[] = [
  "Emotional Life",
  "Self & Overthinking",
  "Society & Expectations",
  "Family & Conditioning",
  "Becoming & Conviction",
];

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "divider" };

export interface Article {
  issueNumber: string;
  slug: string;
  title: string;
  publishedAt: string;
  displayDate: string;
  shortDate: string;
  category: WritingCategory;
  description: string;
  keywords: string[];
  bloggerUrl: string;
  wordCount: number;
  readingTimeMinutes: number;
  featuredRank: number | null;
  blocks: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    "issueNumber": "24",
    "slug": "would-you-still-choose-it-knowing",
    "title": "Would You Still Choose It, Knowing Everything You Know Now?",
    "publishedAt": "2026-10-19T11:30:00.000-07:00",
    "displayDate": "October 19, 2026",
    "shortDate": "Oct 19, 2026",
    "category": "Becoming & Conviction",
    "description": "A quiet reflection on choices that come with a real price—closed doors, outgrown chapters, and why pain is not automatically proof of a mistake.",
    "keywords": [
      "choices",
      "loss",
      "closed doors",
      "regret",
      "growing up",
      "conviction",
      "becoming"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/10/would-you-still-choose-it-knowing.html",
    "wordCount": 328,
    "readingTimeMinutes": 1,
    "featuredRank": 3,
    "blocks": [
      {
        "type": "paragraph",
        "text": "The Choices That Cost Us Something"
      },
      {
        "type": "paragraph",
        "text": "We like to believe that the right choice should feel light."
      },
      {
        "type": "paragraph",
        "text": "That if we're on the right path, things will fall into place, the doors will open, and nothing will ask too much of us. So when a choice comes with a price, we start doubting ourselves. Maybe I chose wrong."
      },
      {
        "type": "paragraph",
        "text": "But I've started to wonder if that's the wrong question."
      },
      {
        "type": "paragraph",
        "text": "Some choices give us freedom. Some quietly take a piece of it away."
      },
      {
        "type": "paragraph",
        "text": "A friendship we outgrew. A dream we set down because another one mattered more. A person we chose, along with everything that came with them. Nobody warns us that choosing something often means losing something else."
      },
      {
        "type": "paragraph",
        "text": "And strangely, we still choose the ones that cost us."
      },
      {
        "type": "paragraph",
        "text": "Growing up taught me about doors."
      },
      {
        "type": "paragraph",
        "text": "When we're younger, we think every door stays open if we're patient enough. Then one day you notice that some have closed. Not with a slam, just quietly. And you learn to live with doors you can't open anymore."
      },
      {
        "type": "paragraph",
        "text": "I've lost things I once thought I couldn't live without. And I'm still here, still learning, still becoming someone."
      },
      {
        "type": "paragraph",
        "text": "But loss isn't proof that we chose wrongly."
      },
      {
        "type": "paragraph",
        "text": "This is the part I'm slowly learning. We treat pain as a verdict: it hurt, so it was a mistake. But maybe some things are simply the price of knowing what we truly want. You can't find out what matters most to you without risking something that also mattered."
      },
      {
        "type": "paragraph",
        "text": "So here's the question I ask myself now."
      },
      {
        "type": "paragraph",
        "text": "Not \"Was it easy?\" but \"Knowing everything I know now, would I still choose this?\""
      },
      {
        "type": "paragraph",
        "text": "Sometimes the answer is no, and that's useful too. But sometimes, even after the tears and the closed doors, the answer is quietly yes."
      },
      {
        "type": "paragraph",
        "text": "And when it is, I don't need the easier life. I only need to know that I chose mine, with open eyes."
      },
      {
        "type": "paragraph",
        "text": "What's one choice that cost you something, and you'd still make again?"
      }
    ]
  },
  {
    "issueNumber": "23",
    "slug": "why-do-we-still-want-life-that-broke-us",
    "title": "Why Do We Still Want the Life That Broke Us Open?",
    "publishedAt": "2026-10-18T07:42:46.640-07:00",
    "displayDate": "October 18, 2026",
    "shortDate": "Oct 18, 2026",
    "category": "Becoming & Conviction",
    "description": "An honest look at the ordinary morning after a life-altering storm—and discovering that peace is not the absence of mess, but choosing to stay in it.",
    "keywords": [
      "chaos",
      "calm",
      "peace",
      "aftermath",
      "ordinary days",
      "resilience",
      "choices"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/10/why-do-we-still-want-life-that-broke-us.html",
    "wordCount": 362,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "After the Chaos, This Is What Life Feels Like"
      },
      {
        "type": "paragraph",
        "text": "Nobody tells you what comes after."
      },
      {
        "type": "paragraph",
        "text": "We talk so much about the storm: the big decision, the hard day, the moment everything changed. But no one talks about the morning after. The quiet, strange, ordinary morning when everything is different, yet the world still expects you to get up and carry on."
      },
      {
        "type": "paragraph",
        "text": "That's where I am now."
      },
      {
        "type": "paragraph",
        "text": "Life didn't become perfect after that one choice. It became real. The days are still busy. My mind is still loud. Some evenings I'm tired in a way that sleep doesn't fix. Some nights I replay that one day and wonder how a single moment could rearrange so much."
      },
      {
        "type": "paragraph",
        "text": "But here's what surprised me."
      },
      {
        "type": "paragraph",
        "text": "It isn't only heavy. There are small, quiet moments that feel like they belong to me. A cup of tea going cold because I forgot to drink it. A random laugh in the middle of a stressful day. A message that makes my whole mood soft. Ordinary things, but they hit differently now, because I know what it took to get here."
      },
      {
        "type": "paragraph",
        "text": "Chaos changes how you see calm."
      },
      {
        "type": "paragraph",
        "text": "Before, I thought peace meant nothing going wrong. Now I think peace is just this: things are still messy, but I'm not running from them anymore. I'm in the middle of it, and I'm okay with being here."
      },
      {
        "type": "paragraph",
        "text": "Do I still miss the old, easier days?"
      },
      {
        "type": "paragraph",
        "text": "Sometimes, yes. I won't pretend I don't. Certain doors are closed, and I feel that on some days more than others. But when I ask myself, \"Would I go back?\", I notice something strange."
      },
      {
        "type": "paragraph",
        "text": "I don't want to go back."
      },
      {
        "type": "paragraph",
        "text": "I want to keep going. I want to see what the next ordinary day looks like, then the next. Even with the mess, the doubt, and the days that feel too long, I want this to continue."
      },
      {
        "type": "paragraph",
        "text": "Maybe that's the answer to every \"what if I chose wrong?\" Not a big dramatic certainty, just a quiet wish to wake up tomorrow and stay in the life I chose."
      },
      {
        "type": "paragraph",
        "text": "Have you ever had a day that changed everything, and still wanted to keep going? I'd love to hear it."
      }
    ]
  },
  {
    "issueNumber": "22",
    "slug": "why-we-delete-texts-before-sending",
    "title": "Why We Delete Texts Before Sending: Things I Almost Said",
    "publishedAt": "2026-10-15T23:33:07.624-07:00",
    "displayDate": "October 15, 2026",
    "shortDate": "Oct 15, 2026",
    "category": "Emotional Life",
    "description": "An examination of the messages we type and erase before sending 'all good'—unpacking the fear of being too much, the fear of silence, and emotional suppression.",
    "keywords": [
      "deleted texts",
      "unsent messages",
      "overthinking",
      "emotional suppression",
      "vulnerability",
      "communication"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/10/why-we-delete-texts-before-sending.html",
    "wordCount": 481,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Typed. Deleted. Sent \"all good.\""
      },
      {
        "type": "paragraph",
        "text": "\"I wish I had...\""
      },
      {
        "type": "paragraph",
        "text": "And then the text stops. The cursor blinks. Backspace starts happening."
      },
      {
        "type": "paragraph",
        "text": "If you're an overthinker like me, you already know this scene. You open a chat, type the real thing, the honest thing, and then you look at it for a few seconds. It looks too big, too soft, too much. So you delete it, one letter at a time, like you're erasing evidence."
      },
      {
        "type": "paragraph",
        "text": "Then you type something safer and press send."
      },
      {
        "type": "paragraph",
        "text": "The tiny lie we all tell"
      },
      {
        "type": "paragraph",
        "text": "\"I'm fine.\" \"All good.\" \"Nothing, don't worry.\""
      },
      {
        "type": "paragraph",
        "text": "These are the smallest lies in the world. They take two seconds to type and they feel harmless. But when I scroll through my own chats, I see something strange. The messages I actually sent are very polite. The messages I almost sent are the real ones."
      },
      {
        "type": "paragraph",
        "text": "So here's a little peek into my drafts. Things I almost said:"
      },
      {
        "type": "paragraph",
        "text": "Typed: \"I wish I had...\""
      },
      {
        "type": "paragraph",
        "text": "Sent: \"nah, nothing. everything was fine.\""
      },
      {
        "type": "paragraph",
        "text": "Typed: \"Can we talk more?\""
      },
      {
        "type": "paragraph",
        "text": "Sent: \"Oh, fine. Good night.\""
      },
      {
        "type": "paragraph",
        "text": "Typed: \"I'm not okay. I was so off.\""
      },
      {
        "type": "paragraph",
        "text": "Sent: \"All good.\""
      },
      {
        "type": "paragraph",
        "text": "Typed: \"That hurt a little, you know.\""
      },
      {
        "type": "paragraph",
        "text": "Sent: \"haha it's okay 😂\""
      },
      {
        "type": "paragraph",
        "text": "Typed: \"You could have told me that earlier\""
      },
      {
        "type": "paragraph",
        "text": "Sent: It's ok I am not mad"
      },
      {
        "type": "heading",
        "text": "Why do we do this?"
      },
      {
        "type": "paragraph",
        "text": "When I look at this list, one thing stands out: none of these messages is dramatic. Can we talk more? I was so off. That hurt a little. They are small, ordinary sentences. But in the moment, they feel heavy, because saying them means we might be seen."
      },
      {
        "type": "paragraph",
        "text": "I think two fears hide behind every deleted draft."
      },
      {
        "type": "paragraph",
        "text": "The first fear is being \"too much.\" We worry that our feelings will be an inconvenience, so we shrink them into one safe word: fine."
      },
      {
        "type": "paragraph",
        "text": "The second fear is the silence after. What if I say something real and the reply is cold, or late, or never comes? Keeping the draft unsent feels like self-protection."
      },
      {
        "type": "paragraph",
        "text": "Psychologists have a name for part of this: emotional suppression, which means holding feelings in instead of expressing them. It looks calm from the outside, but it often leaves us feeling lonelier, because the other person never gets the chance to know what we really meant."
      },
      {
        "type": "heading",
        "text": "The part I'm still learning"
      },
      {
        "type": "paragraph",
        "text": "Here's the funny thing about unsent messages. They don't disappear. They sit in the back of the mind and get heavier, like unread notifications for feelings."
      },
      {
        "type": "paragraph",
        "text": "And the people who truly care can usually handle a real sentence. It doesn't need to be a speech. It can be as small as: \"Actually, I wasn't fine. Can we talk?\""
      },
      {
        "type": "paragraph",
        "text": "Maybe I'm not bad at saying things. Maybe I'm just very good at saying \"fine.\""
      },
      {
        "type": "paragraph",
        "text": "So here's my small experiment: next time, I'll try sending the first draft. Or at least the second one."
      },
      {
        "type": "paragraph",
        "text": "What's the last thing you typed and deleted? 🤍"
      }
    ]
  },
  {
    "issueNumber": "21",
    "slug": "why-im-fine-is-easier-than-im-hurt",
    "title": "Why “I’m Fine” Is Easier Than “I’m Hurt",
    "publishedAt": "2026-10-15T09:49:18.750-07:00",
    "displayDate": "October 15, 2026",
    "shortDate": "Oct 15, 2026",
    "category": "Emotional Life",
    "description": "Why two effortless words become emotional armour—exploring the fear of being a burden, being dismissed, and the hidden cost of habitual emotional suppression.",
    "keywords": [
      "emotional suppression",
      "vulnerability",
      "armour",
      "honesty",
      "burden",
      "feelings"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/10/why-im-fine-is-easier-than-im-hurt.html",
    "wordCount": 587,
    "readingTimeMinutes": 3,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "“How are you?”, “I’m fine.”"
      },
      {
        "type": "paragraph",
        "text": "It takes less than a second to say. No thinking. No pause. No effort."
      },
      {
        "type": "paragraph",
        "text": "But if someone asked me what it takes to say “I’m hurt,” I’d need a deep breath, a quiet room, and a person who won’t say, “It’s not a big deal.”"
      },
      {
        "type": "paragraph",
        "text": "I’ve been wondering about this lately. Why is the lie so light and the truth so heavy?"
      },
      {
        "type": "paragraph",
        "text": "The first reason: we don’t want to be a burden"
      },
      {
        "type": "paragraph",
        "text": "Most of us learned very early that our feelings can be “too much.” Maybe someone rolled their eyes when we cried. Maybe someone said, “Why are you making this so big?” After a few times, we quietly learned something: keep it small, keep it to yourself, and no one gets tired of you."
      },
      {
        "type": "paragraph",
        "text": "So “I’m fine” isn’t really a lie. It’s a way of protecting other people from us."
      },
      {
        "type": "paragraph",
        "text": "The second reason: “I’m hurt” makes us look soft"
      },
      {
        "type": "paragraph",
        "text": "Saying “I’m hurt” means showing someone the exact place where you can be hurt again. That feels risky. What if they don’t care? What if they use it later?"
      },
      {
        "type": "paragraph",
        "text": "So we put on armour, and “I’m fine” is the easiest armour to wear. It’s two words, and it ends the conversation before it can get too close to us."
      },
      {
        "type": "paragraph",
        "text": "The third reason: we’re scared of being dismissed"
      },
      {
        "type": "paragraph",
        "text": "This one is the most painful for me. Sometimes we do try to open up, and the answer is “You’re overthinking,” or “Everyone goes through this.” It’s not that the person is cruel. They just didn’t know how to hold what we handed them."
      },
      {
        "type": "paragraph",
        "text": "But the heart remembers. Next time, it says, “Don’t bother. Just say fine.”"
      },
      {
        "type": "paragraph",
        "text": "The fourth reason: sometimes we don’t even know what we feel"
      },
      {
        "type": "paragraph",
        "text": "Not every hurt arrives with a name. Sometimes it’s a heavy, tangled feeling, part sadness, part disappointment, part tiredness. Explaining it feels like trying to describe a dream. So we choose the shortest sentence available: I’m fine."
      },
      {
        "type": "paragraph",
        "text": "What psychology says"
      },
      {
        "type": "paragraph",
        "text": "There’s a term called emotional suppression. It simply means pushing your feelings down so that things stay smooth on the outside. It’s helpful for a few minutes, like when you’re in a meeting or an exam hall and can’t fall apart right now."
      },
      {
        "type": "paragraph",
        "text": "The problem begins when it becomes a habit. Researchers have found that constantly hiding emotions doesn’t make them disappear. They stay inside, often showing up later as irritability, tiredness, or sudden tears over something small. (If you’ve ever cried at a random moment and wondered “why?”, this might be part of the answer.)"
      },
      {
        "type": "paragraph",
        "text": "So what do we do?"
      },
      {
        "type": "paragraph",
        "text": "I don’t think the answer is to announce our pain to everyone. Not everyone deserves access to it, and that’s okay."
      },
      {
        "type": "paragraph",
        "text": "But maybe we can start smaller:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Replace “I’m fine” with “I’m a little tired today” with one safe person.",
          "Tell the truth first to yourself: “I’m hurt, and that’s allowed.”",
          "Be the person who asks “How are you?” and then waits for the real answer."
        ]
      },
      {
        "type": "paragraph",
        "text": "Being honest doesn’t need a big speech. Sometimes it’s just five words: “I’m not okay today.”"
      },
      {
        "type": "paragraph",
        "text": "I think many of us are walking around carrying heavy things while smiling and saying “fine.” And maybe someone near you is doing it right now."
      },
      {
        "type": "paragraph",
        "text": "Now I want to ask you: When was the last time you said “I’m fine” but didn’t mean it? And what do you think would have happened if you’d told the truth?"
      },
      {
        "type": "paragraph",
        "text": "Tell me in the comments. This is a safe place for your 2 am thoughts. 🤍"
      }
    ]
  },
  {
    "issueNumber": "20",
    "slug": "why-do-i-cry",
    "title": "Why do I cry!?",
    "publishedAt": "2026-08-06T10:42:28.937-07:00",
    "displayDate": "August 6, 2026",
    "shortDate": "Aug 6, 2026",
    "category": "Emotional Life",
    "description": "A short, tender meditation on unexplained tears and the quiet pressure to justify emotions that have simply been carried for too long.",
    "keywords": [
      "crying",
      "tears",
      "emotions",
      "overwhelm",
      "vulnerability",
      "sensitivity"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/08/why-do-i-cry.html",
    "wordCount": 260,
    "readingTimeMinutes": 1,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "First, crying doesn't mean you're dramatic or unachievable, but crying has no reasons,"
      },
      {
        "type": "paragraph",
        "text": "You may cry just because all your emotions mixed up or you may cry because you did something wrong, or just a person raised their own voice,"
      },
      {
        "type": "paragraph",
        "text": "Sometimes I've cried in the middle of a normal day, for no reason I could explain to anyone, and I used to think something was wrong with me for that. But I've stopped believing that. Crying isn't a malfunction. It's just what happens when you've been holding too much for too long, and your body decides it's had enough of holding it quietly."
      },
      {
        "type": "paragraph",
        "text": "Nobody warns you that some days, the tears show up before the reason does. You cry first, and then spend the rest of the day trying to figure out why. Was it something someone said? Was it something you didn't say? Or was it just everything, all at once, finally spilling over because there was nowhere left to put it?"
      },
      {
        "type": "paragraph",
        "text": "I think we've been taught to treat crying like it needs a justification. Like you owe someone an explanation for your own tears. But some of the heaviest things we carry don't have a name. They're just there, sitting quietly, until one small thing — a raised voice, a tired evening, an old memory — tips it over the edge."
      },
      {
        "type": "paragraph",
        "text": "So maybe the question isn't really \"why do I cry.\" Maybe it's \"why did I think I had to explain it.\""
      },
      {
        "type": "paragraph",
        "text": "What about you — do you need a reason to cry, or does it just happen?"
      }
    ]
  },
  {
    "issueNumber": "19",
    "slug": "why-are-successful-women-still-seen-as",
    "title": "Why Are Successful Women Still Seen as a Threat?",
    "publishedAt": "2026-06-10T08:49:29.524-07:00",
    "displayDate": "June 10, 2026",
    "shortDate": "Jun 10, 2026",
    "category": "Society & Expectations",
    "description": "A sharp essay on the double standards facing ambitious women—why female achievement is scrutinised where male ambition is celebrated, and why society must grow bigger rather than asking women to shrink.",
    "keywords": [
      "women",
      "ambition",
      "success",
      "double standards",
      "society",
      "equality",
      "gender"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/06/why-are-successful-women-still-seen-as.html",
    "wordCount": 498,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "From childhood, girls are told to dream big."
      },
      {
        "type": "paragraph",
        "text": "Study hard. Get good grades. Build a career. Be independent. Become something."
      },
      {
        "type": "paragraph",
        "text": "Yet the moment a woman actually achieves those things, society suddenly becomes uncomfortable."
      },
      {
        "type": "paragraph",
        "text": "She is called intimidating instead of inspiring. Bossy instead of confident. Arrogant instead of ambitious."
      },
      {
        "type": "paragraph",
        "text": "The question is simple: if success is admirable, why does it become controversial when it belongs to a woman?"
      },
      {
        "type": "paragraph",
        "text": "The world has spent centuries celebrating successful men. Powerful men are respected. Wealthy men are admired. Ambitious men are seen as leaders. Their success is often treated as proof of intelligence, discipline, and hard work."
      },
      {
        "type": "paragraph",
        "text": "Women, however, are frequently judged by a different standard."
      },
      {
        "type": "paragraph",
        "text": "When a woman succeeds, people often become less interested in her achievements and more interested in everything else. Is she married? Does she want children? Is she too career-focused? Is she attractive? Is she \"feminine enough\"?"
      },
      {
        "type": "paragraph",
        "text": "Questions that rarely follow successful men seem to follow successful women everywhere."
      },
      {
        "type": "paragraph",
        "text": "The double standard becomes even more obvious in relationships."
      },
      {
        "type": "paragraph",
        "text": "Many men claim to support ambitious women. They celebrate women becoming educated, independent, and financially stable. But support can become uncomfortable when a woman earns more, receives greater recognition, or achieves a higher social status."
      },
      {
        "type": "paragraph",
        "text": "Suddenly, equality no longer feels so simple."
      },
      {
        "type": "paragraph",
        "text": "A woman is encouraged to succeed, but not too much."
      },
      {
        "type": "paragraph",
        "text": "She should be intelligent, but not smarter than the men around her. Ambitious, but not more ambitious. Successful, but not more successful. Confident, but never confident enough to challenge male authority."
      },
      {
        "type": "paragraph",
        "text": "For generations, society has taught men that their value comes from being providers, leaders, and protectors. There is nothing wrong with these qualities. The problem begins when some people believe a man can only feel valuable if he stands above women."
      },
      {
        "type": "paragraph",
        "text": "When that belief exists, a successful woman is not seen as another person achieving great things. She is seen as a threat."
      },
      {
        "type": "paragraph",
        "text": "But a woman's success does not take anything away from a man."
      },
      {
        "type": "paragraph",
        "text": "A woman receiving a promotion does not make a man less talented. A woman building a business does not make a man less capable. A woman earning more money does not reduce a man's worth."
      },
      {
        "type": "paragraph",
        "text": "Success is not a limited resource."
      },
      {
        "type": "paragraph",
        "text": "The real issue is not female success. The real issue is insecurity disguised as criticism."
      },
      {
        "type": "paragraph",
        "text": "Throughout history, women have been expected to make themselves smaller for the comfort of others. To speak less. Dream less. Achieve less. Earn less. Shine less."
      },
      {
        "type": "paragraph",
        "text": "And many still do."
      },
      {
        "type": "paragraph",
        "text": "Not because they lack ability, but because society often rewards women who remain non-threatening and punishes those who refuse to shrink."
      },
      {
        "type": "paragraph",
        "text": "But women should not have to apologize for their ambitions."
      },
      {
        "type": "paragraph",
        "text": "They should not have to hide their achievements to protect fragile egos. They should not have to choose between being respected and being successful."
      },
      {
        "type": "paragraph",
        "text": "The solution is not for women to become smaller."
      },
      {
        "type": "paragraph",
        "text": "The solution is for society to become bigger."
      },
      {
        "type": "paragraph",
        "text": "A woman shining is not a man's failure."
      },
      {
        "type": "paragraph",
        "text": "It is simply a woman shining."
      }
    ]
  },
  {
    "issueNumber": "18",
    "slug": "i-dont-want-to-disappear-i-just-want-to",
    "title": "I Don't Want to Disappear. I Just Want to Stop Being Exhausted by People.",
    "publishedAt": "2026-05-19T08:10:39.076-07:00",
    "displayDate": "May 19, 2026",
    "shortDate": "May 19, 2026",
    "category": "Emotional Life",
    "description": "A deep, candid essay on emotional fatigue and compassion fatigue—distinguishing between isolation and standards, and returning to oneself after giving from an empty cup.",
    "keywords": [
      "emotional fatigue",
      "compassion fatigue",
      "solitude",
      "boundaries",
      "exhaustion",
      "silence",
      "relationships"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/05/i-dont-want-to-disappear-i-just-want-to.html",
    "wordCount": 1382,
    "readingTimeMinutes": 6,
    "featuredRank": 2,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Lately, I have been feeling this strange, quiet urge to disappear."
      },
      {
        "type": "paragraph",
        "text": "Not dramatically. Not with anger. Not in the way that needs an audience or an explanation or a goodbye. Just — quietly. The way a candle goes out when the room is finally still enough."
      },
      {
        "type": "paragraph",
        "text": "I have been sitting with this feeling for a while now, trying to understand it rather than perform it. And what I found underneath it was not what I expected."
      },
      {
        "type": "paragraph",
        "text": "It was not loneliness. It was not sadness. It was not even introversion, exactly."
      },
      {
        "type": "paragraph",
        "text": "It was exhaustion. A very specific kind that nobody really talks about — the kind that comes not from doing too much, but from feeling too much, for too long, for people who were never really feeling it back."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Psychology of Emotional Fatigue"
      },
      {
        "type": "paragraph",
        "text": "There is a term in psychology called compassion fatigue — originally used to describe what happens to therapists, caregivers, and nurses who give emotional support for a living. But increasingly, researchers are recognising it in ordinary people too. Anyone who has spent extended time being emotionally available in relationships that don't reciprocate that availability."
      },
      {
        "type": "paragraph",
        "text": "The symptoms are quieter than burnout. They don't announce themselves. They arrive as a slow withdrawal — from conversations, from social plans, from the version of yourself that used to show up easily and enthusiastically for other people."
      },
      {
        "type": "paragraph",
        "text": "You start to notice that certain interactions leave you more depleted than before. That you are calculating how much energy a conversation will cost before you have it. That you feel a specific, low-level dread when your phone lights up with certain names."
      },
      {
        "type": "paragraph",
        "text": "That is not antisocial behaviour. That is your nervous system telling you something important: you have been giving from an empty cup for too long."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What Actually Changed"
      },
      {
        "type": "paragraph",
        "text": "The older I get, the more I notice something I couldn't have articulated at seventeen: not all connections are nourishing."
      },
      {
        "type": "paragraph",
        "text": "Some people come to you when they need comfort. They leave when they have it.\nSome people come to you when they need an audience. They leave when you stop performing.\nSome people come to you when they need access to the version of you that is always available, always understanding, always ready to translate your own pain in a way that makes them comfortable."
      },
      {
        "type": "paragraph",
        "text": "And you give it. Because you were taught that giving is what caring looks like. Because keeping the peace felt safer than naming the imbalance. Because somewhere along the way, you absorbed the idea that being needed was the same thing as being loved."
      },
      {
        "type": "paragraph",
        "text": "It is not."
      },
      {
        "type": "paragraph",
        "text": "Being needed is transactional. Being loved is chosen — freely, consistently, even when you have nothing to offer."
      },
      {
        "type": "paragraph",
        "text": "The people who have confused these two things in your life are not necessarily cruel. Many of them don't even know they're doing it. But the impact on you is real regardless of their intention. And your exhaustion is valid regardless of whether they meant to cause it."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "Why Silence Became Safer"
      },
      {
        "type": "paragraph",
        "text": "Somewhere along the way, silence stopped feeling like loneliness and started feeling like relief."
      },
      {
        "type": "paragraph",
        "text": "I used to worry about that shift. I thought it meant something was wrong with me. That I had become cold, or closed off, or difficult in some way I hadn't noticed."
      },
      {
        "type": "paragraph",
        "text": "But I think what actually happened is simpler and more important than that:"
      },
      {
        "type": "paragraph",
        "text": "I started paying attention to how I felt during and after different interactions. And I started trusting what I noticed."
      },
      {
        "type": "paragraph",
        "text": "Cold nights. Music before sleep. A quiet room with no performance required. Books that ask things of me in a way that doesn't drain me. These things started to feel like home in a way that certain conversations never did."
      },
      {
        "type": "paragraph",
        "text": "Not because solitude is inherently better than connection. But because genuine solitude — chosen, peaceful, restorative — is fundamentally different from the loneliness of being misunderstood in a crowd. And I had spent so long experiencing the second one while calling it community that I had forgotten what the first one felt like."
      },
      {
        "type": "paragraph",
        "text": "Silence became safer because it asked nothing of me that I wasn't willing to give."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Exhaustion of Constantly Explaining Yourself"
      },
      {
        "type": "paragraph",
        "text": "This is the part that I think most people recognise but rarely name directly:"
      },
      {
        "type": "paragraph",
        "text": "The particular exhaustion of having to explain your feelings to people who don't understand them — not because they can't, but because they won't."
      },
      {
        "type": "paragraph",
        "text": "There is a difference between someone who is trying to understand you and failing and someone who is not trying at all. The first one is a human limitation. The second one is a choice. And when you spend years offering your emotional interior to people who are essentially reading it without interest — only to tell you you're overreacting, too sensitive, too much, too complicated — something in you eventually decides that staying quiet is safer than risking that response again."
      },
      {
        "type": "paragraph",
        "text": "This is not avoidance. This is pattern recognition."
      },
      {
        "type": "paragraph",
        "text": "Your nervous system has learned, through repetition and evidence, that certain environments are not safe for the full version of you. And it is protecting you accordingly."
      },
      {
        "type": "paragraph",
        "text": "The problem is that this protection, if left unexamined, can generalise. It can start applying to everyone — the safe people and the unsafe ones — until you find yourself retreating from connection entirely rather than just from the connections that were costing you."
      },
      {
        "type": "paragraph",
        "text": "That is the work: learning to distinguish between exhaustion that is telling you to leave a specific dynamic, and exhaustion that is telling you to rest."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What I Actually Want"
      },
      {
        "type": "paragraph",
        "text": "I want to be clear about something, because I think this feeling is often misread by the people around us and sometimes by ourselves."
      },
      {
        "type": "paragraph",
        "text": "I do not want isolation. I do not want to permanently disappear from everyone. I do not think human connection is overrated or that I have evolved beyond needing it."
      },
      {
        "type": "paragraph",
        "text": "What I want is something much more specific and much harder to find:"
      },
      {
        "type": "paragraph",
        "text": "I want to stop feeling exhausted around people."
      },
      {
        "type": "paragraph",
        "text": "I want conversations that don't cost more than they give. I want to be around people who don't require me to explain why I feel what I feel. I want to exist in a room without calculating how much of myself to hide in order to be accepted."
      },
      {
        "type": "paragraph",
        "text": "I want maybe one or two people I can be fully present with — not performing presence, actually present — without the low hum of anxiety that comes from wondering whether I'm too much or not enough or misunderstood again."
      },
      {
        "type": "paragraph",
        "text": "That is not isolation. That is a standard. And standards, in a world that confuses availability with love, can feel like withdrawal to the people who benefited most from you having none."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "So If I Seem Distant"
      },
      {
        "type": "paragraph",
        "text": "If I reply less. If I choose solitude over plans. If I seem quieter than I used to be — this is what I want you to understand:"
      },
      {
        "type": "paragraph",
        "text": "I am not punishing anyone. I am not cold. I am not broken or going through something I need to be fixed out of."
      },
      {
        "type": "paragraph",
        "text": "I am learning, slowly and imperfectly, that protecting my energy is not the same as abandoning people. That choosing myself is not a betrayal of others. That a person who is genuinely rested and restored is capable of far more real connection than a person who has depleted themselves performing it."
      },
      {
        "type": "paragraph",
        "text": "I am stepping away from the noise — not permanently, not dramatically — but long enough to remember what it feels like to be in a room and not be exhausted by it."
      },
      {
        "type": "paragraph",
        "text": "That is not distance."
      },
      {
        "type": "paragraph",
        "text": "That is returning to myself."
      },
      {
        "type": "paragraph",
        "text": "And when I come back — and I will come back — I will be far more present than I ever was when I was always available."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "Emotional exhaustion is real. It doesn't always look like crying or a breakdown. Sometimes it looks like quiet rooms, ignored calls, and a deep preference for your own company."
      },
      {
        "type": "paragraph",
        "text": "If you are there right now, you are not broken. You are just someone who has been giving for a long time without enough coming back."
      },
      {
        "type": "paragraph",
        "text": "Rest. Return. Choose who gets access to the full version of you."
      },
      {
        "type": "paragraph",
        "text": "You are allowed to be selective with your energy. That is not selfishness."
      },
      {
        "type": "paragraph",
        "text": "That is survival. And eventually, it becomes peace. 🤍"
      }
    ]
  },
  {
    "issueNumber": "17",
    "slug": "the-power-of-believing-before-applause",
    "title": "The Power of Believing Before the Applause",
    "publishedAt": "2026-05-10T05:30:00.000-07:00",
    "displayDate": "May 10, 2026",
    "shortDate": "May 10, 2026",
    "category": "Becoming & Conviction",
    "description": "On carrying an unpopular vision through mockery and scrutiny before validation arrives—reflected through public conviction, perseverance, and Vijay's journey in Tamil Nadu.",
    "keywords": [
      "vision",
      "belief",
      "perseverance",
      "criticism",
      "dreams",
      "Vijay",
      "Tamil Nadu",
      "applause"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/05/the-power-of-believing-before-applause.html",
    "wordCount": 744,
    "readingTimeMinutes": 3,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Every dream looks unrealistic in the beginning."
      },
      {
        "type": "paragraph",
        "text": "Because people can only believe in what they already understand. Anything bigger than their imagination immediately becomes impossible in their eyes. The moment someone dreams too big, society starts questioning them."
      },
      {
        "type": "paragraph",
        "text": "‘Who does he think he is?’"
      },
      {
        "type": "paragraph",
        "text": "‘That will never happen.’"
      },
      {
        "type": "paragraph",
        "text": "‘Be realistic.’"
      },
      {
        "type": "paragraph",
        "text": "The strange thing about vision is that the person who sees it first is usually standing alone. No applause. No support. No guarantee. Just an unexplainable belief inside them that refuses to die."
      },
      {
        "type": "paragraph",
        "text": "And honestly, that kind of confidence scares people. Not because it is wrong, but because most people gave up on their own dreams a long time ago."
      },
      {
        "type": "paragraph",
        "text": "History has always treated dreamers the same way. First, they are laughed at. Then they are criticised. Then doubted. And finally, when they succeed, the same people call them legends."
      },
      {
        "type": "paragraph",
        "text": "The world only respects belief after it becomes reality. Before success, belief is called arrogance. After success, the same belief becomes inspiration."
      },
      {
        "type": "paragraph",
        "text": "That is why people like Vijay stand differently in the eyes of millions. Not just because of cinema. Not just because of fame. But because of the belief he carried through every stage of his life."
      },
      {
        "type": "paragraph",
        "text": "There was a time when people laughed at the idea of him becoming more than an actor. They mocked the vision. They questioned the purpose. They spoke as if dreaming beyond cinema was impossible."
      },
      {
        "type": "paragraph",
        "text": "But dreamers are always misunderstood before they are understood."
      },
      {
        "type": "paragraph",
        "text": "And today, many people proudly say the words,"
      },
      {
        "type": "paragraph",
        "text": "“CM of Tamil Nadu, Vijay.”"
      },
      {
        "type": "paragraph",
        "text": "Not because success was easily given to him."
      },
      {
        "type": "paragraph",
        "text": "But because he continued walking despite criticism, doubt, pressure, and endless judgment."
      },
      {
        "type": "paragraph",
        "text": "He was never simply walking toward power or popularity. He was walking toward a vision only he could fully understand. Every move he made was watched. Every silence was analysed. Every step forward came with resistance."
      },
      {
        "type": "paragraph",
        "text": "People mocked him when he stayed quiet."
      },
      {
        "type": "paragraph",
        "text": "People mocked him when he spoke."
      },
      {
        "type": "paragraph",
        "text": "People doubted him when he succeeded."
      },
      {
        "type": "paragraph",
        "text": "And doubted him even more when he aimed higher."
      },
      {
        "type": "paragraph",
        "text": "But some people are built differently. The louder the noise becomes, the stronger their belief grows."
      },
      {
        "type": "paragraph",
        "text": "That is what makes certain individuals unforgettable. They continue walking even when the road turns lonely. They continue believing even when the world keeps asking them to stop."
      },
      {
        "type": "paragraph",
        "text": "Many people dream."
      },
      {
        "type": "paragraph",
        "text": "Very few survive the pressure that comes with dreaming publicly."
      },
      {
        "type": "paragraph",
        "text": "Because dreaming in silence is easy. But standing in front of millions, carrying expectations, criticism, comparisons, and still believing in yourself — that requires a different kind of strength."
      },
      {
        "type": "paragraph",
        "text": "There is a reason why people connect emotionally with Vijay. It is not just about movies or stardom. People see perseverance in him. They see someone who kept moving forward despite years of judgment and resistance."
      },
      {
        "type": "paragraph",
        "text": "A person who understood that greatness is never handed over peacefully. It must be walked toward, step by step, while the world keeps throwing doubt in your direction."
      },
      {
        "type": "paragraph",
        "text": "And maybe that is why his journey feels personal to so many people. Because deep down, everyone wants to believe that persistence can defeat doubt. That faith can survive criticism. That one day, the same people who laughed will finally understand the vision they once mocked."
      },
      {
        "type": "paragraph",
        "text": "The world often celebrates victory without respecting the years of loneliness behind it. People see the applause but not the sacrifices. They see the success but not the nights filled with uncertainty, pressure, and emotional exhaustion."
      },
      {
        "type": "paragraph",
        "text": "But those difficult years shape extraordinary people."
      },
      {
        "type": "paragraph",
        "text": "A normal person stops when they are criticised"
      },
      {
        "type": "paragraph",
        "text": "."
      },
      {
        "type": "paragraph",
        "text": "A normal person breaks when they are doubted repeatedly."
      },
      {
        "type": "paragraph",
        "text": "A normal person chooses comfort over uncertainty."
      },
      {
        "type": "paragraph",
        "text": "But some people continue."
      },
      {
        "type": "paragraph",
        "text": "Not because the journey is easy."
      },
      {
        "type": "paragraph",
        "text": "Not because they never feel pain."
      },
      {
        "type": "paragraph",
        "text": "But because their belief becomes stronger than the fear around them."
      },
      {
        "type": "paragraph",
        "text": "That kind of belief is rare."
      },
      {
        "type": "paragraph",
        "text": "And whether people support him or oppose him, nobody can deny one thing about Vijay — he continued walking toward his vision without letting the world decide his limits for him."
      },
      {
        "type": "paragraph",
        "text": "That itself is inspiring."
      },
      {
        "type": "paragraph",
        "text": "Because in a world where most people are afraid to dream openly, seeing someone continue despite years of pressure reminds people that impossible things are sometimes achieved by those stubborn enough to keep believing."
      },
      {
        "type": "paragraph",
        "text": "Maybe that is the real power of vision."
      },
      {
        "type": "paragraph",
        "text": "The ability to see light long before the world notices it."
      },
      {
        "type": "paragraph",
        "text": "The courage to continue long before the applause arrives."
      },
      {
        "type": "paragraph",
        "text": "And the strength to believe in yourself… even when nobody else does.”"
      }
    ]
  },
  {
    "issueNumber": "16",
    "slug": "what-do-we-mean-by-irrespective",
    "title": "What Do We Mean By “Irrespective”?",
    "publishedAt": "2026-05-09T08:36:00.000-07:00",
    "displayDate": "May 9, 2026",
    "shortDate": "May 9, 2026",
    "category": "Society & Expectations",
    "description": "A concise interrogation of the phrase 'respect people irrespective of...'—asking why society ranks status, language, and wealth before basic human dignity.",
    "keywords": [
      "respect",
      "dignity",
      "equality",
      "class",
      "humanity",
      "society",
      "labels"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/05/what-do-we-mean-by-irrespective.html",
    "wordCount": 229,
    "readingTimeMinutes": 1,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Let me start with a quote."
      },
      {
        "type": "paragraph",
        "text": "People say, ‘You must respect someone irrespective of their…’"
      },
      {
        "type": "paragraph",
        "text": "But wait — who taught us to respect people by first separating them into categories?"
      },
      {
        "type": "paragraph",
        "text": "What do we even call ‘irrespective’ here?"
      },
      {
        "type": "paragraph",
        "text": "Their identity?"
      },
      {
        "type": "paragraph",
        "text": "Their hometown?"
      },
      {
        "type": "paragraph",
        "text": "Their age?"
      },
      {
        "type": "paragraph",
        "text": "Their salary?"
      },
      {
        "type": "paragraph",
        "text": "Their house?"
      },
      {
        "type": "paragraph",
        "text": "If respect changes because of these things, then was it ever really respect?"
      },
      {
        "type": "paragraph",
        "text": "Maybe the problem begins the moment we create an ‘irrespective.’"
      },
      {
        "type": "paragraph",
        "text": "Because before status, before labels, before differences — aren’t we all just humans?"
      },
      {
        "type": "paragraph",
        "text": "A rich person doesn’t deserve respect because they’re rich."
      },
      {
        "type": "paragraph",
        "text": "A poor person shouldn’t have to earn respect because they struggle."
      },
      {
        "type": "paragraph",
        "text": "Someone from a famous city is no more valuable than someone from a forgotten village."
      },
      {
        "type": "paragraph",
        "text": "Yet society silently teaches us rankings before humanity."
      },
      {
        "type": "paragraph",
        "text": "We judge clothes before character."
      },
      {
        "type": "paragraph",
        "text": "English before kindness."
      },
      {
        "type": "paragraph",
        "text": "Followers before honesty."
      },
      {
        "type": "paragraph",
        "text": "Money before morals."
      },
      {
        "type": "paragraph",
        "text": "And then we say, ‘Respect everyone equally.’"
      },
      {
        "type": "paragraph",
        "text": "But equality doesn’t start in words."
      },
      {
        "type": "paragraph",
        "text": "It starts in the way we look at people when they have nothing to offer us."
      },
      {
        "type": "paragraph",
        "text": "Because true respect is not charity."
      },
      {
        "type": "paragraph",
        "text": "It is not sympathy."
      },
      {
        "type": "paragraph",
        "text": "It is not something we “give” only when someone fits our standards."
      },
      {
        "type": "paragraph",
        "text": "Real respect is recognising that another human being carries a life as deep, painful, beautiful, and meaningful as yours."
      },
      {
        "type": "paragraph",
        "text": "Maybe one day, we’ll stop saying ‘respect people irrespective of…’"
      },
      {
        "type": "paragraph",
        "text": "And simply say,"
      },
      {
        "type": "paragraph",
        "text": "‘Respect people because they are people"
      }
    ]
  },
  {
    "issueNumber": "15",
    "slug": "20-days-of-silence-what-disappearing",
    "title": "20 Days of Silence — What Disappearing Taught Me About Who I Am",
    "publishedAt": "2026-05-03T03:51:00.000-07:00",
    "displayDate": "May 3, 2026",
    "shortDate": "May 3, 2026",
    "category": "Becoming & Conviction",
    "description": "What three weeks away from writing during exams and exhaustion revealed about flow state, creative necessity, and returning to the page without chasing algorithms.",
    "keywords": [
      "silence",
      "writing",
      "flow state",
      "consistency",
      "burnout",
      "creativity",
      "returning"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/05/20-days-of-silence-what-disappearing.html",
    "wordCount": 375,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "I went quiet for 20 days."
      },
      {
        "type": "paragraph",
        "text": "Not intentionally. Not dramatically. Life just got loud in the way it always does — exams, exhaustion, the particular kind of numbness that arrives when you've been running on empty for too long. And somewhere in the noise, I stopped writing."
      },
      {
        "type": "paragraph",
        "text": "I want to tell you what those 20 days felt like. And what they taught me."
      },
      {
        "type": "paragraph",
        "text": "At first, the silence felt like relief. No pressure to post, no thinking about captions, no wondering whether what I had to say was worth saying. Just existing — quietly, without an audience, without a purpose that needed performing."
      },
      {
        "type": "paragraph",
        "text": "But then something strange happened."
      },
      {
        "type": "paragraph",
        "text": "I started to miss it. Not the numbers or the views or the validation of someone saving a post. I missed the thinking. The sitting with a feeling long enough to find words for it. The particular satisfaction of taking something tangled inside my head and making it legible on a page."
      },
      {
        "type": "paragraph",
        "text": "Psychology has a term for this — flow state. The condition of being so absorbed in a meaningful activity that everything else falls away. Writing, for me, is flow. And 20 days without it felt like 20 days without oxygen — survivable, but only barely."
      },
      {
        "type": "paragraph",
        "text": "Here is what disappearing taught me:"
      },
      {
        "type": "paragraph",
        "text": "You are not your consistency. The algorithm punishes absence. Real readers don't. The people who are meant to find your work will find it whether you posted yesterday or three weeks ago."
      },
      {
        "type": "paragraph",
        "text": "Silence is not failure. Sometimes silence is the only honest response to a season that is asking too much of you."
      },
      {
        "type": "paragraph",
        "text": "But also — and this is the part I need you to hear — what you create matters. Not because of the views. Not because of the followers. Because the act of making something true is one of the most human things you can do. And every day you don't do it, something in you goes a little quieter."
      },
      {
        "type": "paragraph",
        "text": "I am back. Not because I have everything figured out. Not because I feel inspired or ready or consistent."
      },
      {
        "type": "paragraph",
        "text": "I am back because the alternative — staying quiet forever — is the one thing that actually scares me."
      },
      {
        "type": "paragraph",
        "text": "💬 Have you ever gone quiet and struggled to come back? What brought you back?"
      }
    ]
  },
  {
    "issueNumber": "14",
    "slug": "just-because-its-been-normalized-by",
    "title": "Just because it's been normalized by society doesn't mean it is right",
    "publishedAt": "2026-04-13T03:41:00.000-07:00",
    "displayDate": "April 13, 2026",
    "shortDate": "Apr 13, 2026",
    "category": "Society & Expectations",
    "description": "An unflinching critique of social habits passed off as tradition—from dismissing artistic careers and policing young adults to turning children into retirement plans.",
    "keywords": [
      "society",
      "tradition",
      "questioning",
      "Indian culture",
      "careers",
      "gender",
      "mental health",
      "obedience"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/just-because-its-been-normalized-by.html",
    "wordCount": 1070,
    "readingTimeMinutes": 5,
    "featuredRank": 4,
    "blocks": [
      {
        "type": "heading",
        "text": "Just Because Society Normalised It Doesn't Mean It's Right"
      },
      {
        "type": "paragraph",
        "text": "Why do people always listen to things that make absolutely no sense? I have a theory."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "It's because we were never taught to question. We were taught to behave."
      },
      {
        "type": "paragraph",
        "text": "Always nod. Never ask. Always follow. Never wonder why."
      },
      {
        "type": "paragraph",
        "text": "And somewhere along the way, we confused obedience with discipline — and lost something far more valuable in the process. Common sense."
      },
      {
        "type": "paragraph",
        "text": "So let me stop talking theory and give you the examples you already know are true."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "\"Beta, only three options: Doctor, Engineer, or Lawyer.\""
      },
      {
        "type": "paragraph",
        "text": "We live in a country where art is literally everywhere. In our temples, our textiles, our cinema, our classical music, our literature. We come from a civilisation that praised poets and writers for centuries. Kalidasa was celebrated. Thiruvalluvar was celebrated. Tagore won a Nobel Prize."
      },
      {
        "type": "paragraph",
        "text": "And yet — choosing art in 2026 means you've chosen failure."
      },
      {
        "type": "paragraph",
        "text": "Being a writer means you're wasting your time."
      },
      {
        "type": "paragraph",
        "text": "Being a musician means your parents have something to explain to relatives."
      },
      {
        "type": "paragraph",
        "text": "The biggest irony? The same society that tells you art is useless will spend thousands on movie tickets, stream music all day, read novels at night — and then look at their own child and say \"this is not a stable career.\""
      },
      {
        "type": "paragraph",
        "text": "We consume the art. We just refuse to let our children make it."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Opinion Economy"
      },
      {
        "type": "paragraph",
        "text": "Here's another thing society has completely normalised: everyone has an opinion about your life, and somehow their opinion matters more than yours does."
      },
      {
        "type": "paragraph",
        "text": "Your career. Your marriage. Your clothes. Your weight. Your choices. All public property."
      },
      {
        "type": "paragraph",
        "text": "In India, even weddings — one of the most personal moments of two people's lives — are planned, approved, and sometimes entirely decided by people who are not the bride or the groom. The couple cannot choose who to invite, when to plan, or sometimes even who to marry — but a distant uncle who hasn't visited in four years has full voting rights on the matter."
      },
      {
        "type": "paragraph",
        "text": "And the worst part? We call this \"family involvement.\" We've made it sound warm. Loving, even."
      },
      {
        "type": "paragraph",
        "text": "It is not loving to take someone's choices away from them and call it tradition."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "Uncle Sharma's Course"
      },
      {
        "type": "paragraph",
        "text": "And then there is the classic — the random course that suddenly becomes essential because Uncle Sharma mentioned it at a family dinner."
      },
      {
        "type": "paragraph",
        "text": "Uncle Sharma, who does not know your child. Who does not know what the course involves? Who has not done a single day of research? But he said it with confidence at the dining table, and now it is gospel."
      },
      {
        "type": "paragraph",
        "text": "Meanwhile, your child has been telling you for two years what they actually want. Quietly. Hopefully. And getting ignored."
      },
      {
        "type": "paragraph",
        "text": "We trust strangers with our children's futures more than we trust our children themselves. And we have completely normalised this."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Gender Maths That Makes No Sense"
      },
      {
        "type": "paragraph",
        "text": "This one. This one, I need you to sit with."
      },
      {
        "type": "paragraph",
        "text": "A 22-year-old girl is not old enough to go on a trip with her friends."
      },
      {
        "type": "paragraph",
        "text": "But she is grown enough to get married, move into a stranger's house, manage a household, and have children."
      },
      {
        "type": "paragraph",
        "text": "A 22-year-old boy is not allowed to enjoy the salary he earned."
      },
      {
        "type": "paragraph",
        "text": "But he is old enough to carry the weight of every family debt and be called selfish if he wants anything for himself."
      },
      {
        "type": "paragraph",
        "text": "Both of them — the girl and the boy — just want to live. To breathe. To figure out who they are before the world assigns them a role they never auditioned for."
      },
      {
        "type": "paragraph",
        "text": "But society has decided that 22 is simultaneously too young for freedom and too old to not be useful yet."
      },
      {
        "type": "paragraph",
        "text": "Both need to be allowed to just exist for a moment. Is that really too much?"
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "Children as Retirement Plans"
      },
      {
        "type": "paragraph",
        "text": "Let me say this as plainly as I can."
      },
      {
        "type": "paragraph",
        "text": "The society we live in has quietly turned children into retirement plans."
      },
      {
        "type": "paragraph",
        "text": "You didn't choose to be born. You didn't sign a contract. And yet somewhere along the way, the message becomes clear: your purpose is to repay a debt you never agreed to take on."
      },
      {
        "type": "paragraph",
        "text": "No Indian parent will sit at a dinner party and proudly say, \"I let my son go to therapy.\" But they will proudly announce every coaching class, every certification course, every achievement — most of which the child didn't choose and doesn't enjoy."
      },
      {
        "type": "paragraph",
        "text": "Mental health is invisible. Performance is everything."
      },
      {
        "type": "paragraph",
        "text": "And we have normalised this so completely that the children who are suffering inside while performing perfectly on the outside don't even know they're allowed to say something is wrong."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Woman Who Stands Up for Herself"
      },
      {
        "type": "paragraph",
        "text": "If a woman quietly does everything society tells her to — the clothes, the roles, the silence, the service — she is a good woman. Respectful. Well-raised."
      },
      {
        "type": "paragraph",
        "text": "The moment she stands up for herself — has an opinion, sets a boundary, refuses something — she becomes a problem. Too modern. Too much. Bad influence."
      },
      {
        "type": "paragraph",
        "text": "There is a quote going around social media right now:"
      },
      {
        "type": "paragraph",
        "text": "\"A woman supporting certain traditions is like a chicken supporting KFC.\""
      },
      {
        "type": "paragraph",
        "text": "It sounds funny on the surface. But sit with it."
      },
      {
        "type": "paragraph",
        "text": "Because if you actually go through the rules embedded in most organised religious and social traditions — across cultures, across religions — the pattern is consistent: women are defined by their service. Their worth is measured by how much they give and how little they demand."
      },
      {
        "type": "paragraph",
        "text": "We were handed these rules before we were old enough to question them. And then we were told that questioning them was disrespectful."
      },
      {
        "type": "paragraph",
        "text": "That's not faith. That's not tradition. That's control dressed in the language of culture."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "So What Now?"
      },
      {
        "type": "paragraph",
        "text": "I'm not here to tell you to burn everything down. I'm not here to say your parents are villains or that tradition has no value."
      },
      {
        "type": "paragraph",
        "text": "I'm here to say one thing:"
      },
      {
        "type": "paragraph",
        "text": "Normalised does not mean right."
      },
      {
        "type": "paragraph",
        "text": "The fact that something has always been done this way is not a reason to keep doing it. It is just an explanation for how we got here — not a justification for staying."
      },
      {
        "type": "paragraph",
        "text": "You are allowed to question. You were always allowed to question."
      },
      {
        "type": "paragraph",
        "text": "Nobody taught you that. And that — more than anything else — is exactly the problem."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "Question everything that doesn't make sense.\nNot to be rebellious.\nBut because thinking for yourself is the most radical thing you can do in a society that was built on you not doing exactly that."
      }
    ]
  },
  {
    "issueNumber": "13",
    "slug": "on-becoming-how-rejection-silence-and",
    "title": "On Becoming: How Rejection, Silence, and Solitude Shape the Most Extraordinary People",
    "publishedAt": "2026-04-11T11:30:00.000-07:00",
    "displayDate": "April 11, 2026",
    "shortDate": "Apr 11, 2026",
    "category": "Becoming & Conviction",
    "description": "A long-form essay on how rejection, quiet seasons, and uncelebrated solitude forge genuine self-knowledge and an interior life independent of external approval.",
    "keywords": [
      "becoming",
      "rejection",
      "solitude",
      "silence",
      "self-knowledge",
      "default mode network",
      "depth"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/on-becoming-how-rejection-silence-and.html",
    "wordCount": 1721,
    "readingTimeMinutes": 8,
    "featuredRank": 1,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Why were the most interesting people built in silence?"
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "I have a theory."
      },
      {
        "type": "paragraph",
        "text": "The most extraordinary people you will ever meet — the ones who carry something in them that you cannot quite name, the ones who make you feel more awake just by being in the same room — were not born that way."
      },
      {
        "type": "paragraph",
        "text": "They were built. Slowly. Usually, without anyone watching. Almost always through something that, at the time, looked nothing like a gift."
      },
      {
        "type": "paragraph",
        "text": "They were built through the years, but nobody came for them. Through the rooms where they were overlooked, laughed at, or simply not chosen. Through the long stretches of solitude that most people spend trying to escape — and that these particular people, at some point, stopped running from."
      },
      {
        "type": "paragraph",
        "text": "This is a piece about those people. About what happens inside a person when pain has nowhere to go but inward. About what gets constructed in the silence that follows heartbreak, humiliation, and the quiet devastation of realising the world is not going to hand you what you need."
      },
      {
        "type": "paragraph",
        "text": "About becoming — not despite all of it, but because of it."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Ones Who Got Laughed At First"
      },
      {
        "type": "paragraph",
        "text": "Let's start at the beginning. Because the beginning is always the part that gets left out of the inspiring version of the story."
      },
      {
        "type": "paragraph",
        "text": "Before the extraordinary person was extraordinary, they were just a person. Young, probably. Uncertain, definitely. Trying, in the way that all young people try, to figure out where they fit and who they are and whether the world has a place for them specifically."
      },
      {
        "type": "paragraph",
        "text": "And something happened that told them — loudly, publicly, sometimes cruelly — that the answer was complicated."
      },
      {
        "type": "paragraph",
        "text": "Maybe they were bullied for something they couldn't control. Maybe they reached toward someone and got rejected. Maybe they tried to be seen and got laughed at instead. Maybe they loved something quietly for a long time and then, in one moment of vulnerability, let it show — and the world responded in a way that made them wish they hadn't."
      },
      {
        "type": "paragraph",
        "text": "These are not dramatic stories. They are ordinary ones. The kind that happens in classrooms and school corridors and village churchyards and bus rides home. The kind that don't make it into anyone's highlight reel because from the outside they look like nothing — just another teenage embarrassment, just another unrequited feeling, just another kid who got teased."
      },
      {
        "type": "paragraph",
        "text": "But inside the person they happened to, they were seismic."
      },
      {
        "type": "paragraph",
        "text": "Because pain at that age — real pain, the kind that comes from being seen in your vulnerability and finding the response inadequate — does one of two things to a person."
      },
      {
        "type": "paragraph",
        "text": "It makes them hard. Or it makes them deep."
      },
      {
        "type": "paragraph",
        "text": "And the ones it makes deep are the ones this piece is about."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What Rejection Actually Does to a Thinking Person"
      },
      {
        "type": "paragraph",
        "text": "Here is what nobody tells you about rejection: it is, in the right hands, one of the most precise instruments of self-knowledge that exists."
      },
      {
        "type": "paragraph",
        "text": "When you reach toward someone or something, and it doesn't reach back, you are left alone with a question that comfortable people never have to answer: Who am I when I am not chosen?"
      },
      {
        "type": "paragraph",
        "text": "Most people spend enormous energy avoiding that question. They fill the silence with noise. They find someone else to chase. They perform okay so consistently that eventually they convince even themselves."
      },
      {
        "type": "paragraph",
        "text": "But some people — the ones we are talking about — sit with the question. Not because they are masochists. Not because they enjoy the ache of it. But because something in them is constitutionally unable to look away from a true thing, even when the truth is uncomfortable."
      },
      {
        "type": "paragraph",
        "text": "They think about it. They turn it over. They ask themselves harder questions than the situation technically demands. Why did I want this so badly? What was I really looking for? What does it mean that it didn't come?"
      },
      {
        "type": "paragraph",
        "text": "And in asking those questions — in refusing to paper over the wound with distraction — they accidentally do something that most people never do at all."
      },
      {
        "type": "paragraph",
        "text": "They learn themselves."
      },
      {
        "type": "paragraph",
        "text": "Rejection, for a thinking person, is not the end of a story. It is the beginning of an interior life."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Turning Point That Looks Like Giving Up"
      },
      {
        "type": "paragraph",
        "text": "There comes a moment in the lives of these people that looks, from the outside, like surrender."
      },
      {
        "type": "paragraph",
        "text": "They stop chasing. They go quiet. They turn inward in a way that their friends might describe as becoming distant, serious, or strange. They start caring about things that don't make obvious social sense — philosophy, music, film, the kind of art that asks more of you than it gives back easily."
      },
      {
        "type": "paragraph",
        "text": "The people around them don't always know what to make of it. He used to be more fun. She used to come out more. They've changed."
      },
      {
        "type": "paragraph",
        "text": "Yes. That's exactly right. They have."
      },
      {
        "type": "paragraph",
        "text": "But what looks like withdrawal is actually construction. What looks like giving up on the world is actually the beginning of building something inside themselves that the world cannot take away — because it was never dependent on the world's approval to exist."
      },
      {
        "type": "paragraph",
        "text": "This is the phase that nobody celebrates in real time. There are no milestones for it, no certificates, no external markers of progress. It happens in bedrooms and bus rides and late nights with headphones in. It happens in the gap between who you were trying to be for other people and who you actually are when nobody is assigning you a role."
      },
      {
        "type": "paragraph",
        "text": "It is, I think, the most important phase in the formation of an extraordinary person. And it is almost entirely invisible while it's happening."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What Solitude Builds That Company Cannot"
      },
      {
        "type": "paragraph",
        "text": "There is a particular kind of intelligence that can only be developed alone."
      },
      {
        "type": "paragraph",
        "text": "Not book intelligence — though that often comes with it. Not technical skill or academic performance. Something quieter and more essential than those things. The ability to sit with a feeling without immediately needing to resolve it. The capacity to observe the world without constantly needing the world to observe you back. A relationship with your own mind that is rich enough to sustain you when external things fall away."
      },
      {
        "type": "paragraph",
        "text": "Psychologists call the brain's resting state — the mode it enters when external demands drop, and it turns its attention inward — the default mode network. It is the space where self-reflection deepens, where creativity emerges, and where the self is slowly assembled and understood. And it is a space that requires quiet to access properly."
      },
      {
        "type": "paragraph",
        "text": "The people who are forced into solitude — by circumstance, by rejection, by the simple fact of not fitting easily into the social world around them — spend more time in that space than others. And what they build there, over months and years of thinking and feeling and questioning, is an unusually coherent self. Unusually whole."
      },
      {
        "type": "paragraph",
        "text": "They know who they are. Not perfectly — nobody does — but more precisely than most. They have been alone with themselves long enough to have an honest relationship with what they find there."
      },
      {
        "type": "paragraph",
        "text": "And that self-knowledge is, ultimately, what makes them magnetic."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Irony That Completes the Story"
      },
      {
        "type": "paragraph",
        "text": "Here is where the story turns."
      },
      {
        "type": "paragraph",
        "text": "The person who was overlooked, rejected, laughed at — who turned inward, went quiet, stopped chasing — becomes, over time, the one that everyone notices."
      },
      {
        "type": "paragraph",
        "text": "Not because they changed their strategy. Not because they started performing differently or optimising themselves for external approval. But because they stopped needing it. And there is nothing — nothing — more compelling than a person who is entirely, unhurriedly themselves."
      },
      {
        "type": "paragraph",
        "text": "They walk into rooms and something shifts. Not because they are louder or more conventionally impressive, but because they carry a kind of settled quality that most people are still searching for. They are not performing. They are not angling. They are simply there — curious, present, complete in a way that draws people toward them almost involuntarily."
      },
      {
        "type": "paragraph",
        "text": "The people who once didn't choose them now want to be chosen by them."
      },
      {
        "type": "paragraph",
        "text": "And here is the final, beautiful irony: by then, they have learned to hold that lightly too. The approval that once felt like oxygen has become something they can take or leave. Not because they are cold, not because they stopped caring — but because they found, in the long years of solitude, something more sustaining than other people's opinions of them."
      },
      {
        "type": "paragraph",
        "text": "They found themselves. And it turns out that was what they were looking for all along."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What This Means for You"
      },
      {
        "type": "paragraph",
        "text": "If you are in the middle of it right now — the rejection, the silence, the phase that looks from the outside like you are falling behind — I want to say something directly to you."
      },
      {
        "type": "paragraph",
        "text": "You are not falling behind."
      },
      {
        "type": "paragraph",
        "text": "You are being built."
      },
      {
        "type": "paragraph",
        "text": "The years that feel like they are costing you something are the years that are giving you everything that will eventually matter. The solitude is not empty — it is full of you, slowly becoming more precisely yourself. The rejection did not diminish you — it redirected you, inward, toward the only source of validation that was ever going to be enough."
      },
      {
        "type": "paragraph",
        "text": "Not everyone gets the gift of being forced to find themselves. Some people drift through life sustained entirely by external approval, never once sitting alone long enough to ask who they actually are. They are no less worthy for it. But they carry a particular kind of hollowness that the built people do not."
      },
      {
        "type": "paragraph",
        "text": "You are being built."
      },
      {
        "type": "paragraph",
        "text": "The pain is the material. The silence is the workshop. The solitude is not your punishment — it is your most important teacher."
      },
      {
        "type": "paragraph",
        "text": "And one day — not in a dramatic, cinematic moment, but quietly, in the middle of an ordinary Tuesday — you will realise that you are no longer who you were in those hard years."
      },
      {
        "type": "paragraph",
        "text": "You will be who those years made you."
      },
      {
        "type": "paragraph",
        "text": "And you will understand, finally, that it was worth every single part of it."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "The most interesting people I know were assembled in rooms where nobody came."
      },
      {
        "type": "paragraph",
        "text": "They built themselves out of rejection and silence and the stubborn refusal to become bitter."
      },
      {
        "type": "paragraph",
        "text": "And then the world, which had ignored them so completely, turned around and couldn't look away."
      },
      {
        "type": "paragraph",
        "text": "That is not a coincidence."
      },
      {
        "type": "paragraph",
        "text": "That is just what becoming looks like — from the outside, and after the fact."
      }
    ]
  },
  {
    "issueNumber": "12",
    "slug": "when-female-authority-figures-treat",
    "title": "When Female Authority Figures Treat Girls and Boys Differently — A Girl's Perspective",
    "publishedAt": "2026-04-10T06:32:00.000-07:00",
    "displayDate": "April 10, 2026",
    "shortDate": "Apr 10, 2026",
    "category": "Society & Expectations",
    "description": "A careful, first-person observation of unequal warmth from female authority figures in classrooms and institutions—examining internalised patriarchy without villainising individuals.",
    "keywords": [
      "gender",
      "authority",
      "classrooms",
      "internalised patriarchy",
      "girls",
      "Tamil Nadu",
      "observation"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/when-female-authority-figures-treat.html",
    "wordCount": 1539,
    "readingTimeMinutes": 7,
    "featuredRank": null,
    "blocks": [
      {
        "type": "heading",
        "text": "She Smiled at Him. She Snapped at Me. And Nobody Else Seemed to Notice."
      },
      {
        "type": "paragraph",
        "text": "An observation I've been sitting with for a while."
      },
      {
        "type": "paragraph",
        "text": "Disclaimer:"
      },
      {
        "type": "paragraph",
        "text": "This blog is written entirely from a girl's perspective — because that is the only perspective I can speak from honestly."
      },
      {
        "type": "paragraph",
        "text": "I want to be clear: I am not saying this experience is exclusive to girls. The same dynamic almost certainly plays out for boys, too, in ways I haven't seen up close and therefore cannot speak to with the same honesty. A male staff member who is warm and playful with the girls and cold or dismissive with the boys — that exists too, I'm sure of it. And the boys on the receiving end of that probably feel something just as disorienting and just as difficult to name."
      },
      {
        "type": "paragraph",
        "text": "But I am a girl. I have sat in those rooms as a girl. I have exchanged that look with other girls. That is the experience I know well enough to write about without getting it wrong."
      },
      {
        "type": "paragraph",
        "text": "This is not a complete picture of the world — it is one window into it, from where I happen to be standing."
      },
      {
        "type": "paragraph",
        "text": "If you are a boy who has experienced the other side of this — the male version of what I've described here — I genuinely want to hear it. Drop it in the comments. Not to debate, not to compete, but because this conversation is bigger than one perspective, and yours deserves to be part of it too."
      },
      {
        "type": "paragraph",
        "text": "The more honestly we all talk about this, the closer we get to something that actually makes sense."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "I want to tell you about something I've noticed. Not once. Not twice. Enough times that I started paying attention to it the way you pay attention to a pattern once your brain decides it's real."
      },
      {
        "type": "paragraph",
        "text": "It goes like this."
      },
      {
        "type": "paragraph",
        "text": "There is a woman in a position of authority — a teacher, a staff member, someone with a lanyard and a register and the ability to decide whether your day goes smoothly or not. She walks into a room with both boys and girls. And something shifts depending on who she's talking to."
      },
      {
        "type": "paragraph",
        "text": "With the boys, she is warm. Playful, even. She laughs at things that aren't particularly funny. She leans into conversations. She remembers their names quickly, asks about their projects with genuine curiosity, lets small things slide — late submissions, incomplete work, noise. There is an ease to how she exists around them. Like she enjoys being in that room when they're the ones she's facing."
      },
      {
        "type": "paragraph",
        "text": "And then a girl speaks."
      },
      {
        "type": "paragraph",
        "text": "The temperature changes. Not dramatically — not in a way that anyone would officially call out. But it changes. The same warmth isn't there. The patience is shorter. The tone is a little more clipped, a little more critical. A girl who makes the same mistake a boy made five minutes ago gets a different response than the boy. A girl who asks a question that a boy already asked gets a different kind of answer — or a look that makes her wish she hadn't asked."
      },
      {
        "type": "paragraph",
        "text": "I've seen this in classrooms. I've seen it in college spaces. I've seen it in professional settings where the authority figure is old enough to know better and young enough that nobody questions her yet."
      },
      {
        "type": "paragraph",
        "text": "And every time, the girls in the room feel it — that quiet, disorienting thing where you can't quite prove what just happened but your body registered it completely."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "The Part That Makes It Complicated"
      },
      {
        "type": "paragraph",
        "text": "Here is what makes this particular dynamic so difficult to name: the woman doing it is not a villain."
      },
      {
        "type": "paragraph",
        "text": "She is not twirling a metaphorical moustache. She is probably not even aware of it. She might, if asked, describe herself as someone who gets along well with everyone, who is friendly and approachable, who doesn't have a problem with any of her students."
      },
      {
        "type": "paragraph",
        "text": "And that's exactly what makes it so disorienting for the girls on the receiving end."
      },
      {
        "type": "paragraph",
        "text": "Because when the person who treats you differently is openly cruel, you can name it. You can point to it. You can say — look, this happened, this is what was said, this is the evidence. But when the difference is in warmth — in who gets the smile and who gets the sigh — it lives in a space that is almost impossible to formally document. It just lives in your body as a low-level confusion that sounds, when you try to say it out loud, like you're being oversensitive."
      },
      {
        "type": "paragraph",
        "text": "She's just more comfortable with them."
      },
      {
        "type": "paragraph",
        "text": "She probably doesn't realise she's doing it."
      },
      {
        "type": "paragraph",
        "text": "Maybe you're imagining it."
      },
      {
        "type": "paragraph",
        "text": "You're not imagining it."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What Is Actually Happening"
      },
      {
        "type": "paragraph",
        "text": "I've thought about this a lot. And I think what's happening is a version of something very old."
      },
      {
        "type": "paragraph",
        "text": "Some women — not all, not most, but some — have absorbed a way of moving through the world where male approval is the primary currency. Being liked by men, being easy and warm and fun around men, is the thing that makes a woman feel safe, valued, and positioned correctly in a social space."
      },
      {
        "type": "paragraph",
        "text": "This is not a character flaw. It is a deeply conditioned response to growing up in a world that consistently rewards women for being appealing to men and punishes them for being threatening to other women. Internalised patriarchy is the clinical term. What it looks like in practice is a woman who code-switches — almost unconsciously — into her most charming self when men are watching, and her most guarded or competitive self when women are."
      },
      {
        "type": "paragraph",
        "text": "The boys in the room are not people she is measuring herself against. They are an audience she already knows how to perform for."
      },
      {
        "type": "paragraph",
        "text": "The girls are something else entirely. A mirror, maybe. Competition, even if that word sounds too dramatic for a classroom in Tamil Nadu. Something she has a more complicated relationship with than she will ever admit — possibly even to herself."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What It Does to the Girls in the Room"
      },
      {
        "type": "paragraph",
        "text": "I want to be honest about this part."
      },
      {
        "type": "paragraph",
        "text": "It is a specific kind of confusing to watch a woman — someone who should, in some subconscious way, understand what it is to be a girl in a room full of people assessing you — be the one who makes you feel smaller."
      },
      {
        "type": "paragraph",
        "text": "There is something almost lonelier about that than the more straightforward kinds of unfair treatment. Because you expected, maybe, that she would get it. That she would be the one who didn't make you feel like you had to earn the right to take up space."
      },
      {
        "type": "paragraph",
        "text": "And instead, she is laughing at his joke and looking through you."
      },
      {
        "type": "paragraph",
        "text": "The girls who experience this learn a few things — not intentionally, not from a lesson plan, but the way all important things are learned: through repetition and observation."
      },
      {
        "type": "paragraph",
        "text": "They learn that warmth is not guaranteed to them just because they are in the room. They learn that female authority does not automatically mean female solidarity. They learn to be a little more careful, a little more precise, a little more braced — because even here, in a space with a woman in charge, the rules are not quite the same for them as they are for the boys."
      },
      {
        "type": "paragraph",
        "text": "That is not a small thing to learn. And it stays."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "I Am Not Here to Cancel Anyone"
      },
      {
        "type": "paragraph",
        "text": "I want to be clear about something before I close this."
      },
      {
        "type": "paragraph",
        "text": "I am not writing this to villainise any specific person. I am not writing this as a call to action or a complaint or an indictment of every female authority figure who has ever existed."
      },
      {
        "type": "paragraph",
        "text": "I am writing this because I have sat in enough rooms to know that this pattern is real, and I have watched enough girls look at each other with that particular expression — the one that says did you see that? Am I crazy? — to know that it deserves to be named."
      },
      {
        "type": "paragraph",
        "text": "Not dramatically. Not with accusations."
      },
      {
        "type": "paragraph",
        "text": "Just honestly."
      },
      {
        "type": "paragraph",
        "text": "Because the first step to understanding why something happens — and maybe, slowly, changing it — is being willing to say it out loud without immediately being told you're overreacting."
      },
      {
        "type": "divider"
      },
      {
        "type": "heading",
        "text": "What I Actually Want to Say"
      },
      {
        "type": "paragraph",
        "text": "If you are a girl who has felt this — who has watched the warmth get distributed unevenly in a room and wondered what was wrong with you, nothing is wrong with you."
      },
      {
        "type": "paragraph",
        "text": "You noticed something real. Your body read the room correctly. The confusion you felt was not weakness; it was intelligence trying to make sense of something that doesn't quite make sense."
      },
      {
        "type": "paragraph",
        "text": "And if you are a woman in any position of authority — a teacher, a mentor, a senior, anyone — I'm asking gently: notice where your warmth goes. Notice who gets the smile and who gets the correction. Notice if there is a pattern."
      },
      {
        "type": "paragraph",
        "text": "Not because you are a bad person, if there is."
      },
      {
        "type": "paragraph",
        "text": "But because the girls in your room are watching. And they are learning something from you, whether you mean to teach it or not."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "This one is for every girl who looked at her friend across the room and just knew."
      },
      {
        "type": "paragraph",
        "text": "You weren't imagining it."
      }
    ]
  },
  {
    "issueNumber": "11",
    "slug": "your-parents-didnt-fail-to-love-you",
    "title": "Your Parents Didn't Fail to Love You. They Failed to Speak the Language You Needed — And Here's the Psychology Behind Why.",
    "publishedAt": "2026-04-06T21:30:00.000-07:00",
    "displayDate": "April 6, 2026",
    "shortDate": "Apr 6, 2026",
    "category": "Family & Conditioning",
    "description": "A compassionate psychological exploration of generational emotional silence in South Asian homes—bridging attachment theory, unspoken pride, grief, and reparenting.",
    "keywords": [
      "parents",
      "family",
      "attachment theory",
      "emotional silence",
      "love languages",
      "reparenting",
      "grief",
      "South Asian"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/your-parents-didnt-fail-to-love-you.html",
    "wordCount": 1087,
    "readingTimeMinutes": 5,
    "featuredRank": 5,
    "blocks": [
      {
        "type": "paragraph",
        "text": "There is a particular kind of grief that nobody prepares you for. It doesn't come with a funeral, a condolence card, or a name that other people recognise. It arrives quietly — usually somewhere around your late teens — when you realise that the people who raised you, who sacrificed genuinely for you, never once said the words you needed most to hear."
      },
      {
        "type": "paragraph",
        "text": "I'm proud of you. You're enough. I see you."
      },
      {
        "type": "paragraph",
        "text": "And the confusing, destabilising thing about this grief is that your parents are still alive, still loving you in the way they know how — and yet something is missing in a way you can't quite articulate at the dinner table. So you carry it silently. You tell yourself you're being ungrateful. You remind yourself of everything they gave up. And still, at 2 AM, the question surfaces: why wasn't I ever enough for them to just say it?"
      },
      {
        "type": "paragraph",
        "text": "Here is what I wish someone had told me sooner: the answer to that question is not about you at all."
      },
      {
        "type": "heading",
        "text": "The Science of Emotional Silence"
      },
      {
        "type": "paragraph",
        "text": "Psychologist John Bowlby's attachment theory tells us that the way we receive and give love as adults is almost entirely determined by the emotional environment we grew up in. But what's less discussed is the generational chain of emotional suppression — the fact that emotional literacy is a learned behaviour, passed down (or not) like a language."
      },
      {
        "type": "paragraph",
        "text": "Many of our parents — particularly those raised in South Asian, working-class, or immigrant contexts — grew up in environments where emotional expression was a luxury at best, and a vulnerability at worst. Love was demonstrated through action: working two jobs, making sure there was food on the table, pushing you hard so you could have options they never did. Words were not the currency. Survival was."
      },
      {
        "type": "paragraph",
        "text": "This is not an excuse. It is an explanation — and the difference matters enormously for your healing."
      },
      {
        "type": "heading",
        "text": "Two Languages, One House"
      },
      {
        "type": "paragraph",
        "text": "Dr Gary Chapman's concept of love languages captures part of this, but it doesn't fully account for the psychosocial conditioning that leads someone to default to acts of service or silence rather than words of affirmation. It's not simply a preference. For many parents, verbal affirmation was never modelled, never safe, never rewarded in their own childhoods. To express pride verbally might have felt — viscerally — like tempting fate, inviting arrogance, or performing an emotion they had no script for."
      },
      {
        "type": "paragraph",
        "text": "Meanwhile, you — raised with the internet, with psychology content, with therapy discourse normalised in your generation — were operating in an entirely different emotional vocabulary. You"
      },
      {
        "type": "paragraph",
        "text": "needed to hear it. You knew what it would mean. And the silence felt, therefore, like a verdict."
      },
      {
        "type": "paragraph",
        "text": "It wasn't. It was a translation failure between two people speaking different emotional languages in the same home."
      },
      {
        "type": "heading",
        "text": "The Wound Is Still Real"
      },
      {
        "type": "paragraph",
        "text": "Understanding this does not make the wound disappear. I want to be careful here — because this kind of reframe can sometimes be weaponised as spiritual bypassing, a way to skip over legitimate grief by intellectualising it."
      },
      {
        "type": "paragraph",
        "text": "Your hunger for verbal affirmation is real. The developmental need for a parent to look at you and say I'm proud of who you are — not just what you achieved — is real and documented. Children who receive consistent verbal praise and emotional attunement develop more secure attachment styles, higher self-worth, and greater resilience. When that is missing, the nervous system registers it. The body keeps the score."
      },
      {
        "type": "paragraph",
        "text": "So you are allowed to grieve what you didn't receive. You are allowed to feel the loss of it, even if you love your parents deeply. Both things are true simultaneously."
      },
      {
        "type": "heading",
        "text": "What This Looks Like as an Adult"
      },
      {
        "type": "paragraph",
        "text": "If you grew up in an emotionally silent household, you may recognise some of these patterns in yourself now:"
      },
      {
        "type": "paragraph",
        "text": "You seek external validation intensely — from teachers, partners, employers — because you are still, at some level, waiting for the approval that didn't come. You struggle to internalise compliments because love always felt contingent on performance. You confuse busyness with worth because rest was never modelled as acceptable. You over-explain yourself, seeking understanding you weren't given permission to expect. You find it difficult to ask for emotional support directly, because you never saw it asked for or given freely."
      },
      {
        "type": "paragraph",
        "text": "None of these are character flaw. They are adaptations — brilliant, once necessary, now running outdated code."
      },
      {
        "type": "heading",
        "text": "Beginning the Translation"
      },
      {
        "type": "paragraph",
        "text": "Healing, in this context, is not about confronting your parents or demanding a conversation they may not have the capacity for. It is about something more internal: learning to become the parent to yourself that you needed."
      },
      {
        "type": "paragraph",
        "text": "In Internal Family Systems therapy, this is called \"reparenting\" — the process by which you, as an adult, provide the emotional validation, the witness, the unconditional regard to your younger self that was absent. It sounds abstract. In practice, it looks like noticing when you're about to dismiss your own feelings and choosing to pause instead. It looks like saying, out loud or in writing: I see that you're exhausted. You've worked hard. You don't have to earn the right to rest."
      },
      {
        "type": "paragraph",
        "text": "It looks like grieving what you didn't get, rather than suppressing it — because grief is the path through, not around."
      },
      {
        "type": "heading",
        "text": "For the Parents Reading This"
      },
      {
        "type": "paragraph",
        "text": "If you are a parent who sees yourself in these words — who recognises that you, too, never learned how to say it — this is not an indictment. The intergenerational chain of emotional silence was not started by you. But it can be interrupted by you. One sentence. One moment. I want you to know I'm proud of who you are, not just what you do."
      },
      {
        "type": "paragraph",
        "text": "It costs nothing. It changes everything."
      },
      {
        "type": "heading",
        "text": "The Grief That Sets You Free"
      },
      {
        "type": "paragraph",
        "text": "There is a paradox at the centre of this kind of healing: fully feeling the grief of what you didn't receive is what finally frees you from its grip. As long as you're managing it — performing okayness, intellectualising it, staying busy — it stays lodged in the body. When you let yourself feel it, witness it, and ultimately grieve it, the hold it has loosens."
      },
      {
        "type": "paragraph",
        "text": "You can love your parents and mourn what they couldn't give you. You can understand why they were silent and still name the cost of that silence. You can forgive without pretending it didn't happen."
      },
      {
        "type": "paragraph",
        "text": "And one day — slowly, then all at once — you stop waiting for the verdict. Because you start to recognise that you were never on trial."
      }
    ]
  },
  {
    "issueNumber": "10",
    "slug": "what-is-missing-in-indian-education",
    "title": "What Is Missing in the Indian Education System? A Student’s Perspective on Pressure and Reality",
    "publishedAt": "2026-04-02T21:52:00.000-07:00",
    "displayDate": "April 2, 2026",
    "shortDate": "Apr 2, 2026",
    "category": "Society & Expectations",
    "description": "A student's candid perspective on rote memorisation, marks-driven pressure, overlooked mental health, and the fear of failure inside the Indian education system.",
    "keywords": [
      "Indian education",
      "students",
      "marks",
      "mental health",
      "pressure",
      "failure",
      "practical learning"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/what-is-missing-in-indian-education.html",
    "wordCount": 946,
    "readingTimeMinutes": 4,
    "featuredRank": null,
    "blocks": [
      {
        "type": "quote",
        "text": "We spend years in the education system…\n\nYet somehow, something still feels missing."
      },
      {
        "type": "paragraph",
        "text": "But what exactly is it?"
      },
      {
        "type": "paragraph",
        "text": "Maybe it’s not about what we are taught—"
      },
      {
        "type": "paragraph",
        "text": "But what we are never taught."
      },
      {
        "type": "paragraph",
        "text": "We learn formulas, definitions, and theories…"
      },
      {
        "type": "paragraph",
        "text": "but rarely learn how to think, how to deal with failure,"
      },
      {
        "type": "paragraph",
        "text": "or even how to understand ourselves."
      },
      {
        "type": "paragraph",
        "text": "There are some reasons why something is missing in our Indian education system."
      },
      {
        "type": "paragraph",
        "text": "1. Lack of practical learning"
      },
      {
        "type": "paragraph",
        "text": "- From the early stage, we are only told to study and not to learn anything. We study to pass the exam, but not to understand those in real life. The practical learning is completely lacking in our Indian education system. We read and learn more theory and formulas, but those are important too. But having practical knowledge or practical experience could make it easier for students to face challenges or build something on their own."
      },
      {
        "type": "paragraph",
        "text": "2. Pressure over curiosity."
      },
      {
        "type": "paragraph",
        "text": "- This actually points out the most important thing that our Indian education system considers: \"marks\". Marks matter more than learning. This is a very bad idea. How could someone's knowledge be only known through their return or something they did not learn through practice? It's just that they have it by heart or have memorised it."
      },
      {
        "type": "paragraph",
        "text": "- Many students write practical answers in their examinations, but some teachers are good at correcting their papers; however, most of them expect them to write what is given in the book. Even the preposition should not change, but learning is all about gaining knowledge and applying it. The first and only focus on learning is to apply it in real life, but in India, we are taught to memorise and write it on paper without missing a single punctuation mark."
      },
      {
        "type": "paragraph",
        "text": "3. No focus on mental health."
      },
      {
        "type": "paragraph",
        "text": "- Parents always push their child to study, only to study, not to focus on anything. This is the worst thing that could happen to a student's life. Their mental health will be affected a lot. They cannot feel themselves. We could have seen many students who got 100 on 100 or the maximum marks in their exam or any competitive exams, but they will not be happy, or they do not know how to celebrate, because they have lost their mental health. They only focused on studies because their parents said to, or that was their only choice to live, but their parents may see, \"Oh yeah, my child got good marks; it is best; he or she is the best in the world.\" Yeah, good, but have they ever looked at the point of view from their child? No, if they could have, they could have known. Many practical learning children study for real-life applications, but when writing exams, they get fewer marks because it is not set as it is in the book. Yeah, I don't go hard on the memorising students; they also get pressured because they need to memorise everything. But no one will consider looking at a student's mental point of view or how much pressure they are under."
      },
      {
        "type": "paragraph",
        "text": "- Due to this reason, many students are starting to become silent, only focusing on their studies or always ranting about their lives to their friends. In the worst case, these days, students are talking to or chatting with AI bots, considering the AI bots as psychologists. They give us many tips and tricks to study, or how to get free from our pressure-filled education or our routine. At the end of the day, it is also going to be the worst, because no AI bot could ever replace a psychologist. If the child feels something, they must explain to their parents, but Indian parents are not ready to hear something from their child. Especially when they say, \"I feel stressed,\" they will be explaining about their difficulties, but not looking through their child. I know their life is also difficult, but it is a small baby. The baby who came out of you, because of you, comes to you and says, \"Dad or mom, I feel sad. I'm so pressured. My mental health is worse. Can you take me out for a trip, or could I have counselling, or could I go out with my friends?\" Indian parents will say no, they will just be saying, \"Go and study\" without studying. Your life would be zero."
      },
      {
        "type": "paragraph",
        "text": "4. Fear of failure."
      },
      {
        "type": "paragraph",
        "text": "- We are taught to avoid mistakes but never to learn from them. It is the main reason why many students make bad decisions in their lives or never explain anything to their parents. They never gave them the emotional support; they only rant about their life to them, thinking, \"My child will understand my difficulties. Their life is difficult too, but your child's life is important too.\""
      },
      {
        "type": "paragraph",
        "text": "They are always taught to avoid mistakes, but getting failure is the first step for success, but they will never understand it. If we fail on the first attempt on any exam or competition. I am not here to blame every parent. I have also seen my friends' parents who are good at considering their children's emotional health. If they fail at something, their reply would be, \"Okay, next try.\" Some parents say, \"No, you failed, you ended up, that's it, your life is over. Let me do something for you.\" They will make decisions for our lives then. They will choose what seems to choose what? Job or where to work, everything."
      },
      {
        "type": "paragraph",
        "text": "All these things make me wonder."
      },
      {
        "type": "paragraph",
        "text": "- It feels like we are trying to perform, not to understand."
      },
      {
        "type": "paragraph",
        "text": "- herthoughtsbykesh"
      },
      {
        "type": "paragraph",
        "text": "Maybe the system isn't just missing subjects; maybe it's missing the student."
      }
    ]
  },
  {
    "issueNumber": "09",
    "slug": "why-do-i-feel-guilty-for-doing-nothing",
    "title": "Why Do I Feel Guilty for Doing Nothing? The Psychology of Constant Productivity Pressure",
    "publishedAt": "2026-04-01T10:17:00.000-07:00",
    "displayDate": "April 1, 2026",
    "shortDate": "Apr 1, 2026",
    "category": "Self & Overthinking",
    "description": "Unpacking productivity guilt—why rest triggers anxiety in a culture that equates busyness with human worth, and how to break the loop.",
    "keywords": [
      "productivity guilt",
      "rest",
      "burnout",
      "hustle culture",
      "self-worth",
      "conditioning"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/04/why-do-i-feel-guilty-for-doing-nothing.html",
    "wordCount": 481,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Do you ever try to rest... and feel guilty of it?"
      },
      {
        "type": "paragraph",
        "text": "Everyone in the world says the world is running out of time. Everyone is in a hurry, but except for human beings, every other creature is leading a peaceful life, free from guilt and pressure."
      },
      {
        "type": "paragraph",
        "text": "Okay, let us come to one scenario."
      },
      {
        "type": "paragraph",
        "text": "-Imagine you are not working, not studying, not being productive, and suddenly your mind starts whispering, \"You are wasting time.\""
      },
      {
        "type": "paragraph",
        "text": "But why does rest feel like guilt?"
      },
      {
        "type": "paragraph",
        "text": "And this is called productivity guilt."
      },
      {
        "type": "paragraph",
        "text": "What is productivity guilt?"
      },
      {
        "type": "paragraph",
        "text": "- Productivity guilt is the uncomfortable feeling you get when you are not being useful or productive."
      },
      {
        "type": "paragraph",
        "text": "But how does this thought come to our mind? It's all because we are always told to work, not to rest; to use our brains; to concentrate, focus, and do something. When you try to relax, your mind refuses to relax and starts to get to that productivity guilt, saying, \"You are not productive, you are wasting your time. It's a waste of time.\""
      },
      {
        "type": "paragraph",
        "text": "Rather than letting your mind relax, it keeps reminding you of everything you could be doing."
      },
      {
        "type": "paragraph",
        "text": "Many people have a question: where does this come from?"
      },
      {
        "type": "paragraph",
        "text": "- As already said, it comes through what people said to us from an early age. Don't waste time; always stay busy; do something useful."
      },
      {
        "type": "paragraph",
        "text": "They always associate rest with laziness, failure, and falling behind rather than telling them it is a peace,' your body is a temple; it needs rest,' but no one said that."
      },
      {
        "type": "paragraph",
        "text": "Even when you stop ignoring these people, there is also the pressure to always be ahead."
      },
      {
        "type": "paragraph",
        "text": "We live in a world where everyone is achieving something, everyone is posting progress, and everyone looks productive, and you are just resting."
      },
      {
        "type": "paragraph",
        "text": "That creates pressure; it makes you feel like \"if I stop, I will fall behind,\" even if no one is actually competing with you."
      },
      {
        "type": "paragraph",
        "text": "If you understand and analyse this, you would get a psychological loop:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "You will feel tired.",
          "You decide to rest;",
          "Your mind reminds you of pending work.",
          "You feel guilty;",
          "You can't rest properly, and then the cycle continues."
        ]
      },
      {
        "type": "paragraph",
        "text": "You are not working and also not resting, just stuck in between."
      },
      {
        "type": "paragraph",
        "text": "I have come up with an insightful idea."
      },
      {
        "type": "paragraph",
        "text": "A different way to look at it: rest is not wasting time. Rest is what allows you to function again. You are not a machine that needs to be constantly running. You are human, and humans get tired; they slow down and need a break. Without that, nothing actually works."
      },
      {
        "type": "paragraph",
        "text": "So to conclude,"
      },
      {
        "type": "paragraph",
        "text": "Feeling guilty for doing nothing doesn't mean you are lazy. It means you have been conditioned to believe that your worth depends on how much you do, but your value was never meant to be measured by your productivity. Sometimes doing nothing is exactly what you need."
      },
      {
        "type": "paragraph",
        "text": "- herthoughtsbykesh"
      },
      {
        "type": "paragraph",
        "text": "Rest is not failure."
      }
    ]
  },
  {
    "issueNumber": "08",
    "slug": "am-i-annoying",
    "title": "Am I annoying ?",
    "publishedAt": "2026-03-30T10:17:00.000-07:00",
    "displayDate": "March 30, 2026",
    "shortDate": "Mar 30, 2026",
    "category": "Self & Overthinking",
    "description": "A candid dissection of the recurring question 'Am I annoying?'—tracing reassurance-seeking, insecurity, subjectivity, and finding people who match your energy.",
    "keywords": [
      "overthinking",
      "reassurance",
      "insecurity",
      "social anxiety",
      "self-doubt",
      "friendship"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/am-i-annoying.html",
    "wordCount": 365,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "This is the question you ask many people's \"Am I annoying?\""
      },
      {
        "type": "paragraph",
        "text": "Many say no, you're not annoying. Some straightforwardly say yes, you're annoying."
      },
      {
        "type": "paragraph",
        "text": "That is, before getting to know the answer, we must know why we ask this question. It has some simple reasons and also some different reasons."
      },
      {
        "type": "paragraph",
        "text": "Let me start with a simple reason. It is just a simple thought of asking your friends, \"Am I annoying?\" Just a simple one. You will ask this mostly to your friends."
      },
      {
        "type": "paragraph",
        "text": "Next is wanting reassurance. Some people need reassurance constantly. They needed to be valued in a place, or they needed to be seen by some other people. These people needing reassurance will ask you constantly, \"Am I annoying? Am I wrong? If I do something wrong, blah blah blah.\""
      },
      {
        "type": "paragraph",
        "text": "Another set of people is the one who feels insecure, the one who always needs to feel secure. These people will be thinking: the insecure mind always keeps non-stop thinking, \"What? If I am annoying, if I am not annoying, people will talk to me, right, so I am annoying, so that's why people do not talk to me. Yeah, I am annoying. I am annoying. These people think they are already annoying.\""
      },
      {
        "type": "paragraph",
        "text": "Yeah, this all starts with overthinking, self-doubting, social anxiety, or past traumas, or anything, or just a random, simple question in your mind: \"Am I annoying?\""
      },
      {
        "type": "paragraph",
        "text": "So now let us come to the point. Whenever you ask this question, people don't directly say yes; they will tell you no, or they will make up some reasons, but they will never tell you that you are not annoying."
      },
      {
        "type": "paragraph",
        "text": "Annoying is subjective; what annoys one person doesn't annoy another. Sometimes, people are just tired, but people misunderstand, as I am annoying."
      },
      {
        "type": "paragraph",
        "text": "Being “annoying” isn’t a fixed thing."
      },
      {
        "type": "paragraph",
        "text": "It changes depending on the person, their mood, and the situation."
      },
      {
        "type": "paragraph",
        "text": "So instead of overthinking or self-doubting yourself, here are the things you should do instead."
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Stop seeking constant validation",
          "Observe patterns instead of overthinking",
          "Be yourself with the right people",
          "Not everyone is meant to match your energy"
        ]
      },
      {
        "type": "paragraph",
        "text": "Maybe the problem isn’t that you’re annoying."
      },
      {
        "type": "paragraph",
        "text": "Maybe you’re just asking the wrong people for reassurance."
      },
      {
        "type": "paragraph",
        "text": "- herthoughtsbykesh"
      }
    ]
  },
  {
    "issueNumber": "07",
    "slug": "why-do-i-push-people-away-even-when-i",
    "title": "Why Do I Push People Away Even When I Care About Them (And How to Stop It)",
    "publishedAt": "2026-03-30T09:30:00.000-07:00",
    "displayDate": "March 30, 2026",
    "shortDate": "Mar 30, 2026",
    "category": "Emotional Life",
    "description": "Exploring the self-protective instinct behind pulling away from people you care about most—fear of getting hurt, overthinking, feeling like a burden, and early trust wounds.",
    "keywords": [
      "pushing people away",
      "trust issues",
      "relationships",
      "vulnerability",
      "overthinking",
      "closeness"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/why-do-i-push-people-away-even-when-i.html",
    "wordCount": 960,
    "readingTimeMinutes": 4,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Have you ever realised you will try pushing people away from you, even though they are your closest, or anything, you will still try pushing them away, even when you care for them the most. But you will stop looking at them. You will push them from your life."
      },
      {
        "type": "paragraph",
        "text": "This happens to me a lot. I will get close to some people, I will be friends with them, but all of a sudden, I don't know what happens to my mind or anything. I will be like, \"No, I shouldn't get close to them. I love them the most,\" but I will be like, \"No, I shouldn't get close. I need to get away from them.\" I guess something is different. I guess something is wrong. This is all the things that would be running through my mind."
      },
      {
        "type": "paragraph",
        "text": "This happens due to some reasons. I have about three to four reasons for this."
      },
      {
        "type": "paragraph",
        "text": "The first one is fear of getting hurt."
      },
      {
        "type": "paragraph",
        "text": "- The moment you get close to someone, your brain automatically starts to think \"what if they hurt me\" or \"what if I hurt them\". So you will be playing some other things in your mind, being cautious, etc. So, these actions and thoughts make your brain feel. If this continues, I will be hurt. If I am hurt, I will be done. If I am hurt, I cannot do anything, so it will start. It will tell you to get away from them. This is just a step one of that \"Why do I push people away?\" This is just a step one; it doesn't tell you to do much, but this gives you signals."
      },
      {
        "type": "paragraph",
        "text": "The number two is overthinking everything."
      },
      {
        "type": "paragraph",
        "text": "- You will be overthinking everything and anything they do, you do, their friend circle does, your friend circle does. If whatever happens, they will leave me, or he will leave me, or she will leave me. What if my friendship gets damaged? I said that thing so that the person will think something wrong. I said this thing so this person will think something wrong. This kind of thinking in your mind, this is overthinking everything. Even a small paper, you will be overthinking. This makes you and your brain think it is okay to push away people and live for yourself so that you cannot overthink."
      },
      {
        "type": "paragraph",
        "text": "The third one is feeling like a burden."
      },
      {
        "type": "paragraph",
        "text": "- This will happen to a lot of people thinking that asking for help from someone close to you makes you feel like you're a burden for them, or being a friend to them makes you feel like a burden for them. This thought is just a ridiculous one. I don't know where on earth this thought comes from, but all of a sudden, when you do a help for them, you will feel \"I'm proud I did a help\". But when you suddenly ask for help from them, your brain will be thinking \"no no no, I am a burden for them, I shouldn't be doing it\". It doesn't get into the mind that these are your most valuable persons, these are your friends, they will be happy doing some help for you or being with you, but your brain is on a whole other level of world thinking you are a burden for them."
      },
      {
        "type": "paragraph",
        "text": "The last and final one is trust issues."
      },
      {
        "type": "paragraph",
        "text": "- Trust issues are not a thing that emerges all of a sudden, but it emerged through childhood, where you get trust issues from your parents. They will be calling you, \"Come on, I will not beat you, you will get beat,\" or they would say, \"No injections,\" but you would get injections. Some were good for you, and some were bad for you. This made it the first truss tissue."
      },
      {
        "type": "paragraph",
        "text": "Ok, the trust issues that we get now are different, but this is a thought. This is the first trust issue we got, so we carry this trust issue along every time we meet up with people. You will be thinking, \"What if they think I'm not a friend? What if they are just speaking to me in case I am speaking to them?\" You will have only what-if questions in your mind if you have truss tissues."
      },
      {
        "type": "paragraph",
        "text": "Even till this point, you couldn't feel relatable. These are some points I will give you that make you all of a sudden relatable."
      },
      {
        "type": "paragraph",
        "text": "1. Ignoring messages even when you want to reply."
      },
      {
        "type": "paragraph",
        "text": "2. Pulling away when someone gets close."
      },
      {
        "type": "paragraph",
        "text": "3. Wanting connection but also needing distance."
      },
      {
        "type": "paragraph",
        "text": "4. Overanalysing small things."
      },
      {
        "type": "paragraph",
        "text": "I guess now you could relate this to you. If you are doing any of these, you try to push people away even when you care about them. Now we have gone over how this happens. Now we are getting into how to stop it."
      },
      {
        "type": "paragraph",
        "text": "I would recommend that you talk to the person more personally or tell them how you feel directly. This may be the worst idea, or it may be the most common idea people will suggest. But this solves. Going to them and talking to them is very important, rather than overthinking and hunting for imaginary dramas. Just tell them, \"I feel this, I don't know how this feels to me, could you please rectify? Am I overanalysing, or am I really not an important person to you?\" Just ask them these questions; it will be ready."
      },
      {
        "type": "paragraph",
        "text": "I would also use some tips like"
      },
      {
        "type": "paragraph",
        "text": "Start with small steps."
      },
      {
        "type": "paragraph",
        "text": "Don't completely isolate yourself from people."
      },
      {
        "type": "paragraph",
        "text": "Be honest about your feelings."
      },
      {
        "type": "paragraph",
        "text": "Don't assume worst-case scenarios."
      },
      {
        "type": "paragraph",
        "text": "Let people understand you slowly."
      },
      {
        "type": "paragraph",
        "text": "Maybe you’re not pushing people away because you don’t care."
      },
      {
        "type": "paragraph",
        "text": "Maybe it’s because you care too much—and you’re just trying to protect yourself."
      },
      {
        "type": "paragraph",
        "text": "- herthoughtsbykesh"
      }
    ]
  },
  {
    "issueNumber": "06",
    "slug": "why-do-i-feel-like-im-not-good-enough",
    "title": "Why Do I Feel Like I’m Not Good Enough No Matter What I Do?",
    "publishedAt": "2026-03-26T08:25:00.000-07:00",
    "displayDate": "March 26, 2026",
    "shortDate": "Mar 26, 2026",
    "category": "Self & Overthinking",
    "description": "A spare, lyrical reflection on chronic inadequacy—how perfectionism and unspoken appreciation teach us to question our worth in work and relationships alike.",
    "keywords": [
      "not good enough",
      "perfectionism",
      "self-worth",
      "childhood",
      "reassurance",
      "doubt"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/why-do-i-feel-like-im-not-good-enough.html",
    "wordCount": 217,
    "readingTimeMinutes": 1,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "No matter what I do or say,"
      },
      {
        "type": "paragraph",
        "text": "I never feel good enough."
      },
      {
        "type": "paragraph",
        "text": "I’m not trying to be the best at everything."
      },
      {
        "type": "paragraph",
        "text": "I don’t want to be perfect."
      },
      {
        "type": "paragraph",
        "text": "I just want to feel… normal."
      },
      {
        "type": "paragraph",
        "text": "But somehow, I always find a flaw"
      },
      {
        "type": "paragraph",
        "text": "in everything I do, say, or even think."
      },
      {
        "type": "paragraph",
        "text": "And it brings me back to the same question again and again:"
      },
      {
        "type": "paragraph",
        "text": "“Am I not good enough?”"
      },
      {
        "type": "paragraph",
        "text": "But what makes us think like this?"
      },
      {
        "type": "paragraph",
        "text": "Maybe it starts from the way we were raised."
      },
      {
        "type": "paragraph",
        "text": "From childhood, we were often expected to be “perfect” —"
      },
      {
        "type": "paragraph",
        "text": "to do things the right way, to avoid mistakes, to meet expectations."
      },
      {
        "type": "paragraph",
        "text": "And even when we tried, it never really felt enough."
      },
      {
        "type": "paragraph",
        "text": "So we grew up carrying that same pressure within us."
      },
      {
        "type": "paragraph",
        "text": "Not just in work."
      },
      {
        "type": "paragraph",
        "text": "Not just in what we do."
      },
      {
        "type": "paragraph",
        "text": "But even in relationships."
      },
      {
        "type": "paragraph",
        "text": "Especially when we come from environments"
      },
      {
        "type": "paragraph",
        "text": "where love isn’t expressed openly,"
      },
      {
        "type": "paragraph",
        "text": "where appreciation is rare,"
      },
      {
        "type": "paragraph",
        "text": "where silence replaces reassurance."
      },
      {
        "type": "paragraph",
        "text": "We start questioning everything —"
      },
      {
        "type": "paragraph",
        "text": "our actions, our words, our worth."
      },
      {
        "type": "paragraph",
        "text": "And slowly,"
      },
      {
        "type": "paragraph",
        "text": "“Am I good enough?”"
      },
      {
        "type": "paragraph",
        "text": "becomes a constant thought instead of a passing doubt."
      },
      {
        "type": "paragraph",
        "text": "But maybe the problem isn’t you."
      },
      {
        "type": "paragraph",
        "text": "Maybe it’s the way you were taught to measure your worth."
      },
      {
        "type": "paragraph",
        "text": "- kesh"
      },
      {
        "type": "paragraph",
        "text": "You were never meant to be perfect."
      },
      {
        "type": "paragraph",
        "text": "You were just never shown what “enough” feels like."
      }
    ]
  },
  {
    "issueNumber": "05",
    "slug": "why-your-bed-becomes-thinking-zone-at",
    "title": "Why Do I Overthink at Night Before Sleeping?",
    "publishedAt": "2026-03-23T10:14:00.000-07:00",
    "displayDate": "March 23, 2026",
    "shortDate": "Mar 23, 2026",
    "category": "Self & Overthinking",
    "description": "An analytical breakdown of late-night overthinking—from silence and unprocessed memories to negativity bias, imagined scenarios, and emotional release.",
    "keywords": [
      "night overthinking",
      "sleep",
      "negativity bias",
      "unprocessed memories",
      "imagination",
      "2 am thoughts"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/why-your-bed-becomes-thinking-zone-at.html",
    "wordCount": 817,
    "readingTimeMinutes": 4,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "This may feel relatable to most of you,"
      },
      {
        "type": "paragraph",
        "text": "So let me come up with a story. Whenever you're trying to sleep at night, your brain comes up with an idea. Come on, kid, let me tell you the top 10 embarrassing moments that you've ever had, or your brain will be telling you to come up with a delusional idea."
      },
      {
        "type": "paragraph",
        "text": "Yeah, come on, kid, imagine you are an argument, try saying this point, or imagine you are with your lover on a date, or imagine you are a traveller going to the place you wish to, or imagine you are a movie director or artist, etc."
      },
      {
        "type": "paragraph",
        "text": "So I would like to clarify here first: I'm not a person with a psychology degree or background, so what I'm providing here isn't about psychology, but about the things I have analysed."
      },
      {
        "type": "paragraph",
        "text": "The first one has no distractions. Whenever your brain comes up with an embarrassing moment or a delusional thought, you would be just lying on your bed: no food, no people, no task, just silence, like no input. Your brain starts going into its internal processing mode, like a default mode for thinking. It goes in; the mind turns inward, and it starts thinking, etc., etc., etc."
      },
      {
        "type": "paragraph",
        "text": "Your brain starts to think this is the best moment to remember all those things."
      },
      {
        "type": "paragraph",
        "text": "The next one is unprocessed memory resurface. This is mainly about those embarrassing moments. Your brain is trying to process those unprocessed experiences, learning from past mistakes or opening the closed loops or closing the open loops. Like, I should have done like this. I should have spoken like this. I shouldn't be there, first of all. That's why it picks awkward, emotional and unfinished moments. This is an unprocessed memory resurface, mostly the unprocessed things of our memory would be mostly awkward, emotional or unfinished things, right?"
      },
      {
        "type": "paragraph",
        "text": "The third one is negativity bias. I would say everyone must ignore negativity, but let us know what happens inside the negativity bias. Your brain naturally gives more importance to mistakes, embarrassments, and fear because growing up, we always had parents who always told us to correct our mistakes rather than understand our mistakes or understand our fear. Our brain always keeps remembering our mistakes, thinking it is the best move for survival."
      },
      {
        "type": "paragraph",
        "text": "So this negativity bias brings up the things that happened many years back, just because your brain always tries to be in survival mode."
      },
      {
        "type": "paragraph",
        "text": "The fourth thing is mental stimulation. This is about the delusional scenarios, those imagined situations, arguments, future success, conversations, and dream life. Yeah, many people do that. I agree, I do that about future success and conversations."
      },
      {
        "type": "paragraph",
        "text": "What if someone suddenly asks me this? How should I answer that? I will make up the whole scenario in my brain, but it also helps us to prepare for future situations or gain control in imagination. I have read some articles; it is some type of psychological word. I am not really sure. I give a disclaimer: I am not really sure about this. If you want, you may further check any other article about this mental stimulation, the so-called delusional scenarios."
      },
      {
        "type": "paragraph",
        "text": "The fifth one is emotional release. During the day, your brain suppresses your thoughts and feelings because you are always surrounded by people, or you have come up to an extent where your brain says, \"Night is the only place where I could imagine\" or \"The bed is the only place where I could be remembering everything.\" After a whole day, your brain releases those things. At night, they come back. Your brain replays, exaggerates, and creates scenarios to release the built-up emotion that has been stored and kept up all during the day."
      },
      {
        "type": "paragraph",
        "text": "The last and foremost thing is a lack of control, plus a tired brain. You may be reading all those five things, imagining, \"Oh, no problem in my brain,\" but it is also a problem because of a tired brain and a lack of control, and due to this, imagination can go to any extent. It may cause anything for us. You may say the word is imagination, but it may hurt us; we will be crying through our imagination. This is the worst thing."
      },
      {
        "type": "paragraph",
        "text": "When your brain loses control, and it is tired, the logical control goes to zero, and the imagination goes somewhere up in the sky above the level, so the thoughts become random. Random thoughts are ok but they become dramatic and exaggerated. They could not be; it's imagination. You could not imagine what you would be imagining in"
      },
      {
        "type": "paragraph",
        "text": "So the simple truth is your brain isn't trying to annoy you by remembering embarrassing women or making you feel hugged up by telling you to create delusional things. It is trying to process, prepare, release, and understand."
      },
      {
        "type": "paragraph",
        "text": "So tell me…"
      },
      {
        "type": "paragraph",
        "text": "are these thoughts really random?"
      },
      {
        "type": "paragraph",
        "text": "Or are they trying to tell you something?"
      }
    ]
  },
  {
    "issueNumber": "04",
    "slug": "who-is-real-you",
    "title": "Why Do I Feel Like I Don’t Know Who I Am?",
    "publishedAt": "2026-03-22T09:38:00.000-07:00",
    "displayDate": "March 22, 2026",
    "shortDate": "Mar 22, 2026",
    "category": "Self & Overthinking",
    "description": "A questioning inquiry into identity and performance—asking who remains underneath the different versions of ourselves we adapt for family, friends, and interviews.",
    "keywords": [
      "identity",
      "real self",
      "versions",
      "performance",
      "self-discovery",
      "existential"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/who-is-real-you.html",
    "wordCount": 518,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Have you all ever realised maybe I shouldn't use \"realised\"? I should have used \"have you all ever noticed\" or \"have you all ever thought\".\" Who am I? \"Who is the real me? Like, what am I doing here, but I'm not gonna take this in divine feel,ike God and etc. I'm gonna go with human analysis."
      },
      {
        "type": "paragraph",
        "text": "So first of all, whenever you try to understand: \"Who am I?\", you will always be thinking about what you have always done to the people or yourself or to the universe, right?"
      },
      {
        "type": "paragraph",
        "text": "So let us come up to the context. People always tell you to love yourself, right? But you have many versions, don't you?"
      },
      {
        "type": "paragraph",
        "text": "Like many, you can't choose a single version of you. You will change according to who is watching you."
      },
      {
        "type": "paragraph",
        "text": "You have one version for your family, one for your friends, one for your lover, one for your animals, one for the strangers, one for your idols, one for your relatives, etc., but who's the real you? Do you have your version for you? Some may say yes, some may say no, but let us come to the topic."
      },
      {
        "type": "paragraph",
        "text": "But when you are alone, do you know who that person is? Because you created many versions: family, friends, work, love, animals, etc."
      },
      {
        "type": "paragraph",
        "text": "What if it is a version that you created when you are alone, or is it the real you you are searching for?"
      },
      {
        "type": "paragraph",
        "text": "Or maybe what if you have lost the real you because you have tons and tons of your versions?"
      },
      {
        "type": "paragraph",
        "text": "So you will be thinking, \"Okay, have different categories and versions.\" Category means family, friends, and work. Versions is what I have for them. What is more interesting is that you don't have the same version for the one category. For example, in friends, there are different versions of you; each friend will be experiencing a different version of you. It applies to everything."
      },
      {
        "type": "paragraph",
        "text": "So imagine all of a sudden a person comes to you and says, \"Tell me about yourself.\" Imagine an interview scenario. They will ask, \"Tell me about yourself.\" Are you going to tell the real you? I mean, you haven't ever discovered your real you, first of all, but if they ask, \"Tell me about yourself,\" you have a different version, right there. You will be saying your educational qualifications, your skills, setups, and everything for that thing. Then what have you done? There, you have created a new version, not the answer to the question they ask."
      },
      {
        "type": "paragraph",
        "text": "So you define yourself based on the versions you have adapted, and you mix them all together, maybe ranking up, \"I'm this much good, this much bad. I have this much, this much, that.\" Then you create a different version, isn't that right? Am I telling the truth?"
      },
      {
        "type": "paragraph",
        "text": "Now people may come. I can find my real self. I have already found my real self, but how could you? How can you understand when you're just whatever version you are performing? The real you might not exist outside these performances."
      },
      {
        "type": "paragraph",
        "text": "- And if you strip away every version… what remains?"
      }
    ]
  },
  {
    "issueNumber": "03",
    "slug": "i-plan-my-life-at-night-and-ruin-it-in",
    "title": "I Plan My Life at Night and Ruin It in the Morning",
    "publishedAt": "2026-03-21T07:22:00.000-07:00",
    "displayDate": "March 21, 2026",
    "shortDate": "Mar 21, 2026",
    "category": "Self & Overthinking",
    "description": "On the gap between midnight ambition and morning resistance—why planning feels like progress, why perfectionism paralyses, and choosing one small step instead.",
    "keywords": [
      "night planning",
      "mornings",
      "procrastination",
      "perfectionism",
      "habits",
      "self-improvement"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/i-plan-my-life-at-night-and-ruin-it-in.html",
    "wordCount": 525,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Every night, I become a completely different person. At night, everything feels calm. There’s no noise, no pressure, no expectations—just me and my thoughts. And somehow, in that silence, I start believing I can fix everything. I tell myself, “Tomorrow will be different.” Tomorrow, I’ll wake up early, study properly, stop wasting time, and finally become the version of myself I keep imagining. And for a moment, it all feels real."
      },
      {
        "type": "paragraph",
        "text": "I plan everything in my head. I think about how my day will go, what I’ll do first, how productive I’ll be, and how proud I’ll feel by the end of it. Sometimes, I even feel happy—not because I’ve done anything, but because I’ve imagined doing it. It’s strange how planning a better life can feel almost the same as living it."
      },
      {
        "type": "paragraph",
        "text": "But then morning comes. The alarm rings, and suddenly everything feels like the old me. That version of me from last night feels far away. Now I feel tired, unmotivated, and heavy. The same plans that felt exciting just a few hours ago now feel overwhelming. I tell myself, “Just five more minutes.” But those five minutes turn into ten, then twenty, and before I know it, the day has already started slipping away."
      },
      {
        "type": "paragraph",
        "text": "And just like that, the “new life” I planned last night doesn’t even begin. Then comes the guilt. It doesn’t hit all at once—it slowly builds up. I start asking myself, “Why am I like this? Why can’t I just do what I said I would? Why do I keep disappointing myself?” I compare myself to people who seem consistent, disciplined, and focused, and I wonder what they have that I don’t."
      },
      {
        "type": "paragraph",
        "text": "But maybe it’s not laziness. Maybe it’s the comfort of planning that tricks me into feeling like I’ve already started. At night, there’s no effort required, no resistance, no pressure—just thoughts, and thoughts are easy. But mornings are different. Mornings demand action. They don’t care about your plans or your motivation; they only respond to what you actually do."
      },
      {
        "type": "paragraph",
        "text": "Maybe the real problem is that I try to change everything at once. I expect a perfect routine, a perfect schedule, a perfect version of myself. But perfection is heavy, and maybe that’s why I drop it before I even begin. So what if I stopped trying to fix everything? What if I just started small?"
      },
      {
        "type": "paragraph",
        "text": "What if waking up on time was enough for one day? What if doing one task mattered more than planning ten? What if progress didn’t have to look perfect to be real? Maybe I don’t need a completely new life overnight. Maybe I don’t need to become a different person by tomorrow morning. Maybe I just need to be a little better than I was yesterday."
      },
      {
        "type": "paragraph",
        "text": "Because at the end of the day, it’s not the version of me at night that will change my life—it’s the version of me in the morning. And maybe, instead of planning everything tonight, I’ll just start tomorrow. Even if it’s small, even if it’s imperfect, even if it’s just one step. Because maybe that’s enough."
      },
      {
        "type": "paragraph",
        "text": "- kesh"
      },
      {
        "type": "paragraph",
        "text": "just someone trying to do better, slowly"
      }
    ]
  },
  {
    "issueNumber": "02",
    "slug": "the-fear-of-disappointing-everyone",
    "title": "Why Am I So Afraid of Disappointing Others?",
    "publishedAt": "2026-03-19T21:47:00.000-07:00",
    "displayDate": "March 19, 2026",
    "shortDate": "Mar 19, 2026",
    "category": "Family & Conditioning",
    "description": "Confronting the inherited weight of living to satisfy parental pride and relatives' opinions—and claiming the right to live your own life without lifelong regret.",
    "keywords": [
      "disappointing parents",
      "Indian family",
      "expectations",
      "individuality",
      "obedience",
      "travel",
      "regret"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/the-fear-of-disappointing-everyone.html",
    "wordCount": 462,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Fear of disappointing?"
      },
      {
        "type": "paragraph",
        "text": "The phrase itself feels a little off, right?"
      },
      {
        "type": "paragraph",
        "text": "Growing up in an Indian family, we were always taught to make our parents feel proud and happy."
      },
      {
        "type": "paragraph",
        "text": "Notice this carefully — “to make our parents,” not ourselves."
      },
      {
        "type": "paragraph",
        "text": "Somewhere along the way, we get left out."
      },
      {
        "type": "paragraph",
        "text": "We end up feeling guilty for choosing what we truly want…"
      },
      {
        "type": "paragraph",
        "text": "overdoing what we actually love."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "Have you ever heard parents say things like,"
      },
      {
        "type": "paragraph",
        "text": "“Because of you, my pride is gone.”"
      },
      {
        "type": "paragraph",
        "text": "or"
      },
      {
        "type": "paragraph",
        "text": "“How can I face my relatives if you are like this?”"
      },
      {
        "type": "paragraph",
        "text": "If you really listen to these words,"
      },
      {
        "type": "paragraph",
        "text": "You’ll notice something deeper."
      },
      {
        "type": "paragraph",
        "text": "It feels like they want to be seen,"
      },
      {
        "type": "paragraph",
        "text": "to feel proud through us—"
      },
      {
        "type": "paragraph",
        "text": "almost as if their children become their way of validation."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "Parents often remind us,"
      },
      {
        "type": "paragraph",
        "text": "“I gave birth to you,”"
      },
      {
        "type": "paragraph",
        "text": "“I cooked for you,”"
      },
      {
        "type": "paragraph",
        "text": "“I made you study,” and more."
      },
      {
        "type": "paragraph",
        "text": "And yes, those things matter."
      },
      {
        "type": "paragraph",
        "text": "But many times, it starts to feel like these are being listed not out of love,"
      },
      {
        "type": "paragraph",
        "text": "But as reasons for control."
      },
      {
        "type": "paragraph",
        "text": "Providing for a child is not a favour—"
      },
      {
        "type": "paragraph",
        "text": "It is a responsibility they chose"
      },
      {
        "type": "paragraph",
        "text": "when they brought us into this world."
      },
      {
        "type": "paragraph",
        "text": "We are not extensions of them."
      },
      {
        "type": "paragraph",
        "text": "We are individuals—"
      },
      {
        "type": "paragraph",
        "text": "human beings, just like them."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "And yet, most of us grow up believing"
      },
      {
        "type": "paragraph",
        "text": "We must not disappoint them."
      },
      {
        "type": "paragraph",
        "text": "We must obey them."
      },
      {
        "type": "paragraph",
        "text": "We must put them first."
      },
      {
        "type": "paragraph",
        "text": "Yes, they are important."
      },
      {
        "type": "paragraph",
        "text": "But so are we."
      },
      {
        "type": "paragraph",
        "text": "We also have choices."
      },
      {
        "type": "paragraph",
        "text": "We also have a life to live."
      },
      {
        "type": "divider"
      },
      {
        "type": "paragraph",
        "text": "And maybe… they do this because"
      },
      {
        "type": "paragraph",
        "text": "their parents did the same to them."
      },
      {
        "type": "paragraph",
        "text": "They were not allowed to choose."
      },
      {
        "type": "paragraph",
        "text": "They were taught to obey without questioning."
      },
      {
        "type": "paragraph",
        "text": "So now, they expect the same from us."
      },
      {
        "type": "paragraph",
        "text": "But how can they not see it?"
      },
      {
        "type": "paragraph",
        "text": "How can they not remember"
      },
      {
        "type": "paragraph",
        "text": "what it felt like"
      },
      {
        "type": "paragraph",
        "text": "to not be heard…"
      },
      {
        "type": "paragraph",
        "text": "to not be understood?"
      },
      {
        "type": "paragraph",
        "text": "Like, who taught them?"
      },
      {
        "type": "paragraph",
        "text": "Are they doing something to us that they hated all their life?"
      },
      {
        "type": "paragraph",
        "text": "But whatever we must disappoint our parents, this word feels off and bitter, but being a doll does not make us enjoy our life."
      },
      {
        "type": "paragraph",
        "text": "Turning back in life, we will have a lot of regrets for doing what our parents said and not disappointing them."
      },
      {
        "type": "paragraph",
        "text": "But disappointing yourself your whole life."
      },
      {
        "type": "paragraph",
        "text": "There is a famous phrase trending, \"Your parents will forgive you, but you will not get the life you had once you were in your twenties.\""
      },
      {
        "type": "paragraph",
        "text": "Yes, it is all true, and I am going to disappoint my parents by travelling. My parents hate getting passports and travelling to countries, but I wanna travel and live my life to the fullest."
      },
      {
        "type": "paragraph",
        "text": "Maybe they will be angry on my first travel or two or five, but how long can they be?"
      },
      {
        "type": "paragraph",
        "text": "Leave a comment on how you are going to disappoint them 🌟."
      }
    ]
  },
  {
    "issueNumber": "01",
    "slug": "being-good-girl-is-exhausting",
    "title": "Why Being a People Pleaser Is Emotionally Exhausting",
    "publishedAt": "2026-03-19T09:42:00.000-07:00",
    "displayDate": "March 19, 2026",
    "shortDate": "Mar 19, 2026",
    "category": "Family & Conditioning",
    "description": "Challenging the unwritten 'good girl' label carried by firstborn daughters and people pleasers—questioning why self-sacrifice is rewarded with approval.",
    "keywords": [
      "good girl",
      "people pleaser",
      "firstborn daughter",
      "expectations",
      "boundaries",
      "conditioning"
    ],
    "bloggerUrl": "https://kesh0608.blogspot.com/2026/03/being-good-girl-is-exhausting.html",
    "wordCount": 433,
    "readingTimeMinutes": 2,
    "featuredRank": null,
    "blocks": [
      {
        "type": "paragraph",
        "text": "Growing up, girls, have you realised this? Whenever you do something, I mean not a wrong thing, but in a way that parents hate, they say, \"good girls don't do this\". And we all, most of the 90% percent of us have said \"yeah, my mistake, I should be a good girl\", but what does a good girl mean? Does it really exist, or is it just for the things that parents created?"
      },
      {
        "type": "paragraph",
        "text": "Yes, we all say I am the wrong one, my mistake, maybe I am not worthy, but how we still didn't know the definition of the so-called word \"Good Girl\", yeah, this is in English. Still, in your mother tongue, it has many alternative words; hearing those words daily, I have many thoughts running inside myself. Sometimes, I will cry to my core. Later, someday, my blood will boil ok let us know the definition of this word."
      },
      {
        "type": "paragraph",
        "text": "Come on, girlies, if you ask if there is a definition of \"good girl,\" I will say a big no. To my pov there is no definition. Note the word \"Definition\". How can someone be defined as a good girl just because they say and do what you say? How come this is possible? I mean, how did parents and society, or anyone had this idea? I need a clear explanation for this."
      },
      {
        "type": "paragraph",
        "text": "We were always worried when they say a good girl will not do this, or if you do this, you are not a good girl, like how bruhh, how can I be defined just by a rule that you have set? We all always wanted to hear the word \"Good\", especially the firstborn daughters. Being a firstborn daughter, I always remember wanting to be called a good person. I always wanted to be a people pleaser, just all of this to be called as a good girl, parents listener."
      },
      {
        "type": "paragraph",
        "text": "But later, the context of my life has changed, and I tried flipping my script by asking a question to myself, \"What is a good girl? Is it a title you need?\" These were the questions running through my mind, and yeah, my girlies. There is nothing called as good girls. Have you ever noticed where the places we have called good girls are? Those were when we sacrifice ourselves for others' needs, lowering ourselves."
      },
      {
        "type": "paragraph",
        "text": "So yeah, we know we should be in a place or in a title that respects us."
      },
      {
        "type": "paragraph",
        "text": "coming to an end, there is nothing called as \"GOOD GIRL\", it is the people's word made by some illiterate people who don't know about basic human things."
      }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter((article) => article.featuredRank !== null).sort(
    (a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99)
  );
}

export function getAdjacentArticles(slug: string): {
  previous: Article | null;
  next: Article | null;
} {
  // ARTICLES is ordered newest-first; "previous" in reading order is older, "next" is newer
  const index = ARTICLES.findIndex((article) => article.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    next: index > 0 ? ARTICLES[index - 1] : null,
    previous: index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null,
  };
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (item) => item.slug !== article.slug && item.category === article.category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const keywordSet = new Set(article.keywords.map((k) => k.toLowerCase()));
  const others = ARTICLES.filter(
    (item) => item.slug !== article.slug && item.category !== article.category
  ).sort((a, b) => {
    const scoreA = a.keywords.filter((k) => keywordSet.has(k.toLowerCase())).length;
    const scoreB = b.keywords.filter((k) => keywordSet.has(k.toLowerCase())).length;
    return scoreB - scoreA;
  });
  return [...sameCategory, ...others].slice(0, limit);
}
