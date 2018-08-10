# Rules

IMPORTANT: This document is incomplete.

In Graalit, you are the head of a medieval castle. The end goal is to find the Holy Grail, but to achieve that you have to take care of your people, research new technologies, breed dragons, raise an army, defend from attacks, and so on.

## Village

A village is a 4x4 grid for a total of 16 cells, numbered from 0 to 15.

```
 0  1  2  3
 4  5  6  7
 8  9 10 11
12 13 14 15
```

## Infrastructure

Each cell has its own infrastructure defined by the following properties:

 - Type
 - Level
 - Construction cost
 - Custom properties

### Types

There are different types of infrastructure.

| Type | Construction | Custom properties | Notes |
|------------|---------------------------------|---------------------------------------|--------------------------------------------|
| Castle | `(CastleLevel^3)*2000` material |  |  |
| Houses | `(HousesLevel^2)*100` material | HousesCapacity = `HousesLevel*50` | Increase population by providing housing. |
| Laboratory | `(Laboratory^3)*1000` material | LaboratoryWizards = `LaboratoryLevel` | Hire wizards to research new technologies. |

### Population

The number of people in the whole village is set by the sum of `Capacity` of all cells of type Houses.
