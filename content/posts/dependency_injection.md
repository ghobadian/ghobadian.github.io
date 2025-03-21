---
title: "Dependency Injection (DI)"
date: 2025-03-21
description: "Deep Dive to Dependency Injection in java with Spring Framework"
tags: ["dependency-injection", "java", "spring", "inversion-of-control", "design-patterns"]
type: post
showTableOfContents: true
---
![di.png](/images/dependency_injection/di.png)
# Introduction
Have you ever wondered how modern applications manage complex dependencies without turning into a tangled mess of code? That’s where **Dependency Injection (DI)** comes in—a powerful implementation of [Inversion of Control (IoC)](https://en.wikipedia.org/wiki/Inversion_of_control). DI allows you to use instances of classes without worrying about how or where they’re created. It’s about **passive** instantiation: instead of your code actively constructing dependencies, they’re handed to you, ready to use. In this post, we’ll explore DI in Java with the Spring Framework, breaking down its techniques, benefits, and how it transforms your code for the better.

# Taxonomy
Dependency: other classes that your class depends on.
```java
public class Human {  
    private Water water;  
      
    void drinkWater() {  
        water.reduce();  
    }  
}
```
Here `Water` is a dependency for `Human`


# Problem Solved
Imagine you’re building an app where a `UserService` needs a `DatabaseConnection`. Without DI, `UserService` might create its own connection:
```java
public class UserService {
    private DatabaseConnection db = new DatabaseConnection();
}
```
This ties UserService to a specific DatabaseConnection implementation, making it hard to swap for a mock during testing or a different database in production. DI solves this by separating object creation logic from business logic, letting an external system (like Spring) handle instantiation and wiring.

# Dependency Injection vs Inversion of Control
While often used interchangeably, **Inversion of Control (IoC)** and **Dependency Injection (DI)** aren’t the same. IoC is a broader design principle where control over a program’s flow or object creation is handed to an external framework, inverting traditional responsibility. Think of it as the philosophy: "Don’t call us, we’ll call you."

DI, on the other hand, is a specific technique to achieve IoC. It focuses on injecting dependencies (objects or services) into a class from the outside, rather than the class creating them itself. For example, Spring’s IoC container manages beans and uses DI to wire them together. Other IoC techniques exist—like the Service Locator pattern or event-driven callbacks—but DI is favored for its clarity and testability.

In short:
- **IoC**: The big idea of inverting control.
- **DI**: A practical way to do it by passing dependencies.

# Techniques

## Method Injection
```java
public class Service {
    public void performTask(Dependency dependency) {
        // Perform task with dependency
    }
}
```
Dependency only injected for using a specific method. It is not injected to the whole object,

\+ more specific

\- not widely used

\- breaks clean code. F1: Too Many Arguments
## Field Injection
```java
public class Service {
    @Autowired
    private Dependency dependency;
}
```
Injecting dependencies to field via reflection

\+ no constructor or setter boilerplate

\- NullPointerException Risk: what if no dependency is found for `Dependency`?

\- breaks encapsulation

\- Mutable Dependencies: nothing stops you from re-assigning value to `dependency` which might corrupt your app logic

## Interface Injection
```java
public interface DependencySetter {
    void injectDependency(Dependency dependency);
}

public class Service implements DependencySetter {
    private Dependency dependency;
    
    @Override
    public void injectDependency(Dependency dependency) {
        this.dependency = dependency;
    }
}
```

\-  adds complexity and boilerplate of adding and maintaining interface for each Class

## Setter Injection
```java
public class Service {
    private Dependency dependency;
    
    public void setDependency(Dependency dependency) {
        this.dependency = dependency;
    }
}
```
\+ optional dependency injection

\- NullPointerException Risk: Object `Service` is not complete if `setDependency` method not called

\- You allow `dependency` to get changed even at runtime. what if you want `dependency` to be [[Immutable Object|immutable]]?

## Constructor Injection (recommended)
```java
public class Service {
    private final Dependency dependency;
    
    public Service(Dependency dependency) {
        this.dependency = dependency;
    }
}
```

![constructor_injection_mem.png](/images/dependency_injection/constructor_injection_mem.png)

**NO**, your class has too much responsibilities ([god class](https://en.wikipedia.org/wiki/God_object)) therefore too much dependencies and must be broken down to smaller classes

>It is a good rule of thumb to use constructors for mandatory dependencies and setter methods for optional dependencies.


# Use Case (Spring Framework)
Spring has its own dictionary of words. In this blog post, what I mean by `Application Context` is `IOC Container` and what I mean by `Bean` is just an `Instantiated Object` 

Spring supports two types of Configuration for managing Beans:
- XML-based configuration
```xml
<bean id="userService" class="com.example.UserService"> <constructor-arg ref="databaseConnection"/> </bean>
<bean id="databaseConnection" class="com.example.DatabaseConnection"/>
```
- Annotation-Based Configuration
```java
@Configuration
public class AppConfig {
    @Bean
    public UserService userService(DatabaseConnection db) {
        return new UserService(db);
    }

    @Bean
    public DatabaseConnection databaseConnection() {
        return new DatabaseConnection();
    }
}
```
In this Blog post I favor Annotation-Based Configuration since XML-based configuration can easily get out of sync from actual code.
***
## Dependency Injection Steps in Spring
![spring_di.png](/images/dependency_injection/spring_di.png)
- Spring parses these metadatas (i.e. \@Configuration, \@Component, \@Service) into a **bean definition registry**, a data structure that holds details about each bean (e.g., its class, scope, dependencies, lifecycle callbacks).
- Spring's IOC container scans the classpath, identifies annotated classes, and registers them as BeanDefinitions.
- For each BeanDefinition, Spring uses Java reflection to create an instance
- Using reflection, Spring inspects the constructor signature or annotated fields to determine what the bean needs.
- If the dependency isn’t instantiated yet, Spring recursively creates it first (resolving its dependencies too).

# Benefits
**Explicit Dependency Declaration**: Dependencies don't hide in your code. all dependencies that you class needs are mentioned in its constructor
```java
//Explicit Dependency Declaration
public class Human {  
    private WaterSource waterSource;  
    private Apparel apparel;  
    private HealthTracker health;  
  
    public Human(WaterSource waterSource, Apparel apparel, HealthTracker health){  
        this.waterSource = waterSource;  
        this.apparel = apparel;  
        this.health = health;  
    }  
}
```


```java
//Hidden(Implicit) Dependency Declaration
public class Human {  
    private WaterSource waterSource;  
    private Apparel apparel; 
    private HealthTracker health;  

    void drink() {
	    waterSource = new PurifiedWaterSource(new Location(123213,847292));
	    waterSource.drinkFrom();
    }

	void wearClothes() {
		apparel = new Apparel(new Socks(), new Shoes(new Snickers(3,5, "Jordan")), new Hat());
	    wear(apparel);
	}
```

***
**Loose Coupling**: Dependency Creation Logic is separated from Implementation Logic

```java
//Tight Coupling
public class Human {
    private WaterSource waterSource = 
      new PurifiedWaterSource(new Location(123213,847292));
    private Apparel apparel = 
      new Apparel(new Socks(), 
                  new Shoes(new Snickers(3,5, "Jordan")), 
                  new Hat());
    private HealthTracker health = 
      new HumanHealthTracker();
}
```

```java
//Loose Coupling
public class Human {  
    private WaterSource waterSource;  
    private Apparel apparel;  
    private HealthTracker health;  
  
    public Human(WaterSource waterSource, Apparel apparel, HealthTracker health){  
        this.waterSource = waterSource;  
        this.apparel = apparel;  
        this.health = health;  
    }  
}
```
***
**Code Testability**: One outcome of loose coupling is easier testing. You just have to inject a mock class instead of the actual class to the class that you want to test.
```java
//Testable Code
//Loose Coupling
public class HumanTest {  
    void testDrink() {
	    Human human = new Human(new WaterSourceMock(), new ApparelMock(), new HealthTrackerMock())
	    human.drink();
	    //assert water source decreased
    }
}

public class ApparelMock extends Apparel {
//...
}

public class WaterSourceMock extends WaterSource {
//...
}

public class HealthTrackerMock extends HealthTracker {
//...
}
```

On the other hand, Tight Coupling leads to harder testing time. Dependencies are chained together. Testing one small class may lead to starting the whole application:
```java
//Untestable: Hard to Mock
public class Human {
    private WaterSource waterSource = 
      new PurifiedWaterSource(new Location(123213,847292));
    private Apparel apparel = 
      new Apparel(new Socks(), 
                  new Shoes(new Snickers(3,5, "Jordan")), 
                  new Hat());
    private HealthTracker health = 
      new HumanHealthTracker();
}
```

# Drawbacks
- **Learning Curve**: DI and frameworks like Spring require time to master, especially for beginners.
- **Performance Overhead**: Reflection and container setup add slight runtime costs, though modern hardware minimizes this.
- **Increased Complexity**: Managing beans and configurations can feel overwhelming in small projects.

While these drawbacks exist, frameworks like Spring mitigate them by abstracting complexity, and the benefits of maintainability often outweigh the trade-offs.


# Conclusion
Dependency Injection transforms how we write Java applications, making them more modular, testable, and maintainable. With Spring, it’s a breeze to implement, whether through annotations or XML. What’s your experience with DI? Have you faced challenges or found clever solutions? I would be glad to know your thoughts!

# References
[Spring Docs](https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html)

[Criticism and disadvantages of dependency injection](https://softwareengineering.stackexchange.com/questions/371722/criticism-and-disadvantages-of-dependency-injection)

[Inversion of Control (IOC)](https://en.wikipedia.org/wiki/Inversion_of_control)

