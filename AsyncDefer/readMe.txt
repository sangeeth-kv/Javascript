Async and Defer
--------------

When the browser loads an HTML page, it goes top → bottom:
    1)Parses the HTML.
    2)When it hits a <script> tag, it stops parsing HTML
    3)Downloads and executes the script.
    4)Then continues parsing HTML after that.
if your JS file is large or slow, it blocks the page from showing quickly, That’s called render-blocking.

when in normal script:
    <script src="main.js"></script>
    1)HTML parsing stops when this tag is found.
    2)Script is downloaded immediately.
    3)Script is executed immediately once downloaded.
    4)Then HTML parsing resumes.

    flow: HTML parsing → STOP → download script → execute script → continue HTML parsing

when we are using 'async' keyword in script:
    <script src="analytics.js" async></script>
    1)Script is downloaded in parallel (non-blocking).
    2)While it downloads, HTML parsing continues.
    3)Once the script finishes downloading, HTML parsing temporarily pauses, and the script executes immediately.
    4)After execution, HTML parsing resumes.
        If you have multiple async scripts, whichever finishes downloading first executes first.

    flow: 
        HTML parsing + script downloading (parallel)
                     ↓
        When download finishes → STOP parsing → execute script → continue parsing


when we are using 'defer' keyword in script:
    <script src="main.js" defer></script>
    1)Script is downloaded in parallel (non-blocking).
    2)HTML parsing continues without stopping.
    3)After the HTML is fully parsed,
    3)the script executes in order, before the DOMContentLoaded event.

    flow:
        HTML parsing + script downloading (parallel)
                     ↓
            HTML finished parsing
                     ↓
            Execute scripts (in order)


