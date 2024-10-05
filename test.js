const foo = Object.create({});

foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
    console.log(12); // true - works irrespective of how the object is created.
}