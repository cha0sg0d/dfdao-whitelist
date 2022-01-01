import { ethers } from 'ethers';
import { CORE_CONTRACT_ADDRESS, WHITELIST_CONTRACT_ADDRESS } from '@dfdao/contracts';
import CORE_ABI from '@dfdao/contracts/abis/DarkForestCore.json';
import WHITELIST_ABI from '@dfdao/contracts/abis/Whitelist.json';
import { Whitelist } from '@dfdao/contracts/typechain'


const XDAI = 'https://rpc-df.xdaichain.com/'

const provider = new ethers.providers.JsonRpcProvider(XDAI);


const main = async (playerAddress) => {
    const whitelist = new ethers.Contract(WHITELIST_CONTRACT_ADDRESS, WHITELIST_ABI, provider);
    const result = await whitelist.isWhitelisted(playerAddress);
    result ? console.log(`${playerAddress} is whitelisted in game`) : console.log(`${playerAddress} is NOT whitelisted`);
}

main().catch(console.log);



