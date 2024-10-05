function toNestedArray(source, id = null, options = 'options', link = 'parentId') {
    if (!Array.isArray(source))
        throw new TypeError('Parameter #1 is not a Array');

    return source.filter(it => it[link] === id)
                 .map(it => ({ ...it, [options]: toNestedArray(source, it.id) }));
}