class PublishSubscribe {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }

        this.subscribers[event].push(callback);
    }

    publish(event, data) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach((callback) => {
                callback(data);
            });
        }
    }
}

const publish = new PublishSubscribe()

publish.subscribe('hello', (data) => {
    console.log(' я подписался на hello ' + data)
})

publish.publish('hello', 123)
