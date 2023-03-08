import { Users } from "./Users";

export const Posts = [
    {
    imageurl: 'https://i.imgur.com/0LFhFn4.jpeg',
    user: Users[4].user,
    likes: 2023,
    caption: 'Nature trail at Reedy Creek Park',
    profile_picture: Users[4].image,
    comments: [
        {
            user: "millerville",
            comment: "I have to go there this week"
        },
        {
            user: "susanlee",
            comment: "So beautiful"
        },
    ],
},
{
    imageurl: 'https://static.timesofisrael.com/www/uploads/2023/02/AP23039186120109-e1675835678772.jpg',
    user: Users[1].user, 
    likes: 877923,
    caption: 'This feels like a dream. Broke the all time soring record.',
    profile_picture: Users[1].image,
    comments:[
        {
            user: "markphilips",
            comment: "Congratulations bro"
        },
        {
            user: "alycewestbrook", 
            comment: "🐐🐐🐐"
        },
    ],
},
{
    imageurl: 'https://i.imgur.com/xzBNeCm.jpg',
    user: Users[0].user,
    likes: 7821,
    caption: 'Game ready',
    profile_picture: Users[0].image,
    comments:[
        {
            user: "DannyN",
            comment: "👏🏾👏🏾👏🏾"
        },
        {
            user: "stephencurry",
            comment: "Shooters shoot 🏀"
        },
    ],
}
]