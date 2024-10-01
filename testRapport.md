# Test rapport

## Introduktion

Jag kommer att göra manuella testfall för att testa min workout module.

Anledningen till varför jag kommer göra manuella tester är på grund av att när jag byggde min test-app så tänkte jag inte att man kan testa sin applikation på olika sätt utan bara byggde en applikation som visar informationen som min modul skickar till användaren. Om jag hade tänkt igenom så borde jag ha gjort automatiska tester där det finns ganska mycket data att testa men det går att göra på ett manuellt sätt också, det blir bara lite svårare.

## Det som kommer att testas

Det finns ganska mycket att testa inom min modul, framförallt datan som skickas från mitt API. Mitt API tar in tre olika variabler, muscle, type och difficulty. Jag får max skicka 5000 requests per månad till mitt API, vilket innebär att jag inte kommer testa all funktionalitet inom mitt API, utan en begränsad mängd för att säkerställa att modulen och mitt API funkar. Det som inte kommer att testas inom mitt API är alla types. Det finns 7 olika types som t.ex cardio eller powerlifting men jag kommer bara att testa strength och powerlifting.

I have now changed the exerciseData.length to 1 instead of 3 to only get one exercise per muscle.

Jag kommer också att testa de fem funktionerna som jag har skapat inom min modul. Jag kommer bara testa mitt API med min createWorkout funktion där det är alldeles för mycket data att gå igenom för att testa mitt API med varje funktion. Istället kommer jag att testa varje funktion för att se om rätt data returneras till användaren och inte att mitt API funkar med varje funktion.

## Execute tests

<img width="660" alt="Skärmavbild 2024-09-30 kl  20 09 50" src="https://github.com/user-attachments/assets/4ba34679-4644-4c58-b936-3a8d6330cfe5">


## Test cases

### 1.1: API Test

#### Vad kommer att testas?

Jag kommer testa mitt API genom att använda min createWorkout funktion. Just nu kan man mata in en mängd med muskler som man vill träna. Det jag kommer att göra är att sätta in alla muskler som går att träna men istället för att få tre övningar per muskel kommer jag ändra koden så att det bara blir en övning som visas istället för tre vilket fortfarande bekräftar att allt funkar men det finns mindre data att gå igenom.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfU0_O5gnahzXCkJHXHy7xZuBYXXj34kya8eTnE_cL1te8SqwLkz-gA4SeLCXZKCjBs7JtMQqayOSUFJ_30an1zMMXesYn0M6Ct7Ooq4yCBrbFV29gsA8eM_gBooiG1K3LVF7Hg84eCLXP-bVdeI3GU1lHL?key=F1t5nMZNjhmUa8Pus5D59A)

#### Steg:

Öppna test-appen.

Navigera till create workout. 

Mata in alla muskler som mitt API tar emot. 

Sedan testa alla kombinationer för type och difficulty. Som sagt tidigare kommer jag bara använda strength och powerlifting som type.

#### Förväntade resultat:

Förväntade resultatet är att man får en övning var varje muskel. Detta borde hände för alla kombinationer av type och difficulty.

#### Verklig Resultat:

