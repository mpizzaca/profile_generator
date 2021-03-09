const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = {
  name: 'What\'s your name? ',
  activity: 'What\'s an activity you like doing? ',
  music: 'What do you listen to while doing that? ',
  mealTime: 'Which meal is your favorite (dinner, brunch, etc.)? ',
  meal: 'What\'s your favorite thing to eat for that meal? ',
  sport: 'Which sport is your absolute favorite? ',
  superpower: 'What is your superpower? ',
};
const user = {};

rl.question('What\'s your name? ', answer => {
  user.name = answer;
  rl.question('What\'s an activity you like doing? ', answer => {
    user.activity = answer;
    rl.question('What do you listen to while doing that? ', answer => {
      user.music = answer;
      rl.question('Which meal is your favorite (dinner, brunch, etc.)? ', answer => {
        user.mealTime = answer;
        rl.question('What\'s your favorite thing to eat for that meal? ', answer => {
          user.meal = answer;
          rl.question('Which sport is your absolute favorite? ', answer => {
            user.sport = answer;
            rl.question('What is your superpower? ', answer => {
              user.superpower = answer;
              rl.close();

              console.log(`${user.name} loves listening to ${user.music} while ${user.activity}, ` +
                          `devouring ${user.meal} for ${user.mealTime}, prefers ${user.sport}, and ` +
                          `is amazing at ${user.superpower}.`);
            });
          });
        });
      });
    });
  });
});