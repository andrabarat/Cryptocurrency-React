export default class CoinModel {
  constructor(
    id,
    name,
    symbol,
    date,
    high,
    low,
    open,
    close,
    volume,
    marketCap,
    status
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.date = date;
    this.high = high;
    this.low = low;
    this.open = open;
    this.close = close;
    this.volume = volume;
    this.marketCap = marketCap;
    this.status = status;
  }
}
