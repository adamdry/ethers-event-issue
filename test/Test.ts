import * as chai from 'chai'
import { BigNumber, ContractReceipt, ContractTransaction } from 'ethers'
import { ethers } from 'hardhat'
import { ContractA, ContractAFactory } from '../typechain'

const expect = chai.expect

describe("Example test", function () {
    it("should fire the event", async function () {
        const [owner] = await ethers.getSigners();

        const contractAFactory = (await ethers.getContractFactory(
            'ContractA',
            owner,
        )) as ContractAFactory

        const contractA: ContractA = await contractAFactory.deploy()

        contractA.on('TokensMinted', (amount: BigNumber) => {
            // THIS LINE NEVER GETS HIT
            console.log('###########')
        })

        const contractTx: ContractTransaction = await contractA.mint(123)
        const contractReceipt: ContractReceipt = await contractTx.wait()

        for (const event of contractReceipt.events!) {
            console.log(JSON.stringify(event))
        }

    });
});