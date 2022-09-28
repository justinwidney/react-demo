import {readFile} from 'fs/promises'

process.on('uncaughtException', (e) => {
    console.log(e)
})

const results = readFile(new URL('app.mjs', import.meta.url), 'utf-8',(err, data))