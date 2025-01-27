import {HardhatRuntimeEnvironment} from 'hardhat/types'
import {DeployFunction} from 'hardhat-deploy/types'
import { getChainId } from 'hardhat'


const xICHIRariPowah: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployer} = await hre.getNamedAccounts()
  const {deploy} = hre.deployments;
  const chainId = await getChainId()
  
await deploy('xICHIRariPowah', {
    from: deployer,
    log: true,
    }) 
};
export default xICHIRariPowah
xICHIRariPowah.id = 'xICHxICHIRariPowahIPowah'
xICHIRariPowah.tags = ['xICHIRariPowah','interperter']