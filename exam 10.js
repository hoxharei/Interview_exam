// we have 3 cases in this problem

/*if we take off 1 red ball and 1 blue ball, in fact we will take off 1 blue because we put 1 red ball in the bag
if we take 2 red balls ,in fact we will take off 2 red balls and add 1 blue blue
if we take 2 blue balls,in fact we will take off 1 blue ball because we put 1 blue ball in the bag */

/*in the comments we see that we can only take off 2 red balls at a time
 and we can not take off 1 red ball at one of the 3 cases because even when we draw
 1 red ball and 1 blue ball we would have to add 1 red ball back */

/*if there are even number of red balls we can not have one single red ball
left in the bag so the last ball will be blue, but if we have an odd number
of red balls the last ball in the bag would be red*/

function balls(x,y) {        // we name blue balls with x and red balls with y
    if (y %2===0) {         
        return 'blue ball';
    } else {
        return 'red ball';
    }
    }
    console.log(balls(20,14));
    