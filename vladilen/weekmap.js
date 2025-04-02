let obj = { name: "test" };

const map = new Map();
map.set(obj, "value");

const weakMap = new WeakMap();
weakMap.set(obj, "value");

obj = null;  // Удаляем ссылку на объект

// `map` всё ещё хранит объект-ключ, даже если он больше не используется
console.log(map);

// `weakMap` автоматически удалит объект-ключ при следующем запуске сборщика мусора
console.log(weakMap);