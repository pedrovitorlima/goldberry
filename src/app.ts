import express from 'express'

const app = express()
const port = 3000

app.get('/hello', (req, res) =>  {
    res.send('hey mate')
})

app.listen(port, () => {
    console.log(`serving on port ${port}`)
})

