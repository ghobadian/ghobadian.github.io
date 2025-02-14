---
title: "12 Factor App Simplified"
date: 2025-02-14
description: "Helping you understand 12 Factor App"
tags: ["cloud", "micro-services", "best-practices", "technology"]
type: post
showTableOfContents: true
---
# Introduction
Nowadays around [98% of companies](https://aag-it.com/the-latest-cloud-computing-statistics) are deploying there apps to cloud. But are all these apps cloud native? 

In this blog I am going to introduce to you [the 12 factor app](https://12factor.net/). It suggests 12 best practices that help developers design their apps to be more cloud native. 

# What is a Cloud Native App?
![cloud native](/images/12_factor_app/cloud_native.jpg)
In simple terms, an app that follows microservices design pattern and is delivered via CI/CD is Cloud Native. 
Key characteristics of these types of apps are:
- scalability (ability to scale out into multiple servers)
- resiliency (ability to recover after failure)
- manageability (ability to add or remove nodes/containers without much effort)

# 12 Factor App

## Codebase
![code base](/images/12_factor_app/codebase.webp)
Building each code repository must result in only one app. But don't forget that multiple deployments from the same code base (such as Development, Stage, Production) don't violate this principle because all those deployments are from the same built app.

### Rationale
- If you have multiple apps in a single code base, you are breaking [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). This code base is complex and hard to change. You as a developer should break down the codebase into multiple repositories.

### Violation Examples
- multiple apps in a single code base
- separate repositories for dev, stage, prod
	

## Dependencies
![dependencies](/images/12_factor_app/dependencies.webp)
Use a dependency manager such as maven (pom.xml) or gradle (build.gradle)

Don't forget that all dependencies must be declared <u>explicitly</u>. For example, some systems may have 'curl' pre-installed and some don't. If you don't explicitly specify 'curl' as a dependency, your app will crash on systems that don't have 'curl' pre-installed.

Also all dependencies must be isolated the dependencies. For example in python, you can use virtual environment to isolate your project dependencies from system dependencies. In this way, you can prevent implicit use of system dependencies and therefore prevent [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell). 

It is worth mentioning that [containerization](https://en.wikipedia.org/wiki/Containerization_(computing)) also acts as a dependency isolation strategy.

### Rationale
- Prevents [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell) AKA "It runs on my machine"
- Faster onboarding of new developers. New Developers don't need to download every single dependency. They just have to build the program with help of dependency manager



### Violation Examples
- Not using a dependency manager (maven, gradle, pip) and installing dependencies on your machine. 
- [Using latest tag](https://medium.com/@robertdiebels/are-you-using-the-latest-tag-well-stop-it-6d6390f9623a) in docker or maven


## Config
![configuration](/images/12_factor_app/configuration.webp)
Can you make your project opensource at the moment without exposing any configs or credentials?

Can another developer that is cloning your source code, is able to run it by only changing configs and no change to code?

If your answer to above questions is no, then your app is violating the strict separation of config from code.

On the other hand, you can use environment variables (.env file) for storing configs. each deployment can have its own configs without chaning the actual code.

### Rationale
- Configs are bound to change in all deployments. Development configs are different from Production configs. If they are hard coded in the code, it makes the configs hard to change since you can't change code at production.
- Some configs bring security issues if they are exposed in the code base such as user credentials or api keys.

### Violation Examples
- Hardcoding configs: For example, database credentials are a part of the code.
- Using application.properties (Spring Boot) in production

## Backing services
![backing services](/images/12_factor_app/backing_services.webp)
A backing service can be:
- database
- queue
- cache
- SMTP

Treat backing services as attached resources. 
There should be no difference between local and remote backing services and be changed with ease


### Rationale
- Easy change of backing servies: you can switch between an oracle database and a mysql database with ease
- [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns): Unlike monolithic applications, in microservices architecture, you are separating backing services from the actual business logic and handle those backing services indivitually.

### Violation Examples
- Monolithic apps: all backing services exist in the same environment

## Build, release, run
![build release run](/images/12_factor_app/build_release_run.webp)

Strictly separate build, release and run stages

### Rationale
- [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and more accurate debugging: if an error occurs in build stage, you understand there's something wrong in building. If it happens in running stage, you understand there is a problem in running the compiled app.

### Violation Examples
- Manual configuration in run stage: release and run tightly coupled
- Hardcoding configurations in code: build and release tightly coupled
- Changing code while app is running: build and run tightly coupled

## Processes
![processes](/images/12_factor_app/processes.webp)

Execute the service apps as one stateless processes. Only backing services can be stateful. State can be:
- User credentials
- database entities
- transactions
- products informations
	
### Rationale
- Cloud services are immutable. It means that they lose their state and local data after reboot, crash or shutdown. So it is a good idea to use backing services for storing application states and data.

### Violation Examples
- Storing persistant data locally
- Storing user cookies in memory

## Port binding
![port binding](/images/12_factor_app/port_binding.webp)
An app must expose its port via HTTP and don't rely on an external webserver for exposing ports.
Don't forget that a webserver is not a backing service and must not be a used separately from the app. A webserver is actually a dependency for the app. An app can function without a backing service but not without a dependency.

### Rationale
- Portability: in microservices architecture, an app must expose a port so that other services can communicate with the app via that port.

### Violation Examples
- Relying on external services like web servers (i.e. tomcat) to operate

## Concurrency
![concurrency](/images/12_factor_app/concurrency.webp)
Scale out instead of scaling up. Scaling up means adding more computation resources such as CPU, RAM or Disk space. Scaling out means using more than one servers instead of just one big server.
Don't run multiple tasks in the same process. one task may become a bottleneck for another task. scale them out and communication mechanisms such as queues
separation of concerns

### Rationale
Scalability: Scaling up approach after a while, reaches a performance plateau. On the other hand, Due to cloud infrastructures thesedays scaling out has become easier.

### Violation Examples
- Using a monolithic app that resides only on 1 big server


## Disposability
![disposability](/images/12_factor_app/disposability.webp)
Your app must handle <u>fast startup</u> and <u>graceful shutdown</u>

### Rationale
Resilience: if your app is resilient, if it fails, the effect on the company revenue is minimal since no data is lost or gets corrupted. The failed app also becomes fully alive after a short period of time reducing the product downtime. Another aspect of resiliency is the ability to switch between health and unhealthy apps with ease with help of kubernetes orchastration.

### Violation Examples
- slow startup results in longer downtime
- fast shutdown results in discarding unfinished tasks which creates corrupted tasks
- fast shutdown also results in not removing locks which leads to deadlock


## Dev/prod parity
![dev prod parity](/images/12_factor_app/dev_prod_parity.webp)
Keep development, staging, and production as similar as possible

### Rationale
Slower development: Errors might occur in production that weren't seen in development. This causes another round trip back to development and then to production

### Violation Examples
- Having large tools gaps between development and production: using different database, queue or cache for dev, stage, prod
- App crashes in production

## Logs
![logs](/images/12_factor_app/logs.webp)
Treat logs as event streams

Write logs to stdout so that log aggregators (i.e. Log Stash) can collect that log

Always remember that you should not get sad if your service crashes and you lose your data since you should have no persistant data on your service. See [Processes](https://msghobadian.ir/posts/12_factor_app/#processes)

### Rationale
- If the disk fills up because of too many logs getting stored, the app may fail.
- Can't centralize logs in multi-instance apps

### Violation Examples
- writing logs to files

## Admin Processes
![admin processes](/images/12_factor_app/admin_processes.webp)
Admin tasks/processes are tasks that are done only once before the actual app runs. For example:
- Applying database migrations
- checking app health
- adding data to database

Admin tasks must not become a part of the actual app. Admin tasks must get executed only if they are needed.

### Rationale
- Single point of failure: if admin task fails, the whole app might fails
- [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle): admin tasks are not a part of business logic
- admin tasks may not be required to run before or with the app all the time

### Violation Examples
- admin task being a part of appication runtime


# References
[The Twelve-Factor App](https://12factor.net/)
[What is Cloud Native?](https://aws.amazon.com/what-is/cloud-native/)
[Cloud-native computing](https://en.wikipedia.org/wiki/Cloud-native_computing)
[The Latest Cloud Computing Statistics](https://aag-it.com/the-latest-cloud-computing-statistics)
[The Twelve Factor App Methodology: A Beginner's Guide](https://dev.to/cadienvan/the-twelve-factor-app-methodology-a-beginners-guide-12m5)
[12 Factor App Revisited](https://architecturenotes.co/p/12-factor-app-revisited)
