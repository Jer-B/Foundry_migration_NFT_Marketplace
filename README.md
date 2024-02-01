<!-- @format -->

# DEMO NFT Marketplace

[https://foundry-migration-nft-marketplace.vercel.app/](https://foundry-migration-nft-marketplace.vercel.app/)

# English README 　[Jump to Japanese Version](#japanese)

# Note: This is a work in progress

- [Work in progress] Initially made for the Goerli Network. Migration in progress to Sepolia testnet.
- [Work in progress] A change to `Viem` is in consideration

## DApp Overview

- This is an NFT marketplace where users can sell, buy, and cancel the sale of their NFTs.
- When an NFT is sold, the amount of ETH used to purchase it is automatically transferred to the seller.

- On-chain events are captured with a subgraph.

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

- Replace the contract address by your deployed WalletFactory contract address in the `.env` file :

```
 src/utils/constants.ts
```

### Environment variables

- Create an .env file in the root directory of the project. And put the below in it, replace the values by yours:

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=" YOUR WALLET CONNECT KEY "
DATABASE_URL=" YOUR SUPABASE DATABASE URL "
NEXT_PUBLIC_STACKUP_API_KEY=" YOUR STACKUP API KEY "
```

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

- [作業中] 最初は Goerli ネットワーク用に作成されました。現在 Sepolia テストネットへの移行が進行中です。
- [作業中] `Viem` への変更が検討中です。

## DApp 概要

- NFT のマーケットプレイスです。ユーザーが NFT を売買および販売をキャンセルできる NFT マーケットプレイスです。
- NFT が売れた場合、購入に使用された ETH の金額は自動的に売り手に転送されます。

- オンチェーンイベントはサブグラフで捕捉されます。

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

- `.env` ファイル内のコントラクトアドレスを、デプロイ済みの WalletFactory コントラクトアドレスに置き換えてください。

```
 src/utils/constants.ts
```

### 環境変数

- プロジェクトのルートディレクトリに.env ファイルを作成し、以下のように記入し、あなたの値で置き換えてください:

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=" YOUR WALLET CONNECT KEY "
DATABASE_URL=" YOUR SUPABASE DATABASE URL "
NEXT_PUBLIC_STACKUP_API_KEY=" YOUR STACKUP API KEY "
```

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
