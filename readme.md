# ZKmaps subgraph

✨
### 🌍 subgraph mainnet
https://thegraph.com/hosted-service/subgraph/ronerlih/zkmaps?selected=playground
### 🌍 subgraph dev (Polygon mumbai)
https://thegraph.com/hosted-service/subgraph/ronerlih/zkmapsDev?selected=playground

### 💻 Query sample
(by user address)
```js
{
  logVerifieds(where:{userAddress: "0x36e5DE22e6dbe66893cD38f0f4782548a0B9B410" }) {
    id
    userAddress
    timestamp
  }
}
```

### 🙌 Acknowledgements
- thanks for the help with resolving 
  `✖ Failed to generate types for contract ABIs: Failed to generate types for contract ABI: Conversion from 'ethereum' to 'AssemblyScript' for source type 'uint256[2][2]' is not supported error Command failed with exit code 1.`

We've removed the multidimentional array from the ABI, it worked! ✨👾 
(we do not use those fields in our subgragh) Thanks subgraph team!