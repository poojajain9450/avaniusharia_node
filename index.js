const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.render('index'))
app.post('/signup', async function (req, res) {

    if (!req.body.firstName || !req.body.lastName || !req.body.password) {
        res.status(400).send({ message: 'Required parameters missing' })
    } else
        if (req.body.password.length < 8) {
            res.status(422).send({ message: 'Password less than 8 chars' })
        } else {
            let isChecked = req.body.checkbox ? true : false;
            res.render('message',
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    isChecked: isChecked,
                    emailId: req.body.emailId
                });
        }
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))


