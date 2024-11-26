import { Box, Button, Icon, Text, H2, H4, Link } from '@adminjs/design-system';
import React, { FC, useState } from 'react';
import styled from 'styled-components';


// Функція для отримання даних з API
// const getGamesFromAPI = async () => {
//   try {
//     const response = await axios.get('https://api.rawg.io/api/games?key=c8796491ad7449318a3e60dcab280d5f&platforms_count=1');
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching games data:', error);
//     return [];
//   }
// };

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Store {
  store: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

interface ESRBRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

interface ShortScreenshot {
  id: number;
  image: string;
}

interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  suggestions_count: number;
  updated: string;
  id: number;
  score: null;
  clip: null;
  tags: Tag[];
  esrb_rating: ESRBRating;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
}
const gamesData: Game[] = [
  {
      "slug": "the-last-of-us-remastered",
      "name": "The Last Of Us Remastered",
      "playtime": 16,
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2014-07-29",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
      "rating": 4.69,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 2181,
              "percent": 76.99
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 506,
              "percent": 17.86
          },
          {
              "id": 3,
              "title": "meh",
              "count": 108,
              "percent": 3.81
          },
          {
              "id": 1,
              "title": "skip",
              "count": 38,
              "percent": 1.34
          }
      ],
      "ratings_count": 2804,
      "reviews_text_count": 20,
      "added": 8884,
      "added_by_status": {
          "yet": 258,
          "owned": 5464,
          "beaten": 2553,
          "toplay": 231,
          "dropped": 213,
          "playing": 165
      },
      "metacritic": 95,
      "suggestions_count": 474,
      "updated": "2024-11-14T13:07:22",
      "id": 3636,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 1,
              "name": "Survival",
              "slug": "survival",
              "language": "eng",
              "games_count": 9343,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 15,
              "name": "Stealth",
              "slug": "stealth",
              "language": "eng",
              "games_count": 6532,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 17851,
              "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 7481,
              "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
          },
          {
              "id": 63,
              "name": "Zombies",
              "slug": "zombies",
              "language": "eng",
              "games_count": 10564,
              "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 478,
              "name": "3rd-Person Perspective",
              "slug": "3rd-person-perspective",
              "language": "eng",
              "games_count": 87,
              "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature",
          "name_en": "Mature",
          "name_ru": "С 17 лет"
      },
      "user_game": null,
      "reviews_count": 2833,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
          },
          {
              "id": 208251,
              "image": "https://media.rawg.io/media/screenshots/5a7/5a74e852355169e1767f3b59d5488829.jpeg"
          },
          {
              "id": 208252,
              "image": "https://media.rawg.io/media/screenshots/a4b/a4b8e8d4d56d1889f76872da7364e406.jpeg"
          },
          {
              "id": 208253,
              "image": "https://media.rawg.io/media/screenshots/1ba/1babd5640e3eed7646b6f2834daab303.jpeg"
          },
          {
              "id": 208254,
              "image": "https://media.rawg.io/media/screenshots/9ce/9ce9018611e2931782b87ef8b4bcd012.jpeg"
          },
          {
              "id": 208255,
              "image": "https://media.rawg.io/media/screenshots/5c9/5c9c1f58a945bb06f5467587a9d6d0e4.jpeg"
          },
          {
              "id": 208256,
              "image": "https://media.rawg.io/media/screenshots/6ea/6ea8e1f3d812f7218f9205c1dd658147.jpeg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "bloodborne",
      "name": "Bloodborne",
      "playtime": 12,
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2015-03-24",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
      "rating": 4.41,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 1591,
              "percent": 65.42
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 491,
              "percent": 20.19
          },
          {
              "id": 3,
              "title": "meh",
              "count": 229,
              "percent": 9.42
          },
          {
              "id": 1,
              "title": "skip",
              "count": 121,
              "percent": 4.98
          }
      ],
      "ratings_count": 2399,
      "reviews_text_count": 22,
      "added": 8508,
      "added_by_status": {
          "yet": 567,
          "owned": 5056,
          "beaten": 1503,
          "toplay": 492,
          "dropped": 628,
          "playing": 262
      },
      "metacritic": 92,
      "suggestions_count": 607,
      "updated": "2024-11-21T14:25:50",
      "id": 3387,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 23242,
              "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 24881,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 121,
              "name": "Character Customization",
              "slug": "character-customization",
              "language": "eng",
              "games_count": 5266,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 40,
              "name": "Dark Fantasy",
              "slug": "dark-fantasy",
              "language": "eng",
              "games_count": 4623,
              "image_background": "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          },
          {
              "id": 42592,
              "name": "Похожа на Dark Souls",
              "slug": "pokhozha-na-dark-souls",
              "language": "rus",
              "games_count": 1120,
              "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature",
          "name_en": "Mature",
          "name_ru": "С 17 лет"
      },
      "user_game": null,
      "reviews_count": 2432,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg"
          },
          {
              "id": 30777,
              "image": "https://media.rawg.io/media/screenshots/75a/75a67f69575ebfc412a70cdde7fb8923.jpg"
          },
          {
              "id": 30778,
              "image": "https://media.rawg.io/media/screenshots/280/280b0e8492a247b718a3c14c41052a16.jpg"
          },
          {
              "id": 30779,
              "image": "https://media.rawg.io/media/screenshots/d8e/d8e17e4899561a0a25e0728541b1cac9.jpg"
          },
          {
              "id": 30780,
              "image": "https://media.rawg.io/media/screenshots/48c/48cfa5b44c1a6787971889bc7646ca47.jpg"
          },
          {
              "id": 30781,
              "image": "https://media.rawg.io/media/screenshots/472/472f9b7dfb71ac5d6880e94dd1c1a77c.jpg"
          },
          {
              "id": 30782,
              "image": "https://media.rawg.io/media/screenshots/c6d/c6de8c602de1cf1798353aa83a830948.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg"
          }
      ]
  },
  {
      "slug": "titan-quest-anniversary-edition",
      "name": "Titan Quest Anniversary Edition",
      "playtime": 5,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          },
          {
              "store": {
                  "id": 2,
                  "name": "Xbox Store",
                  "slug": "xbox-store"
              }
          },
          {
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog"
              }
          }
      ],
      "released": "2016-08-31",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
      "rating": 3.79,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 404,
              "percent": 51.73
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 172,
              "percent": 22.02
          },
          {
              "id": 3,
              "title": "meh",
              "count": 140,
              "percent": 17.93
          },
          {
              "id": 1,
              "title": "skip",
              "count": 65,
              "percent": 8.32
          }
      ],
      "ratings_count": 774,
      "reviews_text_count": 7,
      "added": 7734,
      "added_by_status": {
          "yet": 414,
          "owned": 6533,
          "beaten": 349,
          "toplay": 61,
          "dropped": 337,
          "playing": 40
      },
      "metacritic": null,
      "suggestions_count": 512,
      "updated": "2024-11-16T17:42:21",
      "id": 11052,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42400,
              "name": "Атмосфера",
              "slug": "atmosfera",
              "language": "rus",
              "games_count": 6083,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 42394,
              "name": "Глубокий сюжет",
              "slug": "glubokii-siuzhet",
              "language": "rus",
              "games_count": 14105,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 22665,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42412,
              "name": "Ролевая игра",
              "slug": "rolevaia-igra",
              "language": "rus",
              "games_count": 19072,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 23242,
              "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8037,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 42480,
              "name": "Фэнтези",
              "slug": "fentezi",
              "language": "rus",
              "games_count": 13070,
              "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 29316,
              "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
          },
          {
              "id": 42461,
              "name": "Классика",
              "slug": "klassika",
              "language": "rus",
              "games_count": 1465,
              "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1801,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42404,
              "name": "Женщина-протагонист",
              "slug": "zhenshchina-protagonist",
              "language": "rus",
              "games_count": 2413,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 7481,
              "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
          },
          {
              "id": 42489,
              "name": "Ролевой экшен",
              "slug": "rolevoi-ekshen",
              "language": "rus",
              "games_count": 4470,
              "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1578,
              "image_background": "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg"
          },
          {
              "id": 42487,
              "name": "Слэшер",
              "slug": "slesher",
              "language": "rus",
              "games_count": 3044,
              "image_background": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 1959,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 68,
              "name": "Hack and Slash",
              "slug": "hack-and-slash",
              "language": "eng",
              "games_count": 4531,
              "image_background": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg"
          },
          {
              "id": 42576,
              "name": "Изометрия",
              "slug": "izometriia",
              "language": "rus",
              "games_count": 2246,
              "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
          },
          {
              "id": 99,
              "name": "Isometric",
              "slug": "isometric",
              "language": "eng",
              "games_count": 4710,
              "image_background": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg"
          },
          {
              "id": 42515,
              "name": "Вид сверху",
              "slug": "vid-sverkhu",
              "language": "rus",
              "games_count": 7634,
              "image_background": "https://media.rawg.io/media/games/ae3/ae357d6e6f9e89597e8293469ddabba9.jpg"
          },
          {
              "id": 61,
              "name": "Top-Down",
              "slug": "top-down",
              "language": "eng",
              "games_count": 26227,
              "image_background": "https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg"
          },
          {
              "id": 98,
              "name": "Loot",
              "slug": "loot",
              "language": "eng",
              "games_count": 2440,
              "image_background": "https://media.rawg.io/media/games/3c3/3c363e31f4add887affadc82c641de72.jpg"
          },
          {
              "id": 42575,
              "name": "Лут",
              "slug": "lut",
              "language": "rus",
              "games_count": 1268,
              "image_background": "https://media.rawg.io/media/screenshots/d79/d790c12a425f81fa079b973e5f8814d0.jpg"
          },
          {
              "id": 42578,
              "name": "Редактор уровней",
              "slug": "redaktor-urovnei",
              "language": "rus",
              "games_count": 1184,
              "image_background": "https://media.rawg.io/media/screenshots/4cb/4cbbe312e35374b4dfdbdab98887d447.jpeg"
          },
          {
              "id": 266,
              "name": "Level Editor",
              "slug": "level-editor",
              "language": "eng",
              "games_count": 1840,
              "image_background": "https://media.rawg.io/media/screenshots/c8a/c8a231fb194a781ef2228505b1c1f0fb.jpg"
          },
          {
              "id": 108,
              "name": "Mythology",
              "slug": "mythology",
              "language": "eng",
              "games_count": 2141,
              "image_background": "https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg"
          },
          {
              "id": 42610,
              "name": "Мифология",
              "slug": "mifologiia",
              "language": "rus",
              "games_count": 1121,
              "image_background": "https://media.rawg.io/media/screenshots/d96/d968719f37eaba04920ba2cfe2b7813a.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 781,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
          },
          {
              "id": 88501,
              "image": "https://media.rawg.io/media/screenshots/157/157e3887246416a83c3c001f7fb36458.jpg"
          },
          {
              "id": 88502,
              "image": "https://media.rawg.io/media/screenshots/e29/e29e01f38adc07950f38e016ad08df6b.jpg"
          },
          {
              "id": 88503,
              "image": "https://media.rawg.io/media/screenshots/e6f/e6f34f7d388e2205638e72541ac7698f.jpg"
          },
          {
              "id": 88504,
              "image": "https://media.rawg.io/media/screenshots/dea/dea64067438aa50b8fecaa5b6ad08d8d.jpg"
          },
          {
              "id": 88505,
              "image": "https://media.rawg.io/media/screenshots/b81/b815aef2e8a6d0011d76444a011e012b.jpg"
          },
          {
              "id": 88506,
              "image": "https://media.rawg.io/media/screenshots/7d1/7d1ac751296b22c4f005ce5f82d30d29.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          },
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg"
          }
      ]
  },
  {
      "slug": "quake-champions",
      "name": "Quake Champions",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2017-08-22",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg",
      "rating": 3.26,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 432,
              "percent": 42.81
          },
          {
              "id": 3,
              "title": "meh",
              "count": 339,
              "percent": 33.6
          },
          {
              "id": 1,
              "title": "skip",
              "count": 162,
              "percent": 16.06
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 76,
              "percent": 7.53
          }
      ],
      "ratings_count": 1004,
      "reviews_text_count": 2,
      "added": 6932,
      "added_by_status": {
          "yet": 393,
          "owned": 5761,
          "beaten": 94,
          "toplay": 18,
          "dropped": 617,
          "playing": 49
      },
      "metacritic": null,
      "suggestions_count": 324,
      "updated": "2024-10-29T16:23:31",
      "id": 43877,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 33303,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 42423,
              "name": "Научная фантастика",
              "slug": "nauchnaia-fantastika",
              "language": "rus",
              "games_count": 8894,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 45818,
              "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 13751,
              "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
              "id": 42427,
              "name": "Шутер от первого лица",
              "slug": "shuter-ot-pervogo-litsa",
              "language": "rus",
              "games_count": 5736,
              "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
          },
          {
              "id": 42420,
              "name": "Сложная",
              "slug": "slozhnaia",
              "language": "rus",
              "games_count": 5609,
              "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
          },
          {
              "id": 42491,
              "name": "Мясо",
              "slug": "miaso",
              "language": "rus",
              "games_count": 4850,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 42461,
              "name": "Классика",
              "slug": "klassika",
              "language": "rus",
              "games_count": 1465,
              "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 5985,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 49,
              "name": "Difficult",
              "slug": "difficult",
              "language": "eng",
              "games_count": 13581,
              "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
          },
          {
              "id": 42402,
              "name": "Насилие",
              "slug": "nasilie",
              "language": "rus",
              "games_count": 5968,
              "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
          },
          {
              "id": 34,
              "name": "Violent",
              "slug": "violent",
              "language": "eng",
              "games_count": 7007,
              "image_background": "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 7755,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          },
          {
              "id": 42538,
              "name": "Бесплатная игра",
              "slug": "besplatnaia-igra",
              "language": "rus",
              "games_count": 7742,
              "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
          },
          {
              "id": 42411,
              "name": "Ранний доступ",
              "slug": "rannii-dostup",
              "language": "rus",
              "games_count": 16037,
              "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
          },
          {
              "id": 14,
              "name": "Early Access",
              "slug": "early-access",
              "language": "eng",
              "games_count": 16510,
              "image_background": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 42612,
              "name": "Быстрая",
              "slug": "bystraia",
              "language": "rus",
              "games_count": 1853,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42476,
              "name": "Соревновательная",
              "slug": "sorevnovatelnaia",
              "language": "rus",
              "games_count": 1000,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 131,
              "name": "Fast-Paced",
              "slug": "fast-paced",
              "language": "eng",
              "games_count": 10599,
              "image_background": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          },
          {
              "id": 42536,
              "name": "Лавкрафт",
              "slug": "lavkraft",
              "language": "rus",
              "games_count": 767,
              "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          },
          {
              "id": 42588,
              "name": "Киберспорт",
              "slug": "kibersport",
              "language": "rus",
              "games_count": 789,
              "image_background": "https://media.rawg.io/media/screenshots/238/238b9bcc2b658e38be965b16c9e39075.jpg"
          },
          {
              "id": 52,
              "name": "Arena Shooter",
              "slug": "arena-shooter",
              "language": "eng",
              "games_count": 1951,
              "image_background": "https://media.rawg.io/media/games/0c5/0c5fcdf04048200da14b90e0e6cfaf6b.jpg"
          },
          {
              "id": 42532,
              "name": "Шутер на арене",
              "slug": "shuter-na-arene",
              "language": "rus",
              "games_count": 572,
              "image_background": "https://media.rawg.io/media/screenshots/9cf/9cfb04d5480b105075226f02121ed3ae.jpg"
          },
          {
              "id": 73,
              "name": "e-sports",
              "slug": "e-sports",
              "language": "eng",
              "games_count": 80,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature",
          "name_en": "Mature",
          "name_ru": "С 17 лет"
      },
      "user_game": null,
      "reviews_count": 1009,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
          },
          {
              "id": 629931,
              "image": "https://media.rawg.io/media/screenshots/cbd/cbd0b3115423fb6d25f13fa6091ffbf2.jpg"
          },
          {
              "id": 629932,
              "image": "https://media.rawg.io/media/screenshots/3ac/3acb0f27dd74d72b9a3d766feeb22f57.jpg"
          },
          {
              "id": 629933,
              "image": "https://media.rawg.io/media/screenshots/7cf/7cf07d07616c4c5397ad53c4c2c14901.jpg"
          },
          {
              "id": 629934,
              "image": "https://media.rawg.io/media/screenshots/131/131705ecac72690598938c0dd6f83723.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "ratchet-clank",
      "name": "Ratchet & Clank",
      "playtime": 18,
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2016-04-12",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg",
      "rating": 4.05,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 862,
              "percent": 59.45
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 371,
              "percent": 25.59
          },
          {
              "id": 3,
              "title": "meh",
              "count": 177,
              "percent": 12.21
          },
          {
              "id": 1,
              "title": "skip",
              "count": 40,
              "percent": 2.76
          }
      ],
      "ratings_count": 1432,
      "reviews_text_count": 13,
      "added": 6006,
      "added_by_status": {
          "yet": 273,
          "owned": 4072,
          "beaten": 1155,
          "toplay": 140,
          "dropped": 291,
          "playing": 75
      },
      "metacritic": 85,
      "suggestions_count": 523,
      "updated": "2024-11-26T00:14:28",
      "id": 2553,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 69,
              "name": "Action-Adventure",
              "slug": "action-adventure",
              "language": "eng",
              "games_count": 17851,
              "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          }
      ],
      "esrb_rating": {
          "id": 2,
          "name": "Everyone 10+",
          "slug": "everyone-10-plus",
          "name_en": "Everyone 10+",
          "name_ru": "С 10 лет"
      },
      "user_game": null,
      "reviews_count": 1450,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg"
          },
          {
              "id": 23317,
              "image": "https://media.rawg.io/media/screenshots/6e8/6e874d1cdb288b6e13c345fa707933d8.jpg"
          },
          {
              "id": 23320,
              "image": "https://media.rawg.io/media/screenshots/dcb/dcbc279b5a18bea8289b758f199c573e.jpg"
          },
          {
              "id": 23321,
              "image": "https://media.rawg.io/media/screenshots/3f7/3f7a06aff876159988e1c83a7a266905.jpg"
          },
          {
              "id": 23322,
              "image": "https://media.rawg.io/media/screenshots/96f/96f8af98ea6e43e436fd4fc2f7ebf88f.jpg"
          },
          {
              "id": 23327,
              "image": "https://media.rawg.io/media/screenshots/f4f/f4fd4705e27a887150ef691269f65194.jpg"
          },
          {
              "id": 23330,
              "image": "https://media.rawg.io/media/screenshots/25c/25c0c904bc88fbdfde7f06258c208a76.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter"
          },
          {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "infamous-second-son",
      "name": "inFAMOUS Second Son",
      "playtime": 0,
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2014-03-21",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/be2/be239d5eb4d0bf02bf722aff51e694ad.jpg",
      "rating": 3.91,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 953,
              "percent": 58.65
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 325,
              "percent": 20.0
          },
          {
              "id": 3,
              "title": "meh",
              "count": 286,
              "percent": 17.6
          },
          {
              "id": 1,
              "title": "skip",
              "count": 61,
              "percent": 3.75
          }
      ],
      "ratings_count": 1611,
      "reviews_text_count": 10,
      "added": 5939,
      "added_by_status": {
          "yet": 211,
          "owned": 3771,
          "beaten": 1483,
          "toplay": 174,
          "dropped": 242,
          "playing": 58
      },
      "metacritic": 80,
      "suggestions_count": 651,
      "updated": "2024-11-23T09:08:55",
      "id": 3631,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen",
          "name_en": "Teen",
          "name_ru": "С 13 лет"
      },
      "user_game": null,
      "reviews_count": 1625,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/be2/be239d5eb4d0bf02bf722aff51e694ad.jpg"
          },
          {
              "id": 32141,
              "image": "https://media.rawg.io/media/screenshots/94f/94f8d6fccc12f0fa22a1cb921a819b8f.jpg"
          },
          {
              "id": 32143,
              "image": "https://media.rawg.io/media/screenshots/9a5/9a50fdd6b3166f68552ed8b9e100f4ae.jpg"
          },
          {
              "id": 32144,
              "image": "https://media.rawg.io/media/screenshots/80a/80a96961680c40240799e3613f83898c.jpg"
          },
          {
              "id": 32145,
              "image": "https://media.rawg.io/media/screenshots/cf6/cf685d251487cffe79a686313aa686ef.jpg"
          },
          {
              "id": 32146,
              "image": "https://media.rawg.io/media/screenshots/0c1/0c1aa7cfb8333e17401972dc2afa3601.jpg"
          },
          {
              "id": 32147,
              "image": "https://media.rawg.io/media/screenshots/088/08892e59bf763e2afa5cb646b99a9a18.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "sid-meiers-civilization-iii-complete",
      "name": "Sid Meier's Civilization III Complete",
      "playtime": 1,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          },
          {
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog"
              }
          }
      ],
      "released": "2001-10-29",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
      "rating": 3.69,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 212,
              "percent": 45.99
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 120,
              "percent": 26.03
          },
          {
              "id": 1,
              "title": "skip",
              "count": 68,
              "percent": 14.75
          },
          {
              "id": 3,
              "title": "meh",
              "count": 61,
              "percent": 13.23
          }
      ],
      "ratings_count": 460,
      "reviews_text_count": 0,
      "added": 5423,
      "added_by_status": {
          "yet": 307,
          "owned": 4672,
          "beaten": 236,
          "toplay": 24,
          "dropped": 170,
          "playing": 14
      },
      "metacritic": 90,
      "suggestions_count": 520,
      "updated": "2024-10-15T21:54:28",
      "id": 17380,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 42435,
              "name": "Шедевр",
              "slug": "shedevr",
              "language": "rus",
              "games_count": 1059,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 21088,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42461,
              "name": "Классика",
              "slug": "klassika",
              "language": "rus",
              "games_count": 1465,
              "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 24881,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1801,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42464,
              "name": "Исследование",
              "slug": "issledovanie",
              "language": "rus",
              "games_count": 2979,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 1959,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 42520,
              "name": "Реиграбельность",
              "slug": "reigrabelnost",
              "language": "rus",
              "games_count": 2389,
              "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
          },
          {
              "id": 42424,
              "name": "Пошаговая",
              "slug": "poshagovaia",
              "language": "rus",
              "games_count": 1795,
              "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
          },
          {
              "id": 102,
              "name": "Turn-Based",
              "slug": "turn-based",
              "language": "eng",
              "games_count": 5417,
              "image_background": "https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg"
          },
          {
              "id": 5,
              "name": "Replay Value",
              "slug": "replay-value",
              "language": "eng",
              "games_count": 1840,
              "image_background": "https://media.rawg.io/media/games/511/5116b4524cea34c6b3f12e0ca027d850.jpg"
          },
          {
              "id": 89,
              "name": "Historical",
              "slug": "historical",
              "language": "eng",
              "games_count": 3428,
              "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
          },
          {
              "id": 42403,
              "name": "История",
              "slug": "istoriia",
              "language": "rus",
              "games_count": 940,
              "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
          },
          {
              "id": 42426,
              "name": "Пошаговая стратегия",
              "slug": "poshagovaia-strategiia",
              "language": "rus",
              "games_count": 3675,
              "image_background": "https://media.rawg.io/media/screenshots/010/0101f021b2dc123c98969fda7e4bcd92.jpg"
          },
          {
              "id": 42431,
              "name": "Военные действия",
              "slug": "voennye-deistviia",
              "language": "rus",
              "games_count": 2036,
              "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
          },
          {
              "id": 81,
              "name": "Military",
              "slug": "military",
              "language": "eng",
              "games_count": 2051,
              "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
          },
          {
              "id": 101,
              "name": "Turn-Based Strategy",
              "slug": "turn-based-strategy",
              "language": "eng",
              "games_count": 5583,
              "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
          },
          {
              "id": 42512,
              "name": "Олдскул",
              "slug": "oldskul",
              "language": "rus",
              "games_count": 4232,
              "image_background": "https://media.rawg.io/media/games/8b5/8b591049784d961016852873bdcb5b2d.jpg"
          },
          {
              "id": 42517,
              "name": "Затягивающая",
              "slug": "zatiagivaiushchaia",
              "language": "rus",
              "games_count": 369,
              "image_background": "https://media.rawg.io/media/screenshots/95a/95a557d6dfa6430dd662a136d71e5915.jpg"
          },
          {
              "id": 42504,
              "name": "Градостроительный симулятор",
              "slug": "gradostroitelnyi-simuliator",
              "language": "rus",
              "games_count": 473,
              "image_background": "https://media.rawg.io/media/screenshots/21a/21a0dacefc6b20dc81c8aad0625eb9a8.jpg"
          },
          {
              "id": 100,
              "name": "Grand Strategy",
              "slug": "grand-strategy",
              "language": "eng",
              "games_count": 793,
              "image_background": "https://media.rawg.io/media/games/77e/77e8a4a7b377a081aabd0dbf688417e1.jpg"
          },
          {
              "id": 42519,
              "name": "Глобальная стратегия",
              "slug": "globalnaia-strategiia",
              "language": "rus",
              "games_count": 832,
              "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
          },
          {
              "id": 212,
              "name": "4X",
              "slug": "4x",
              "language": "eng",
              "games_count": 603,
              "image_background": "https://media.rawg.io/media/screenshots/d2c/d2c1101d697afb7a3c7b5b27c104a47d.jpg"
          }
      ],
      "esrb_rating": {
          "id": 1,
          "name": "Everyone",
          "slug": "everyone",
          "name_en": "Everyone",
          "name_ru": "Для всех"
      },
      "user_game": null,
      "reviews_count": 461,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg"
          },
          {
              "id": 158322,
              "image": "https://media.rawg.io/media/screenshots/d89/d8925dc30a00f7a923b07919147cea36.jpg"
          },
          {
              "id": 158323,
              "image": "https://media.rawg.io/media/screenshots/11f/11fe6ebe967b5953dfa767bc33436d2c.jpg"
          },
          {
              "id": 158324,
              "image": "https://media.rawg.io/media/screenshots/da8/da8761764f19ac8aafd09585f0d2f4c1.jpg"
          },
          {
              "id": 158325,
              "image": "https://media.rawg.io/media/screenshots/4fe/4fe2196969e225348f40e36f1ade000b.jpg"
          },
          {
              "id": 158326,
              "image": "https://media.rawg.io/media/screenshots/784/7840427474caa6d4d5e375a511a54f23.jpg"
          },
          {
              "id": 232651,
              "image": "https://media.rawg.io/media/screenshots/1fb/1fb0898d5fce6456e48d9c16b6a02b01_uicpfKi.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 10,
              "name": "Strategy",
              "slug": "strategy"
          },
          {
              "id": 14,
              "name": "Simulation",
              "slug": "simulation"
          }
      ]
  },
  {
      "slug": "red-orchestra-2-heroes-of-stalingrad-with-rising-s",
      "name": "Red Orchestra 2: Heroes of Stalingrad with Rising Storm",
      "playtime": 4,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2011-09-13",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg",
      "rating": 3.25,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 170,
              "percent": 39.35
          },
          {
              "id": 3,
              "title": "meh",
              "count": 109,
              "percent": 25.23
          },
          {
              "id": 1,
              "title": "skip",
              "count": 92,
              "percent": 21.3
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 61,
              "percent": 14.12
          }
      ],
      "ratings_count": 431,
      "reviews_text_count": 0,
      "added": 5330,
      "added_by_status": {
          "yet": 246,
          "owned": 4736,
          "beaten": 103,
          "toplay": 32,
          "dropped": 198,
          "playing": 15
      },
      "metacritic": 76,
      "suggestions_count": 592,
      "updated": "2024-09-28T01:17:24",
      "id": 14062,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42400,
              "name": "Атмосфера",
              "slug": "atmosfera",
              "language": "rus",
              "games_count": 6083,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 33303,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 13751,
              "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
              "id": 42427,
              "name": "Шутер от первого лица",
              "slug": "shuter-ot-pervogo-litsa",
              "language": "rus",
              "games_count": 5736,
              "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 21088,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42420,
              "name": "Сложная",
              "slug": "slozhnaia",
              "language": "rus",
              "games_count": 5609,
              "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
          },
          {
              "id": 42491,
              "name": "Мясо",
              "slug": "miaso",
              "language": "rus",
              "games_count": 4850,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 5985,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 49,
              "name": "Difficult",
              "slug": "difficult",
              "language": "eng",
              "games_count": 13581,
              "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
          },
          {
              "id": 42436,
              "name": "Тактика",
              "slug": "taktika",
              "language": "rus",
              "games_count": 4163,
              "image_background": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5537,
              "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5196,
              "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          },
          {
              "id": 40852,
              "name": "Steam Workshop",
              "slug": "steam-workshop",
              "language": "eng",
              "games_count": 1578,
              "image_background": "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 1959,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 70,
              "name": "War",
              "slug": "war",
              "language": "eng",
              "games_count": 9537,
              "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
          },
          {
              "id": 42430,
              "name": "Война",
              "slug": "voina",
              "language": "rus",
              "games_count": 2641,
              "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
          },
          {
              "id": 42460,
              "name": "Реализм",
              "slug": "realizm",
              "language": "rus",
              "games_count": 6772,
              "image_background": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg"
          },
          {
              "id": 89,
              "name": "Historical",
              "slug": "historical",
              "language": "eng",
              "games_count": 3428,
              "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
          },
          {
              "id": 77,
              "name": "Realistic",
              "slug": "realistic",
              "language": "eng",
              "games_count": 6794,
              "image_background": "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg"
          },
          {
              "id": 42403,
              "name": "История",
              "slug": "istoriia",
              "language": "rus",
              "games_count": 940,
              "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1738,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42450,
              "name": "Командная",
              "slug": "komandnaia",
              "language": "rus",
              "games_count": 1437,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 42431,
              "name": "Военные действия",
              "slug": "voennye-deistviia",
              "language": "rus",
              "games_count": 2036,
              "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
          },
          {
              "id": 81,
              "name": "Military",
              "slug": "military",
              "language": "eng",
              "games_count": 2051,
              "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
          },
          {
              "id": 40856,
              "name": "Valve Anti-Cheat enabled",
              "slug": "valve-anti-cheat-enabled",
              "language": "eng",
              "games_count": 105,
              "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
          },
          {
              "id": 42459,
              "name": "Вторая мировая война",
              "slug": "vtoraia-mirovaia-voina",
              "language": "rus",
              "games_count": 710,
              "image_background": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg"
          },
          {
              "id": 105,
              "name": "World War II",
              "slug": "world-war-ii",
              "language": "eng",
              "games_count": 992,
              "image_background": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg"
          },
          {
              "id": 55,
              "name": "Tanks",
              "slug": "tanks",
              "language": "eng",
              "games_count": 2851,
              "image_background": "https://media.rawg.io/media/games/2ee/2eeed8524931b4fae1e4a40d0e5443b5.jpg"
          },
          {
              "id": 42605,
              "name": "Танки",
              "slug": "tanki",
              "language": "rus",
              "games_count": 499,
              "image_background": "https://media.rawg.io/media/screenshots/31b/31bac382a13d14c5748b481326f4092b.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 432,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg"
          },
          {
              "id": 121802,
              "image": "https://media.rawg.io/media/screenshots/4eb/4ebf10840d26dc4202e88a9488e6816d.jpg"
          },
          {
              "id": 121803,
              "image": "https://media.rawg.io/media/screenshots/319/319bfe0733c68b397a4280e049243b48.jpg"
          },
          {
              "id": 121804,
              "image": "https://media.rawg.io/media/screenshots/5f0/5f01d4dd194d77b089b3b933443ff8be.jpg"
          },
          {
              "id": 121805,
              "image": "https://media.rawg.io/media/screenshots/eec/eecc98821557338016fda9455aacc0da.jpg"
          },
          {
              "id": 121806,
              "image": "https://media.rawg.io/media/screenshots/24b/24b519ea7585929a409349916495f91c.jpg"
          },
          {
              "id": 121807,
              "image": "https://media.rawg.io/media/screenshots/f45/f4583c3881ccc9d7a753c521fe6afa15.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "the-playroom",
      "name": "The Playroom",
      "playtime": 0,
      "platforms": [
          {
              "platform": {
                  "id": 18,
                  "name": "PlayStation 4",
                  "slug": "playstation4"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2013-11-15",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg",
      "rating": 2.27,
      "rating_top": 1,
      "ratings": [
          {
              "id": 1,
              "title": "skip",
              "count": 363,
              "percent": 46.36
          },
          {
              "id": 3,
              "title": "meh",
              "count": 275,
              "percent": 35.12
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 133,
              "percent": 16.99
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 12,
              "percent": 1.53
          }
      ],
      "ratings_count": 782,
      "reviews_text_count": 0,
      "added": 5136,
      "added_by_status": {
          "yet": 201,
          "owned": 4491,
          "beaten": 144,
          "toplay": 11,
          "dropped": 279,
          "playing": 10
      },
      "metacritic": null,
      "suggestions_count": 111,
      "updated": "2024-04-05T13:37:32",
      "id": 5687,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          }
      ],
      "esrb_rating": {
          "id": 2,
          "name": "Everyone 10+",
          "slug": "everyone-10-plus",
          "name_en": "Everyone 10+",
          "name_ru": "С 10 лет"
      },
      "user_game": null,
      "reviews_count": 783,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg"
          },
          {
              "id": 2094035,
              "image": "https://media.rawg.io/media/screenshots/ca6/ca64a4c742fa65243268d19a6f3512c3.jpg"
          },
          {
              "id": 2094036,
              "image": "https://media.rawg.io/media/screenshots/946/946838115936828d898d8a162160ee1e.jpg"
          },
          {
              "id": 2094037,
              "image": "https://media.rawg.io/media/screenshots/dbb/dbbd53209f312937fc5ea8420a739133.jpg"
          },
          {
              "id": 2094038,
              "image": "https://media.rawg.io/media/screenshots/56a/56a89ba761aed7ea9139d76612ed239f.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 11,
              "name": "Arcade",
              "slug": "arcade"
          }
      ]
  },
  {
      "slug": "vrchat",
      "name": "VRChat",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2017-02-01",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
      "rating": 3.14,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 216,
              "percent": 41.78
          },
          {
              "id": 3,
              "title": "meh",
              "count": 150,
              "percent": 29.01
          },
          {
              "id": 1,
              "title": "skip",
              "count": 112,
              "percent": 21.66
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 39,
              "percent": 7.54
          }
      ],
      "ratings_count": 514,
      "reviews_text_count": 3,
      "added": 4857,
      "added_by_status": {
          "yet": 133,
          "owned": 4148,
          "beaten": 72,
          "toplay": 18,
          "dropped": 428,
          "playing": 58
      },
      "metacritic": null,
      "suggestions_count": 480,
      "updated": "2024-11-20T20:39:38",
      "id": 9575,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42399,
              "name": "Казуальная игра",
              "slug": "kazualnaia-igra",
              "language": "rus",
              "games_count": 44831,
              "image_background": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 12414,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 16,
              "name": "Horror",
              "slug": "horror",
              "language": "eng",
              "games_count": 45818,
              "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 21088,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42482,
              "name": "Смешная",
              "slug": "smeshnaia",
              "language": "rus",
              "games_count": 10004,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 7755,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          },
          {
              "id": 42538,
              "name": "Бесплатная игра",
              "slug": "besplatnaia-igra",
              "language": "rus",
              "games_count": 7742,
              "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
          },
          {
              "id": 42411,
              "name": "Ранний доступ",
              "slug": "rannii-dostup",
              "language": "rus",
              "games_count": 16037,
              "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
          },
          {
              "id": 14,
              "name": "Early Access",
              "slug": "early-access",
              "language": "eng",
              "games_count": 16510,
              "image_background": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg"
          },
          {
              "id": 42407,
              "name": "Аниме",
              "slug": "anime-2",
              "language": "rus",
              "games_count": 10264,
              "image_background": "https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg"
          },
          {
              "id": 42406,
              "name": "Нагота",
              "slug": "nagota",
              "language": "rus",
              "games_count": 6740,
              "image_background": "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg"
          },
          {
              "id": 40832,
              "name": "Cross-Platform Multiplayer",
              "slug": "cross-platform-multiplayer",
              "language": "eng",
              "games_count": 2781,
              "image_background": "https://media.rawg.io/media/games/d09/d096ad37b7f522e11c02848252213a9a.jpg"
          },
          {
              "id": 42453,
              "name": "ММО",
              "slug": "mmo-2",
              "language": "rus",
              "games_count": 2595,
              "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
          },
          {
              "id": 42405,
              "name": "Сексуальный контент",
              "slug": "seksualnyi-kontent",
              "language": "rus",
              "games_count": 6880,
              "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
          },
          {
              "id": 33,
              "name": "VR",
              "slug": "vr",
              "language": "eng",
              "games_count": 12561,
              "image_background": "https://media.rawg.io/media/games/b19/b191ff2b8ccb646d1d2d9297ed5c7e89.jpg"
          },
          {
              "id": 42561,
              "name": "Мемы",
              "slug": "memy",
              "language": "rus",
              "games_count": 1777,
              "image_background": "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg"
          },
          {
              "id": 42531,
              "name": "Спортивная игра",
              "slug": "sportivnaia-igra",
              "language": "rus",
              "games_count": 4672,
              "image_background": "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg"
          },
          {
              "id": 158,
              "name": "MMORPG",
              "slug": "mmorpg",
              "language": "eng",
              "games_count": 1495,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen",
          "name_en": "Teen",
          "name_ru": "С 13 лет"
      },
      "user_game": null,
      "reviews_count": 517,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg"
          },
          {
              "id": 70129,
              "image": "https://media.rawg.io/media/screenshots/1b5/1b5c71bc5d948b8d7bf674e757c49c1f.jpg"
          },
          {
              "id": 70130,
              "image": "https://media.rawg.io/media/screenshots/900/9003f973b584b5f0bba9511851e562ba.jpg"
          },
          {
              "id": 70131,
              "image": "https://media.rawg.io/media/screenshots/af9/af989d6f28d48c3b9b2442caf15c8586.jpg"
          },
          {
              "id": 70132,
              "image": "https://media.rawg.io/media/screenshots/ba8/ba81e54dc720255cc2747900a217f9fa.jpg"
          },
          {
              "id": 70133,
              "image": "https://media.rawg.io/media/screenshots/d40/d400f4a4544a7b72d6117c94eabc6435.jpg"
          },
          {
              "id": 70134,
              "image": "https://media.rawg.io/media/screenshots/01a/01a6feceffd86668980877368c1823a8.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure"
          },
          {
              "id": 40,
              "name": "Casual",
              "slug": "casual"
          },
          {
              "id": 14,
              "name": "Simulation",
              "slug": "simulation"
          },
          {
              "id": 15,
              "name": "Sports",
              "slug": "sports"
          },
          {
              "id": 59,
              "name": "Massively Multiplayer",
              "slug": "massively-multiplayer"
          }
      ]
  },
  {
      "slug": "killer-is-dead-nightmare-edition",
      "name": "Killer is Dead - Nightmare Edition",
      "playtime": 3,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2014-05-23",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/a72/a72e405a19f93dc68cbc06d7a39b2a4a.jpg",
      "rating": 3.21,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 178,
              "percent": 44.17
          },
          {
              "id": 1,
              "title": "skip",
              "count": 91,
              "percent": 22.58
          },
          {
              "id": 3,
              "title": "meh",
              "count": 90,
              "percent": 22.33
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 44,
              "percent": 10.92
          }
      ],
      "ratings_count": 397,
      "reviews_text_count": 6,
      "added": 4812,
      "added_by_status": {
          "yet": 362,
          "owned": 4104,
          "beaten": 145,
          "toplay": 49,
          "dropped": 135,
          "playing": 17
      },
      "metacritic": null,
      "suggestions_count": 454,
      "updated": "2024-08-04T15:05:35",
      "id": 16199,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 19768,
              "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42400,
              "name": "Атмосфера",
              "slug": "atmosfera",
              "language": "rus",
              "games_count": 6083,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 42394,
              "name": "Глубокий сюжет",
              "slug": "glubokii-siuzhet",
              "language": "rus",
              "games_count": 14105,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 23242,
              "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
          },
          {
              "id": 42435,
              "name": "Шедевр",
              "slug": "shedevr",
              "language": "rus",
              "games_count": 1059,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7958,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42491,
              "name": "Мясо",
              "slug": "miaso",
              "language": "rus",
              "games_count": 4850,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 5985,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 40850,
              "name": "Steam Leaderboards",
              "slug": "steam-leaderboards",
              "language": "eng",
              "games_count": 7290,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 42481,
              "name": "Юмор",
              "slug": "iumor",
              "language": "rus",
              "games_count": 6461,
              "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13121,
              "image_background": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg"
          },
          {
              "id": 42416,
              "name": "Контроллер",
              "slug": "kontroller",
              "language": "rus",
              "games_count": 7024,
              "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
          },
          {
              "id": 42487,
              "name": "Слэшер",
              "slug": "slesher",
              "language": "rus",
              "games_count": 3044,
              "image_background": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg"
          },
          {
              "id": 68,
              "name": "Hack and Slash",
              "slug": "hack-and-slash",
              "language": "eng",
              "games_count": 4531,
              "image_background": "https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg"
          },
          {
              "id": 42470,
              "name": "Киберпанк",
              "slug": "kiberpank",
              "language": "rus",
              "games_count": 2038,
              "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
          },
          {
              "id": 226,
              "name": "Cyberpunk",
              "slug": "cyberpunk",
              "language": "eng",
              "games_count": 4756,
              "image_background": "https://media.rawg.io/media/games/81e/81e6c6819d4322caf375b6735c3043ec.jpg"
          },
          {
              "id": 203,
              "name": "Beat 'em up",
              "slug": "beat-em-up",
              "language": "eng",
              "games_count": 3219,
              "image_background": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg"
          },
          {
              "id": 42606,
              "name": "Стилизация",
              "slug": "stilizatsiia",
              "language": "rus",
              "games_count": 7508,
              "image_background": "https://media.rawg.io/media/games/566/566f53f43aa1bd28c63cf3a4d21440ee.jpg"
          },
          {
              "id": 42672,
              "name": "Сюрреалистичная",
              "slug": "siurrealistichnaia",
              "language": "rus",
              "games_count": 2805,
              "image_background": "https://media.rawg.io/media/screenshots/43a/43a648790000e1317c81c268cf6c0ed7.jpg"
          },
          {
              "id": 46,
              "name": "Surreal",
              "slug": "surreal",
              "language": "eng",
              "games_count": 5704,
              "image_background": "https://media.rawg.io/media/screenshots/b0a/b0a14be9cf5547d82f079a5e988d0733.jpg"
          },
          {
              "id": 166,
              "name": "Stylized",
              "slug": "stylized",
              "language": "eng",
              "games_count": 7525,
              "image_background": "https://media.rawg.io/media/games/2ba/2ba37c3516b73e4b67bb3c1a69bb6478.jpg"
          },
          {
              "id": 42408,
              "name": "Симулятор свиданий",
              "slug": "simuliator-svidanii",
              "language": "rus",
              "games_count": 3287,
              "image_background": "https://media.rawg.io/media/games/a6c/a6cd31267a20a615d35f618e766208fc.jpg"
          },
          {
              "id": 42507,
              "name": "Сражения на мечах",
              "slug": "srazheniia-na-mechakh",
              "language": "rus",
              "games_count": 799,
              "image_background": "https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg"
          },
          {
              "id": 304,
              "name": "Character Action Game",
              "slug": "character-action-game",
              "language": "eng",
              "games_count": 616,
              "image_background": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg"
          },
          {
              "id": 42495,
              "name": "Яркий главный герой",
              "slug": "iarkii-glavnyi-geroi",
              "language": "rus",
              "games_count": 639,
              "image_background": "https://media.rawg.io/media/games/bbe/bbe47995ed6f8b054afa6110f522515d.jpg"
          },
          {
              "id": 185,
              "name": "Swordplay",
              "slug": "swordplay",
              "language": "eng",
              "games_count": 770,
              "image_background": "https://media.rawg.io/media/games/0a5/0a56e2bb9ce95359e69ff9689c553a45.jpg"
          },
          {
              "id": 42493,
              "name": "Зрелищные сражения",
              "slug": "zrelishchnye-srazheniia",
              "language": "rus",
              "games_count": 678,
              "image_background": "https://media.rawg.io/media/screenshots/935/935c77e612cfeedcdffe02394c2ad343.jpg"
          },
          {
              "id": 254,
              "name": "Spectacle fighter",
              "slug": "spectacle-fighter",
              "language": "eng",
              "games_count": 666,
              "image_background": "https://media.rawg.io/media/screenshots/935/935c77e612cfeedcdffe02394c2ad343.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 403,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/a72/a72e405a19f93dc68cbc06d7a39b2a4a.jpg"
          },
          {
              "id": 144689,
              "image": "https://media.rawg.io/media/screenshots/172/17210e6d3629f55dc810279de45e3ca9.jpg"
          },
          {
              "id": 144690,
              "image": "https://media.rawg.io/media/screenshots/c8d/c8dc740fa61208b41a1126f6952c0462.jpg"
          },
          {
              "id": 144691,
              "image": "https://media.rawg.io/media/screenshots/cc7/cc71aa84c32a063aeb275ba49b2ecf41.jpg"
          },
          {
              "id": 144692,
              "image": "https://media.rawg.io/media/screenshots/b74/b74bd07b8f2285012b9b3467c49b94fa.jpg"
          },
          {
              "id": 144693,
              "image": "https://media.rawg.io/media/screenshots/186/186d917c72ff752a0be5c71b58980e86.jpg"
          },
          {
              "id": 144694,
              "image": "https://media.rawg.io/media/screenshots/780/780641112aacb470b0f8e3548d921215.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "heroes-generals",
      "name": "Heroes & Generals",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          },
          {
              "store": {
                  "id": 11,
                  "name": "Epic Games",
                  "slug": "epic-games"
              }
          }
      ],
      "released": "2016-10-18",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg",
      "rating": 2.77,
      "rating_top": 3,
      "ratings": [
          {
              "id": 3,
              "title": "meh",
              "count": 216,
              "percent": 45.86
          },
          {
              "id": 1,
              "title": "skip",
              "count": 128,
              "percent": 27.18
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 108,
              "percent": 22.93
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 19,
              "percent": 4.03
          }
      ],
      "ratings_count": 468,
      "reviews_text_count": 1,
      "added": 4793,
      "added_by_status": {
          "yet": 167,
          "owned": 4211,
          "beaten": 48,
          "toplay": 12,
          "dropped": 344,
          "playing": 11
      },
      "metacritic": null,
      "suggestions_count": 482,
      "updated": "2024-11-17T21:16:29",
      "id": 10428,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42398,
              "name": "Инди",
              "slug": "indi-2",
              "language": "rus",
              "games_count": 58791,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42400,
              "name": "Атмосфера",
              "slug": "atmosfera",
              "language": "rus",
              "games_count": 6083,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8037,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 33303,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 13751,
              "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
              "id": 42427,
              "name": "Шутер от первого лица",
              "slug": "shuter-ot-pervogo-litsa",
              "language": "rus",
              "games_count": 5736,
              "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 21088,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 7755,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          },
          {
              "id": 42538,
              "name": "Бесплатная игра",
              "slug": "besplatnaia-igra",
              "language": "rus",
              "games_count": 7742,
              "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
          },
          {
              "id": 42436,
              "name": "Тактика",
              "slug": "taktika",
              "language": "rus",
              "games_count": 4163,
              "image_background": "https://media.rawg.io/media/games/c73/c73c4ffebfe968ba0982a56c2b5020ef.jpg"
          },
          {
              "id": 42411,
              "name": "Ранний доступ",
              "slug": "rannii-dostup",
              "language": "rus",
              "games_count": 16037,
              "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5537,
              "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
          },
          {
              "id": 42453,
              "name": "ММО",
              "slug": "mmo-2",
              "language": "rus",
              "games_count": 2595,
              "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
          },
          {
              "id": 70,
              "name": "War",
              "slug": "war",
              "language": "eng",
              "games_count": 9537,
              "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
          },
          {
              "id": 40837,
              "name": "In-App Purchases",
              "slug": "in-app-purchases",
              "language": "eng",
              "games_count": 2886,
              "image_background": "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg"
          },
          {
              "id": 42430,
              "name": "Война",
              "slug": "voina",
              "language": "rus",
              "games_count": 2641,
              "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
          },
          {
              "id": 89,
              "name": "Historical",
              "slug": "historical",
              "language": "eng",
              "games_count": 3428,
              "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
          },
          {
              "id": 42403,
              "name": "История",
              "slug": "istoriia",
              "language": "rus",
              "games_count": 940,
              "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
          },
          {
              "id": 168,
              "name": "RTS",
              "slug": "rts",
              "language": "eng",
              "games_count": 2509,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 1656,
              "name": "mmo",
              "slug": "mmo",
              "language": "eng",
              "games_count": 2089,
              "image_background": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg"
          },
          {
              "id": 42459,
              "name": "Вторая мировая война",
              "slug": "vtoraia-mirovaia-voina",
              "language": "rus",
              "games_count": 710,
              "image_background": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg"
          },
          {
              "id": 105,
              "name": "World War II",
              "slug": "world-war-ii",
              "language": "eng",
              "games_count": 992,
              "image_background": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 471,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg"
          },
          {
              "id": 81100,
              "image": "https://media.rawg.io/media/screenshots/1ca/1ca1a6685e9aff2087811afd48ea814b.jpg"
          },
          {
              "id": 81101,
              "image": "https://media.rawg.io/media/screenshots/46f/46f57a8e1ccadf75c211261a299f5711.jpg"
          },
          {
              "id": 81102,
              "image": "https://media.rawg.io/media/screenshots/46a/46ae018fe02270b76d4f63a53a14eaae.jpg"
          },
          {
              "id": 81103,
              "image": "https://media.rawg.io/media/screenshots/7df/7dfbd117a822d66c2f766264a3b3fc5c.jpg"
          },
          {
              "id": 81104,
              "image": "https://media.rawg.io/media/screenshots/145/1458ec5ff2d6d0d315bde8db2cf3d92a.jpg"
          },
          {
              "id": 81105,
              "image": "https://media.rawg.io/media/screenshots/bf2/bf27897ad3eb746c834643fca07a3893.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 51,
              "name": "Indie",
              "slug": "indie"
          },
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter"
          },
          {
              "id": 59,
              "name": "Massively Multiplayer",
              "slug": "massively-multiplayer"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "crysis-2-maximum-edition",
      "name": "Crysis 2 - Maximum Edition",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2011-03-22",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg",
      "rating": 3.71,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 328,
              "percent": 54.39
          },
          {
              "id": 3,
              "title": "meh",
              "count": 150,
              "percent": 24.88
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 88,
              "percent": 14.59
          },
          {
              "id": 1,
              "title": "skip",
              "count": 37,
              "percent": 6.14
          }
      ],
      "ratings_count": 602,
      "reviews_text_count": 1,
      "added": 4761,
      "added_by_status": {
          "yet": 211,
          "owned": 3695,
          "beaten": 639,
          "toplay": 63,
          "dropped": 147,
          "playing": 6
      },
      "metacritic": null,
      "suggestions_count": 636,
      "updated": "2024-11-17T13:58:32",
      "id": 19647,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42400,
              "name": "Атмосфера",
              "slug": "atmosfera",
              "language": "rus",
              "games_count": 6083,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 42394,
              "name": "Глубокий сюжет",
              "slug": "glubokii-siuzhet",
              "language": "rus",
              "games_count": 14105,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 22665,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 118,
              "name": "Story Rich",
              "slug": "story-rich",
              "language": "eng",
              "games_count": 23242,
              "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8037,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 33303,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 42435,
              "name": "Шедевр",
              "slug": "shedevr",
              "language": "rus",
              "games_count": 1059,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 19992,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42423,
              "name": "Научная фантастика",
              "slug": "nauchnaia-fantastika",
              "language": "rus",
              "games_count": 8894,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 40845,
              "name": "Partial Controller Support",
              "slug": "partial-controller-support",
              "language": "eng",
              "games_count": 12414,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 13751,
              "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
          },
          {
              "id": 42427,
              "name": "Шутер от первого лица",
              "slug": "shuter-ot-pervogo-litsa",
              "language": "rus",
              "games_count": 5736,
              "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
          },
          {
              "id": 42452,
              "name": "Выживание",
              "slug": "vyzhivanie",
              "language": "rus",
              "games_count": 6809,
              "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
          },
          {
              "id": 1,
              "name": "Survival",
              "slug": "survival",
              "language": "eng",
              "games_count": 9343,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 15,
              "name": "Stealth",
              "slug": "stealth",
              "language": "eng",
              "games_count": 6532,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 42439,
              "name": "Стелс",
              "slug": "stels",
              "language": "rus",
              "games_count": 2390,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 167,
              "name": "Futuristic",
              "slug": "futuristic",
              "language": "eng",
              "games_count": 5826,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 172,
              "name": "Aliens",
              "slug": "aliens",
              "language": "eng",
              "games_count": 7002,
              "image_background": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg"
          },
          {
              "id": 42451,
              "name": "Будущее",
              "slug": "budushchee",
              "language": "rus",
              "games_count": 3962,
              "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
          },
          {
              "id": 42485,
              "name": "Инопланетяне",
              "slug": "inoplanetiane",
              "language": "rus",
              "games_count": 2071,
              "image_background": "https://media.rawg.io/media/games/12e/12ea6b35b65df38258e25885a0a392a6.jpg"
          },
          {
              "id": 42470,
              "name": "Киберпанк",
              "slug": "kiberpank",
              "language": "rus",
              "games_count": 2038,
              "image_background": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg"
          },
          {
              "id": 226,
              "name": "Cyberpunk",
              "slug": "cyberpunk",
              "language": "eng",
              "games_count": 4756,
              "image_background": "https://media.rawg.io/media/games/81e/81e6c6819d4322caf375b6735c3043ec.jpg"
          },
          {
              "id": 133,
              "name": "3D Vision",
              "slug": "3d-vision",
              "language": "eng",
              "games_count": 916,
              "image_background": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg"
          },
          {
              "id": 296,
              "name": "Benchmark",
              "slug": "benchmark",
              "language": "eng",
              "games_count": 31,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42486,
              "name": "Бенчмарк",
              "slug": "benchmark-2",
              "language": "rus",
              "games_count": 14,
              "image_background": "https://media.rawg.io/media/games/1c6/1c61ef4ce04bce876841118580b03ccb.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 603,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/1ed/1edaaa9e24e0072772244633d01642f4.jpg"
          },
          {
              "id": 184913,
              "image": "https://media.rawg.io/media/screenshots/445/445a576fee163267edb914b692c5c8dd.jpg"
          },
          {
              "id": 184914,
              "image": "https://media.rawg.io/media/screenshots/7d8/7d85bc1bfad4338405dc20b83f571bd2.jpg"
          },
          {
              "id": 184915,
              "image": "https://media.rawg.io/media/screenshots/d19/d198b3d0e861f9b9d61c8042142088b7.jpg"
          },
          {
              "id": 184916,
              "image": "https://media.rawg.io/media/screenshots/02d/02d9795dd02e4dd3919dd1928dfdacc7.jpg"
          },
          {
              "id": 184917,
              "image": "https://media.rawg.io/media/screenshots/2e2/2e2a5a2c74230ab750145efdd8c68df7.jpg"
          },
          {
              "id": 184918,
              "image": "https://media.rawg.io/media/screenshots/b98/b98b754f0d1b687031313f095d0dbf2d.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "burnout-paradise-the-ultimate-box",
      "name": "Burnout Paradise: The Ultimate Box",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2009-02-05",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg",
      "rating": 3.97,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 347,
              "percent": 52.74
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 185,
              "percent": 28.12
          },
          {
              "id": 3,
              "title": "meh",
              "count": 87,
              "percent": 13.22
          },
          {
              "id": 1,
              "title": "skip",
              "count": 39,
              "percent": 5.93
          }
      ],
      "ratings_count": 653,
      "reviews_text_count": 4,
      "added": 4736,
      "added_by_status": {
          "yet": 137,
          "owned": 3748,
          "beaten": 465,
          "toplay": 33,
          "dropped": 332,
          "playing": 21
      },
      "metacritic": 87,
      "suggestions_count": 433,
      "updated": "2024-11-07T10:13:26",
      "id": 19491,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8037,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42435,
              "name": "Шедевр",
              "slug": "shedevr",
              "language": "rus",
              "games_count": 1059,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7958,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42482,
              "name": "Смешная",
              "slug": "smeshnaia",
              "language": "rus",
              "games_count": 10004,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 25993,
              "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 24881,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7375,
              "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
          },
          {
              "id": 42444,
              "name": "Песочница",
              "slug": "pesochnitsa",
              "language": "rus",
              "games_count": 4603,
              "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
          },
          {
              "id": 42433,
              "name": "Совместная игра по сети",
              "slug": "sovmestnaia-igra-po-seti",
              "language": "rus",
              "games_count": 1226,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 42464,
              "name": "Исследование",
              "slug": "issledovanie",
              "language": "rus",
              "games_count": 2979,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42416,
              "name": "Контроллер",
              "slug": "kontroller",
              "language": "rus",
              "games_count": 7024,
              "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
          },
          {
              "id": 115,
              "name": "Controller",
              "slug": "controller",
              "language": "eng",
              "games_count": 12577,
              "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
          },
          {
              "id": 42587,
              "name": "Аркада",
              "slug": "arkada",
              "language": "rus",
              "games_count": 11891,
              "image_background": "https://media.rawg.io/media/games/e42/e428e70c97064037326d7863a43a0454.jpg"
          },
          {
              "id": 42612,
              "name": "Быстрая",
              "slug": "bystraia",
              "language": "rus",
              "games_count": 1853,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42496,
              "name": "Гонки",
              "slug": "gonki",
              "language": "rus",
              "games_count": 3997,
              "image_background": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg"
          },
          {
              "id": 131,
              "name": "Fast-Paced",
              "slug": "fast-paced",
              "language": "eng",
              "games_count": 10599,
              "image_background": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg"
          },
          {
              "id": 42531,
              "name": "Спортивная игра",
              "slug": "sportivnaia-igra",
              "language": "rus",
              "games_count": 4672,
              "image_background": "https://media.rawg.io/media/games/b22/b227810b1a1bcbe9cf3dda22534c686e.jpg"
          },
          {
              "id": 133,
              "name": "3D Vision",
              "slug": "3d-vision",
              "language": "eng",
              "games_count": 916,
              "image_background": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg"
          },
          {
              "id": 130,
              "name": "Driving",
              "slug": "driving",
              "language": "eng",
              "games_count": 5230,
              "image_background": "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg"
          },
          {
              "id": 42600,
              "name": "Вождение",
              "slug": "vozhdenie",
              "language": "rus",
              "games_count": 1677,
              "image_background": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
          },
          {
              "id": 51,
              "name": "Destruction",
              "slug": "destruction",
              "language": "eng",
              "games_count": 3703,
              "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
          },
          {
              "id": 42560,
              "name": "Разрушения",
              "slug": "razrusheniia",
              "language": "rus",
              "games_count": 1163,
              "image_background": "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 658,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg"
          },
          {
              "id": 182558,
              "image": "https://media.rawg.io/media/screenshots/318/318c1bf731a5fa3789b329e9941a3522.jpg"
          },
          {
              "id": 182559,
              "image": "https://media.rawg.io/media/screenshots/028/028509bb636b08ba6ae29c15ac98f50a.jpg"
          },
          {
              "id": 182560,
              "image": "https://media.rawg.io/media/screenshots/341/3411268b2864822f2a3cec86f8bd54cb.jpg"
          },
          {
              "id": 182561,
              "image": "https://media.rawg.io/media/screenshots/b08/b08978d8f72edb17e529a45722d8969e.jpg"
          },
          {
              "id": 182562,
              "image": "https://media.rawg.io/media/screenshots/913/913bb153f6f6e42efcf3e2accb1df1a7.jpg"
          },
          {
              "id": 182563,
              "image": "https://media.rawg.io/media/screenshots/cc0/cc0e67c15b839c575d23168b7515c122.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 1,
              "name": "Racing",
              "slug": "racing"
          },
          {
              "id": 11,
              "name": "Arcade",
              "slug": "arcade"
          }
      ]
  },
  {
      "slug": "gothic-playable-teaser",
      "name": "Gothic Playable Teaser",
      "playtime": 1,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2019-12-01",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/64e/64e4fc48c5d977188e8c47287f2a2cef.jpg",
      "rating": 2.54,
      "rating_top": 1,
      "ratings": [
          {
              "id": 1,
              "title": "skip",
              "count": 95,
              "percent": 38.78
          },
          {
              "id": 3,
              "title": "meh",
              "count": 78,
              "percent": 31.84
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 66,
              "percent": 26.94
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 6,
              "percent": 2.45
          }
      ],
      "ratings_count": 244,
      "reviews_text_count": 1,
      "added": 4713,
      "added_by_status": {
          "yet": 235,
          "owned": 4298,
          "beaten": 76,
          "toplay": 26,
          "dropped": 75,
          "playing": 3
      },
      "metacritic": null,
      "suggestions_count": 704,
      "updated": "2024-10-22T01:31:42",
      "id": 398423,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 19768,
              "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35130,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 22665,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 42412,
              "name": "Ролевая игра",
              "slug": "rolevaia-igra",
              "language": "rus",
              "games_count": 19072,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6224,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8037,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7958,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42480,
              "name": "Фэнтези",
              "slug": "fentezi",
              "language": "rus",
              "games_count": 13070,
              "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 29316,
              "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
          },
          {
              "id": 42491,
              "name": "Мясо",
              "slug": "miaso",
              "language": "rus",
              "games_count": 4850,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 26,
              "name": "Gore",
              "slug": "gore",
              "language": "eng",
              "games_count": 5985,
              "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 24881,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 97,
              "name": "Action RPG",
              "slug": "action-rpg",
              "language": "eng",
              "games_count": 7481,
              "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
          },
          {
              "id": 42489,
              "name": "Ролевой экшен",
              "slug": "rolevoi-ekshen",
              "language": "rus",
              "games_count": 4470,
              "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
          },
          {
              "id": 42506,
              "name": "Тёмное фэнтези",
              "slug": "tiomnoe-fentezi",
              "language": "rus",
              "games_count": 3313,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 40,
              "name": "Dark Fantasy",
              "slug": "dark-fantasy",
              "language": "eng",
              "games_count": 4623,
              "image_background": "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg"
          },
          {
              "id": 42405,
              "name": "Сексуальный контент",
              "slug": "seksualnyi-kontent",
              "language": "rus",
              "games_count": 6880,
              "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
          },
          {
              "id": 42391,
              "name": "Средневековье",
              "slug": "srednevekove",
              "language": "rus",
              "games_count": 3842,
              "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
          },
          {
              "id": 66,
              "name": "Medieval",
              "slug": "medieval",
              "language": "eng",
              "games_count": 6902,
              "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
          },
          {
              "id": 50,
              "name": "Sexual Content",
              "slug": "sexual-content",
              "language": "eng",
              "games_count": 6909,
              "image_background": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg"
          },
          {
              "id": 58132,
              "name": "Атмосферная",
              "slug": "atmosfernaia",
              "language": "rus",
              "games_count": 10827,
              "image_background": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg"
          },
          {
              "id": 66533,
              "name": "Исследования",
              "slug": "issledovaniia",
              "language": "rus",
              "games_count": 10206,
              "image_background": "https://media.rawg.io/media/screenshots/234/2341a78cfc68acd460228fafcf7f9ccc.jpg"
          },
          {
              "id": 42677,
              "name": "Готика",
              "slug": "gotika",
              "language": "rus",
              "games_count": 603,
              "image_background": "https://media.rawg.io/media/games/e75/e75c54e5a9a2754bab181b2240472389.jpg"
          },
          {
              "id": 204,
              "name": "Gothic",
              "slug": "gothic",
              "language": "eng",
              "games_count": 995,
              "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 245,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/64e/64e4fc48c5d977188e8c47287f2a2cef.jpg"
          },
          {
              "id": 2255228,
              "image": "https://media.rawg.io/media/screenshots/9ff/9fffec352b3364ee383f93566307f50e.jpg"
          },
          {
              "id": 2255229,
              "image": "https://media.rawg.io/media/screenshots/5fe/5fe981d528b743c2570d4aa241398c54.jpg"
          },
          {
              "id": 2255230,
              "image": "https://media.rawg.io/media/screenshots/b2b/b2b7bb07a66f8c5c3a814be394676d7e.jpg"
          },
          {
              "id": 2255231,
              "image": "https://media.rawg.io/media/screenshots/cb5/cb506f06ce66be626d9c95e07bcd88e5.jpg"
          },
          {
              "id": 2255232,
              "image": "https://media.rawg.io/media/screenshots/eb5/eb5a58f49659d92e1b2f5c19eaf839bb.jpg"
          },
          {
              "id": 2255233,
              "image": "https://media.rawg.io/media/screenshots/aa2/aa23aeeed04eb461b59cd1a2ef1db47d.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg"
          }
      ]
  },
  {
      "slug": "shadow-of-the-colossus",
      "name": "Shadow of the Colossus (2011)",
      "playtime": 3,
      "platforms": [
          {
              "platform": {
                  "id": 16,
                  "name": "PlayStation 3",
                  "slug": "playstation3"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 3,
                  "name": "PlayStation Store",
                  "slug": "playstation-store"
              }
          }
      ],
      "released": "2011-09-22",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg",
      "rating": 4.25,
      "rating_top": 5,
      "ratings": [
          {
              "id": 5,
              "title": "exceptional",
              "count": 533,
              "percent": 52.36
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 316,
              "percent": 31.04
          },
          {
              "id": 3,
              "title": "meh",
              "count": 116,
              "percent": 11.39
          },
          {
              "id": 1,
              "title": "skip",
              "count": 53,
              "percent": 5.21
          }
      ],
      "ratings_count": 1010,
      "reviews_text_count": 5,
      "added": 4566,
      "added_by_status": {
          "yet": 182,
          "owned": 3361,
          "beaten": 610,
          "toplay": 125,
          "dropped": 229,
          "playing": 59
      },
      "metacritic": 91,
      "suggestions_count": 246,
      "updated": "2024-11-22T14:02:38",
      "id": 4491,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 13,
              "name": "Atmospheric",
              "slug": "atmospheric",
              "language": "eng",
              "games_count": 35038,
              "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
          },
          {
              "id": 41,
              "name": "Dark",
              "slug": "dark",
              "language": "eng",
              "games_count": 16602,
              "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
          },
          {
              "id": 117,
              "name": "Mystery",
              "slug": "mystery",
              "language": "eng",
              "games_count": 14313,
              "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
          },
          {
              "id": 406,
              "name": "Story",
              "slug": "story",
              "language": "eng",
              "games_count": 11458,
              "image_background": "https://media.rawg.io/media/games/615/61503312a95d451198d80d9bae275f79.jpg"
          },
          {
              "id": 46,
              "name": "Surreal",
              "slug": "surreal",
              "language": "eng",
              "games_count": 5683,
              "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
          },
          {
              "id": 1807,
              "name": "water",
              "slug": "water",
              "language": "eng",
              "games_count": 3861,
              "image_background": "https://media.rawg.io/media/games/9e5/9e5b25a276f9248c36c0fd78288738ce.jpg"
          },
          {
              "id": 878,
              "name": "sword",
              "slug": "sword",
              "language": "eng",
              "games_count": 1423,
              "image_background": "https://media.rawg.io/media/games/f87/f87de0e93f02007fd044e4bf04d453d8.jpg"
          },
          {
              "id": 3786,
              "name": "sacrifice",
              "slug": "sacrifice",
              "language": "eng",
              "games_count": 334,
              "image_background": "https://media.rawg.io/media/screenshots/edc/edcd951b0e5af582d3fe93e4e9ebfa58.jpg"
          }
      ],
      "esrb_rating": {
          "id": 3,
          "name": "Teen",
          "slug": "teen",
          "name_en": "Teen",
          "name_ru": "С 13 лет"
      },
      "user_game": null,
      "reviews_count": 1018,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/6ac/6ac602e70c837ababdf025e997391d9c.jpg"
          },
          {
              "id": 215604,
              "image": "https://media.rawg.io/media/screenshots/50f/50f2ad4f89a1a227130632e6bf484256.jpg"
          },
          {
              "id": 215605,
              "image": "https://media.rawg.io/media/screenshots/b5c/b5c88e37efc2438c6a9d0c9e96e15b25.jpg"
          },
          {
              "id": 215606,
              "image": "https://media.rawg.io/media/screenshots/d35/d3578202d67b21e4cd2cc2d594afd992.jpg"
          },
          {
              "id": 215607,
              "image": "https://media.rawg.io/media/screenshots/c26/c26610ba76c79805267bf81307be6c2b.jpg"
          },
          {
              "id": 215608,
              "image": "https://media.rawg.io/media/screenshots/fbf/fbff3fb9828c12c9213f9ac9777c33f4.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 2,
                  "name": "PlayStation",
                  "slug": "playstation"
              }
          }
      ],
      "genres": [
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "sins-of-a-solar-empire-rebellion",
      "name": "Sins of a Solar Empire: Rebellion",
      "playtime": 5,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2012-06-12",
      "tba": false,
      "background_image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
      "rating": 2.73,
      "rating_top": 1,
      "ratings": [
          {
              "id": 1,
              "title": "skip",
              "count": 124,
              "percent": 38.27
          },
          {
              "id": 4,
              "title": "recommended",
              "count": 100,
              "percent": 30.86
          },
          {
              "id": 3,
              "title": "meh",
              "count": 69,
              "percent": 21.3
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 31,
              "percent": 9.57
          }
      ],
      "ratings_count": 324,
      "reviews_text_count": 0,
      "added": 4539,
      "added_by_status": {
          "yet": 282,
          "owned": 4088,
          "beaten": 51,
          "toplay": 21,
          "dropped": 94,
          "playing": 3
      },
      "metacritic": 82,
      "suggestions_count": 494,
      "updated": "2024-10-10T11:28:08",
      "id": 9631,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 42398,
              "name": "Инди",
              "slug": "indi-2",
              "language": "rus",
              "games_count": 58791,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 19992,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42423,
              "name": "Научная фантастика",
              "slug": "nauchnaia-fantastika",
              "language": "rus",
              "games_count": 8894,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 21088,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 6,
              "name": "Exploration",
              "slug": "exploration",
              "language": "eng",
              "games_count": 24881,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 42464,
              "name": "Исследование",
              "slug": "issledovanie",
              "language": "rus",
              "games_count": 2979,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 397,
              "name": "Online multiplayer",
              "slug": "online-multiplayer",
              "language": "eng",
              "games_count": 3804,
              "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
          },
          {
              "id": 75,
              "name": "Local Co-Op",
              "slug": "local-co-op",
              "language": "eng",
              "games_count": 5607,
              "image_background": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg"
          },
          {
              "id": 72,
              "name": "Local Multiplayer",
              "slug": "local-multiplayer",
              "language": "eng",
              "games_count": 13421,
              "image_background": "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg"
          },
          {
              "id": 25,
              "name": "Space",
              "slug": "space",
              "language": "eng",
              "games_count": 43248,
              "image_background": "https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 1959,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 987,
              "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          },
          {
              "id": 42422,
              "name": "Космос",
              "slug": "kosmos-2",
              "language": "rus",
              "games_count": 4589,
              "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          },
          {
              "id": 42438,
              "name": "Поддержка модификаций",
              "slug": "podderzhka-modifikatsii",
              "language": "rus",
              "games_count": 798,
              "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
          },
          {
              "id": 70,
              "name": "War",
              "slug": "war",
              "language": "eng",
              "games_count": 9537,
              "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
          },
          {
              "id": 42430,
              "name": "Война",
              "slug": "voina",
              "language": "rus",
              "games_count": 2641,
              "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
          },
          {
              "id": 42503,
              "name": "Стратегия в реальном времени",
              "slug": "strategiia-v-realnom-vremeni",
              "language": "rus",
              "games_count": 2056,
              "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
          },
          {
              "id": 172,
              "name": "Aliens",
              "slug": "aliens",
              "language": "eng",
              "games_count": 7002,
              "image_background": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg"
          },
          {
              "id": 168,
              "name": "RTS",
              "slug": "rts",
              "language": "eng",
              "games_count": 2509,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 42485,
              "name": "Инопланетяне",
              "slug": "inoplanetiane",
              "language": "rus",
              "games_count": 2071,
              "image_background": "https://media.rawg.io/media/games/12e/12ea6b35b65df38258e25885a0a392a6.jpg"
          },
          {
              "id": 100,
              "name": "Grand Strategy",
              "slug": "grand-strategy",
              "language": "eng",
              "games_count": 793,
              "image_background": "https://media.rawg.io/media/games/77e/77e8a4a7b377a081aabd0dbf688417e1.jpg"
          },
          {
              "id": 42519,
              "name": "Глобальная стратегия",
              "slug": "globalnaia-strategiia",
              "language": "rus",
              "games_count": 832,
              "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
          },
          {
              "id": 212,
              "name": "4X",
              "slug": "4x",
              "language": "eng",
              "games_count": 603,
              "image_background": "https://media.rawg.io/media/screenshots/d2c/d2c1101d697afb7a3c7b5b27c104a47d.jpg"
          },
          {
              "id": 42563,
              "name": "В реальном времени",
              "slug": "v-realnom-vremeni",
              "language": "rus",
              "games_count": 343,
              "image_background": "https://media.rawg.io/media/screenshots/4d9/4d9afae02fdf2896569b1c7bfeabb8c1.jpg"
          },
          {
              "id": 210,
              "name": "Real-Time",
              "slug": "real-time",
              "language": "eng",
              "games_count": 1213,
              "image_background": "https://media.rawg.io/media/screenshots/ecb/ecb32cf472d803aabd3a18c35866186b.jpg"
          },
          {
              "id": 211,
              "name": "Diplomacy",
              "slug": "diplomacy",
              "language": "eng",
              "games_count": 293,
              "image_background": "https://media.rawg.io/media/games/61b/61b069e98f2e901050e687f7699997db.jpg"
          },
          {
              "id": 42522,
              "name": "Дипломатия",
              "slug": "diplomatiia",
              "language": "rus",
              "games_count": 244,
              "image_background": "https://media.rawg.io/media/games/3d8/3d8e76154123ef352d8d3216da061a2d.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 324,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg"
          },
          {
              "id": 70885,
              "image": "https://media.rawg.io/media/screenshots/f9a/f9a3a2e2a3a21300e44d093612f5b6f1.jpg"
          },
          {
              "id": 70886,
              "image": "https://media.rawg.io/media/screenshots/da4/da48ac6e582836d15473a7f56b1d407a.jpg"
          },
          {
              "id": 70887,
              "image": "https://media.rawg.io/media/screenshots/c0b/c0b0e65b80ed230f5078ddedcdb6e4fe.jpg"
          },
          {
              "id": 70888,
              "image": "https://media.rawg.io/media/screenshots/648/64805b741a98e7aa9aeb3038624f7778.jpg"
          },
          {
              "id": 70889,
              "image": "https://media.rawg.io/media/screenshots/e00/e00648b57a620de6936a07c6a36a87dd.jpg"
          },
          {
              "id": 70890,
              "image": "https://media.rawg.io/media/screenshots/563/56351b209cfaf5e06dc6d1c3bbbc438e.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 10,
              "name": "Strategy",
              "slug": "strategy"
          },
          {
              "id": 51,
              "name": "Indie",
              "slug": "indie"
          }
      ]
  },
  {
      "slug": "alien-swarm",
      "name": "Alien Swarm",
      "playtime": 2,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2010-07-19",
      "tba": false,
      "background_image": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg",
      "rating": 3.32,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 349,
              "percent": 48.68
          },
          {
              "id": 3,
              "title": "meh",
              "count": 230,
              "percent": 32.08
          },
          {
              "id": 1,
              "title": "skip",
              "count": 98,
              "percent": 13.67
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 40,
              "percent": 5.58
          }
      ],
      "ratings_count": 714,
      "reviews_text_count": 2,
      "added": 4278,
      "added_by_status": {
          "yet": 117,
          "owned": 3587,
          "beaten": 240,
          "toplay": 19,
          "dropped": 310,
          "playing": 5
      },
      "metacritic": 77,
      "suggestions_count": 566,
      "updated": "2024-09-16T00:31:00",
      "id": 19429,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7958,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 32,
              "name": "Sci-fi",
              "slug": "sci-fi",
              "language": "eng",
              "games_count": 19992,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 42423,
              "name": "Научная фантастика",
              "slug": "nauchnaia-fantastika",
              "language": "rus",
              "games_count": 8894,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 42452,
              "name": "Выживание",
              "slug": "vyzhivanie",
              "language": "rus",
              "games_count": 6809,
              "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
          },
          {
              "id": 1,
              "name": "Survival",
              "slug": "survival",
              "language": "eng",
              "games_count": 9343,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 42433,
              "name": "Совместная игра по сети",
              "slug": "sovmestnaia-igra-po-seti",
              "language": "rus",
              "games_count": 1226,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 79,
              "name": "Free to Play",
              "slug": "free-to-play",
              "language": "eng",
              "games_count": 7755,
              "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
          },
          {
              "id": 42538,
              "name": "Бесплатная игра",
              "slug": "besplatnaia-igra",
              "language": "rus",
              "games_count": 7742,
              "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
          },
          {
              "id": 42446,
              "name": "Шутер от третьего лица",
              "slug": "shuter-ot-tretego-litsa",
              "language": "rus",
              "games_count": 2269,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3658,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 11669,
              "name": "stats",
              "slug": "stats",
              "language": "eng",
              "games_count": 5196,
              "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          },
          {
              "id": 40838,
              "name": "Includes level editor",
              "slug": "includes-level-editor",
              "language": "eng",
              "games_count": 1959,
              "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 987,
              "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          },
          {
              "id": 42438,
              "name": "Поддержка модификаций",
              "slug": "podderzhka-modifikatsii",
              "language": "rus",
              "games_count": 798,
              "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
          },
          {
              "id": 40833,
              "name": "Captions available",
              "slug": "captions-available",
              "language": "eng",
              "games_count": 1402,
              "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1738,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42450,
              "name": "Командная",
              "slug": "komandnaia",
              "language": "rus",
              "games_count": 1437,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 172,
              "name": "Aliens",
              "slug": "aliens",
              "language": "eng",
              "games_count": 7002,
              "image_background": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg"
          },
          {
              "id": 42515,
              "name": "Вид сверху",
              "slug": "vid-sverkhu",
              "language": "rus",
              "games_count": 7634,
              "image_background": "https://media.rawg.io/media/games/ae3/ae357d6e6f9e89597e8293469ddabba9.jpg"
          },
          {
              "id": 42485,
              "name": "Инопланетяне",
              "slug": "inoplanetiane",
              "language": "rus",
              "games_count": 2071,
              "image_background": "https://media.rawg.io/media/games/12e/12ea6b35b65df38258e25885a0a392a6.jpg"
          },
          {
              "id": 61,
              "name": "Top-Down",
              "slug": "top-down",
              "language": "eng",
              "games_count": 26227,
              "image_background": "https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg"
          },
          {
              "id": 171,
              "name": "PvE",
              "slug": "pve",
              "language": "eng",
              "games_count": 5811,
              "image_background": "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg"
          },
          {
              "id": 42567,
              "name": "Игра против ИИ",
              "slug": "igra-protiv-ii",
              "language": "rus",
              "games_count": 2327,
              "image_background": "https://media.rawg.io/media/screenshots/5ff/5ff7e855a4d0f4de1bfa515cd0e19071.jpg"
          },
          {
              "id": 42607,
              "name": "Шутер с видом сверху",
              "slug": "shuter-s-vidom-sverkhu",
              "language": "rus",
              "games_count": 2643,
              "image_background": "https://media.rawg.io/media/games/731/731576e935a2d50481812aab0e7ae9f6.jpg"
          },
          {
              "id": 236,
              "name": "Top-Down Shooter",
              "slug": "top-down-shooter",
              "language": "eng",
              "games_count": 2516,
              "image_background": "https://media.rawg.io/media/games/985/985dc43fe4fd5f0a7ae2a725673d6ac6.jpg"
          },
          {
              "id": 265,
              "name": "Class-Based",
              "slug": "class-based",
              "language": "eng",
              "games_count": 710,
              "image_background": "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg"
          },
          {
              "id": 42549,
              "name": "Разделение на классы",
              "slug": "razdelenie-na-klassy",
              "language": "rus",
              "games_count": 713,
              "image_background": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 717,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/screenshots/a65/a65e9f01832997a4d913b3ea86319af4.jpg"
          },
          {
              "id": 181516,
              "image": "https://media.rawg.io/media/screenshots/590/590fbce1d99f46eea17dfb3d2cd03f5a.jpg"
          },
          {
              "id": 181517,
              "image": "https://media.rawg.io/media/screenshots/f35/f3579cd8d0e25624eb901eb736a456aa.jpg"
          },
          {
              "id": 181518,
              "image": "https://media.rawg.io/media/screenshots/155/15585a1083be246da2ff70d68b671417.jpg"
          },
          {
              "id": 181519,
              "image": "https://media.rawg.io/media/screenshots/b95/b95a2efdaa780e400dc0df58249586ad.jpg"
          },
          {
              "id": 181520,
              "image": "https://media.rawg.io/media/screenshots/f79/f799ce71ac1d4d8d9f03091ec6ca2f0f.jpg"
          },
          {
              "id": 181521,
              "image": "https://media.rawg.io/media/screenshots/b0a/b0aea07d373729ad80c3b3e3a539439f.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "orcs-must-die-2",
      "name": "Orcs Must Die! 2",
      "playtime": 6,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          }
      ],
      "released": "2012-07-30",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg",
      "rating": 3.71,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 313,
              "percent": 60.54
          },
          {
              "id": 3,
              "title": "meh",
              "count": 119,
              "percent": 23.02
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 56,
              "percent": 10.83
          },
          {
              "id": 1,
              "title": "skip",
              "count": 29,
              "percent": 5.61
          }
      ],
      "ratings_count": 517,
      "reviews_text_count": 0,
      "added": 4256,
      "added_by_status": {
          "yet": 150,
          "owned": 3559,
          "beaten": 264,
          "toplay": 34,
          "dropped": 241,
          "playing": 8
      },
      "metacritic": 83,
      "suggestions_count": 614,
      "updated": "2024-11-01T12:53:29",
      "id": 17356,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231472,
              "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 55045,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42973,
              "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          },
          {
              "id": 42392,
              "name": "Приключение",
              "slug": "prikliuchenie",
              "language": "rus",
              "games_count": 41176,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 40847,
              "name": "Steam Achievements",
              "slug": "steam-achievements",
              "language": "eng",
              "games_count": 41608,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 42398,
              "name": "Инди",
              "slug": "indi-2",
              "language": "rus",
              "games_count": 58791,
              "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39373,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 40836,
              "name": "Full controller support",
              "slug": "full-controller-support",
              "language": "eng",
              "games_count": 19768,
              "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
          },
          {
              "id": 40849,
              "name": "Steam Cloud",
              "slug": "steam-cloud",
              "language": "eng",
              "games_count": 19889,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10754,
              "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
          },
          {
              "id": 7808,
              "name": "steam-trading-cards",
              "slug": "steam-trading-cards",
              "language": "eng",
              "games_count": 7568,
              "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          },
          {
              "id": 42401,
              "name": "Отличный саундтрек",
              "slug": "otlichnyi-saundtrek",
              "language": "rus",
              "games_count": 4638,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
          },
          {
              "id": 42,
              "name": "Great Soundtrack",
              "slug": "great-soundtrack",
              "language": "eng",
              "games_count": 3414,
              "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
          },
          {
              "id": 24,
              "name": "RPG",
              "slug": "rpg",
              "language": "eng",
              "games_count": 22665,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 18,
              "name": "Co-op",
              "slug": "co-op",
              "language": "eng",
              "games_count": 12446,
              "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
          },
          {
              "id": 42412,
              "name": "Ролевая игра",
              "slug": "rolevaia-igra",
              "language": "rus",
              "games_count": 19072,
              "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20499,
              "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
          },
          {
              "id": 411,
              "name": "cooperative",
              "slug": "cooperative",
              "language": "eng",
              "games_count": 5477,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9830,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7958,
              "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12435,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 42482,
              "name": "Смешная",
              "slug": "smeshnaia",
              "language": "rus",
              "games_count": 10004,
              "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
          },
          {
              "id": 9,
              "name": "Online Co-Op",
              "slug": "online-co-op",
              "language": "eng",
              "games_count": 6220,
              "image_background": "https://media.rawg.io/media/games/d2c/d2c74dacd89fd817c2deb625b01adb1a.jpg"
          },
          {
              "id": 42480,
              "name": "Фэнтези",
              "slug": "fentezi",
              "language": "rus",
              "games_count": 13070,
              "image_background": "https://media.rawg.io/media/games/59a/59a3ebcba3d08c51532c6ca877aff256.jpg"
          },
          {
              "id": 64,
              "name": "Fantasy",
              "slug": "fantasy",
              "language": "eng",
              "games_count": 29316,
              "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
          },
          {
              "id": 4,
              "name": "Funny",
              "slug": "funny",
              "language": "eng",
              "games_count": 25993,
              "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
          },
          {
              "id": 40850,
              "name": "Steam Leaderboards",
              "slug": "steam-leaderboards",
              "language": "eng",
              "games_count": 7290,
              "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
          },
          {
              "id": 189,
              "name": "Female Protagonist",
              "slug": "female-protagonist",
              "language": "eng",
              "games_count": 13351,
              "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
          },
          {
              "id": 42481,
              "name": "Юмор",
              "slug": "iumor",
              "language": "rus",
              "games_count": 6461,
              "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
          },
          {
              "id": 42404,
              "name": "Женщина-протагонист",
              "slug": "zhenshchina-protagonist",
              "language": "rus",
              "games_count": 2413,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          },
          {
              "id": 123,
              "name": "Comedy",
              "slug": "comedy",
              "language": "eng",
              "games_count": 13121,
              "image_background": "https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg"
          },
          {
              "id": 42433,
              "name": "Совместная игра по сети",
              "slug": "sovmestnaia-igra-po-seti",
              "language": "rus",
              "games_count": 1226,
              "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
          },
          {
              "id": 42416,
              "name": "Контроллер",
              "slug": "kontroller",
              "language": "rus",
              "games_count": 7024,
              "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
          },
          {
              "id": 115,
              "name": "Controller",
              "slug": "controller",
              "language": "eng",
              "games_count": 12577,
              "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
          },
          {
              "id": 42446,
              "name": "Шутер от третьего лица",
              "slug": "shuter-ot-tretego-litsa",
              "language": "rus",
              "games_count": 2269,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 150,
              "name": "Third-Person Shooter",
              "slug": "third-person-shooter",
              "language": "eng",
              "games_count": 3658,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 37796,
              "name": "exclusive",
              "slug": "exclusive",
              "language": "eng",
              "games_count": 4493,
              "image_background": "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg"
          },
          {
              "id": 37797,
              "name": "true exclusive",
              "slug": "true-exclusive",
              "language": "eng",
              "games_count": 3981,
              "image_background": "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
          },
          {
              "id": 42571,
              "name": "Мультипликация",
              "slug": "multiplikatsiia",
              "language": "rus",
              "games_count": 6599,
              "image_background": "https://media.rawg.io/media/games/943/9436adc4b833d1026c3805fc4ce602b8.jpg"
          },
          {
              "id": 164,
              "name": "Cartoony",
              "slug": "cartoony",
              "language": "eng",
              "games_count": 6540,
              "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
          },
          {
              "id": 42533,
              "name": "Башенная защита",
              "slug": "bashennaia-zashchita",
              "language": "rus",
              "games_count": 2123,
              "image_background": "https://media.rawg.io/media/games/1d0/1d01242356819c4cdd0f1a4baa46bd37.jpeg"
          },
          {
              "id": 65,
              "name": "Tower Defense",
              "slug": "tower-defense",
              "language": "eng",
              "games_count": 7483,
              "image_background": "https://media.rawg.io/media/screenshots/ec5/ec53f6efc94777fe100032f8bbb12946.jpg"
          }
      ],
      "esrb_rating": null,
      "user_game": null,
      "reviews_count": 517,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/725/725eb4171c8aacee030a2d050ebf9fad.jpg"
          },
          {
              "id": 158009,
              "image": "https://media.rawg.io/media/screenshots/669/669a1d3fbc5dd0b2f0dc7bd5f9e87818.jpg"
          },
          {
              "id": 158010,
              "image": "https://media.rawg.io/media/screenshots/51c/51caf53b90eafd417501ffd873c047fa.jpg"
          },
          {
              "id": 158011,
              "image": "https://media.rawg.io/media/screenshots/4f2/4f20c02be437d42b4506a40f733727ce.jpg"
          },
          {
              "id": 158012,
              "image": "https://media.rawg.io/media/screenshots/8c6/8c648152db75949b64b87d83d2b2a9a0.jpg"
          },
          {
              "id": 158013,
              "image": "https://media.rawg.io/media/screenshots/e7e/e7e46596abdad73f14726d3734b43aad.jpg"
          },
          {
              "id": 158014,
              "image": "https://media.rawg.io/media/screenshots/34c/34c106caa61e31af3dbcfab99ac65123.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 10,
              "name": "Strategy",
              "slug": "strategy"
          },
          {
              "id": 51,
              "name": "Indie",
              "slug": "indie"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          }
      ]
  },
  {
      "slug": "arma-cold-war-assault",
      "name": "ARMA: Cold War Assault",
      "playtime": 1,
      "platforms": [
          {
              "platform": {
                  "id": 4,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "stores": [
          {
              "store": {
                  "id": 1,
                  "name": "Steam",
                  "slug": "steam"
              }
          },
          {
              "store": {
                  "id": 5,
                  "name": "GOG",
                  "slug": "gog"
              }
          }
      ],
      "released": "2001-08-29",
      "tba": false,
      "background_image": "https://media.rawg.io/media/games/109/10956e4561064fc4f1dda0baa540735e.jpg",
      "rating": 2.86,
      "rating_top": 4,
      "ratings": [
          {
              "id": 4,
              "title": "recommended",
              "count": 65,
              "percent": 31.4
          },
          {
              "id": 1,
              "title": "skip",
              "count": 64,
              "percent": 30.92
          },
          {
              "id": 3,
              "title": "meh",
              "count": 61,
              "percent": 29.47
          },
          {
              "id": 5,
              "title": "exceptional",
              "count": 17,
              "percent": 8.21
          }
      ],
      "ratings_count": 206,
      "reviews_text_count": 0,
      "added": 4243,
      "added_by_status": {
          "yet": 193,
          "owned": 3922,
          "beaten": 34,
          "toplay": 17,
          "dropped": 74,
          "playing": 3
      },
      "metacritic": null,
      "suggestions_count": 504,
      "updated": "2024-08-29T07:23:54",
      "id": 19196,
      "score": null,
      "clip": null,
      "tags": [
          {
              "id": 31,
              "name": "Singleplayer",
              "slug": "singleplayer",
              "language": "eng",
              "games_count": 231077,
              "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
          },
          {
              "id": 42396,
              "name": "Для одного игрока",
              "slug": "dlia-odnogo-igroka",
              "language": "rus",
              "games_count": 54723,
              "image_background": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
          },
          {
              "id": 42417,
              "name": "Экшен",
              "slug": "ekshen",
              "language": "rus",
              "games_count": 42817,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 7,
              "name": "Multiplayer",
              "slug": "multiplayer",
              "language": "eng",
              "games_count": 39303,
              "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
          },
          {
              "id": 42425,
              "name": "Для нескольких игроков",
              "slug": "dlia-neskolkikh-igrokov",
              "language": "rus",
              "games_count": 10706,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 42442,
              "name": "Открытый мир",
              "slug": "otkrytyi-mir",
              "language": "rus",
              "games_count": 6192,
              "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          },
          {
              "id": 36,
              "name": "Open World",
              "slug": "open-world",
              "language": "eng",
              "games_count": 8006,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42421,
              "name": "Стратегия",
              "slug": "strategiia",
              "language": "rus",
              "games_count": 20402,
              "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
          },
          {
              "id": 42428,
              "name": "Шутер",
              "slug": "shuter",
              "language": "rus",
              "games_count": 9775,
              "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          },
          {
              "id": 42429,
              "name": "От первого лица",
              "slug": "ot-pervogo-litsa",
              "language": "rus",
              "games_count": 12304,
              "image_background": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
          },
          {
              "id": 8,
              "name": "First-Person",
              "slug": "first-person",
              "language": "eng",
              "games_count": 33230,
              "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
          },
          {
              "id": 42435,
              "name": "Шедевр",
              "slug": "shedevr",
              "language": "rus",
              "games_count": 1059,
              "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
          },
          {
              "id": 42441,
              "name": "От третьего лица",
              "slug": "ot-tretego-litsa",
              "language": "rus",
              "games_count": 7902,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 149,
              "name": "Third Person",
              "slug": "third-person",
              "language": "eng",
              "games_count": 12379,
              "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
          },
          {
              "id": 30,
              "name": "FPS",
              "slug": "fps",
              "language": "eng",
              "games_count": 13723,
              "image_background": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
          },
          {
              "id": 42427,
              "name": "Шутер от первого лица",
              "slug": "shuter-ot-pervogo-litsa",
              "language": "rus",
              "games_count": 5707,
              "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
          },
          {
              "id": 42413,
              "name": "Симулятор",
              "slug": "simuliator",
              "language": "rus",
              "games_count": 20987,
              "image_background": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg"
          },
          {
              "id": 42461,
              "name": "Классика",
              "slug": "klassika",
              "language": "rus",
              "games_count": 1464,
              "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
          },
          {
              "id": 193,
              "name": "Classic",
              "slug": "classic",
              "language": "eng",
              "games_count": 1800,
              "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
          },
          {
              "id": 37,
              "name": "Sandbox",
              "slug": "sandbox",
              "language": "eng",
              "games_count": 7347,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 42444,
              "name": "Песочница",
              "slug": "pesochnitsa",
              "language": "rus",
              "games_count": 4575,
              "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
          },
          {
              "id": 42436,
              "name": "Тактика",
              "slug": "taktika",
              "language": "rus",
              "games_count": 4139,
              "image_background": "https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg"
          },
          {
              "id": 80,
              "name": "Tactical",
              "slug": "tactical",
              "language": "eng",
              "games_count": 5513,
              "image_background": "https://media.rawg.io/media/games/5cc/5cc765484c6df567ed9207c1781b88cb.jpg"
          },
          {
              "id": 62,
              "name": "Moddable",
              "slug": "moddable",
              "language": "eng",
              "games_count": 984,
              "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
          },
          {
              "id": 42438,
              "name": "Поддержка модификаций",
              "slug": "podderzhka-modifikatsii",
              "language": "rus",
              "games_count": 795,
              "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
          },
          {
              "id": 70,
              "name": "War",
              "slug": "war",
              "language": "eng",
              "games_count": 9525,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 42430,
              "name": "Война",
              "slug": "voina",
              "language": "rus",
              "games_count": 2629,
              "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
          },
          {
              "id": 42460,
              "name": "Реализм",
              "slug": "realizm",
              "language": "rus",
              "games_count": 6718,
              "image_background": "https://media.rawg.io/media/games/e31/e315213a5cb21645df8db3e5191e530c.jpg"
          },
          {
              "id": 77,
              "name": "Realistic",
              "slug": "realistic",
              "language": "eng",
              "games_count": 6741,
              "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
          },
          {
              "id": 11,
              "name": "Team-Based",
              "slug": "team-based",
              "language": "eng",
              "games_count": 1728,
              "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
          },
          {
              "id": 42450,
              "name": "Командная",
              "slug": "komandnaia",
              "language": "rus",
              "games_count": 1427,
              "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          },
          {
              "id": 42431,
              "name": "Военные действия",
              "slug": "voennye-deistviia",
              "language": "rus",
              "games_count": 2025,
              "image_background": "https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg"
          },
          {
              "id": 81,
              "name": "Military",
              "slug": "military",
              "language": "eng",
              "games_count": 2040,
              "image_background": "https://media.rawg.io/media/games/110/1106ebafac87cc573161f1f4f16e84cf.jpeg"
          },
          {
              "id": 42668,
              "name": "Холодная война",
              "slug": "kholodnaia-voina",
              "language": "rus",
              "games_count": 286,
              "image_background": "https://media.rawg.io/media/games/e28/e286c06d88ba2fa3cd9ed05df3f9faca.jpg"
          },
          {
              "id": 251,
              "name": "Cold War",
              "slug": "cold-war",
              "language": "eng",
              "games_count": 258,
              "image_background": "https://media.rawg.io/media/screenshots/3a8/3a86eff12368077db160143d2cfee74e.jpg"
          }
      ],
      "esrb_rating": {
          "id": 4,
          "name": "Mature",
          "slug": "mature",
          "name_en": "Mature",
          "name_ru": "С 17 лет"
      },
      "user_game": null,
      "reviews_count": 207,
      "saturated_color": "0f0f0f",
      "dominant_color": "0f0f0f",
      "short_screenshots": [
          {
              "id": -1,
              "image": "https://media.rawg.io/media/games/109/10956e4561064fc4f1dda0baa540735e.jpg"
          },
          {
              "id": 178803,
              "image": "https://media.rawg.io/media/screenshots/bbd/bbdb92616f48f7532d8cc041f06a7902.jpg"
          },
          {
              "id": 178804,
              "image": "https://media.rawg.io/media/screenshots/11c/11c2f9889f23e6882d651d86bea8ffa0.jpg"
          },
          {
              "id": 178805,
              "image": "https://media.rawg.io/media/screenshots/186/186617470adc75045e8d9b58ff26de94.jpg"
          },
          {
              "id": 178806,
              "image": "https://media.rawg.io/media/screenshots/f2a/f2aa97d585f4f3638bdaf7cd887f4686.jpg"
          },
          {
              "id": 178807,
              "image": "https://media.rawg.io/media/screenshots/cc6/cc6ed2609d932de40292a0c130db9682.jpg"
          },
          {
              "id": 178808,
              "image": "https://media.rawg.io/media/screenshots/61a/61a499776a06a11d591500401652f086.jpg"
          }
      ],
      "parent_platforms": [
          {
              "platform": {
                  "id": 1,
                  "name": "PC",
                  "slug": "pc"
              }
          }
      ],
      "genres": [
          {
              "id": 10,
              "name": "Strategy",
              "slug": "strategy"
          },
          {
              "id": 4,
              "name": "Action",
              "slug": "action"
          },
          {
              "id": 14,
              "name": "Simulation",
              "slug": "simulation"
          }
      ]
  }
]

const Dash:  React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  const filteredGames = selectedGenre
    ? gamesData.filter(game =>
        game.genres.some(g => g.name === selectedGenre)
      )
    : gamesData;

  return (
    <AppContainer>
      <Title>Вибір Гри</Title>
      <GenreDropdown games={gamesData} onGenreChange={handleGenreChange} />
      <GameList games={filteredGames} />
    </AppContainer>
  );
};

interface GenreDropdownProps {
  games: Game[];
  onGenreChange: (genre: string) => void;
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({ games, onGenreChange }) => {
  const genres = Array.from(new Set(games.flatMap(game => game.genres.map(g => g.name))));

  return (
    <DropdownContainer>
      <DropdownLabel htmlFor="genre">Оберіть жанр:</DropdownLabel>
      <Dropdown id="genre" onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">Всі</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
};

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <GameListContainer>
      {games.map((game) => (
        <GameCard key={game.id}>
          <GameImage src={game.background_image} alt={game.name} />
          <GameTitle>{game.name}</GameTitle>
          <GameRating>Рейтинг: {game.rating}</GameRating>
          <GameGenres>Жанри: {game.genres.map(g => g.name).join(', ')}</GameGenres>
          <GamePlaytime>Час гри: {game.playtime} годин</GamePlaytime>
          <GameReleased>Дата виходу: {game.released}</GameReleased>
          <GameReviews>Відгуки: {game.reviews_count}</GameReviews>
        </GameCard>
      ))}
    </GameListContainer>
  );
};

// Styled-components

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Full viewport height */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const DropdownContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const DropdownLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Dropdown = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const GameListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  min-height: 400px; /* Set a minimum height to prevent jumping */
  padding-bottom: 20px; /* Add some padding to the bottom */
`;

const GameCard = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const GameTitle = styled.h2`
  margin: 16px;
  font-size: 1.5em;
`;

const GameRating = styled.p`
  margin: 0 16px 8px;
  color: #555;
`;

const GameGenres = styled.p`
  margin: 0 16px 8px;
  color: #555;
`;

const GamePlaytime = styled.p`
  margin: 0 16px 8px;
  color: #555;
`;

const GameReleased = styled.p`
  margin: 0 16px 8px;
  color: #555;
`;

const GameReviews = styled.p`
  margin: 0 16px 8px;
  color: #555;
`;

// const gamesData = [
//   {
//     "slug": "the-last-of-us-remastered",
//     "name": "The Last Of Us Remastered",
//     "playtime": 16,
//     "released": "2014-07-29",
//     "background_image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
//     "rating": 4.69,
//     "id": 3636,
//     "reviews_count": 2833,  
//     "genres": [
//         {
//             "id": 3,
//             "name": "Adventure",
//             "slug": "adventure"
//         },
//         {
//             "id": 4,
//             "name": "Action",
//             "slug": "action"
//         }
//     ]
// }
// ];

// const Dash: FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState("action");

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <h1>Choose Your Game</h1>
//       <label htmlFor="category-select">Select Category:</label>
//       <select
//         id="category-select"
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         style={{ marginLeft: "10px", marginBottom: "20px" }}
//       >
//         {Object.keys(gamesData).map((category) => (
//           <option key={category} value={category}>
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </option>
//         ))}
//       </select>

//       <div>
//         {gamesData[selectedCategory].map((game, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               padding: "10px",
//               marginBottom: "10px",
//               display: "flex",
//               alignItems: "center"
//             }}
//           >
//             <img
//               src={game.image}
//               alt={game.name}
//               style={{ width: "100px", height: "auto", marginRight: "10px" }}
//             />
//             <div>
//               <h4 style={{ margin: "0" }}>{game.name}</h4>
//               <p style={{ margin: "0" }}>{game.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export { Dash };
export default Dash;
