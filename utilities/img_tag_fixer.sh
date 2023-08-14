#!/bin/bash

# Check if the file path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <file_path>"
  exit 1
fi

# Check if the file exists
if [ ! -f "$1" ]; then
  echo "File not found: $1"
  exit 1
fi

# Create a temporary file
temp_file=$(mktemp)

# Process the file line by line
while IFS= read -r line; do
  # Use sed to replace HTML img tags with Markdown image syntax
  # Assumes the format <img src="path/to/image.png"/>
  # Removes leading spaces before the Markdown image
  echo "$line" | sed -E 's!^[[:space:]]*<img src="([^"]+)"[^>]*>!\![relative](\1)!g' >> "$temp_file"
done < "$1"

# Move the temporary file to the original file
mv "$temp_file" "$1"

echo "File $1 has been updated."
