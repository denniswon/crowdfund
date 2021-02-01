/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MirrorENSReverseRegistrar } from "../MirrorENSReverseRegistrar";

export class MirrorENSReverseRegistrar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    ens_: string,
    resolver_: string,
    overrides?: Overrides
  ): Promise<MirrorENSReverseRegistrar> {
    return super.deploy(
      ens_,
      resolver_,
      overrides || {}
    ) as Promise<MirrorENSReverseRegistrar>;
  }
  getDeployTransaction(
    ens_: string,
    resolver_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(ens_, resolver_, overrides || {});
  }
  attach(address: string): MirrorENSReverseRegistrar {
    return super.attach(address) as MirrorENSReverseRegistrar;
  }
  connect(signer: Signer): MirrorENSReverseRegistrar__factory {
    return super.connect(signer) as MirrorENSReverseRegistrar__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MirrorENSReverseRegistrar {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MirrorENSReverseRegistrar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ens_",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDR_REVERSE_NODE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "claimWithResolver",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "node",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "resolver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109b93803806109b98339818101604052604081101561003357600080fd5b508051602091820151600080546001600160a01b038085166001600160a01b03199283161780845560018054838716941693909317909255604080516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e26004820152905195969495939492909116926302571be392602480840193919291829003018186803b1580156100cf57600080fd5b505afa1580156100e3573d6000803e3d6000fd5b505050506040513d60208110156100f957600080fd5b505190506001600160a01b038116156101815760408051630f41a04d60e11b815233600482015290516001600160a01b03831691631e83409a9160248083019260209291908290030181600087803b15801561015457600080fd5b505af1158015610168573d6000803e3d6000fd5b505050506040513d602081101561017e57600080fd5b50505b505050610826806101936000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80633f15457f1161005b5780633f15457f1461010c5780637cf8a2eb14610114578063bffbe61c1461011c578063c47f0027146101425761007d565b806304f3bcec146100825780630f5a5466146100a65780631e83409a146100e6575b600080fd5b61008a6101e8565b604080516001600160a01b039092168252519081900360200190f35b6100d4600480360360408110156100bc57600080fd5b506001600160a01b03813581169160200135166101f7565b60408051918252519081900360200190f35b6100d4600480360360208110156100fc57600080fd5b50356001600160a01b03166105d9565b61008a6105ec565b6100d46105fb565b6100d46004803603602081101561013257600080fd5b50356001600160a01b031661061f565b6100d46004803603602081101561015857600080fd5b81019060208101813564010000000081111561017357600080fd5b82018360208201111561018557600080fd5b803590602001918460018302840111640100000000831117156101a757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061067f945050505050565b6001546001600160a01b031681565b6000806102033361078c565b604080517f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260208083019190915281830184905282518083038401815260608301808552815191830191909120600080547f02571be300000000000000000000000000000000000000000000000000000000909352606485018290529451959650946001600160a01b03909116926302571be3926084808301939192829003018186803b1580156102b357600080fd5b505afa1580156102c7573d6000803e3d6000fd5b505050506040513d60208110156102dd57600080fd5b505190506001600160a01b038516158015906103955750600054604080517f0178b8bf0000000000000000000000000000000000000000000000000000000081526004810185905290516001600160a01b0390921691630178b8bf91602480820192602092909190829003018186803b15801561035957600080fd5b505afa15801561036d573d6000803e3d6000fd5b505050506040513d602081101561038357600080fd5b50516001600160a01b03868116911614155b156104f2576001600160a01b038116301461046e5760008054604080517f06ab59230000000000000000000000000000000000000000000000000000000081527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260048201526024810187905230604482015290516001600160a01b03909216926306ab5923926064808401936020939083900390910190829087803b15801561043e57600080fd5b505af1158015610452573d6000803e3d6000fd5b505050506040513d602081101561046857600080fd5b50309150505b60008054604080517f1896f70a000000000000000000000000000000000000000000000000000000008152600481018690526001600160a01b03898116602483015291519190921692631896f70a926044808201939182900301818387803b1580156104d957600080fd5b505af11580156104ed573d6000803e3d6000fd5b505050505b856001600160a01b0316816001600160a01b0316146105d05760008054604080517f06ab59230000000000000000000000000000000000000000000000000000000081527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e26004820152602481018790526001600160a01b038a81166044830152915191909216926306ab592392606480820193602093909283900390910190829087803b1580156105a357600080fd5b505af11580156105b7573d6000803e3d6000fd5b505050506040513d60208110156105cd57600080fd5b50505b50949350505050565b60006105e68260006101f7565b92915050565b6000546001600160a01b031681565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e281565b60007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e261064b8361078c565b6040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b600154600090819061069b9030906001600160a01b03166101f7565b600154604080517f7737221300000000000000000000000000000000000000000000000000000000815260048101848152602482019283528751604483015287519495506001600160a01b0390931693637737221393869389939192909160640190602085019080838360005b83811015610720578181015183820152602001610708565b50505050905090810190601f16801561074d5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561076d57600080fd5b505af1158015610781573d6000803e3d6000fd5b509295945050505050565b60007f303132333435363738396162636465660000000000000000000000000000000060285b80156107e35760001901600f841682901a815360109093049260001901600f841682901a81536010840493506107b2565b505060286000209291505056fea26469706673582212209e069f9ffaba8758b4561b63040ad173b625b7ad8cc1ad8ad26efeace79b712164736f6c63430006080033";
