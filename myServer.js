/**
 * Created by Ninghai on 2017/7/8.
 */
import express from 'express'

const app = new express();

app.use(express.static('/'));

app.get('*', (req, res) => {
    res.sendFile(`${_dirname}/package.json`)
});

app.listen(3000, () => console.log("test"));