Det blir mycket text att visa om jag klistrar in all text från varje test så istället tar jag en skärmdump från den översta delen av create workout och garanterar att jag har kollat att det finns en övning för varje muskel.

 ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc2aMHUykf0eLBEbG0UMKL-8RjJzjFH2ZXJ08DWZJUJ6lcR37xB5NAVk8wcXiT82xZjN3_p99lS2m_evoEM-TTxP7-LMz5FeRhMAm5pmnuH0Fh-i66H9_AnupinX6igoHlisslAHevFHtcLYCGkShimmCs?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: strength, difficulty: beginner. Det finns en övning för varje muskel.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdnewoDY8frU4j9PcfkFlrk1OqPUr79cvGnny6lkuo2ld87cwbfq3sweKANy-q4pE79NwwfMrdioypNJBVS_6TWD2liUVCgJJOTnoZ32o98bSWPS6oml2Wgy4lfpvpC_w5eBIXwoVb-W0QxTiXCh6LIaBY?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: strength, difficulty: intermediate. Det finns en övning för varje muskel förutom nacken, men jag har kollat och mitt API har ingen övning för nacken med denna kombination.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcXuhQ1TlT2C8JmFRlYhBkffFwXFLm5az0exaswBb9lZvD4qyuKEh18imCY3dY9YpeAeSAqWjRX60J5YXV85kl7UmT03VyHdxWQRHpMQpfHdor_BhaLLHPISP4EtToAfG5qMpvfpeXXRBuVnAiyuQM4pNy4?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: strength, difficulty: expert. Det fanns inte så många övningar här, men det är pga att mitt API inte har dessa övningar. Det finns inga problem med modulen, bara att mitt API har inte data för dessa övningar.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfdXssgm3ewTgvi64awJR6LUfsBLUDLysSXmb1P52WhOIWSv46YrdNspLZLAjjN7eyRi1y2Gomyt0-Da--yAlWvD2wFsFwamTnWGyGTb1zVtHQvWtoE9aRtyWrx_Bq6OkC2mDu8xoK83fGNOPpqBYkyBT7B?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: powerlifting, difficulty: beginner. Det fanns inte så många övningar här, men det är pga att mitt API inte har dessa övningar. Det finns inga problem med modulen, bara att mitt API har inte data för dessa övningar.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc0IGlOQfJ4Sa3x09hxEV4lh9ZM0x981dp66Ysk7pYNKn_oHeBppkdY4qW6k_n-ZcO6NtIAfu7ZqlgLOfFppHH7zso8_wVzn5uonZF6GHxXHOiAJiPnKg6yWb9sL2nf_UjLYORMSAIcT2ZEOlfJnrJU2GYg?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: powerlifting, difficulty: intermediate. Det fanns inte så många övningar här, men det är pga att mitt API inte har dessa övningar. Det finns inga problem med modulen, bara att mitt API har inte data för dessa övningar. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGcvsfhlPulPruF2MdOhwqENCFyHZrdgBxZh6n8Z7SkkZA3OPoEgSEp56vii63vwMQ0I4em134RXQ6Ouh4QH-Y8QVtEZfGCMdJUYvO26yWpN4UxD-orjZZmQ_c0Z4TPwmik9S0GpC8ybMGLydxAWdu_hU?key=F1t5nMZNjhmUa8Pus5D59A)

Kombination: type: powerlifting, difficulty: expert. Det fanns inte så många övningar här. Deta fanns övningar för vissa muskelgrupper vilket innebär att mitt API funkar men mitt API har bara inte många övningar på expert.

#### Pass/Fail: 

Pass

### 1.2 generateExercises function

#### Vad kommer att testas

Denna test kommer att testa min generateExercises funktion vilket visar övningar beroende på vad användaren ställer in för muskler, type och difficulty.

#### Steg

Öppna test-appen

Navigera till Generate exercises

Sätt in värden

Se resultat

Förväntade resultat

#### Förväntade resultatet:

Man får en lång lista med övningar för just den muskeln, type och difficulty.

#### Verklig resultat

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtCoXsqPBTq1FdQvygb-mSEs-jk3LWeUyJoqtilrXfyudjiHxE_oiEYIuK6deKLsqbmq_0pAGzwssK1QnG3Ww6Tg0q0q9UxNazu_S6haZop0V8TSubpGBvC8GonGU0AqQ1draari5qq9KTjgy_-QlRgK2x?key=F1t5nMZNjhmUa8Pus5D59A)

Detta är värden jag satte in. Och detta är några av övningarna som visades:

Name: Dumbbell Bench Press\
Type: strength\
Muscle: chest\
Difficulty: intermediate\
Instructions: Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program. Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.

Name: Pushups\
Type: strength\
Muscle: chest\
Difficulty: intermediate\
Instructions: Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed. Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.

Name: Close-grip bench press\
Type: strength\
Muscle: chest\
Difficulty: intermediate\
Instructions: Lie back on a flat bench. Using a close grip (around shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position. As you breathe in, come down slowly until you feel the bar on your middle chest. Tip: Make sure that - as opposed to a regular bench press - you keep the elbows close to the torso at all times in order to maximize triceps involvement. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Tip: It should take at least twice as long to go down than to come up. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack. Caution: If you are new at this exercise, it is advised that you use a spotter. If no spotter is available, then be conservative with the amount of weight used. Also, beware of letting the bar drift too far forward. You want the bar to fall on your middle chest and nowhere else. Variations: This exercise can also be performed with an e-z bar using the inner handle as well as dumbbells, in which case the palms of the hands will be facing each other.

#### Pass/Fail:
Pass

### 1.3 createWorkout function

#### Vad kommer att testas

Jag kommer att testa createWorkout funktionen vilket var funktionen som användes för att testa mitt API.

#### Steg

Öppna test-appen 

Navigera till Create Workout

Mata in värden

Se resultat

#### Förväntade resultat

Förväntade resultatet är att jag får en övning för varje muskel jag satt in med korrekt type och difficulty. Note: jag har ställt in så att bara en övning visas för varje muskel vilket är inte standard för modulen.

#### Verklig resultat

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfPfBhY8nvJ4IuUkCu0X7d46XIcRhY9Kdil1enCPStLgc38LACN1MOS1ROceUr64QQFTNmpVWECFEYGgk4fF6qz89M9ysxru7cz5d-SYGzzvEtHJCSU5NiCzjYuBcpwFfvqvr77KHklCSuw5u8Qh9lEZOs?key=F1t5nMZNjhmUa8Pus5D59A)

