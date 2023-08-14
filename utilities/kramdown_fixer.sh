#!/bin/bash

for file in $(find . -type f -name "*.md")
do
  awk '
    BEGIN { inBlock = 0 }
    /^\{: .*\}/ {
      gsub("{: .", ":::")
      gsub("}", "")
      print
      inBlock = 1
      next
    }
    /^>/ {
      gsub("^> ", "")
      print
      next
    }
    {
      if (inBlock) {
        print ":::"
        inBlock = 0
      }
      print
    }
    END {
      if (inBlock) {
        print ":::"
      }
    }
  ' "$file" > temp && mv temp "$file"
done

