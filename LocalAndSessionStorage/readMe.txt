What Are localStorage and sessionStorage?
    Both are part of the Web Storage API, which lets you store key–value pairs (strings) in a user’s browser.

    i)Client-side (i.e., stored in the browser, not on the server)
    ii)Synchronous (read/write happens instantly — not async like IndexedDB)
    iii)Persistent per origin (scoped by domain and protocol)

localStorage:=>
            Life time of the data stored in localStorage Until manually cleared.
            Shared across all tabs/windows of same origin
            ~5–10 MB (depends on browser) of Storage limit
            Data will persistence after browser restart.
            we can use this for: JWT token, user settings, theme preference

sessionStorage:=>
            Life time of the data stored in sessionStorage Until tab/window is closed
            it shared across Unique per tab/window (If you open the same page in another tab, that tab’s sessionStorage is independent.)
            Storage limit is ~5 MB
            cant accessible from other tabs
            Data will not persistence after browser restart.
            we can use this for: Step data in a form, temporary cart

How They Work Internally?
        Both localStorage and sessionStorage store data in the browser’s storage area,
    managed by the same-origin policy (protocol + host + port must match).
    That means:
        https://example.com and http://example.com   // do not share storage.
        https://shop.example.com and https://blog.example.com   //do not share storage.
