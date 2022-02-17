export default async function handler(request, response) {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cpolkadot%2Calgorand%2Cchainlink%2Ctezos%2Charmony&vs_currencies=usd');
    const data = await res.json();
    return response.status(200).json({ data });
  }