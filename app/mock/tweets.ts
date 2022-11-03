export interface ITweets {
  id: number;
  image: any;
  name: string;
  hashtag: string;
  time: string;
  body: string;
  replies?: number;
  retweet?: number;
  likes?: number;
  shares?: number;
  photo?: any;
}

export const tweets: ITweets[] = [
  {
    id: 1,
    image: require("../assets/images/passport.jpg"),
    body: " Which Language do you normally use for back-end? any one who has an answer should tell me now and win prizes",
    hashtag: "@James Doe",
    likes: 450,
    name: "Smith ✍",
    replies: 800,
    retweet: 67,
    shares: 5,
    time: "3hr",
  },
  {
    id: 5,
    image: require("../assets/images/passport5.jpg"),
    body: "Remember that Skales & Wizkid beef where Wizkid said if bomb dey skales head the bomb no fit blow... chai",
    hashtag: "@OyinTGSPE",
    likes: 3,
    name: "Mary",
    replies: 2,
    retweet: 3,
    shares: 5,
    time: "2h",
    photo: require("../assets/images/post1.jpg"),
  },
  {
    id: 2,
    image: require("../assets/images/passport2.jpg"),
    body: "Never try to see a girl everyday even if you are both into each other. Some level of mystery is always necessary. 🤪",
    hashtag: "@Mary May",
    likes: 380,
    name: "Mary",
    replies: 47,
    retweet: 384,
    shares: 5,
    time: "1d",
  },
  {
    id: 3,
    image: require("../assets/images/passport3.jpg"),
    body: `Coding can be a love-hate relationship. Sometimes you lose, sometimes the computer wins.
    `,
    hashtag: "@oliverjumoertz",
    likes: 212,
    name: "Oliver Jumpertz ☠",
    replies: 22,
    retweet: 31,
    shares: 5,
    time: "22h",
  },
  {
    id: 4,
    image: require("../assets/images/passport4.jpg"),
    body: "Are you telling your uncles wife?Be honest 🙂😀",
    hashtag: "@osivweme",
    likes: 380,
    name: "Osy Official 💥",
    replies: 47,
    retweet: 384,
    shares: 5,
    time: "3hr",
    photo: require("../assets/images/post2.jpg"),
  },

  {
    id: 6,
    image: require("../assets/images/passport6.jpg"),
    body: "We will be launching the first maiden edition of platformatic tomorrow",
    hashtag: "@LiyuJea",
    likes: 380,
    name: "Li",
    replies: 40,
    retweet: 10,
    shares: 5,
    time: "1h",
  },
  {
    id: 7,
    image: require("../assets/images/passport7.jpg"),
    body: "Elon musk buying tweeter might actually be the best thin to happen to humanity and free speech.",
    hashtag: "@hashanModu",
    likes: 1024,
    name: "Hashan",
    replies: 40,
    retweet: 10,
    shares: 5,
    time: "1h",
  },
  {
    id: 8,
    image: require("../assets/images/passport8.jpg"),
    body: "We will launching our maiden edition of the intel groups on Sunday.",
    hashtag: "@jessy",
    likes: 1024,
    name: "Jessica",
    replies: 40,
    retweet: 10,
    shares: 5,
    time: "1h",
  },
];
