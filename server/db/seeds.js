use ww2
db.dropDatabase()

db.timeline.insertMany([
  {
    date: '1930-1933',
    location: 'Germany',
    coords: [],
    heading: 'The Rise of Extremism',
    info: 'When people are unemployed, hungry and desperate, as millions were in Germany between 1930 and 1933, they often turn to extreme political parties offering simple solutions to their problems. Between 1930 and 1933 support for the extreme right-wing Nazis and the extreme left-wing communists soared.\n\nIn 1928, the Nazis had only 12 seats in the Reichstag; by July 1932 they had 230 seats and were the largest party.'
  },
  {
    date: '1933-1934',
    location: 'Germany',
    coords: [],
    heading: 'The Creation of a Dictatorship',
    info: 'In January 1933, Hitler became Chancellor of Germany but his real aim was to become a dictator. Before he could realise his ambition, he needed to gain enough seats to be in a position strong enough to allow him to make the changes that would lead to his goal. He convinced President Hindenburg to call a new Reichstag election for March 1933. This set off a series of events including the Reichstag Fire and Night of the Long Knives that ended with Hitler becoming Führer.\n\nHitler promised to make his country great again and quickly began to arm Germany again and to seize land from other countries.'
  },
  {
    date: '1st September 1939',
    location: 'Poland',
    coords: [],
    heading: 'The Beginning of the War',
    info: 'Shortly before 5am on Friday 1st September, 1939, German forces stormed the Polish frontier. Tanks and motorised troops raced into the country over ground, supported by Stuka dive bombers overhead. A total of 1.25 million Germans soldiers swept into Poland'
  }
])
