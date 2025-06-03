import { server } from './server'
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
});