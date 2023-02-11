import home from "./../assets/home.png"
import search from "./../assets/search.png"
import message from "./../assets/message.png"


export const sideBarElements = [
    {
        title: 'Главная',
        icon: home,
        to: '/'
    },
    {
        title: 'Поисковый запрос',
        icon: search,
        to: '/#'
    },
    {
        title: 'Интересное',
        icon: 'https://cdn-icons-png.flaticon.com/512/49/49739.png',
        to: '/interesting2'
    },
    {
        title: 'Reels',
        icon: 'https://cdn-icons-png.flaticon.com/512/9553/9553626.png',
        to: '/reels'
    },
    {
        title: 'Сообщения',
        icon: message,
        to: '/chat'
    },
    {
        title: 'Уведомления',
        icon: 'https://cdn-icons-png.flaticon.com/512/9675/9675319.png',
        to: '/notification'
    },
    {
        title: 'Создать',
        icon: 'https://cdn-icons-png.flaticon.com/512/4074/4074958.png',
        to: '/create'
    },
    {
        title: 'Профиль',
        icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
        to: '/portfolio'
    },
    {
        title: 'Ещё',
        icon: 'https://cdn-icons-png.flaticon.com/512/5996/5996651.png',
        to: '/more'
    },
];