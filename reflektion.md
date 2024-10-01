# Reflektion

### Kapitel 2

<img width="685" alt="Skärmavbild 2024-10-01 kl  10 41 55" src="https://github.com/user-attachments/assets/ff35c094-28a1-4c4c-971a-9c0533b7c036">

 ## Reflektion om kapitel 2

Kapitel 2 i Clean Code förklarar hur viktigt det är att använda intention revealing names, vilket innebär att namn på variabler och metoder ska tydligt förmedla sitt syfte. När jag tittar på min kod ser jag att jag har gjort ganska bra med namngivning på mina variabler och funktioner men ord som data kan vara otydliga. Dessutom är det viktigt att tänka på hur ordval kan skapa förvirring om vad en funktion faktiskt gör, som i fallet med "generateExercises".

### Kapitel 3

<img width="694" alt="Skärmavbild 2024-10-01 kl  10 42 40" src="https://github.com/user-attachments/assets/444e664f-bd44-4f2c-8f32-cccded458ee1">

## Reflektion om kapitel 3

Inom kapitel 3 i boken och i föreläsningen så togs upp hur viktigt det är att funktioner endast ska göra en sak och de ska hållas så små som möjligt för att göra det så lätt som möjligt att förstå vad koden gör och framförallt vad varje funktion gör. Detta är en aspekt som jag kan förbättra i min egen kod. Funktioner som createWorkout och createWorkoutSplit hanterar flera saker och skulle kunna delas upp i mindre, mer specifika funktioner. Samtidigt följer mindre funktioner som getExerciseData och generateExercises dessa regler väl, med tydlig fokus på en specifik sak och kort längd.

Daniel tog också upp i föreläsningen att man bör inte ha en if sats inom en for loop till exempel. Detta är en av principerna som gör det svårare för andra att förstå sin kod. 
## Sammanfattning
Att reflektera över min egen kod med hjälp av kapitlen i Clean Code har jag insett hur lite jag tänker på namn och struktur. Under första året har vi lärt oss hur man programmerar och har bara använt lint när det gäller att kodkvalite. Och som Daniel sa i föreläsningen så använde jag bara JSDoc kommentarer för att det skulle se fint ut istället för att faktiskt ge viktig information om vad koden gör. Jag inser att jag ofta försöker ge mina funktioner och variabler beskrivande namn, men ibland blir dessa namn för generella eller missvisande. När det gäller funktioner behöver jag arbeta mer på att hålla dem små och jag måste också jobba på seperation of concerns, speciellt i de längre funktionerna. Även om min kod fungerar, finns det utrymme för förbättringar för att göra den mer hållbar och lättare att läsa.


