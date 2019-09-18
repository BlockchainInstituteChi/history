/* eslint-disable max-len*/
const S1 = 'David Chaum created a form of centralized “electronic money” that utilized the same kinds of cryptographic protocols (like public/private key cryptography) that support modern cryptocurrency networks. DigiCash was a form of early electronic payment which required software to withdraw notes from a bank and designate specific encrypted keys before it can be sent to a recipient. This advancement of public and private key cryptography allowed electronic payments to become untraceable by the issuing bank, government, or third parties from accessing personal information through online transactions. Later acquired by Mercantile Bank, the Mark Twain Bank located in Missouri was the only U.S. Bank supporting DigiCash systems. Deutsche Bank based in Germany was the second backing bank of DigiCash Systems. DigiCash filed for Bankruptcy in 1998.';
const S2 = 'Created by Adam Back, Hashcash was initially designed to limit email spam by forcing email senders to solve computational puzzles. It never saw widespread use as a spam protection mechanism and despite the name “Hashcash,” it was never a financial instrument. Bitcoin repurposed these Proof-of-Work (PoW) puzzles to become the basis of Bitcoin mining, or consensus.';
const S3 = 'E-Gold was digital currency backed with gold was introduced in 1996. It was reputed to be used for money laundering and inevitably shut down by the U.S. government.';
const S4 = 'In 1997, Wei Dai explored how to create anonymous, distributed systems in which money was created by the Hashcash PoW algorithm. The B-money proposals main goal was to incorporate a financial unit into the Hashcash PoW algorithm, connecting digital money with PoW for the first time.';
const S5 = 'Nick Szabo outlined an algorithm for posting transactions using Proof-of-Work to servers, which then must agree on these transactions. This same ‘consensus model’ is now built into the Bitcoin blockchain.';
const S6 = '“PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.” –Wikipedia';
const S7 = 'Hal Finney attempted to make proofs of work into exchangeable tokens. Hal Finney later became the first person to receive a Bitcoin transaction from Bitcoin creator Satoshi Nakamoto.';
const S8 = 'Liberty Reserve was a digital currency that allowed users to chose the backing of their tokens in either Euros, USD or ounces of gold. Liberty Reserve’s services were centralized, and they had a reputation for being used for money laundering. The project was inevitably shut down by the U.S. government over Know Your Customer/Anti-Money Laundering laws, as users never had to provide identification to use Liberty Reserve’s services.';
const S9 = 'In response to the global financial crisis in 2008, Satoshi Nakamoto published the Bitcoin whitepaper. The document would act as the foundation for the soon to be launched Bitcoin network.';
const S10 = 'January 3, 2009: The first Bitcoin block was mined, marking the official launch of the Bitcoin network. The next lesson will explore the mysterious creator(s) of Bitcoin, Satoshi Nakamoto.';
/* eslint-enable max-len*/

module.exports = [
  {
    date: '03/08/1989',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg',
    photo: './the_elder_scrolls_1_arena_wallpaper_by_thejackmoriarty-d8mlpzc.png',
    title: 'DAVID CHAUM AND DIGICASH',
    subtitle: '1989',
    content: S1
  },
  {
    date: '08/31/1996',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Daggerfall_Cover_art.gif',
    photo: 'https://images6.alphacoders.com/599/599052.jpg',
    title: 'HASHCASH',
    subtitle: '1996',
    content: S2
  },
  {
    date: '05/02/1996',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/5/53/MorrowindCOVER.jpg',
    photo: 'http://elder-scrolls.com/uploads/posts/2013-11/1384956239_m43.jpg',
    title: 'E-GOLD',
    subtitle: '1996',
    content: S3
  },
  {
    date: '03/20/1997',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Elder_Scrolls_IV_Oblivion_cover.png',
    photo: 'https://images8.alphacoders.com/410/410161.jpg',
    title: 'B-Money',
    subtitle: '1997',
    content: S4
  },
  {
    date: '06/08/1998',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'BIT GOLD PROPOSAL',
    subtitle: '1998',
    content: S5
  },
  {
    date: '12/11/1999',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'Paypal',
    subtitle: '1999',
    content: S6
  },
  {
    date: '11/04/2004',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'REUSABLE PROOFS OF WORK',
    subtitle: '2004',
    content: S7
  },
  {
    date: '06/07/2006',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'LIBERTY RESERVE',
    subtitle: '2006',
    content: S8
  },
  {
    date: '08/18/2008',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'Bitcoin Whitepaper Published',
    subtitle: '2008',
    content: S9
  },
  {
    date: '01/03/2009',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
    photo: 'http://wallpapercave.com/wp/GMifnUB.jpg',
    title: 'Bitcoin Genesis Block Mined',
    subtitle: '2009',
    content: S10
  }
];
