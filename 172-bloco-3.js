function configPost(method,body) {
      return {
        "method": method,
      "headers": { "Content-Type": "application/json"},
            "body": JSON.stringify(body)
    };
  }
