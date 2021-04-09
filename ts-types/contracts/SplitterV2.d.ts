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

interface SplitterV2Interface extends ethers.utils.Interface {
  functions: {
    "amountFromPercent(uint256,uint32)": FunctionFragment;
    "encodeAllocation(address[],uint32[])": FunctionFragment;
    "executeETHSplit(address[],uint32[])": FunctionFragment;
    "initialize(bytes32)": FunctionFragment;
    "validateAllocation(address[],uint32[])": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountFromPercent",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeAllocation",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeETHSplit",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAllocation",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "amountFromPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeETHSplit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {
    "TransferETH(address,uint256,uint32,bool)": EventFragment;
    "TransferToken(address,address,uint256,uint32,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferToken"): EventFragment;
}

export class SplitterV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SplitterV2Interface;

  functions: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    encodeAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    "encodeAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeETHSplit(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeETHSplit(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(bytes32)"(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    validateAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "validateAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;

    "wethAddress()"(overrides?: CallOverrides): Promise<[string]>;
  };

  amountFromPercent(
    amount: BigNumberish,
    percent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "amountFromPercent(uint256,uint32)"(
    amount: BigNumberish,
    percent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  encodeAllocation(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string>;

  "encodeAllocation(address[],uint32[])"(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string>;

  executeETHSplit(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeETHSplit(address[],uint32[])"(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    allocationDigest_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(bytes32)"(
    allocationDigest_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  validateAllocation(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "validateAllocation(address[],uint32[])"(
    accounts: string[],
    percentages: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  "wethAddress()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    "encodeAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    executeETHSplit(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "executeETHSplit(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      allocationDigest_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(bytes32)"(
      allocationDigest_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "validateAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    wethAddress(overrides?: CallOverrides): Promise<string>;

    "wethAddress()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    TransferETH(
      account: null,
      amount: null,
      percent: null,
      success: null
    ): EventFilter;

    TransferToken(
      token: null,
      account: null,
      amount: null,
      percent: null,
      success: null
    ): EventFilter;
  };

  estimateGas: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encodeAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeETHSplit(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeETHSplit(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(bytes32)"(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    validateAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "wethAddress()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encodeAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeETHSplit(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeETHSplit(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(bytes32)"(
      allocationDigest_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    validateAllocation(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validateAllocation(address[],uint32[])"(
      accounts: string[],
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}