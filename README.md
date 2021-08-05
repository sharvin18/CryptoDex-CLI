# CryptoDex-CLI
A Command line interface written in Node.js to check the current cryptocurrency prices.
Use the commands given below to set your api key and using the application through the command line.


Register an API key at [Nomics](https://nomics.com)

# Usage
```sh
npm install

npm link
```

# Commands

```sh
# Help & Commands
cryptodex -h

# Version
cryptodex -V

# API Key Commands
cryptodex key set
cryptodex key show
cryptodex key remove

# Crypto Check Commands (Shows default coins = BTC,ETH,USDT)
cryptodex check price

# Check Specific Coins
cryptodex check --coin=BTC,ETH

# Choose Currency (Default: INR)
cryptodex check --cur=EUR
```

