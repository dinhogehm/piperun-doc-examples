fetch(endpointHash, configPost("POST", dataToSend))
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
