To add a new movie simply add a new JSON entry to the `movies` array in `coredata.json` with the following information:

```
{
  "id": 1, // Unique integer value. Typically incremented by one of the last entry
  "title": "Titanic", // Name of the movie
  "type": "Movie", // Type 
  "year": "1997", // Year of release
  "tag_1" : "Drama", // Genre 1
  "tag_2" : "Romance", // Genre 2
  "cover_img" : "https://i.imgur.com/D0jm0sc.jpg" // Link to cover art
}
```