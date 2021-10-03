# Tools and Tips - Linux - Command Line

This page describes collection of small tools and tips related to Linux command line and similar technologies.

## Count the number of words in the files inside a directory

Find files ending with extension `.md` in or below the directory `docs/` and count the words.

```
find docs -type f -name "*.md" | xargs wc -w
```

Using logical OR (-o)

```
find docs -type f -name "*.md" -o -name "*.txt" | xargs wc -w
```

Refer to [Linux man tools and tips page](../docs/command-line/linux/tools-and-tips.md) to understand the details about the command or checkout the [Linux find man page](https://man7.org/linux/man-pages/man1/find.1.html)

## `find -print0 | xargs -0` approach

Find files named **core** in or below the directory **/tmp** and delete them. Note that this will work incorrectly if there are any filenames containing newlines, single or double quotes, or spaces.

```
find /tmp -name core -type f -print0 | xargs -0 /bin/rm -f
```

The **-name** test comes before the **-type** test in order to avoid having to call [stat(2)](https://man.cx/stat(2)) on every file.