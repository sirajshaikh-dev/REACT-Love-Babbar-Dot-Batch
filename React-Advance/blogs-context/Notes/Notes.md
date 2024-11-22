
- ?? (Nullish Coalescing Operator): if the left-hand side is null or undefined, the right-hand side is returned.
```js 
const url = new URL("https://example.com/?page=5");
const searchParams = url.searchParams;

const page = searchParams.get("page") ?? 1;
console.log(page); // Output: "5"

const url = new URL("https://example.com/");
console.log(page); // Output: 1

```

- useLocation() hook
```js
location.pathname = "/tags/javascript";
if (location.pathname.includes("tags")) {
  const tag = location.pathname.split("/").at(-1);
  console.log(tag); // Output: "javascript"
}
```
1. location.pathname:

    This is a string representing the path part of the URL (excluding the protocol, host, and query string).
    Example: For https://example.com/tags/javascript, location.pathname will return /tags/javascript.

2. includes("tags"):

    Checks if the path contains the word "tags".
    Example: /tags/javascript includes "tags", so the condition evaluates to true.

3. location.pathname.split("/"):

    Splits the pathname string into an array of substrings, using / as the delimiter.
    Example: /tags/javascript becomes ["", "tags", "javascript"].

4. .at(-1):

    Retrieves the last element of the array.
    In the example, ["", "tags", "javascript"].at(-1) returns "javascript".
    const tag =:

    Assigns the last part of the path (the tag) to the variable tag.

- .at()  allows you to access elements of an array using positive or negative indices:
```js
const arr = ["a", "b", "c", "d"];
console.log(arr.at(-1)); // Output: "d" (last element)
console.log(arr.at(-2)); // Output: "c" (second last element)
```