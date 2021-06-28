# CryptoDex-CLI
Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://nomics.com

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

