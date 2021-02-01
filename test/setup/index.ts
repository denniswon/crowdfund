import { ethers } from "hardhat";
import { ENS_REGISTRY_ADDRESS, ROOT_NAME, ROOT_NODE, ZERO_BYTES32 } from "../config/constants";

async function setup() {
  const [owner, user1, user2] = await ethers.getSigners();

  const ENSRegistry = await ethers.getContractFactory('ENSRegistry')
  const ensRegistry = await ENSRegistry.deploy()
  await ensRegistry.deployed()

  const rootOwner = await ensRegistry.owner(ZERO_BYTES32)
  const xyzOwner = await ensRegistry.owner(ethers.utils.namehash(ROOT_NAME))

  const MirrorInviteToken = await ethers.getContractFactory("MirrorInviteToken");
  const mirrorInviteToken = await MirrorInviteToken.deploy("MirrorInviteToken", "WRITE");
  await mirrorInviteToken.deployed();

  const MirrorENSResolver = await ethers.getContractFactory("MirrorENSResolver");
  const mirrorENSResolver = await MirrorENSResolver.deploy();
  await mirrorENSResolver.deployed();

  const MirrorENSRegistrar = await ethers.getContractFactory("MirrorENSRegistrar");
  const mirrorENSRegistrar = await MirrorENSRegistrar.deploy(
    ROOT_NAME,
    ROOT_NODE,
    ensRegistry.address,
    mirrorENSResolver.address,
    mirrorInviteToken.address
  );
  await mirrorENSRegistrar.deployed();

  const ReverseRegistrar = await ethers.getContractFactory('MirrorENSReverseRegistrar')
  const reverseRegistrar = await ReverseRegistrar.deploy(ensRegistry.address, mirrorENSRegistrar.address)

  await mirrorInviteToken.setENSRegistrar(mirrorENSRegistrar.address);
  await mirrorENSResolver.transferOwnership(mirrorENSRegistrar.address)

  // Setup root.
  await ensRegistry.setSubnodeOwner(
    ZERO_BYTES32,
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("xyz")),
    owner.address
  );
  await ensRegistry.setSubnodeOwner(
    ethers.utils.namehash("xyz"),
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("mirror")),
    mirrorENSRegistrar.address
  );
  await ensRegistry.setSubnodeOwner(
    ZERO_BYTES32,
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes('reverse')),
    owner.address
  )
  await ensRegistry.setSubnodeOwner(
    ethers.utils.namehash('reverse'),
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes('addr')),
    reverseRegistrar.address,
  )

  return [
    mirrorInviteToken,
    mirrorENSRegistrar,
    ensRegistry,
    reverseRegistrar,
    mirrorENSResolver
  ];
}

export default setup;