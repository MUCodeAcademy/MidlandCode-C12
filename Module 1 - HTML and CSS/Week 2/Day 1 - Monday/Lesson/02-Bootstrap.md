## Bootstrap Implementation

[Bootstrap Website](https://getbootstrap.com/)

### Major Points

- Functions off Flex-box
- Built in break points for RWD
- Stand alone css file for easy site construction
- Javascript library for use of Modals, Dropdowns, Menus, etc.

## CSS Attachment

Attach this in the head tag (Use what is on their website as this might be out of date)

```HTML
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
```

## Javascript Additions:

Add this to the end of your `<body>` tag (Use what is on their website as this might be out of date):

```HTML
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

```

## Bootstrap Quick Guide for Columns

### Columns

Columns below can be mixed and matched depending on the needs for that element. They will need to be wrapped inside of a container (div or otherwise) with class `container` or `container-fluid` and then inside that, a container with class `row` (or just utilize the row class as below)

```html
<div class="row">
  <!-- COLUMN ELEMENTS WITH CLASSES BELOW -->
</div>
```

- col-? - ?/12 % of container at all resolutions
- col-sm-? - ?/12 % of container for 576px width AND above
- col-md-? - ?/12 % of container for 720px width AND above
- col-lg-? - ?/12 % of container for 992px width AND above
- col-xl-? - ?/12 % of container for 1200px width AND above

### Column Numbers by Percentage of container

- col-1 - 8.333%
- col-2 - 16.666%
- col-3 - 25.000%
- col-4 - 33.333%
- col-5 - 41.666%
- col-6 - 50.000%
- col-7 - 58.333%
- col-8 - 66.666%
- col-9 - 75.000%
- col-10 - 83.333%
- col-11 - 91.666%
- col-12 - 100.000%
