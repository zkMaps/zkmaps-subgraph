# ZKmaps subgraph

✨
### 🌍 subgraph
https://thegraph.com/hosted-service/subgraph/ronerlih/zkmaps?selected=playground

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