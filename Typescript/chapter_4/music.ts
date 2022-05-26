export interface IMusic {
    artist: string
    sellCount: number
}

export const makeMusic: Function = (artist: string, sellCount: number = 10): IMusic => {
    return { artist, sellCount }
}

console.log(makeMusic('yoonseok', 10000000000000000000000))

// destructured assign
export const isGreatArtist = ({ artist, sellCount }: IMusic): string => {
    return sellCount > 1000 ? `${artist} is great artist` : `hmm haha`
}
console.log(isGreatArtist(makeMusic('yoonseok', 10000000000000000000000)))

// key value
type KeyValueType = {
    [key: string]: string
}
const makeTable = (key: string, value: string): KeyValueType => ({ [key]: value })
let a = makeTable('haha', 'wow')
console.log(a)
