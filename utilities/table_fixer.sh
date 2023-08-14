#!/bin/bash

for file in $(find . -name "*.md")
do
  awk '
    BEGIN { inTable = 0 }
    /^\| \*\*Field\*\* \| \*\*Value\*\*/ {
      inTable = 1
    }
    /^\|/ {
      if (!inTable) {
        gsub("^\\| ", "")
      }
      print
      next
    }
    {
      if (inTable && !/^ *$/) {
        inTable = 0
      }
      print
    }
  ' $file > temp && mv temp $file
done

