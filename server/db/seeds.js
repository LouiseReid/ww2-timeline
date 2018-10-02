use ww2
db.dropDatabase()

db.timeline.insertMany([
  {
    date: '1930-1933',
    location: 'Germany',
    coords: [13.411440, 52.523430],
    heading: 'The Rise of Extremism',
    info: 'When people are unemployed, hungry and desperate, as millions were in Germany between 1930 and 1933, they often turn to extreme political parties offering simple solutions to their problems. Between 1930 and 1933 support for the extreme right-wing Nazis and the extreme left-wing communists soared.\n\nIn 1928, the Nazis had only 12 seats in the Reichstag; by July 1932 they had 230 seats and were the largest party.',
    image: '/images/nazi-rally.jpg'
  },
  {
    date: '1933-1934',
    location: 'Germany',
    coords: [11.580220, 48.139130],
    heading: 'The Creation of a Dictatorship',
    info: 'In January 1933, Hitler became Chancellor of Germany but his real aim was to become a dictator. Before he could realise his ambition, he needed to gain enough seats to be in a position strong enough to allow him to make the changes that would lead to his goal. He convinced President Hindenburg to call a new Reichstag election for March 1933. This set off a series of events including the Reichstag Fire and Night of the Long Knives that ended with Hitler becoming Führer.\n\nHitler promised to make his country great again and quickly began to arm Germany again and to seize land from other countries.',
    image: '/images/hitler.jpeg'
  },
  {
    date: '1st September 1939',
    location: 'Poland',
    coords: [15.981433, 53.909597],
    heading: 'The Beginning of the War',
    info: 'Shortly before 5am on Friday 1st September, 1939, German forces stormed the Polish frontier. Tanks and motorised troops raced into the country over ground, supported by Stuka dive bombers overhead. A total of 1.25 million Germans soldiers swept into Poland.',
    image: '/images/poland-invasion.png'
  },
  {
    date: '3rd September 1939',
    location: 'London',
    coords: [-0.127758, 51.507351],
    heading: 'Britain and France Declare War',
    info: 'Britain, whilst re-arming in early 1939, had given reasurancess to Poland who at the time were being threatened by Hitler.  After the German invasion of Poland two days earlier, Britain and France declared war on Germany. Neville Chamberlain broadcast the announcement that the country was at war.',
    image: '/images/britain-declares-war.jpg'
  },
  {
    date: '10th May 1940',
    location: 'Rotterdam',
    coords: [4.477733, 51.924419],
    heading: 'Blitzkrieg',
    info: 'Hitler launched his blitzkrieg (lightning war) against Holland and Belgium. Rotterdam was bombed almost to extinction. Both countries were occupied.',
    image: '/images/blitzkrieg.jpg'
  },
  {
    date: '13th May 1940',
    location: 'London',
    coords: [-0.127758, 51.507351],
    heading: 'Churchill becomes Prime Minister',
    info: 'Neville Chamberlain resigned after pressure from Labour members for a more active prosecution of the war and Winston Churchill became the new head of the wartime coalition government',
    image: '/images/churchill.jpg'
  },
  {
    date: '26th May 1940',
    location: 'Dunkirk',
    coords: [2.376776, 51.034367],
    heading: 'British Expeditionary Force evacuated from Dunkirk',
    info: 'The British commander-in-chief, General Gort, had been forced to retreat to the coast at Dunkirk. The troops waited, under merciless fire, to be taken off the beaches. \n\nA call went out to all owners of sea-worthy vessels to travel to Dunkirk to take the troops off the beaches of Dunkirk. More than 338,000 men were rescued, among them some 140,000 French who would form the nucleus of the Free French army under a little known general, Charles de Gaulle.',
    image: '/images/dunkirk.jpg'
  },
  {
    date: '22nd June 1940',
    location: 'Compiègne',
    coords: [2.822480, 49.415770],
    heading: 'French Armistice',
    info: 'On 14th June the Nazis marched down the Champ-Elysees and past the Arc de Triomphe as Paris had been abandoned by the French government.\n\nJust over a week later with France being devistated France signed an armistice with Germany signaling the end to their hostilities.  The northern two-thirds of France would remain under German occupation, while southern France would be left free.',
    image: '/images/french-armistice.jpg'
  },
  {
    date: '10 July–31 October 1940',
    location: 'South East England',
    coords: [1.065301, 51.670905],
    heading: 'Battle of Britain',
    info: 'The Battle of Britain comprised four phases:\n\n1. During July Hitler sent his Luftwaffe bombers to attack British ports. His aim was also to assess the speed and quality of response by the RAF.\n\n2. During August the attacks on shipping continued but bombing raids were concentrated on RAF airfields.\n\n3. The Blitz – From September 7th the city of London was heavily bombed. Hitler hoped to destroy the morale of the British people.\n\n4. Night Bombing – With the failure of daylight bombing raids Hitler began a series of nightly bombing raids on London and other important industrial cities.\n\nThe RAF defended the skies and by October 31 the raids had ceased.',
    image: '/images/bob.jpg'
  },
  {
    date: '22nd June 1941',
    location: 'Russian Front',
    coords: [32.104509, 54.800215],
    heading: 'Operation Barbarossa',
    info: 'Hitler sent 3 million soldiers and 3,500 tanks into Russia. The Russians were taken by surprise as they had signed a treaty with Germany in 1939. Stalin immediately signed a mutual assistance treaty with Britain and launched an Eastern front battle that would claim 20 million casualties. The USA, which had been supplying arms to Britain under a ‘Lend-Lease’ agreement, offered similar aid to USSR.\n\nThe German offensive was launched by three army groups along a 1,800-mile front.  Germany attacked from the north into the Baltic states toward Leningrad (now St. Petersburg), from the right through southern Poland to the coasts of the Black Sea and the Sea of Azov and in the center heading towards Smolensk and Moscow.',
    image: '/images/operation-barbarossa.jpg'
  },
])