Detta är värden jag satte in. Och detta är några av övningarna som visades:

### forearms

-   Name: Palms-down wrist curl over bench\
    Type: strength\
    Muscle: forearms\
    Difficulty: intermediate\
    Instructions: Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions. Variations: This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell.

### glutes

-   Name: Single-leg cable hip extension\
    Type: strength\
    Muscle: glutes\
    Difficulty: intermediate\
    Instructions: Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle. Face the weight stack from a distance of about two feet, grasping the steel frame for support. While keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly "kick" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction. Now slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position. Repeat for the recommended amount of repetitions. Switch legs and repeat the movement for the other side. Variations: You can perform this exercise with exercise bands.

#### Pass/Fail:

Pass

### 1.4 createWorkoutSplit function

#### Vad kommer att testas

Jag kommer att testa min createWorkoutSplit funktion.

#### Steg

Öppna test-appen

Navigera till Create Workout Split

Mata in värden och välj en utav workout-splits

Se resultat

#### Förväntade resultat

Förväntade resultatet är att man får en workout-plan för en hel vecka. Det bör finnas rest days, och övningarna ska vara anpassade till det användaren satt för type och difficulty.

#### Verklig resultat

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5717dmbwxTmCqIrpvB2XUiOxcvJLNsLmj0gWqfCL4DvamyGAwBy1T4JZup5_bDs_u4ZrMdWhkIVl_jbLzDri_zF3d1dwzfKLgZify-kE8svBEl9YRL7ErPmz3WjKed5COYRrPBKbf3T6t9UiSujTu9i8?key=F1t5nMZNjhmUa8Pus5D59A)

Datan som jag gav test-appen var push pull legs med type: strength och difficulty: intermediate. Detta är några skärmdump av resultatet:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcL6ASBaOxhHlVtmasz2M1pRHJ6WnRt5tWta4e4ALtLCEoLWCOb-Z2B0ITTTQGj0F2y7YApzcYQ54v9KohxP0B6O3Htxl3tyTijKP3MnQEK292aqCpU_TUE5xiFnxofjizEVUDHddbskFgYos1y0ECxy_0?key=F1t5nMZNjhmUa8Pus5D59A)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXco-B9X8Ihz4Cmu_XAWf4ms9qFXidxaaI3-s0Bam23vBiKh1p4St11RWHmygc8Dr28jvBhMqoxuNLpYJFqIgNxYsTiX_ykLGWvxfpzp5WuBPF8E643e_nAUueCWuihl7jaP5U4r_q1yYZPd3LqlVLL1Fhty?key=F1t5nMZNjhmUa8Pus5D59A)

Från skärmdumpen kan man se att man får övningar för varje muskel för varje dag och det finns rest days.

#### Pass/Fail:

Pass

### 1.5 / 1.6 getReccomendedRepsAndSets  och getExerciseTips function

#### Vad kommer att testas

Dessa två funktioner går att testa inom terminalen utan hjälp av andra funktioner men jag har byggt min test-app så att den ger rekommendationer för specifika övningar med hjälp från generateExercises funktionen. Alltså så kommer jag köra generateExercises funktionen och resultatet från dessa två funktioner som testas här kommer att visas.

#### Steg

Öppna test-appen

Navigera till Generate Exercises 

Mata in värden 

Se resultat under recommended sets, recommended reps och exercise tips.

#### Förväntade resultat

Det förväntade resultatet är att man ser rekommendationer när det gäller reps, sets och allmänna tips.

#### Verklig resultat

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMk0XVo4T3vHFA-UeAobKamopx2AC4X512NNnlk9fGMQQq8uHgdvb3HfR_pf8l3eCzxakrk7GdQDmvGZvCPu0cVfX_3byxoSvtk5gP5jaBvEmcO0sXPPirxzvNr6l6J-5tI_94M_8aEYlWP60spgMj5X82?key=F1t5nMZNjhmUa8Pus5D59A)

Detta är värden som jag skickade in till Generate Exercises.\
Detta är resultatet: 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcbZMKuRDVDAMZkGC7n6Clro5V1Z-FFLvMmwQhqLKGPBvx5lfejjYR0yxLM9GF5HQ2h9xDlSponhmhBjr2O8lQ_R3gARdqISFqwVIzGj4pcUFDCDbmLJkTOR8JPPE1PSeO_YMZGIX2_zaqMhdBIwZTb8hfa?key=F1t5nMZNjhmUa8Pus5D59A)

#### Pass/Fail:

Pass
