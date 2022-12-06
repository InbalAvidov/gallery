'use strict'

const gProjects = [
    {
        id: "ball-board",
        name: "Ball board",
        title: "collect all the balls",
        desc: "collect all the balls, don't caught up in the glue and win",
        url: "https://inbalavidov.github.io/ball-board/",
        publishedAt: new Date(1669723200000).getDate() +'/' +((new Date(1669723200000).getMonth()) +1) +'/'+new Date(1669723200000).getFullYear(),
        labels: ["Matrixes", " keyboard events"],   
    },
    {
        id:"book-shop",
        name: "Book shop",
        title: "visit my book shop",
        desc: "here ypu can see the collection of books, update their rate, read information about them and more ",
        url: "https://inbalavidov.github.io/book-shop/",
        publishedAt: new Date(1669896000000).getDate() +'/' +((new Date(1669896000000).getMonth()) +1) +'/'+new Date(1669896000000).getFullYear(),
        labels: ["Matrixes", " keyboard events"],   
    },
    {
        id: "pacman",
        name: "Pacman",
        title: "pacman",
        desc: "pacman game",
        url: "https://inbalavidov.github.io/pacman/",
        publishedAt: new Date(1669896000000).getDate() +'/' +((new Date(1669896000000).getMonth()) +1) +'/'+new Date(1669896000000).getFullYear(),
        labels: ["Matrixes", " keyboard events"],   
    },
    {
        id: "todo",
        name: "To Do",
        title: "Todo platform",
        desc: "add your tasks and manage them",
        url: "https://inbalavidov.github.io/todo/",
        publishedAt: new Date(1669809600000).getDate() +'/' +((new Date(1669809600000).getMonth()) +1) +'/'+new Date(1669809600000).getFullYear(),
        labels: ["Matrixes", " keyboard events"],   
    },
    {
        id: "mine-sweeper",
        name: "Mine sweeper",
        title: "mine sweeper",
        desc: "don't touch the mines. if you need use hinds",
        url: "https://inbalavidov.github.io/mine-sweeper/",
        publishedAt: new Date(1669240800000).getDate() +'/' +((new Date(1669240800000).getMonth()) +1) +'/'+new Date(1669240800000).getFullYear(),
        labels: ["Matrixes", " keyboard events"],   
    }
]

function getProjects(){
    return gProjects
}

function getProject(id){
    return gProjects.find(project => project.id === id)
}