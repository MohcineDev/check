function getAcceleration(obj) {
    let res = "impossible"

    if (obj.m != undefined && obj.f !== undefined) res = obj.f / obj.m

    if (obj.Δt !== undefined && obj.Δv !== undefined) res = obj.Δv / obj.Δt

    if (obj.t !== undefined && obj.d !== undefined) res = 2 * obj.d / (obj.t * obj.t)

    return res
}