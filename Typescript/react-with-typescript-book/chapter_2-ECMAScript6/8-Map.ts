let data = new Map()

data = new Map([["apple", "red"], ['melon', 'green']])
data.set("cherry", "red")
console.log(
    data,
    data.size,
    data.has('cherry'),
    data.get('melon')
)

console.log(
    data.get('melon1'), // undefined when unable to access
    data.delete("edwf") // false is returned when unable to delete
)

console.log(".keys()")
for (let i of data.keys()) {
    console.log(i)
}
console.log(".entries()")
for (let [key, value] of data.entries()) {
    console.log(key, value)
}

console.log("not working because Map has a method entries and keys")
// this is not gonna work
for (let i of Object.keys(data)) {
    console.log(i)
}
for (let i of Object.entries(data)) {
    console.log(i)
}