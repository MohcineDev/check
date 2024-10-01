function blockChain(data, prev) {
    let count = 1
    if (!prev) {
        prev = { index: 0, hash: '0' }
    }

    return {
        index: count,
        data: data,
        prev: prev,
        hash: hashCode(count + prev.hash + JSON.stringify(data)),
        chain: function (data) {
            return {

                index: this.index++,
                data: data,
                prev: {
                    index: this.index--,
                    hash:hashCode(index + prev.hash + JSON.stringify(data)),
                    
                }

            }

        }
    }
}

