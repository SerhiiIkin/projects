class StickersApi {
    static URL = "https://62057f8a161670001741bbf0.mockapi.io/stickers/";

    static stickers() {
        return fetch(this.URL).then(this.checkRes);
    }

    static createStick(stick) {
        return fetch(this.URL, {
            method: "POST",
            body: JSON.stringify(stick),
            headers: {
                "Content-type": "application/json",
            },
        }).then(this.checkRes);
    }

    static updateStick(id, stick) {
        return fetch(this.URL + id, {
            method: "PUT",
            body: JSON.stringify(stick),
            headers: {
                "Content-type": "application/json",
            },
        }).then(this.checkRes);
    }

    static deleteStick(id) {
        return fetch(this.URL + id, {
            method: "DELETE",
        }).then(this.checkRes);
    }

    static checkRes(res) {
        return res.ok ? res.json() : new Error(`Can't get elements `);
    }
}

export default StickersApi;
