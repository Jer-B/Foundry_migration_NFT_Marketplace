<!-- @format -->

# DEMO NFT Marketplace

[https://foundry-migration-nft-marketplace.vercel.app/](https://foundry-migration-nft-marketplace.vercel.app/)

# English README 　[Jump to Japanese Version](#japanese)

# Note: This is a work in progress

- [Done] Migration to Foundry and Sepolia done.
- [Work in progress] A change to `Viem` is in consideration

## DApp Overview

- This is an NFT marketplace where users can sell, buy, and cancel the sale of their NFTs.
- When an NFT is sold, the NFT automatically transferred to the seller.
- Sellers have to withdraw their funds manually from the site.

- On-chain events are captured with TheGraph using a subgraph.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Jer-B/Foundry_migration_NFT_Marketplace
```

- Change directory

```bash
cd Foundry_migration_NFT_Marketplace/contracts
```

### Foundry Initialization

```
forge init --no-commit
```

- Install dependencies

```bash
forge install cyfrin/foundry-devops@0.0.11 --no-commit && forge install OpenZeppelin/openzeppelin-contracts --no-commit
```

#### Contracts deployment

- Replace RPC, Private Key and Etherscan API key by yours.

```
forge script script/DeployNftMarketplace.s.sol:DeployNftMarketplace --rpc-url [YOUR RPC API KEY] --private-key [YOUR PRIVATE KEY] --broadcast --etherscan-api-key [YOUR ETHERSCAN API KEY] -vvv
```

- Replace the contract address by your deployed NftMarketplace contract address in the `index.js`, `sell-nft.js`, `networkMapping.json` file in the front-end directory.

```
    const marketplaceAddress = chainId
        ? networkMapping[chainString]?.NftMarketplace[0]
        : "Your contract address here"
```

- `networkMapping.json`

```
    "11155111": {
        "NftMarketplace": ["Your contract address here"]
    },
```

### Subgraph Initialization

- Change directory

```
cd graphql-client
```

#### Install Subgraph CLI

```
yarn global add @graphprotocol/graph-cli
```

- Log into [the graph UI](https://thegraph.com/studio/subgraph) and create a new Subgraph.

Use `Ethereum Sepolia` as the network.

#### Initialize Subgraph

```
graph init --studio nft-marketplace
```

#### Authenticate CLI

```
graph auth  --studio YOUR_DEPLOY_KEY_HERE
```

#### Update your `subgraph.yaml`

1.  Update the `address` with your NftMarketplace Address
2.  Update the `startBlock` with the block right before your contract was deployed

- Build graph locally

```
graph codegen && graph build
```

1.  `graph codegen`: Generates code in the `generated` folder based on your `schema.graphql`
2.  `graph build`: Generates the build that will be uploaded to the graph

#### Deploy subgraph

Replace `VERSION_NUMBER_HERE` with a version number like `0.0.1`.

```
graph deploy --studio nft-marketplace -l VERSION_NUMBER_HERE
```

#### View your UI

1. Make sure to have deployed your contract first.
2. Put an NFT on sale to view your NFT showing up on front-end

### Environment variables

- Create a Subgraph on [TheGraph](https://thegraph.com/) first.
- Create an .env file or rename ".env_example" in the root directory of the project. And replace the values by yours:
- Comment out the line 15 in the `_app.js` file, and un-comment the line 14 in the front-end directory.

```
YOUR SUBGRAPH URI -> "https://api.studio.thegraph.com/query/xxxx/nft-marketplace/version/latest"
```

### If you do not have NFT on sepolia testnet

- Go to this basic NFT contract address on Etherscan and mint an NFT: [Sepolia - BasicNFT](https://sepolia.etherscan.io/token/0x7fdc673352cb7b8efa1eb69a28dde4fa2e1d0a8c#writeContract)
- Connect your wallet by clicking on `Connect to web3`.
- Input this IPFS address in the `NFTTokenURI` parameter field of the `mintNFT` function: `ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json`.
- Click on `Write` and confirm the transaction on your wallet to mint the NFT.

### NexJS Initialization

- Change directory

```bash
cd Foundry_migration_NFT_Marketplace/front-end
```

#### Install dependencies

```bash
yarn install
```

- Install Moralis-V1, WalletConnect and Web3Auth.

```bash
yarn add moralis-v1 react-moralis
yarn add magic-sdk @walletconnect/web3-provider @web3auth/web3auth
```

#### Run the development server:

- Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Subgraph Initialization

- Change directory

```
cd graphql-client
```

- Install dependencies

```
yarn install
```

<br />
<br />

<a name="japanese"></a>

# 日本語版の README

# 注意: これは作業中です

- [完了] Foundry および Sepolia への移行完了。
- [作業中] `Viem` への変更が検討中です。

## DApp 概要

- NFT のマーケットプレイスです。ユーザーが NFT を売買および販売をキャンセルできる NFT マーケットプレイスです。
- NFT が売却されると、その NFT は自動的に売り手に転送されます。
- 売り手は、サイトから自分の資金を手動で引き出さなければなりません。

- オンチェーンイベントは TheGraph のサブグラフで捕捉されます。

## はじめに

### リポジトリのクローン

```bash
git clone https://github.com/Jer-B/Foundry_migration_NFT_Marketplace
```

- ディレクトリを変更

```bash
cd Foundry_migration_NFT_Marketplace/contracts
```

### Foundry の初期化

```
forge init --no-commit
```

- 依存関係のインストール

```bash
forge install cyfrin/foundry-devops@0.0.11 --no-commit && forge install OpenZeppelin/openzeppelin-contracts --no-commit
```

#### コントラクトのデプロイメント

- RPC、プライベートキー、Etherscan の API キーをあなたのものに置き換えてください。

```
forge script script/DeployNftMarketplace.s.sol:DeployNftMarketplace --rpc-url [YOUR RPC API KEY] --private-key [YOUR PRIVATE KEY] --broadcast --etherscan-api-key [YOUR ETHERSCAN API KEY] -vvv
```

- フロントエンドディレクトリ内の `index.js`、`sell-nft.js`、`networkMapping.json` ファイルにある NftMarketplace のコントラクトアドレスを、あなたがデプロイした NftMarketplace コントラクトアドレスに置き換えてください。

```
    const marketplaceAddress = chainId
        ? networkMapping[chainString]?.NftMarketplace[0]
        : "コントラクトアドレスをここに入力"
```

- `networkMapping.json`

```
    "11155111": {
        "NftMarketplace": ["コントラクトアドレスをここに入力"]
    },
```

### サブグラフの初期化

- ディレクトリを変更する

```
cd graphql-client
```

#### サブグラフ CLI をインストール

```
yarn global add @graphprotocol/graph-cli
```

- [TheGraph](https://thegraph.com/studio/subgraph)にログインして、新しいサブグラフを作成する。

ネットワークとして`Ethereum Sepolia`を使用する。

#### サブグラフを初期化

```
graph init --studio nft-marketplace
```

#### CLI を認証

```
graph auth  --studio YOUR_DEPLOY_KEY_HERE
```

#### `subgraph.yaml`を更新する

1.  `address`をあなたの NftMarketplace アドレスに更新する
2.  `startBlock`をあなたのコントラクトがデプロイされる直前のブロックに更新する

- ローカルでグラフをビルド

```
graph codegen && graph build
```

1.  `graph codegen`: `schema.graphql`に基づいて`generated`フォルダー内にコードを生成する
2.  `graph build`: グラフにアップロードされるビルドを生成する

#### サブグラフをデプロイ

`VERSION_NUMBER_HERE`を`0.0.1`のようなバージョン番号に置き換える。

```
graph deploy --studio nft-marketplace -l VERSION_NUMBER_HERE
```

#### UI を表示する

1. 最初にコントラクトをデプロイしていることを確認する。
2. NFT を販売に出して、フロントエンドに NFT が表示されるのを確認する。

### 環境変数

- 最初に[TheGraph](https://thegraph.com/) でサブグラフを作成してください。
- プロジェクトのルートディレクトリに`.env` ファイルを作成しまたは`.env_example`をリネームするし、以下のように記入し、あなたの値で置き換えてください:
- `front-end`ディレクトリ内の`_app.js`ファイルの 15 行目をコメントアウトし、14 行目をコメント解除してください。

```
YOUR SUBGRAPH URI -> "https://api.studio.thegraph.com/query/xxxx/nft-marketplace/version/latest"
```

### Sepolia テストネットに NFT がない場合

- この基本的な NFT コントラクトアドレスに Etherscan でアクセスし、NFT をミントしてください: [Sepolia - BasicNFT](https://sepolia.etherscan.io/token/0x7fdc673352cb7b8efa1eb69a28dde4fa2e1d0a8c#writeContract)
- `Connect to web3`をクリックしてウォレットを接続します。
- `mintNFT` 関数の`NFTTokenURI`パラメータフィールドにこの IPFS アドレスを入力してください: `ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json`.
- `Write` をクリックし、ウォレット上でトランザクションを確認して NFT をミントします。

### NextJs の初期化

- ディレクトリを変更

```bash
cd Foundry_migration_NFT_Marketplace/front-end
```

#### 依存関係をインストールする

```bash
yarn install
```

- Moralis-V1 と WalletConnect と Web3Auth をインストールする。

```bash
yarn add moralis-v1 react-moralis
yarn add magic-sdk @walletconnect/web3-provider @web3auth/web3auth
```

#### 開発サーバーの実行

- 開発サーバーを実行します:

```bash
yarn dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開いて結果を確認します。

### Subgraph の初期化

- ディレクトリを変更

```
cd graphql-client
```

- 依存関係をインストールする

```
yarn install
```
