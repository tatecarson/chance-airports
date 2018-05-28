# Deploy a dockerized distributed smartphone speaker composition using hyper.sh

In this workshop we will deploy a networked dice game to the internet using hyper.sh.

## Setup

Here is the [start code](https://github.com/tatecarson/chance-airports/archive/nime-workshop.zip) we will be using for the demo. If you get lost feel free to get the finished version [here](https://github.com/tatecarson/chance-airports/tree/master).

Before we start to dockerize this app we first need to setup a few things.

* Download and install [Docker Community Edition](https://docs.docker.com/install/) for your system. This allows you to create local Docker containers and also to push them to [DockerHub](https://docs.docker.com/docker-hub/), a cloud based registry service for Docker.
* Create a Docker ID. This gives you access to DockerHub, which we will use to deploy our app.
* After Docker CE is installed sign in to Docker Cloud on your local system to allow for pushing repositories. On a Mac sign in can be found by clicking on the Docker icon in the menu bar.

## Dockerize it

Before we turn this piece into a docker container lets first go through the steps one would take to run locally.
install node, rhizome,

* dockerfile - explain each line
* show building and running locally
* show pushing to dockerhub
* hyper signup and general setup
* go through general hyper commands
  * rm, rmi, pull, run, fip attach, stop
