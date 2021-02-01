/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MirrorENSRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "ADDR_REVERSE_NODE()": FunctionFragment;
    "changeENSResolver(address)": FunctionFragment;
    "changeInviteToken(address)": FunctionFragment;
    "changeRootnodeOwner(address)": FunctionFragment;
    "ensResolver()": FunctionFragment;
    "getENS()": FunctionFragment;
    "getENSReverseRegistrar()": FunctionFragment;
    "inviteToken()": FunctionFragment;
    "isAvailable(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "register(string,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rootName()": FunctionFragment;
    "rootNode()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDR_REVERSE_NODE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeENSResolver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeInviteToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRootnodeOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ensResolver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getENS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getENSReverseRegistrar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inviteToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAvailable",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rootName", values?: undefined): string;
  encodeFunctionData(functionFragment: "rootNode", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDR_REVERSE_NODE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeENSResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeInviteToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRootnodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getENS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getENSReverseRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inviteToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rootName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rootNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ENSResolverChanged(address)": EventFragment;
    "InviteTokenChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RegisteredENS(address,string)": EventFragment;
    "RootnodeOwnerChange(bytes32,address)": EventFragment;
    "UnregisteredENS(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ENSResolverChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InviteTokenChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisteredENS"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootnodeOwnerChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnregisteredENS"): EventFragment;
}

export class MirrorENSRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MirrorENSRegistrarInterface;

  functions: {
    ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<[string]>;

    "ADDR_REVERSE_NODE()"(overrides?: CallOverrides): Promise<[string]>;

    changeENSResolver(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeENSResolver(address)"(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeInviteToken(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeInviteToken(address)"(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<[string]>;

    "ensResolver()"(overrides?: CallOverrides): Promise<[string]>;

    getENS(overrides?: CallOverrides): Promise<[string]>;

    "getENS()"(overrides?: CallOverrides): Promise<[string]>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<[string]>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<[string]>;

    inviteToken(overrides?: CallOverrides): Promise<[string]>;

    "inviteToken()"(overrides?: CallOverrides): Promise<[string]>;

    isAvailable(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAvailable(bytes32)"(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    register(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(string,address)"(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rootName(overrides?: CallOverrides): Promise<[string]>;

    "rootName()"(overrides?: CallOverrides): Promise<[string]>;

    rootNode(overrides?: CallOverrides): Promise<[string]>;

    "rootNode()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<string>;

  "ADDR_REVERSE_NODE()"(overrides?: CallOverrides): Promise<string>;

  changeENSResolver(
    ensResolver_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeENSResolver(address)"(
    ensResolver_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeInviteToken(
    inviteToken_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeInviteToken(address)"(
    inviteToken_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeRootnodeOwner(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeRootnodeOwner(address)"(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ensResolver(overrides?: CallOverrides): Promise<string>;

  "ensResolver()"(overrides?: CallOverrides): Promise<string>;

  getENS(overrides?: CallOverrides): Promise<string>;

  "getENS()"(overrides?: CallOverrides): Promise<string>;

  getENSReverseRegistrar(overrides?: CallOverrides): Promise<string>;

  "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<string>;

  inviteToken(overrides?: CallOverrides): Promise<string>;

  "inviteToken()"(overrides?: CallOverrides): Promise<string>;

  isAvailable(subnode_: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "isAvailable(bytes32)"(
    subnode_: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  register(
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(string,address)"(
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rootName(overrides?: CallOverrides): Promise<string>;

  "rootName()"(overrides?: CallOverrides): Promise<string>;

  rootNode(overrides?: CallOverrides): Promise<string>;

  "rootNode()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<string>;

    "ADDR_REVERSE_NODE()"(overrides?: CallOverrides): Promise<string>;

    changeENSResolver(
      ensResolver_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeENSResolver(address)"(
      ensResolver_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeInviteToken(
      inviteToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeInviteToken(address)"(
      inviteToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRootnodeOwner(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ensResolver(overrides?: CallOverrides): Promise<string>;

    "ensResolver()"(overrides?: CallOverrides): Promise<string>;

    getENS(overrides?: CallOverrides): Promise<string>;

    "getENS()"(overrides?: CallOverrides): Promise<string>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<string>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<string>;

    inviteToken(overrides?: CallOverrides): Promise<string>;

    "inviteToken()"(overrides?: CallOverrides): Promise<string>;

    isAvailable(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAvailable(bytes32)"(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    register(
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(string,address)"(
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rootName(overrides?: CallOverrides): Promise<string>;

    "rootName()"(overrides?: CallOverrides): Promise<string>;

    rootNode(overrides?: CallOverrides): Promise<string>;

    "rootNode()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ENSResolverChanged(addr: null): EventFilter;

    InviteTokenChanged(addr: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RegisteredENS(_owner: string | null, _ens: null): EventFilter;

    RootnodeOwnerChange(
      node: BytesLike | null,
      owner: string | null
    ): EventFilter;

    UnregisteredENS(_ens: null): EventFilter;
  };

  estimateGas: {
    ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDR_REVERSE_NODE()"(overrides?: CallOverrides): Promise<BigNumber>;

    changeENSResolver(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeENSResolver(address)"(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeInviteToken(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeInviteToken(address)"(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ensResolver(overrides?: CallOverrides): Promise<BigNumber>;

    "ensResolver()"(overrides?: CallOverrides): Promise<BigNumber>;

    getENS(overrides?: CallOverrides): Promise<BigNumber>;

    "getENS()"(overrides?: CallOverrides): Promise<BigNumber>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<BigNumber>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<BigNumber>;

    inviteToken(overrides?: CallOverrides): Promise<BigNumber>;

    "inviteToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAvailable(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAvailable(bytes32)"(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(string,address)"(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rootName(overrides?: CallOverrides): Promise<BigNumber>;

    "rootName()"(overrides?: CallOverrides): Promise<BigNumber>;

    rootNode(overrides?: CallOverrides): Promise<BigNumber>;

    "rootNode()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDR_REVERSE_NODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ADDR_REVERSE_NODE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeENSResolver(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeENSResolver(address)"(
      ensResolver_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeInviteToken(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeInviteToken(address)"(
      inviteToken_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensResolver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getENS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getENSReverseRegistrar(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getENSReverseRegistrar()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inviteToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inviteToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAvailable(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAvailable(bytes32)"(
      subnode_: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(string,address)"(
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rootName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rootName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rootNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rootNode()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
