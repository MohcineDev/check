const escapeStr = "`\\/\"'"
const arr = [4, '2']
const obj = {
    str: "something",
    num: 1,
    bool: false,
    undef: undefined,

}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "ds",
        num: 2,
        bool: false
    }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
