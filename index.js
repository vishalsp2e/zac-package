exports.greet = function (name) {
  console.log("Hello your name is , " + name + "!");
};

exports.connect = async () => {
  const messageObject = {
    type: "OPEN_WALLET",
  };
  console.log("from frontend");
  await window.postMessage(messageObject, "*");
};

exports.sendData = async (e ,mspId,peerEndpoint,gatewayPeer,chainCodeName,channelName,serverTlsCert,serverTlsKey,tlsCert,transactionName,transactionType, data ) => {
  if (e) {
    e.preventDefault(); 
  }
  const message = {
    type: "OPEN_WALLET",
  };
  console.log("from frontend");
  await window.postMessage(message, "*");
  try {
    // const mspId = "p2epro";
    // const peerEndpoint = "157.245.97.228:7051";
    // const gatewayPeer = "peer1.p2epl.com";
    // const chainCodeName = "myipr";
    // const channelName = "kalptantra";
    // const serverTlsCert ="-----BEGIN CERTIFICATE-----\nMIIDVjCCAv2gAwIBAgIUW7i8+HG+dub2xTx6Qe1Sx76ymZswCgYIKoZIzj0EAwIw\ngZ8xCzAJBgNVBAYTAklOMRYwFAYDVQQIEw1VdHRhciBQcmFkZXNoMS8wLQYDVQQH\nEyY3dGggRmxvb3IgRkMtMTkgU2VjLTE2QSBGaWxtQ2l0eSBOb2lkYTEaMBgGA1UE\nChMRUDJFIFBybyBQdnQuIEx0ZC4xEzARBgNVBAsTCkthbHB0YW50cmExFjAUBgNV\nBAMMDXAyZXByb19UTFNfQ0EwHhcNMjMwNjA4MDcwMjAwWhcNMjQwNjA3MDgxMzAw\nWjCBmDELMAkGA1UEBhMCSU4xFjAUBgNVBAgTDVV0dGFyIFByYWRlc2gxLzAtBgNV\nBAcTJjd0aCBGbG9vciBGQy0xOSBTZWMtMTZBIEZpbG1DaXR5IE5vaWRhMRowGAYD\nVQQKExFQMkUgUHJvIFB2dC4gTHRkLjEPMA0GA1UECxMGY2xpZW50MRMwEQYDVQQD\nEwpjbGllbnRhcHAxMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE358gbwS/kRPL\nLWEAIj4TC7rYauIJmxLOQeB+jOmA37ecJPDcv4cIrJq5qJ5PtzJ+y6XMWNBiUSw3\nAzsYEmnhzaOCARowggEWMA4GA1UdDwEB/wQEAwIDqDAdBgNVHSUEFjAUBggrBgEF\nBQcDAQYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUROp71sqc8qQY\nmD6LFeJs7xDNAo8wHwYDVR0jBBgwFoAUZSZrc9Yfbwj1cR4AnwCWfOc+FLwwOAYD\nVR0RBDEwL4IJbG9jYWxob3N0ghRjbGllbnRhcHAxLnAyZXBsLmNvbYIAhwR/AAAB\nhwSd9WqoMF0GCCoDBAUGBwgBBFF7ImF0dHJzIjp7ImhmLkFmZmlsaWF0aW9uIjoi\nIiwiaGYuRW5yb2xsbWVudElEIjoiY2xpZW50YXBwMSIsImhmLlR5cGUiOiJjbGll\nbnQifX0wCgYIKoZIzj0EAwIDRwAwRAIgAknxO1MatL6IXLIInp0gjDTO1CjLawRu\niu3kWJFzeHICIB7kGDWDp95xuXRi7lJPOSNS3dPPHehpLqYjItZ6wtC6\n-----END CERTIFICATE-----";
    // const serverTlsKey ="-----BEGIN PRIVATE KEY-----\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg2dTmNQYc2jAbhsHo\noQVAgNMAYyWXwxvccJPC5rdBiN+hRANCAATfnyBvBL+RE8stYQAiPhMLuthq4gmb\nEs5B4H6M6YDft5wk8Ny/hwismrmonk+3Mn7LpcxY0GJRLDcDOxgSaeHN\n-----END PRIVATE KEY-----";
    // const tlsCert =
    //   "-----BEGIN CERTIFICATE-----\nMIICnjCCAkSgAwIBAgIUDJf8QbWwq5fGohRz62pPsn8l940wCgYIKoZIzj0EAwIwgZ8xCzAJBgNVBAYTAklOMRYwFAYDVQQIEw1VdHRhciBQcmFkZXNoMS8wLQYDVQQHEyY3dGggRmxvb3IgRkMtMTkgU2VjLTE2QSBGaWxtQ2l0eSBOb2lkYTEaMBgGA1UEChMRUDJFIFBybyBQdnQuIEx0ZC4xEzARBgNVBAsTCkthbHB0YW50cmExFjAUBgNVBAMMDXAyZXByb19UTFNfQ0EwHhcNMjMwNjA4MDcwMjAwWhcNMzgwNjA0MDcwMjAwWjCBnzELMAkGA1UEBhMCSU4xFjAUBgNVBAgTDVV0dGFyIFByYWRlc2gxLzAtBgNVBAcTJjd0aCBGbG9vciBGQy0xOSBTZWMtMTZBIEZpbG1DaXR5IE5vaWRhMRowGAYDVQQKExFQMkUgUHJvIFB2dC4gTHRkLjETMBEGA1UECxMKS2FscHRhbnRyYTEWMBQGA1UEAwwNcDJlcHJvX1RMU19DQTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABESPX7TPPMTwVcNFEx1Y8O/2idy/XKxDBGUdBSN/neOXJd8RY+ye8PZ7lTheba69hU9yTl3qAqrark8zugR1wXqjXDBaMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEBMB0GA1UdDgQWBBRlJmtz1h9vCPVxHgCfAJZ85z4UvDAVBgNVHREEDjAMhwR/AAABhwSd9WqoMAoGCCqGSM49BAMCA0gAMEUCIQCxXMzQ7/ynHfLARqMNheHIJ4sNV2g3fS6GOUKxlQmm6wIgHKRq4T03+CYwtwJViVuf0SfIKEN1biu2in1mGhxhuoQ=\n-----END CERTIFICATE-----";
    // const transactionName = "CreateNIU";
    // const transactionType =  "submit" ;
    const newFormData = {
      type: "FORM_DATA",
      data:data,
      // data: [
      //   `{"id":"${id}","docType":"ASSET-MYIPR","name":"${names}","type":"Real Estate","desc":"Real 1111111","status":"COMPLETED","assetDigest":"${assetDigest}","uri":"12345678914","account":["${enrollmentId}"],"location":"Dubai","address": "Jabelali"}`,
      // ],
      mspId,
      peerEndpoint,
      gatewayPeer,
      chainCodeName,
      channelName,
      serverTlsCert,
      serverTlsKey,
      tlsCert ,
      transactionName,
      transactionType
    };

    //console.log(`Sending  data from to content script for ID: ${id}`, formData);
    await window.postMessage(newFormData, "*");
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
