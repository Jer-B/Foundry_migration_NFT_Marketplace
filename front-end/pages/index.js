import Image from "next/image"
//import styles from "../styles/Home.module.css"
// import { useMoralisQuery, useMoralis } from "react-moralis";
import { useMoralis } from "react-moralis"
import NFTBox from "../components/NFTBox"
import networkMapping from "../constants/networkMapping.json"
import { useQuery } from "@apollo/client"
import GET_ACTIVE_ITEMS from "@/constants/subgraphQueries"

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    const chainString = chainId ? parseInt(chainId).toString() : "11155111"
    console.log("chainId:", chainId)
    console.log("chainString:", chainString)
    console.log("networkMapping:", networkMapping)
    // const marketplaceAddress = chainId ? networkMapping[chainString]?.NftMarketplace[0] : null
    const marketplaceAddress = chainId
        ? networkMapping[chainString]?.NftMarketplace[0]
        : "0x4f569DA63a4c349fF96962Db5f2F7Eb0E9380640"
    console.log("marketplaceAddress:", marketplaceAddress)

    // const chainString = chainId ? parseInt(chainId).toString() : null
    // console.log("chainString:", chainString)
    // console.log("networkMapping:", networkMapping)
    // const marketplaceAddress = chainId ? networkMapping[chainString]?.NftMarketplace[0] : null
    // console.log("marketplaceAddress:", marketplaceAddress)

    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
            {/* <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !listedNfts ? (
                        <div>Loading Marketplace...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            console.log(nft)
                            const { price, nftAddress, tokenId, seller } = nft
                            return (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                         ) : (
                                <div>Wrong Network, switch to a supported network. (Ie: Sepolia) </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
        </div> */}
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !listedNfts ? (
                        <div>Loading Marketplace Items...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            const { price, nftAddress, tokenId, seller } = nft
                            return marketplaceAddress ? (
                                <NFTBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>
                                    Wrong Network, switch to a supported network. (Ie: Sepolia){" "}
                                </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
