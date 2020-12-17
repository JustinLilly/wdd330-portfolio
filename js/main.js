
/* arrow syntax*/
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
    
}

document.querySelector('#menu').addEventListener('click', toggleMenu);


const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    },
    {
        label: "Block One Challenge",
        url: "week6/todo/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8",
        url: "week8/index.html"
    },
    {
        label: "Week 9",
        url: "week9/index.html"
    },
    {
        label: "Week 10",
        url: "week10/index.html"
    },
    {
        label: "Week 11",
        url: "week11/index.html"
    },
    {
        label: "Block Two Challenge",
        url: "block2challenge/index.html"
    }

]

links.forEach(link => createNavLink(link.url, link.label));

function createNavLink(url, label) {
  
    var node = document.createElement("li");
    node.innerHTML = `<a href='${url}'>${label}</a>`;
    document.getElementById("navigation").appendChild(node) ;
}
