1. clone the repo
2. run `npm i`
3. run `npm run test` adn see that the test fails
4. switch to branch "fix" (`git checkout fix`)
5. run `npm i` again
6. run `npm run test` and see that the test passes
7. the only difference is that on the "fix" branch, the nwsapi is forced to resolve to version 2.2.9