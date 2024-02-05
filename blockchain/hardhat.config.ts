import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
const config: HardhatUserConfig = {
	networks: {
		hardhat: {
			accounts: {
				mnemonic: process.env.SEED_PHRASE,
			},
			chainId: 1337,
		},
	},
};
console.log("config = ", config.networks?.hardhat);
export default config;
