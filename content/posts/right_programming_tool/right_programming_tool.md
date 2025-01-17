---
title: "How to Choose The Right Programming Tool?"
date: 2025-01-17
description: "How to build your own tool set as a developer"
tags: ["tool", "programming", "technology", "web", "app"]
type: post
showTableOfContents: true
---
# Intro
If you aren't familiar with the [Einstellung Effect](https://en.wikipedia.org/wiki/Einstellung_effect) or [The Law of the Instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument), they essentially claim that we only try to solve a problem based on what we already know (past experience).
![img.png](/images/img.png)
When I first started using Java, I felt that I discovered the panacea for all my projects. I needed a small script to reserve a hotel, so I used **Java**. I needed to build an enterprise-level online e-commerce application, so I used **Java** again. I even trained a machine learning model with **Java**—although I could have done it faster and easier with another tool.

In this blog post, I want to teach you how to build your own **tool set** as a developer.
# Real World Tools vs Programming Tools
Before talking about the tools, let's clarify that the term "tool". Real world tools like a hammer are different from programming tools.

|                | Real World Tools                                                                                       | Programming Tools                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------ |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Freedom of use | Real world tools offer smaller freedom of use<br>Example: you can't use a screw driver to pound a nail | programming tools offer more freedom which makes choosing the right tool more difficult<br>Take Javascript for instance: ![js meme](/images/js_meme.png)                                                                                                                                                                                                                                |
| Time to Learn  | Learning how to use a screw or hammer is not that hard                                                 | Learning a new programming tool takes more time. I am not talking about learning basic things such as syntax or a simple `for` loop. I am talking about what makes the tool unique from other tools. For example when you know python and want to learn C, one of the concepts that you need to learn is pointers. I personally spent 2 whole weeks trying to learn what a pointer was. |
# Domains
Here I have chosen a set of tools for each tech domain:
<img src="/images/decision_tree.png" style="width: 700px; height: auto;">
## Web Development (Front-end)
**Common Choices**: JavaScript, Html, CSS
**Why These?**
- **Browsers' Support**: JavaScript is the only language every web browser can run natively.
- **Community Support**: Libraries like React, Angular, Vue, plus tooling (Webpack, Babel, etc.) give you everything you need to create complex user interfaces.
- **TypeScript Enhancements**: TypeScript adds static typing, improving maintainability, and reducing runtime errors.

## Web Development (Back-end)
**Common Choices**: Node.js (JavaScript/TypeScript), Python, Java, PHP, Go, .NET (C#)
**Why These?**
- **Node.js (JS/TS)**:
    - **Seamless Front-End/Back-End**: Sharing code (and dev skill set) between client and server can be efficient.
    - **Event-Driven Model**: Excellent for I/O-heavy applications (e.g., real-time apps, chat servers).
- **Python**:
    - **Easy to Learn, Rich Libraries**: Great for rapid prototyping, with frameworks like Django or Flask.
    - **Vibrant Ecosystem**: Particularly strong if your back-end needs tie into data science tasks.
- **Java**:
    - **Enterprise Support**: Spring Boot and Java EE are widely used in large companies.
    - **JVM Performance**: High throughput, robust concurrency, proven track record.
5. **PHP (Laravel, Symfony)**:
    - **Legacy & Shared Hosting**: PHP remains ubiquitous, especially for smaller sites, WordPress, etc. If you want to build a small e-commerce or blogging site without over-engineering your product, WordPress is there for you.
    - **Easy Deployment**: Most low-cost hosting supports PHP out of the box.
6. **Go**:
    - **Simplicity & Concurrency**: Goroutines are lightweight and excellent for microservices.
    - **High Performance**: Compiled, but with a simpler syntax than C++/Java. So you get faster development like python without sacrificing performance.
7. **.NET (C#)**:
    - **Windows & Cross-Platform**: .NET Core runs on Linux, Mac, Windows.
    - **Enterprise Backing**: Rich tooling from Microsoft, big enterprise adoption.
## Mobile Development
### Native iOS
**Common Language**: **Swift** (with some Objective-C legacy)
**Why Swift?**
- **Apple Official**: It’s the primary language recommended by Apple for new iOS apps.
- **Modern Syntax & Safety**: Swift includes memory safety features and is generally more concise than Objective-C.
- **Smooth Integration**: Works seamlessly with Xcode, SwiftUI, and Apple frameworks.
### Native Android
**Common Language**: **Kotlin** (with some Java legacy)
**Why Kotlin?**
- **Google’s First-Class Language**: Officially recommended for modern Android development.
- **Safer & More Concise**: Null-safety, data classes, coroutines for async operations.
- **Interoperability**: Kotlin can coexist with Java in the same codebase.
## Data Science
**Common Choices**: **Python**, **R**
**Why Python & R?**
- **Rich Libraries**: Python’s NumPy, Pandas, Matplotlib, R’s tidyverse (dplyr, ggplot2).
- **Large Community**: Tons of tutorials, Kaggle competitions, and package support.
- **Faster Prototyping**: Data scientists often prefer quick iteration and interactive notebooks (e.g., Jupyter) for quickly seeing the result of what they do.
## Machine Learning / AI
**Common Choices**: **Python** (TensorFlow, PyTorch), R, Java (DL4J)
**Why Python for ML?**
- **De-Facto Standard**: Industry and research heavily use Python for AI, so new tools and tutorials appear there first.
- **GPU Support**: Deep learning frameworks in Python have robust CUDA integration for accelerated training.
## Cybersecurity & Reverse Engineering
**Common Choices**: **Python**, **Rust**, **C**, **C++**, **Assembly**, **Perl**, **Bash**
**Why These Languages?**
- **Low-Level Access**: C, C++, Assembly let you manipulate memory directly, essential for exploit development or reverse engineering.
- **Automation & Scripting**: Python, Perl, Bash are often used for quick scanning scripts, parsing logs, or pen-testing automation.
- **Rust’s Safety**: Memory-safe approach that can still produce system-level code.
## Systems Programming (High-Performance/Embedded Systems)
**Common Choices**: **C**, **C++**, **Rust**
**Why These?**
- **Direct Hardware Access**: You can manage memory, addresses, and CPU instructions precisely.
- **Performance**: C/C++ are known for speed, while Rust brings memory safety with minimal overhead.
- **Industry Acceptance**: Operating systems, embedded devices, and real-time systems often revolve around C/C++.
## Competitive Programming
**Common Choices**: **C++**, **Python**, **Java**
**Why These?**
- **C++**: Speed is king in many algorithmic contests.
- **Python**: Rapid prototyping, easy-to-use data structures (lists, dicts) for many problem types. Best for contests that time limits for Python are higher than C++. I personally use Python for learning an algorithm in action since I don't worry about the performance.
- **Java**: A good balance between performance (faster than Python in some cases) and Rapid Prototyping.

# Final Words
Of course you can't master every programming tool. But you get the general idea of what master to hire to make your next multi-billionaire startup idea come real.
You don't need to learn 50 different programming languages. Just learn a few that work best for you
In the end, programming is just about solving a problem and this article is only about solving a problem better and faster.
If you feel unsure about what tool to use, feel free to contact me to help you decide.
# References
- https://dev.to/justyntemme/choosing-the-right-tool-how-to-pick-the-right-programming-language-58ll
- https://thejavaguy.org/posts/012-the-right-tool-for-the-job-is-a-lie/
- https://devops.com/choosing-the-right-programming-language/
- https://kevlinhenney.medium.com/the-right-tool-for-the-job-d6d3a80cecf8
