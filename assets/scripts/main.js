// Api Response Structure
// {
//     "userId": 2,
//     "id": 11,
//     "title": "et ea vero quia laudantium autem",
//     "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
// }
const grid = document.querySelector(".grid"),
    cardTemplate = document.getElementById('card-template')

for (let i = 0; i < 10; i++) {
    grid.append(cardTemplate.content.cloneNode(true));
}
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        grid.innerHTML = ''
        posts.forEach(post => {
            const div = cardTemplate.content.cloneNode(true);
            div.querySelector('[data-title]').textContent = post.title
            div.querySelector('[data-body]').textContent = post.body
            grid.append(div)
        })
    })