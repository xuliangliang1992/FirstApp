export function login(account, password) {
    console.log('​login -> ',account, password);
    return fetch("http://splab.haocheedai.com:8800/newuc/login", {
            method: "POST",
            headers: {
                AppName: "AJDL-PAD"
            },
            body: JSON.stringify({
                account: account,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("​Login -> data", data);
        })
        .catch(err => {
            console.log("​Login -> err", err);
        });
}