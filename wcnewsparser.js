//const express = import('express')
import express from 'express';
const app = express();
const port = 8006;
import Mercury from '@postlight/mercury-parser';

app.get('/', (req, res) => {
const url = req.query.url;
Mercury.parse(url).then(result =>res.send(result));

});
// NOTE: When used in the browser, you can omit the URL argument
// and simply run `Mercury.parse()` to parse the current page.


app.listen(port, () => {
  //console.log(`Example app listening on port ${port}!`)
});
