import Caver from 'caver-js';
const { tokenAbi } = require('../deployed/roundContractABI');
const CONTRACT_ADDRESS = "0x564dE61Dc66DA3d0CfE69a3E8cc05b75A9d41891"

export const fund = async (address: string) => {
    try {
        const caver = new Caver(window.klaytn);
        const roundContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
        const value = caver.utils.toPeb(1, 'KLAY');
        const res = await roundContract.methods.balanceOf(address).fund({ from: window.klaytn.selectedAddress, value: value, gas: 100000 });
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}
export const setBeneficiary = async (address: string) => {
    try {
        const caver = new Caver(window.klaytn);
        const roundContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
        const balance = await roundContract.methods.setBeneficiary().send({ from: window.klaytn.selectedAddress, gas: 100000 });
    } catch (err) {
        console.error(err);
    }
}

export const myFundings = async (address: string) => {
    try {
        const caver = new Caver(window.klaytn);
        const roundContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
        await roundContract.methods.myFundings(address).call();
    } catch (err) {
        console.error(err);
    }
}
export const rounds = async () => {
    try {
        const caver = new Caver(window.klaytn);
        const roundContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
        await roundContract.methods.rounds(10, 0).call();
    } catch (err) {
        console.error(err);
    }
}
export const createRound = async (
    name: string,
    linkToCompany: string,
    images: string,
    description: string,
    about: string,
    demo: string,
    beneficiary: string,
) => {
    try {
        const caver = new Caver(window.klaytn);
        const roundContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
        await roundContract.methods.createRound(name,
            linkToCompany,
            images,
            description,
            about,
            demo,
            beneficiary,).send({ from: window.klaytn.selectedAddress, gas: 100000 });
    } catch (err) {
        console.error(err);
    }
}

