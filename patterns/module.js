// инкапсуляция логики с помощью IIEF

const myModule = (function () {
    const name = 'max'
    function say() {
        console.log(name)
    }

    return {
        sayHy: say
    }
})()

myModule.sayHy();