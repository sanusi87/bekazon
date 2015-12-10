## GET /
- list all artists

## GET /ARTIST_ID
- list all chapters under this ARTIST_ID

## GET /ARTIST_ID/CHAPTER_ID
- list all artworks of this CHAPTER_ID under this ARTIST_ID

## GET /ARTIST_ID/CHAPTER_ID/ARTWORK_ID
- get a single artwork based on ARTWORK_ID




## POST /
- add new artist
	=> name

## POST /ARTIST_ID
- add new chapter
	=> name

## POST /ARTIST_ID/CHAPTER_ID
- add new artwork
	=> name




## PUT /
## PUT /ARTIST_ID
- update ARTIST_ID
	=> name

## PUT /ARTIST_ID/CHAPTER_ID
- update CHAPTER_ID
	=> name

## PUT /ARTIST_ID/CHAPTER_ID/ARTWORK_ID
- update ARTWORK_ID
	=> name