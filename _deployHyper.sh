#!/bin/bash

docker build . -t tatecarson/dice-game
docker push tatecarson/dice-game
hyper rm -f dice-game
hyper rmi tatecarson/dice-game
hyper pull tatecarson/dice-game
hyper run -d --name dice-game -p 8000:8000 tatecarson/dice-game
hyper fip attach 209.177.91.57 dice-game