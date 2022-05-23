const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }
    s_array = [...s]
    t_array = [...t]
    s_array.sort()
    t_array.sort()
    return JSON.stringify(s_array) === JSON.stringify(t_array)
};
