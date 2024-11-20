import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto teste',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 2,
        descricao: 'Uma foto teste',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 3,
        descricao: 'Gato brincando com um novelo de lã',
        imagem: 'https://placekitten.com/400/300'
    },
    {
        id: 4,
        descricao: 'Gatinho dormindo em uma caixa',
        imagem: 'https://placekitten.com/200/200'
    },
    {
        id: 5,
        descricao: 'Gatos explorando a natureza',
        imagem: 'https://placekitten.com/500/400'
    },
    {
        id: 6,
        descricao: 'Gato com olhos grandes e brilhantes',
        imagem: 'https://placekitten.com/300/200'
    },
    {
        id: 7,
        descricao: 'Gato fazendo pose para foto',
        imagem: 'https://placekitten.com/400/300'
    }

];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});