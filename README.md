Usecase for Statecharts in SproutCore
=====================================
This project includes the same SproutCore 2 application in two versions:

1. Without a statechart but with mediating and coordinating controllers
2. With a statechart that replaces the coordinating responsibilities form the controllers

The application is complex enough to get in trouble with a bunch of coordination controllers 
but simple enough to understand in a few minutes.

For a high level view you can see the statechart diagram in 'pomodoro-timer-statechart.png'

Soft results of this Experiment
===============================
The goal was to show the difference in maintainability of the two resulting codebases.

Of course it doesn't make too much sense to speak of hard maintainability for such a
simple application but this can quickly become a problem if the application grows and complexity rises.

Here are some thoughts and soft results:

* Without the statechart you have to introduce variables that indicate the current state
of the coordinating controllers. All actions must be handled in context of these states
to provide reliable application logic. This results in many if blocks and checks which
make the code harder to read and understand.

* Concurrent states and transitions (startPomodoro / finishedPause) are much harder to implement
without statechart since you have to introduce dependencies between the coordinating controllers.

* Nested states and actions that can happen on the parent state (cancelPomodoro on Timer.Pomodoro state)
result in if/else if blocks for each child state.

Hard facts and numbers
======================
Of course these differences can not only be described with 'blabla' but also with concrete measures.
jsmeter was used to measure the two complete javascript code bases and here are the results:

Without Statechart
------------------

* Lines of Code: 593
* Statements: 426
* complexity (lower = better): 2.0344827586206895
* Maintainability Index (higher = better): 125.21396551724136

With Statechart
------------------

* Lines of Code: 639
* Statements: 414
* complexity (lower = better): 1.333
* Maintainability Index (higher = better): 137.36414583333334

The results show that statecharts add more lines of code but lower complexity and improve the overall maintainability
of the code base.