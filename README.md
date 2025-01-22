# MongoDB $inc Operator Bug
This example demonstrates an uncommon error related to the MongoDB `$inc` operator. The error arises from the assumption that `$inc` will throw an error when applied to a non-existent field. It instead creates the field with the provided value.

## Bug Report
The original code attempts to increment a field that does not exist. This creates a new field instead of throwing an error, potentially leading to unexpected data.

## Solution
The solution involves checking the field's existence before using `$inc` or using a different operation that handles the field's absence gracefully.