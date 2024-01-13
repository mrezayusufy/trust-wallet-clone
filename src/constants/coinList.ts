interface ICoin {
    title: string;
    coin: string;
    icon: string;
    amount: number;
    price: number;
    currency: string;
    percentage: string;
    fiat: number;
  }
const coinList : ICoin[]= [
    {
      icon: require("../../assets/coins/usdt.webp"),
      title: "Tether USD",
      amount: 1.0,
      coin: "USDT",
      fiat: 0.99,
      currency: "USDT",
      price: 0.99,
      percentage: "-0.06%"
    },
    {
      icon: require("../../assets/coins/10000714.webp"),
      title: "Smart Chain",
      amount: 0.037896,
      coin: "BNB",
      fiat: 19.80,
      currency: "USD",
      price: 525.93,
      percentage: "+5.51%"
    },
    {
      icon: require("../../assets/coins/0.webp"),
      title: "Bitcoin",
      amount: 0,
      coin: "BTC",
      fiat: 0,
      currency: "USD",
      price: 61785.50,
      percentage: "+1.34%"
    },
    {
      icon: require("../../assets/coins/60.webp"),
      title: "Ethereum",
      amount: 0.241932,
      coin: "ETH",
      fiat: 0,
      currency: "USD",
      price: 4343.56,
      percentage: "+0.34%"
    },
    {
      icon: require("../../assets/coins/714.webp"),
      title: "BNB",
      amount: 231.08,
      coin: "ETH",
      fiat: 0,
      currency: "USD",
      price: 524.93,
      percentage: "+5.51%"
    },
    {
      icon: require("../../assets/coins/195.webp"),
      title: "Tron",
      amount: 0,
      coin: "TRO",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/501.webp"),
      title: "Solana",
      amount: 0,
      coin: "SOL",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/1815.webp"),
      title: "Cardano",
      amount: 0,
      coin: "ADA",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/144.webp"),
      title: "XRP",
      amount: 0,
      coin: "XRP",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/3.webp"),
      title: "Dogecoin",
      amount: 0,
      coin: "DOGE",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/354.webp"),
      title: "Polkadot",
      amount: 0,
      coin: "DOT",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/10009000.webp"),
      title: "Avalanche C-Chain",
      amount: 0,
      coin: "AVAX",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/966.webp"),
      title: "Polygon",
      amount: 0,
      coin: "MATIC",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/2.webp"),
      title: "Litecoin",
      amount: 0,
      coin: "MATIC",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/10000025.webp"),
      title: "Cronos Chain",
      amount: 0,
      coin: "CRO",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/394.webp"),
      title: "Crypto.org",
      amount: 0,
      coin: "CRO",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    }, 
    {
      icon: require("../../assets/coins/145.webp"),
      title: "Bitcoin Cash",
      amount: 0,
      coin: "BCH",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/148.webp"),
      title: "Stellar",
      amount: 0,
      coin: "XLM",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/118.webp"),
      title: "Cosmos Hub",
      amount: 0,
      coin: "ATOM",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/283.webp"),
      title: "Algorand",
      amount: 0,
      coin: "ALGO",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/61.webp"),
      title: "Ethereum Classic",
      amount: 253.32,
      coin: "ETC",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/1211.webp"),
      title: "Elrond",
      amount: 0,
      coin: "eGLD",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/818.webp"),
      title: "VeChain",
      amount: 0,
      coin: "VET",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
    {
      icon: require("../../assets/coins/461.webp"),
      title: "Filecoin",
      amount: 0,
      coin: "FIL",
      fiat: 0,
      currency: "USD",
      price: 0.69,
      percentage: "+2.11%"
    },
  ]
 
  export {coinList, ICoin};