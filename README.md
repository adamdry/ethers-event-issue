# ethers-event-issue
Simple project to show an issue with ethersjs not firing the "on" event listener when an event is raised from a smart contract

## Steps to reproduce the issue
- Clone the repo
- `npm i`
- `npx hardhat compile`
- `npx hardhat test`
- If the event handler fired you should see `###########` console logged out - however I do not see this