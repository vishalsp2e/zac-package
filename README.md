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
### b) zac-package.sendData(e ,mspId,peerEndpoint,gatewayPeer,chainCodeName,channelName,serverTlsCert,serverTlsKey,tlsCert,transactionName,transactionType, data )
When a user wants to sendData or want to read data , he or she can utilise this function, which requires this details.
1) e (This is a constant parameter that can simply be written as e  eg:- e)
2) mspId  (eg:-p2epro)
3) peerEndpoint  (eg:-128.199.21.50:7050 )
4) gatewayPeer  (eg:- nginx.p2epl.com )
5) chainCodeName  (eg:- myipr )
6) channelName (eg:- kalptantra )
7) serverTlsCert (eg:- -----BEGIN CERTIFICATE-----\nMIIDVjCCAv2gAwIBAgIUW7i8+HG+dub2xTx6Qe1Sx76ymZswCgYIKoZIzj0EAwIw\ngZ8xCzAJBgNVBAYTAklOMRYwFAYDVQQIEw1VdHRhciBQcmFkZXNoMS8wLQYDVQQH\nEyY3dGggRmxvb3IgRkMtMTkgU2VjLTE2QSBGaWxtQ2l0eSBOb2lkYTEaMBgGA1UE\nChMRUDJFIFBybyBQdnQuIEx0ZC4xEzARBgNVBAsTCkthbHB0YW50cmExFjAUBgNV\nBAMMDXAyZXByb19UTFNfQ0EwHhcNMjMwNjA4MDcwMjAwWhcNMjQwNjA3MDgxMzAw\nWjCBmDELMAkGA1UEBhMCSU4xFjAUBgNVBAgTDVV0dGFyIFByYWRlc2gxLzAtBgNV\nBAcTJjd0aCBGbG9vciBGQy0xOSBTZWMtMTZBIEZpbG1DaXR5IE5vaWRhMRowGAYD\nVQQKExFQMkUgUHJvIFB2dC4gTHRkLjEPMA0GA1UECxMGY2xpZW50MRMwEQYDVQQD\nEwpjbGllbnRhcHAxMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE358gbwS/kRPL\nLWEAIj4TC7rYauIJmxLOQeB+jOmA37ecJPDcv4cIrJq5qJ5PtzJ+y6XMWNBiUSw3\nAzsYEmnhzaOCARowggEWMA4GA1UdDwEB/wQEAwIDqDAdBgNVHSUEFjAUBggrBgEF\nBQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUROp71sqc8qQY\nmD6LFeJs7xDNAo8wHwYDVR0jBBgwFoAUZSZrc9Yfbwj1cR4AnwCWfOc+FLwwOAYD\nVR0RBDEwL4IJbG9jYWxob3N0ghRjbGllbnRhcHAxLnAyZXBsLmNvbYIAhwR/AAAB\nhwSd9WqoMF0GCCoDBAUGBwgBBFF7ImF0dHJzIjp7ImhmLkFmZmlsaWF0aW9uIjoi\nIiwiaGYuRW5yb2xsbWVudElEIjoiY2xpZW50YXBwMSIsImhmLlR5cGUiOiJjbGll\nbnQifX0wCgYIKoZIzj0EAwIDRwAwRAIgAknxO1MatL6IXLIInp0gjDTO1CjLawRu\niu3kWJFzeHICIB7kGDWDp95xuXRi7lJPOSNS3dPPHehpLqYjItZ6wtC6\n-----END CERTIFICATE----- )
8) serverTlsKey (eg:- -----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg2dTmNQYc2jAbhsHo\noQVAgNMAYyWXwxvccJPC5rdBiN+hRANCAATfnyBvBL+RE8stYQAiPhMLuthq4gmb\nEs5B4H6M6YDft5wk8Ny/hwismrmonk+3Mn7LpcxY0GJRLDcDOxgSaeHN\n-----END PRIVATE KEY-----)
9) tlsCert (eg:- -----BEGIN CERTIFICATE-----\nMIICnjCCAkSgAwIBAgIUDJf8QbWwq5fGohRz62pPsn8l940wCgYIKoZIzj0EAwIwgZ8xCzAJBgNVBAYTAklOMRYwFAYDVQQIEw1VdHRhciBQcmFkZXNoMS8wLQYDVQQHEyY3dGggRmxvb3IgRkMtMTkgU2VjLTE2QSBGaWxtQ2l0eSBOb2lkYTEaMBgGA1UEChMRUDJFIFBybyBQdnQuIEx0ZC4xEzARBgNVBAsTCkthbHB0YW50cmExFjAUBgNVBAMMDXAyZXByb19UTFNfQ0EwHhcNMjMwNjA4MDcwMjAwWhcNMzgwNjA0MDcwMjAwWjCBnzELMAkGA1UEBhMCSU4xFjAUBgNVBAgTDVV0dGFyIFByYWRlc2gxLzAtBgNVBAcTJjd0aCBGbG9vciBGQy0xOSBTZWMtMTZBIEZpbG1DaXR5IE5vaWRhMRowGAYDVQQKExFQMkUgUHJvIFB2dC4gTHRkLjETMBEGA1UECxMKS2FscHRhbnRyYTEWMBQGA1UEAwwNcDJlcHJvX1RMU19DQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABESPX7TPPMTwVcNFEx1Y8O/2idy/XKxDBGUdBSN/neOXJd8RY+ye8PZ7lTheba69hU9yTl3qAqrark8zugR1wXqjXDBaMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMB0GA1UdDgQWBBRlJmtz1h9vCPVxHgCfAJZ85z4UvDAVBgNVHREEDjAMhwR/AAABhwSd9WqoMAoGCCqGSM49BAMCA0gAMEUCIQCxXMzQ7/ynHfLARqMNheHIJ4sNV2g3fS6GOUKxlQmm6wIgHKRq4T03+CYwtwJViVuf0SfIKEN1biu2in1mGhxhuoQ=\n-----END CERTIFICATE----- )
10) transactionName (eg:- CreateNIU )
11) transactionType  (eg:- submit )
12) data  (eg:- [
        `{"id":"${id}","docType":"ASSET-MYIPR","name":"${names}","type":"Real Estate","desc":"Real 1111111","status":"COMPLETED","assetDigest":"${assetDigest}","uri":"12345678914","account":["${enrollmentId}"],"location":"Dubai","address": "Jabelali"}`,
      ])
