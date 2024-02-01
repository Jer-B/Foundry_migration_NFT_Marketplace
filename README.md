<!-- @format -->

# DEMO

[https://foundry-migration-nft-marketplace.vercel.app/](https://foundry-migration-nft-marketplace.vercel.app/)

# English README 　[Jump to Japanese Version](#japanese)

# Note: This is a work in progress

- [Work in progress] Initially made for the Kovan Network. Migration in progress to Sepolia testnet.
- [Work in progress] As Ethers.js V5 is deprecated for the use of Sepolia testnet on the front-end, I am currently updating the code to Ethers.js V6.
- [Work in progress] UseDapp is also deprecated, waiting them to update and adapt to Ethers.js V6.
- [Work in progress] A change from `Ethers` to `Viem` is in consideration
- Meaning the front-end use a deprecated version of almost everything, but it still works.
- Due to the above deprecation, make sure to use the NodeJs version `16.13.2` and the react version `^17.0.2`.

## DApp Overview

This is a DApp built with React. It provides the following features:

- **Staking Tokens**: Users can stake the following tokens:

  - DAI
  - WETH

- **Rewards**: Depending on the staking period, users are rewarded with "DAPP" tokens.

- **Unstaking**: Users can unstake their initial stakes or their accumulated rewards at any time.

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
forge init
```

- Install dependencies

```bash
forge install OpenZeppelin/openzeppelin-contracts@v4.2.0 --no-commit && forge install @chainlink=smartcontractkit/chainlink-brownie-contracts@0.2.1 --no-commit
```

#### Contracts deployment

- Replace RPC, Private Key and Etherscan API key by yours.

```
forge script script/WalletFactory.s.sol --rpc-url [YOUR RPC API KEY] --private-key [YOUR PRIVATE KEY] --broadcast --etherscan-api-key [YOUR ETHERSCAN API KEY] -vvv
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
- Recall: Due to the above deprecation, make sure to use the NodeJs version `16.13.2` and the react version `^17.0.2`.

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
<br />
<br />

<a name="japanese"></a>

# 日本語版の README

# 注意: これは作業中です

- [作業中] 最初は Kovan ネットワーク用に作成されました。現在 Sepolia テストネットへの移行が進行中です。
- [作業中] Ethers.js V5 は Sepolia テストネットのフロントエンド使用が非推奨になったため、現在 Ethers.js V6 へのコード更新を行っています。
- [作業中] UseDapp も非推奨になっており、Ethers.js V6 に対応するための更新を待っています。
- [作業中] `Ethers` から `Viem` への変更が検討中です。
- フロントエンドはほとんど全てのものが非推奨のバージョンを使用していますが、まだ動作しています。
- 上記の情報の関係で NodeJs のバージョンは `16.13.2` 、React のバージョンは `^17.0.2` を使用してください。

## DApp 概要

これは React で構築された DApp です。以下の機能を提供します：

- **トークンのステーキング**：ユーザーは以下のトークンをステーキングできます：

  - DAI
  - WETH

- **報酬**：ステーキング期間に応じて、ユーザーは"DAPP"トークンで報酬を受け取ります。

- **アンステーキング**：ユーザーはいつでも初期のステーキングや時間とともに蓄積された報酬をアンステーキングできます。

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
forge init
```

- 依存関係のインストール

```bash
forge install OpenZeppelin/openzeppelin-contracts@v4.2.0 --no-commit && forge install @chainlink=smartcontractkit/chainlink-brownie-contracts@0.2.1 --no-commit
```

#### コントラクトのデプロイメント

- RPC、プライベートキー、Etherscan の API キーをあなたのものに置き換えてください。

```
forge script script/WalletFactory.s.sol --rpc-url [YOUR RPC API KEY] --private-key [YOUR PRIVATE KEY] --broadcast --etherscan-api-key [YOUR ETHERSCAN API KEY] -vvv
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
- 再考：　 NodeJs のバージョンは `16.13.2` 、React のバージョンは `^17.0.2` を使用してください。

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
