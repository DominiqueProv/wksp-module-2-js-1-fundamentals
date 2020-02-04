// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


for ( let line = 0 ; line <=7 ; line ++){
    if( line === 1){
    console.log(`#`);
}   if ( line === 2){
    console.log(`##`);
}   if ( line === 3){
    console.log(`###`);
}   if ( line === 4){
    console.log(`####`);
}   if ( line === 5){
    console.log(`#####`);
}   if ( line === 6){
    console.log(`######`);
}   if ( line === 7){
    console.log(`#######`);
}
}

// --------------------------


for (let row = 0; row < 7; row ++){
    let line = "#";
    for ( let i = 1; i <= row ; i ++ ) {
        line += "#";
    }
    console.log(line);
}