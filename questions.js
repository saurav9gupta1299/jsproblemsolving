// Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

// Note: You have to complete Minimal_Angle function. No need to take any input.

var Minimal_Angle = (h, m) => 
{
  const minuteAngle = m * 6;
  const hourAngle = (h * 30) + (m * 0.5);
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
       
};

// Check whether the year is Leap year or not.
// Write a program which takes an year 
// N
//  as input from the user and find out whether the given year is a Leap Year or not.

// Note: You have to complete Check_Leap function. No need to take any input.


var Check_Leap = (year) => 
{
  if (year % 400 === 0)
  {
    return ("Leap Year");
  }
  else if(year % 100 === 0)
  {
    return ("Non Leap Year");
  }
  else if(year % 4 === 0)
  {
    return ("Leap Year");
  }
  else
  {
    return ("Non Leap Year");
  }
};

// Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

// Now, You are given an integer 
// N
// , write a program to check whether the given number is a Perfect Number or not.

// Note: You have to complete Perfect _Check function. No need to take any input.

var Perfect_Check = (N) => 
{
  let result = 0;
  for(let i =1; i <= N/2; i++){
    if(N % 2 === 0){
      result += i;
    }
  }
  if(N === result || N === 1){
    return 'YES';
  }
  else{
    return 'NO';
  }
};

//Write a program which takes a numebr N as input from the user and You need to reverse the number.

//Note: You have to complete Reverse_Number function. No need to take any input.

var Reverse_Number = (N) => 
{
  let Reverse = 0;
  while(N>0)
  {
    Reverse = Reverse * 10 + N % 10;
    N = parseInt(N / 10);
  }
  return Reverse;
};

// Substring Check.
// You are given two strings 
// S
// 1
//  and 
// S
// 2
// , you need to check whether the string S1 is a substring of string S2 or not.

// Note: You have to complete Substring_Check function. No need to take any input.

var Substring_Check = (S1, S2) => 
{
  if(S1.indexOf(S2) !== -1)
  {
    return ("YES");
  }
  else
  {
    return ("NO");
  }
     
};

