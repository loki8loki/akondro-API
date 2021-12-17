const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());


// server 
app.listen(
    PORT,
    () => console.log(`ici http://localhost:${PORT}`)
)


// in get 
app.get('/akondro', (req, res) => {
    res.status(200).send({
        tshirt: 'akondro kely',
        size: 'mavo mavo'
    })

});


// post py id 
app.post('/akondro/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo)
    {
        res.status(418).send({ message: 'Mila akondro ! '})
    }

    res.send({
        tshirt: ` akondro nao ${logo} ary id dia ${id}`
    });
});