class ContactApi {
    static URL = "https://62057f8a161670001741bbf0.mockapi.io/contact/";

    static contactList() {
        return fetch(this.URL).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get contact list`);
        });
    }

    static oneContact(id) {
        return fetch(this.URL + id).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't get contact with id : ${id}`);
        });
    }

    static createContact(contact) {
        return fetch(this.URL, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't create contact`);
        });
    }

    static updateContact(id, contact) {
        return fetch(this.URL + id, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't update contact`);
        });
    }

    static deleteContact(id) {
        return fetch(this.URL + id, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't delete contact`);
        });
    }
}

export default ContactApi;
