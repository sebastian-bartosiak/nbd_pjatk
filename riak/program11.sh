#!/bin/bash
clear
document="http://172.17.0.2:8098/buckets/s14415/keys/TestKey2"
echo "Program for interacting with RIAK"

echo "Adding record"
$(curl -XPUT -H "Content-Type:application/json" -d '{"firstName": "Piotr", "lastName": "Piotrowski", "balance": 1000, "weight": 81}' -s "$document")

echo "Reading record"
content="$(curl -s "$document")"
echo $content

echo "Amending record"
$(curl -XPUT -H "Content-Type:application/json" -d '{"firstName": "Piotr", "lastName": "Piotrowski", "balance": 5555, "weight": 33}' -s "$document")

echo "Reading record"
content="$(curl -s "$document")"
echo $content

echo "Removing record"
$(curl -XDELETE -s "$document")

echo "Trying read record"
content="$(curl -s "$document")"
echo $content