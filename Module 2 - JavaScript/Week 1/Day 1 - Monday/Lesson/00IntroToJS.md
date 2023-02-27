# What is JavaScript?

In the 1990s, web pages could only be static, and they lacked dynamic behavior after the page was loaded. To remove this limitation, Brendan Eich was employed by Netscape to create JavaScript in 1995.

JavaScript is most famously used for adding interactivity to web pages - as of 2022, 98% of websites use JavaScript, including Google, Facebook, Netflix, YouTube, and pretty much all of the other popular ones. JavaScript itself is very useful and flexible, but a lot of sites and applications also use tools by other developers on top of the core of JavaScript to add more functionality (one of these tools is called React, which we'll learn about next module). Even though it's mainly used for web development, you can create video games, 2D/3D graphics, database-driven applications, and a lot more.

**Do not confuse JavaScript and Java.** Despite the name, JavaScript has very few similarities to the Java programming language. Java started as a project in 1991 and was very popular, so it was probably a marketing tactic by Netscape.

## Technical Terms

JavaScript is a high-level, just-in-time compiled language. What does that mean?

### Compiler: 
A computer program that translates computer code written in one programming language (the source language) into another language (the target language). Typically used to compile a "high-level" language to a "low-level" language to create an executable program. 

Example: From JavaScript (source language) to machine code (target language).

### High-level: 
A langauge with strong abstraction from the details of the computer. Typically uses natural language, is easier to use, and automates (or completely hides) areas of computing systems. These languages require a compiler to be converted to machine code in order to run.

Example: JavaScript is a high-level language due to it's natural language structure and level of abstraction. [Example of JavaScript](https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png)

### Low-level: 
A language that provides little to no abstraction from a processor's instructions. Can convert to machine code without a compiler, and run directly on the processor. Typically more efficient and uses less memory than high-level languages.

Example: Machine code languages are low-level due to it's lack of abstraction and the language being "close to the hardware". Assembly languages are another group of low-level languages. [Example of Machine Code](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/W65C816S_Machine_Code_Monitor.jpeg/1024px-W65C816S_Machine_Code_Monitor.jpeg) | [Example of Assembly](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/800px-Motorola_6800_Assembly_Language.png)

### Abstraction
The process of removing or generalizing smaller details to focus on details of the bigger picture.

Example: Memory management is abstracted in higher-level languages like JavaScript; this means that JavaScript automatically allocates memory when you need it, and releases it when you don't. In contrast, for lower-level languages like C, memory is manually managed by the programmer.

### Just-in-time compilation: 
A method of executing code that compiles during the execution of a program (referred to as "at runtime") rather than before. Ahead-of-time compilation would be compiling before runtime.