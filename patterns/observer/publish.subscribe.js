class PublishSubscribe {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
        console.log(this.subscribers);
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

publish.subscribe('by', () => console.log('пока без даты'))
publish.publish('hello', 123)
publish.publish('by')
