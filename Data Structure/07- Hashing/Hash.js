module.exports = class Hash {
    hash32(str) {
        const OffSetBasis = 2166136261;
        const FNVPrime = 16777619;

        let hash = OffSetBasis >>> 0;
        for (let i = 0; i < str.length; i++) {
            hash = hash ^ str.charCodeAt(i);
            hash = Math.imul(hash, FNVPrime);
        }

        hash >>>= 0;

        console.log(str, hash, hash.toString(16));
        return hash;
    }

    hash64(str) {
        const OffSetBasis = 14695981039346656037n;
        const FNVPrime = 1099511628211n;

        let hash = OffSetBasis;
        for (let i = 0; i < str.length; i++) {
            hash = hash ^ BigInt(str.charCodeAt(i));
            hash = hash * FNVPrime;
            hash = hash & 0xFFFFFFFFFFFFFFFFn;
        }

        console.log(str, hash, hash.toString(16));
        return hash;
    }
}
