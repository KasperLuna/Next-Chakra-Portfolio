export default async function handler(request, response) {
  const params = request["query"]["tickers"];
  console.log(params);
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${params}&vs_currencies=usd`
  );
  const data = await res.json();
  return response.status(200).json(data);
}
