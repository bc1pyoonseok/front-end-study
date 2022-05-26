export interface IMusic {
    artist: string
    sellCount: number
}

export const makeMusic: Function = (artist: string, sellCount: number = 10): IMusic => {
    return { artist, sellCount }
}

// destructured assign
export const isGreatArtist = ({ artist, sellCount }: IMusic): string => {
    return sellCount > 1000 ? `${artist} is great artist` : `hmm haha`
}

// key value
type KeyValueType = {
    [key: string]: string
}
export const makeTable = (key: string, value: string): KeyValueType => ({ [key]: value })
