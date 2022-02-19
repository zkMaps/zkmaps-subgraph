import { BigInt } from "@graphprotocol/graph-ts"
import { Verifier, LogVerified as LogVerifiedEvent } from "../generated/Verifier/Verifier"
import { LogVerified } from "../generated/schema"

export function handleLogVerified(event: LogVerifiedEvent): void {
  let  entity = new LogVerified(event.transaction.hash.toHex() + "-" + event.logIndex.toString())

  entity.userAddress = event.params.userAddress;
  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save()
}
