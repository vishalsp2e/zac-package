# zac-package
This is the core KALP WALLET Extension package. The zac-package offers the optimum configuration for a kalp-wallet-frontend. Frontend users can simply interface with the KALP- WALLET Extension after downloading this package.

## Steps
Installation
You can install the package either using NPM or using Yarn

## 1) Using NPM
npm install zac-package

## Using Yarn
yarn add zac-package

## 2) Import 
Import the package by :-
### import zacPackage from "zac-package";

## 3) Usage(Function)
### a) zac-package.connect()
This function allow the frontend (DAPP) user to open the extension wallet
### b) zac-package.sentData(e, id, names, assetDigest, enrollmentId)
When a user wants to create an asset by signing up for a transaction, he or she can utilise this function, which requires 5 details.
1) e (This is a constant parameter that can simply be written as e)
2) id (Any unique alpha numeric character can be used)
3) surnames (Given name)
4) assetDigest (Enter any unique alpha numeric character here)
5) enrollmentId (This enrollment Id is available after you have a KALP- Wallet account)

