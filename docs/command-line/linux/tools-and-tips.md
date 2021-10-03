# Tools and Tips - Linux

This page describes collection of small tools and tips related to Linux command line and similar technologies.

## Count the number of words in the files inside a directory

Find files ending with extension `.md` in or below the directory `docs/` and count the words.

```
find docs -type f -name "*.md" | xargs wc -w
```

Refer to [Linux man tools and tips page](docs\command-line\linux\tools-and-tips.md) to understand the details about the command or checkout the [Linux find man page](https://man7.org/linux/man-pages/man1/find.1.html)

